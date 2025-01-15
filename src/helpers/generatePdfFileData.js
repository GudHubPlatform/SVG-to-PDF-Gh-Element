export const generatePdfFileData = (itemsData) => {
	return {
		pageSize: { width: 1920, height: 1080 },
		pageMargins: [0, 0, 0, 0],
		pageOrientation: 'landscape',
		defaultStyle: { font: "Mont" },
		content: itemsData.map((item) => {
			return {
				svg:  /* html */ `
					<!-- Generator: Adobe Illustrator 28.6.0, SVG Export Plug-In . SVG Version: 9.03 Build 54939)  -->
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" xml:space="preserve">
						<style type="text/css">
							.st0{fill:#F6F6F6;}
							.st1{fill:#575756;}
							.st2{fill:#12A1DC;}
							.st3{fill:#FAEA25;}
							.st4{font-family:'Mont-Light';}
							.st5{font-size:13px;}
							.st6{font-family:'Mont-Bold';}
							.st7{font-size:11px;}
							.st8{fill:none;stroke:#C6C6C6;stroke-width:2;}
							.st9{fill:#0E8A99;}
							.st10{fill:#288E1B;}
							.st11{fill:#D8BB1F;}
							.st12{fill:#485886;}
							.st13{fill:#EC5858;}
							.st14{fill:none;stroke:#B4B4B4;}
							.st15{font-family:'Mont-Regular';}
							.st16{font-size:10px;}
							.st17{enable-background:new;}
							.st18{font-size:15px;}
							.st19{font-size:30px;}
							.st20{font-size:60px;}
							.st21{font-size:20px;}
							.st22{font-family:'Mont-SemiBold';}
							.st23{font-size:26px;}
							.st24{font-weight:700;}
							.st25{background: linear-gradient(325deg, #00c3ff 15.3%, #b96ff1 30.6%, #ff4564 45.9%, #ff8924 61.2%, #fff524 76.5%, #43d844 91%);}
						</style>

						<image href="${item.image.src}" style="overflow:visible;enable-background:new;" width="1350" id="image" xlink:href="9414A408.png" transform="translate(0, 40) scale(0.7)"></image>
						<g id="Logo_zone">
							<polygon id="bg" class="st0" points="1920,0 1920,1080 1597.4,1080 1915.7,0  "/>
							<g id="Logo">
								<path id="Swedish_Innovation" class="st1" d="M1849.4,972.3v-0.9c1.2,0,1.9-0.9,1.9-2.2c0-1.2-0.7-2.1-1.7-2.1    c-1.1,0-1.4,1.1-1.6,2.3c-0.3,1.3-0.7,2.8-2.3,2.8c-1.5,0-2.4-1.1-2.4-2.9c0-1.7,1-2.8,2.5-2.8v0.9c-1,0-1.7,0.8-1.7,2    s0.6,2,1.5,2c1.1,0,1.3-1.1,1.6-2.2c0.3-1.4,0.7-2.9,2.4-2.9c1.6,0,2.5,1.3,2.5,3C1852.2,971,1851.1,972.3,1849.4,972.3     M1845.4,955.4l6.7,2.3v0.7l-4.9,2l4.9,2v0.7l-6.7,2.2v-0.9l5.2-1.7l-5.1-2.2v-0.3l5.2-2.1l-5.3-1.8L1845.4,955.4L1845.4,955.4z     M1849,948v5.8c1.4-0.1,2.3-1.2,2.3-2.5c0-1-0.5-1.8-1.3-2.3v-0.9c1.4,0.6,2.1,1.7,2.1,3.1c0,1.9-1.5,3.4-3.5,3.4    s-3.5-1.5-3.5-3.4c0-2,1.5-3.3,3.5-3.3C1848.8,948,1848.9,948,1849,948 M1846.1,951.3c0,1.3,0.9,2.3,2.2,2.5v-5    C1846.9,949,1846.1,950,1846.1,951.3 M1843,940h9v0.7l-1.1,0.1c0.8,0.6,1.3,1.6,1.3,2.7c0,2-1.5,3.4-3.5,3.4s-3.5-1.4-3.5-3.4    c0-1.1,0.5-2,1.2-2.6h-3.4V940z M1848.7,940.8c-1.5,0-2.7,1.1-2.7,2.6s1.1,2.6,2.7,2.6c1.5,0,2.7-1.1,2.7-2.6    C1851.4,941.9,1850.2,940.8,1848.7,940.8 M1843.1,936.9h1v1h-1V936.9z M1845.4,936.9h6.6v0.8h-6.6V936.9z M1850.1,935.3v-0.8    c0.9-0.1,1.3-0.8,1.3-1.8s-0.5-1.7-1.2-1.7c-0.9,0-1.1,0.9-1.2,1.9c-0.2,1.1-0.4,2.4-1.9,2.4c-1.1,0-1.9-1-1.9-2.5s0.8-2.4,2-2.5    v0.8c-0.8,0-1.2,0.7-1.2,1.7s0.4,1.6,1.1,1.6c0.8,0,0.9-0.8,1.1-1.8c0.2-1.2,0.4-2.5,2-2.5c1.2,0,2,1,2,2.6    C1852.2,934.3,1851.4,935.2,1850.1,935.3 M1848.1,922.7h4v0.8h-3.8c-1.4,0-2.2,0.7-2.2,1.9s1,2.2,2.3,2.2h3.7v0.8h-9v-0.8h3.4    c-0.7-0.5-1.2-1.4-1.2-2.4C1845.3,923.7,1846.4,922.7,1848.1,922.7 M1843.4,916.3h8.6v0.9h-8.6V916.3z M1848.1,908.2h4v0.8h-3.8    c-1.4,0-2.2,0.7-2.2,1.9s1,2.2,2.3,2.2h3.7v0.8h-6.6v-0.6l1.2-0.2c-0.8-0.5-1.3-1.4-1.3-2.4    C1845.3,909.2,1846.4,908.2,1848.1,908.2 M1848.1,900.3h4v0.8h-3.8c-1.4,0-2.2,0.7-2.2,1.9s1,2.2,2.3,2.2h3.7v0.8h-6.6v-0.6    l1.2-0.2c-0.8-0.5-1.3-1.4-1.3-2.4C1845.3,901.3,1846.4,900.3,1848.1,900.3 M1848.7,898.7c-2,0-3.5-1.5-3.5-3.5s1.5-3.5,3.5-3.5    s3.5,1.5,3.5,3.5S1850.7,898.7,1848.7,898.7 M1848.7,892.6c-1.5,0-2.7,1.1-2.7,2.6s1.1,2.6,2.7,2.6c1.5,0,2.7-1.1,2.7-2.6    C1851.4,893.7,1850.3,892.6,1848.7,892.6 M1845.4,884.6l6.7,2.9v0.7l-6.7,2.9v-0.8l5.6-2.5l-5.6-2.3V884.6z M1845.4,877h6.6v0.7    l-1.2,0.1c0.8,0.6,1.3,1.6,1.3,2.7c0,2-1.5,3.4-3.5,3.4s-3.5-1.5-3.5-3.4c0-1.2,0.5-2.1,1.3-2.7l-1.2-0.1V877H1845.4z     M1848.7,877.9c-1.5,0-2.7,1.1-2.7,2.6s1.1,2.6,2.7,2.6c1.5,0,2.7-1.1,2.7-2.6C1851.4,879,1850.3,877.9,1848.7,877.9     M1851.3,871.5h0.8v0.8c0,1.4-0.8,2.2-2.2,2.2h-3.7v1.1h-0.2l-1.9-1.8v-0.1h1.3v-2.2h0.8v2.2h3.6c0.9,0,1.5-0.5,1.5-1.5    L1851.3,871.5L1851.3,871.5z M1843.1,869.1h1v1h-1V869.1z M1845.4,869.2h6.6v0.8h-6.6V869.2z M1848.7,867.5c-2,0-3.5-1.5-3.5-3.5    s1.5-3.5,3.5-3.5s3.5,1.5,3.5,3.5S1850.7,867.5,1848.7,867.5 M1848.7,861.4c-1.5,0-2.7,1.1-2.7,2.6s1.1,2.6,2.7,2.6    c1.5,0,2.7-1.1,2.7-2.6C1851.4,862.5,1850.3,861.4,1848.7,861.4 M1848.1,853.1h4v0.8h-3.8c-1.4,0-2.2,0.7-2.2,1.9s1,2.2,2.3,2.2    h3.7v0.8h-6.6v-0.6l1.2-0.2c-0.8-0.5-1.3-1.4-1.3-2.4C1845.3,854.1,1846.4,853.1,1848.1,853.1"/>
								<path id="Smartshake.com" class="st1" d="M1835.5,972.3v-2.1c0.9,0,1.4-0.8,1.4-1.6s-0.4-1.6-1.2-1.6c-0.8,0-1,0.9-1.2,2    c-0.4,1.5-0.8,3.3-2.9,3.3c-1.9,0-2.9-1.4-2.9-3.6c0-2.3,1.2-3.5,3.2-3.5v2.1c-0.8,0-1.2,0.7-1.2,1.5c0,0.7,0.3,1.4,0.9,1.4    c0.7,0,0.9-0.9,1.1-1.9c0.4-1.5,0.8-3.4,3-3.4c2.1,0,3.1,1.7,3.1,3.7C1838.8,970.8,1837.6,972.3,1835.5,972.3 M1833.9,952h4.7v2    h-4.4c-1,0-1.5,0.4-1.5,1.1c0,0.9,0.7,1.5,1.9,1.5h4.1v2h-4.4c-1,0-1.5,0.4-1.5,1.1c0,0.9,0.7,1.5,1.9,1.5h4.1v2h-7.6v-1.4    l0.9-0.4c-0.7-0.5-1.1-1.4-1.1-2.3c0-1,0.4-1.8,1.2-2.2c-0.7-0.5-1.2-1.4-1.2-2.3C1830.9,953.1,1832.1,952,1833.9,952     M1831.1,942.4h7.6v1.6l-0.7,0.2c0.6,0.6,0.9,1.5,0.9,2.4c0,2.3-1.7,4-4,4s-4-1.7-4-4c0-1,0.3-1.8,0.9-2.5l-0.7-0.2L1831.1,942.4    L1831.1,942.4z M1834.8,944.4c-1.2,0-2.1,0.9-2.1,2.1c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1    C1836.9,945.3,1836,944.4,1834.8,944.4 M1831,936.6v-0.5h1.9v0.7c0,1.2,0.5,1.6,1.7,1.6h4v2h-7.6v-1.3l0.9-0.4    C1831.3,938.3,1831,937.6,1831,936.6 M1836.7,929.8h1.9v1.1c0,1.9-1.2,3-3,3h-2.8v1.6h-1.7V934h-2.1v-2h2.1v-2.1h1.7v2.1h2.7    c0.8,0,1.3-0.4,1.3-1.3L1836.7,929.8L1836.7,929.8z M1838.8,925.7c0,1.9-1.1,3.2-2.7,3.2v-2c0.7,0,1-0.5,1-1.3    c0-0.6-0.3-1.1-0.8-1.1s-0.7,0.7-0.8,1.5c-0.2,1.2-0.5,2.7-2.3,2.7c-1.4,0-2.4-1.2-2.4-3s1-3,2.5-3v1.9c-0.6,0-0.9,0.4-0.9,1.1    c0,0.6,0.3,1,0.7,1c0.5,0,0.6-0.6,0.8-1.4c0.2-1.2,0.5-2.8,2.3-2.8C1837.8,922.5,1838.8,923.8,1838.8,925.7L1838.8,925.7z     M1834,913.9h4.6v2h-4.2c-1.1,0-1.7,0.4-1.7,1.3c0,1,0.7,1.7,2,1.7h4v2h-10.3v-2h3.4c-0.5-0.6-0.9-1.4-0.9-2.3    C1830.9,915,1832.1,913.9,1834,913.9 M1831.1,904.4h7.6v1.6l-0.7,0.2c0.6,0.6,0.9,1.5,0.9,2.4c0,2.3-1.7,4-4,4s-4-1.7-4-4    c0-1,0.3-1.8,0.9-2.5l-0.7-0.2L1831.1,904.4L1831.1,904.4z M1834.8,906.4c-1.2,0-2.1,0.9-2.1,2.1s0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1    S1836,906.4,1834.8,906.4 M1838.6,897.8l-3.6,2.4h3.6v2h-10.3v-2h6.1l-3.3-2.3v-2.3l3.6,2.5l3.9-2.8L1838.6,897.8L1838.6,897.8z     M1835.4,887.4v5.7c1-0.2,1.6-0.9,1.6-1.8c0-0.7-0.3-1.3-0.9-1.6v-2.1c1.6,0.5,2.7,2,2.7,3.7c0,2.2-1.7,3.9-4,3.9s-4-1.7-4-3.9    c0-2.3,1.8-3.9,4-3.9C1835,887.4,1835.2,887.4,1835.4,887.4 M1834,893.1v-3.7c-0.9,0.3-1.4,1-1.4,1.9S1833.1,892.8,1834,893.1     M1836.4,883.9h2.2v2.2h-2.2V883.9z M1838.8,878.7c0,2.3-1.8,4-4,4c-2.3,0-4-1.7-4-4c0-2,1.2-3.5,3.1-3.8v2    c-0.7,0.3-1.2,1-1.2,1.8c0,1.1,0.9,1.9,2.1,1.9s2.1-0.8,2.1-1.9c0-0.8-0.5-1.5-1.3-1.8v-2.1    C1837.5,875.1,1838.8,876.7,1838.8,878.7z M1834.8,873.9c-2.3,0-4-1.7-4-4.1c0-2.3,1.7-4.1,4-4.1s4,1.8,4,4.1    C1838.8,872.2,1837.1,873.9,1834.8,873.9 M1834.8,867.8c-1.2,0-2.1,0.8-2.1,2s0.8,2,2.1,2c1.2,0,2.1-0.8,2.1-2    S1836.1,867.8,1834.8,867.8 M1833.9,853.1h4.7v2h-4.4c-1,0-1.5,0.4-1.5,1.1c0,0.9,0.7,1.5,1.9,1.5h4.1v2h-4.4    c-1,0-1.5,0.4-1.5,1.1c0,0.9,0.7,1.5,1.9,1.5h4.1v2h-7.6v-1.4l0.9-0.4c-0.7-0.5-1.1-1.4-1.1-2.3c0-1,0.4-1.8,1.2-2.2    c-0.7-0.5-1.2-1.4-1.2-2.3C1830.9,854.1,1832.1,853.1,1833.9,853.1"/>
								<g id="flag">
									<g>
										<path class="st2" d="M1844,1011.7c6-1.5,10.4-6.8,10.5-13.3l0,0v-0.7H1844V1011.7z"/>
										<path class="st2" d="M1827.1,997.8v0.7l0,0c0,6.5,4.6,12,10.7,13.3v-14H1827.1z"/>
										<rect x="1827.1" y="980.1" class="st2" width="10.7" height="11.5"/>
										<rect x="1844" y="980.1" class="st2" width="10.5" height="11.5"/>
									</g>
									<path class="st3" d="M1844,991.6v-11.5h-3.1h-3.1v11.5h-10.7v6.2h10.7v14c1,0.2,1.9,0.3,3,0.3h0.1c1.1,0,2.1-0.1,3.1-0.4v-13.9     h10.5v-6.2L1844,991.6L1844,991.6z"/>
								</g>
							</g>
						</g>
						<g id="Art_no" style="${item.print_size_specifications == "1" || 'display: none;'}">
							<text x="980" y="1010" class="st1 st4 st5">${item.art_no ?? '—'}</text>
							<text id="title" x="934" y="1010" class="st1 st6 st5 st24">Art no:</text>
						</g>
						<g id="Print_size" style="${item.print_size_specifications == "1" || 'display: none;'}">
							<g id="text">
								<text x="1000" y="985" class="st1 st4 st5">${item.print_size ?? '—'}</text>
							</g>
							<text x="934" y="985" class="st1 st6 st5 st24">Print size:</text>
						</g>
						<g id="Print_specifications" style="transform: translate(0, 800); ${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== "").length && item.print_specifications == "1" || 'display: none;'}">
							<text id="title" x="998" y="50" class="st1 st6 st5 st24" text-anchor="middle">Print specifications</text>

							<defs>
								<linearGradient id="multicolorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="15.3%" style="stop-color:#00c3ff;stop-opacity:1" />
									<stop offset="30.6%" style="stop-color:#b96ff1;stop-opacity:1" />
									<stop offset="45.9%" style="stop-color:#ff4564;stop-opacity:1" />
									<stop offset="61.2%" style="stop-color:#ff8924;stop-opacity:1" />
									<stop offset="76.5%" style="stop-color:#fff524;stop-opacity:1" />
									<stop offset="91%" style="stop-color:#43d844;stop-opacity:1" />
								</linearGradient>
							</defs>

							<g id="_x37__part" transform="translate(990, 93)">
								<text id="color_name_1" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.part_name ?? ''}</text>
								<circle 
									cx="0" 
									cy="0" 
									r="19.5" 
									fill="${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== '')[0]?.color_name === 'Multicolor' ? 'url(#multicolorGradient)' : Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== '')[0]?.color ?? 'transparent'}" 
								/>
							</g>

							<g id="_x36__part" transform="translate(1120, 93)">
								<text id="color_name_2" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.part_name ?? ''}</text>
								<circle 
									cx="0" 
									cy="0" 
									r="19.5" 
									fill="${Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== '')[1]?.color_name === 'Multicolor' ? 'url(#multicolorGradient)' : Object.values(item.print_specifications_values).filter(el => el.color && el.color !== null && el.color !== '')[1]?.color ?? 'transparent'}" 
								/>
							</g>
						</g>

						<g id="Product_specifications" style="transform: translate(0, 620); ${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "").length && item.product_specifications == "1" || 'display: none;'}">
							<text id="title" x="1008" y="50" class="st1 st6 st5 st24" text-anchor="middle">Product specifications</text>
							
							<g id="_x31__part" transform="translate(990, 93)">
								<text id="color_name_1_opacity" x="0" y="101" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.opacity ?? ''}</text>
								<text x="0" y="84" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.opacity ? 'Opacity' : ''}</text>

								<text id="color_name_1" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.part_name ?? ''}</text>
								<circle cx="0" cy="0" r="19.5" fill="${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[0]?.color ?? 'transparent'}" />
							</g>

							<g id="_x32__part" transform="translate(1120, 93)">
								<text id="color_name_2_opacity" x="0" y="101" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.opacity ?? ''}</text>
								<text x="0" y="84" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.opacity ? 'Opacity' : ''}</text>

								<text id="color_name_2" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.part_name ?? ''}</text>
								<circle cx="0" cy="0" r="19.5" fill="${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[1]?.color ?? 'transparent'}" />
							</g>

							<g id="_x33__part" transform="translate(1270, 93)">
								<text id="color_name_3_opacity" x="0" y="101" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[2]?.opacity ?? ''}</text>
								<text x="0" y="84" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[2]?.opacity ? 'Opacity' : ''}</text>

								<text id="color_name_3" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[2]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[2]?.part_name ?? ''}</text>
								<circle cx="0" cy="0" r="19.5" fill="${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[2]?.color ?? 'transparent'}" />
							</g>

							<g id="_x34__part" transform="translate(1420, 93)">
								<text id="color_name_4_opacity" x="0" y="101" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[3]?.opacity ?? ''}</text>
								<text x="0" y="84" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[3]?.opacity ? 'Opacity' : ''}</text>

								<text id="color_name_4" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[3]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[3]?.part_name ?? ''}</text>
								<circle cx="0" cy="0" r="19.5" fill="${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[3]?.color ?? 'transparent'}" />
							</g>

							<g id="_x35__part" transform="translate(1570, 93)">
								<text id="color_name_5_opacity" x="0" y="101" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[4]?.opacity ?? ''}</text>
								<text x="0" y="84" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[4]?.opacity ? 'Opacity' : ''}</text>
							
								<text id="color_name_5" x="0" y="57" class="st1 st4 st7" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[4]?.color_name ?? ''}</text>
								<text x="0" y="40" class="st1 st6 st7 st24" text-anchor="middle">${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[4]?.part_name ?? ''}</text>
								<circle cx="0" cy="0" r="19.5" fill="${Object.values(item.product_specifications_values).filter(el => el.color && el.color !== null && el.color !== "")[4]?.color ?? 'transparent'}" />
							</g>
						</g>

						<line id="line" class="st14" x1="922" y1="630.8" x2="1692" y2="630.8"/>
						<g id="_x31_">
							<image href="${item.icons.src}" style="overflow:visible;enable-background:new;" width="auto" height="70" id="image" xlink:href="9414A408.png" transform="translate(928, 534)"></image>
						</g>
						<g id="Material">
							<text id="data" transform="matrix(1 0 0 1 996.1578 512.1488)" class="st1 st4 st5">${item.material}</text>
							<text id="title" transform="matrix(1 0 0 1 929.6843 512.1488)" class="st1 st6 st5 st24">Material:</text>
						</g>
						<g id="Capacity">
							<text id="data" transform="matrix(1 0 0 1 1000.1578 489.7053)" class="st1 st4 st5">${item.capacity}</text>
							<text id="title" transform="matrix(1 0 0 1 929.6843 489.7053)" class="st1 st6 st5 st24">Capacity:</text>
						</g>
						<g id="Info">
							<text id="description" transform="matrix(1 0 0 1 930.1951 393.5731)" class="st17">
								${(() => {
									if (typeof item.description !== 'string' || !item.description.trim()) {
										return '';
									}
								
									const maxNumberOfSymbols = 100;
									let result = '';
									let currentY = 0;
									let index = 0;
								
									while (index < item.description.length) {
										let endIndex = index + maxNumberOfSymbols;
								
										if (endIndex < item.description.length) {
											const lastSpace = item.description.lastIndexOf(' ', endIndex);
											if (lastSpace > index) {
												endIndex = lastSpace;
											}
										}
								
										const chunk = item.description.slice(index, endIndex).trim();
										result += `<tspan x="0" y="${currentY}" class="st1 st15 st18">${chunk}</tspan>`;
								
										currentY += 25;
										index = endIndex + 1;
									}
								
									return result;
								})()}
							</text>
					  
							<text id="subtitle" transform="matrix(1 0 0 1 930.219 345.3914)" class="st1 st6 st19 st24">${item.slogan}</text>
							<text id="Title" transform="matrix(1 0 0 1 929.8625 305.4369)" class="st1 st6 st20 st24">${item.bottle_name}</text>
						</g>
						<g id="Customer_name">
							<text id="subtitle" transform="matrix(1 0 0 1 1536.9415 116.7316)" class="st1 st4 st21">Private Label Proposal</text>
							<text transform="matrix(1 0 0 1 1536.9417 87.172)" class="st1 st22 st23 st24">${item.customer_name}</text>
						</g>
					</svg>
				`
			};
		}),
	};
};
