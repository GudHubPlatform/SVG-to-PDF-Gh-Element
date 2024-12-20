import GhHtmlElement from '@gudhub/gh-html-element';
import html from './pdf-generator.html';
import './style.scss';

import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";

pdfMake.vfs = pdfFonts.default?.pdfMake?.vfs || pdfFonts.pdfMake?.vfs;
pdfMake.fonts = {
	Mont: {
		normal: 'https://en.bestfonts.pro/fonts_files/5c377611c8e4b404a029150c/files/Mont-Regular.ttf',
		bold: 'https://en.bestfonts.pro/fonts_files/5c377611c8e4b404a029150c/files/Mont-Bold.ttf'
	}
};

import { generateProposalScheme } from './helpers/generateProposalScheme.js';
import { generatePdfFileData } from './helpers/generatePdfFileData.js';

class GhSvgToPdf extends GhHtmlElement {
	constructor() {
		super();
	}

	onInit() {
		console.log('this.scope:', this.scope);
		this.renderComponent();
		this.attachListeners();
	}

	disconnectedCallback() {
		// Add any cleanup logic if necessary
	}

	renderComponent() {
		super.render(html);

		const fieldName = this.scope?.field_model?.field_name || 'PDF Generator';
		const generatePdfButton = this.querySelector('.generate-pdf-wrapper__button');
	
		if (generatePdfButton) {
			generatePdfButton.textContent = fieldName;
		}
	}

	attachListeners() {
		this.generatePdf();
	};

	async getItemsConstructorData() {
		try {
			const itemsProposalScheme = generateProposalScheme(
				this.scope?.field_model?.data_model,
				this.scope?.field_model?.data_model?.filter_list
			);
			console.log('itemsProposalScheme:', itemsProposalScheme);

			const gudhubItemData = await gudhub.getItem(this.scope?.appId, this.scope?.itemId);

			return await gudhub.jsonConstructor(
				itemsProposalScheme,
				gudhubItemData,
				[],
				this.scope?.appId
			);
		} catch (error) {
			console.error('Error fetching items constructor data:', error);
			throw error;
		}
	}

	async fetchImageAsBase64(url) {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch image: ${response.statusText}`);
			}

			const contentType = response.headers.get('Content-Type');
			if (!contentType.startsWith('image/')) {
				throw new Error(`The URL did not return an image. Content-Type: ${contentType}`);
			}

			const blob = await response.blob();

			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.onerror = reject;
				reader.readAsDataURL(blob);
			});
		} catch (error) {
			console.error(`Error fetching image from ${url}:`, error);
			return null;
		}
	}
	
	async updateItemsProperties(itemsData) {
		const loader = this.querySelector('.generate-pdf-wrapper__loader');
		const generatePdfButton = this.querySelector('.generate-pdf-wrapper__button');
	
		const toggleLoader = (isLoading) => {
			if (loader) loader.style.display = isLoading ? 'flex' : 'none';
			if (generatePdfButton) {
				generatePdfButton.disabled = isLoading;
				generatePdfButton.style.cursor = isLoading ? 'not-allowed' : 'pointer';
			}
		};
	
		toggleLoader(true);
		try {
			await Promise.all(
				itemsData.map(async (item) => {
					const { image, icons } = item.item_properties || {};

					if (image?.type === 'file' && image.src) {
						image.src = await this.fetchImageAsBase64(image.src);
					}

					if (icons?.type === 'file' && icons.src) {
						icons.src = await this.fetchImageAsBase64(icons.src);
					}
				})
			);
		} catch (error) {
		  	console.error('Error updating items properties:', error);
		} finally {
			toggleLoader(false);	
		}
	}
	
	async generatePdf() {
		const generatePdfButton = this.querySelector('.generate-pdf-wrapper__button');

		try {
			const { items_array: itemsData } = await this.getItemsConstructorData();
			await this.updateItemsProperties(itemsData);

			const transformedItemsData = itemsData.map(item => item.item_properties);
			console.log('Items Data after update:', transformedItemsData);

			const generatedPdfFileData = generatePdfFileData(transformedItemsData);
			console.log('generatedPdfFileData:', generatedPdfFileData);

			generatePdfButton.addEventListener('click', () => {
				pdfMake.createPdf(generatedPdfFileData).open();
			});
		} catch (error) {
			console.error('Error generating PDF:', error);
		}
	}
};

// Register web component only if it is not registered yet
if (!window.customElements.get('gh-svg-to-pdf')) {
	window.customElements.define('gh-svg-to-pdf', GhSvgToPdf);
}
