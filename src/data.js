import './pdf-generator.webcomponent.js';

export default class GhPdfGenerator {
	/*------------------------------- FIELD TEMPLATE --------------------------------------*/

	getTemplate() {
		return {
			constructor: 'field',
			name: 'SVG To PDF',
			icon: 'box',
            type: 'svg_to_pdf',
			model: {
				field_id: 0,
				field_name: 'SVG To PDF',
				field_value: '',
				data_type: 'svg_to_pdf',
				data_model: {
					source_app_id: null,
					filter_list: [],
					interpretation: [
						{
							src: 'form',
							id: 'default',
							settings: {
								editable: 1,
								show_field_name: 1,
								show_field: 1
							},
							style: { position: 'between' }
						}
					]
				}
			}
		};
	}

	/*------------------------------- INTERPRETATION --------------------------------------*/

	getInterpretation(gudhub, value, appId, itemId, field_model) {
		return [
			{
				id: 'default',
				name: 'Default',
				content: () =>
					'<gh-svg-to-pdf app-id="{{appId}}" item-id="{{itemId}}" field-id="{{fieldId}}"></gh-svg-to-pdf>'
			},
			{
				id: 'value',
				name: 'Value',
				content: () => value
			}
		];
	}

	/*--------------------------  SETTINGS --------------------------------*/

	getSettings(fieldSettingsScope) {
		return [
			{
				title: 'Options',
				type: 'general_setting',
				icon: 'menu',
				columns_list: [
					[
						{
							title: 'PDF Application',
							type: 'header'
						},
						{
							type: 'ghElement',
							property: 'data_model.source_app_id',
							data_model: function () {
								return {
									field_name: 'Source App Id',
									name_space: 'source_app_id',
									data_type: 'app',
									data_model: {
									tooltip: {
										default: 'Dest app',
										en: 'EN',
										ua: 'UA'
									},
									current_app : false,
									interpretation : [{
										src: 'form',
										id: 'with_text',
										settings:{
										editable: 1,
										show_field_name: 1,
										show_field: 1
										}
									}]
									}
								};
							}
						},
						{
							type: 'html',
							onInit: function (settingScope) {
								settingScope.$watch(
									function (settingScope) {
										return settingScope.fieldModel.data_model.source_app_id
									},
									function (newValue) {
										settingScope.field_model.data_model.app_id =
											newValue;
									}
								);
							},
							data_model: function (fieldModel) {
								return {
									recipient: {
										app_id: fieldModel.data_model.source_app_id
									}
								};
							},
							control:
								'<gh-filter gh-filter-data-model="field_model" filter-list="fieldModel.data_model.filter_list" gh-mode="variable"></gh-filter>'
						}
					],
					[
						{
							title: 'PDF Variables',
							type: 'header'
						}, 
						{
							type: 'html',
							class: 'option-column_750px',
							data_model: function (fieldModel) {
								return {
									patterns: [
										{
											prop_name: 'Variable',
											type: 'text',
											property: 'variable_name',
											display: true,
											data_model: function (option) {
												return;
											}
										},
										{
											prop_name: 'Type',
											type: 'text_opt',
											property: 'type',
											display: true,
											data_model: function (option) {
												return {
													options: [
														{
															name: "file",
															value: "file",
														},
														{
															name: 'text',
															value: 'text'
														},
														{
															name: 'list',
															value: 'list'
														},
														{
															name: 'object',
															value: 'object'
														},
														{
															name: 'constant',
															value: 'constant'
														}
													]
												};
											}
										},
										{
											prop_name: 'Interpretation',
											type: 'boolean',
											property: 'interpretation',
											display: true,
											data_model: function () {
												return;
											}
										},
										{
											prop_name: 'Field',
											property: 'field_id',
											type: 'field',
											display: true,
											data_model: function(option) {
												console.log('fieldModel:', fieldModel);

												return {
													app_id : fieldModel.data_model.source_app_id
												};
											},
				
										},
										{
											prop_name: 'List',
											property: 'list',
											type: 'additional_settings',
											display: true,
											data_model: function(option, scope) {
												return {
													appId: option.app_id,
													elementId: option.field_id,
													settings: [
														{
															title: "Settings",
															type: "general_setting",
															icon: "configuration",
															columns_list: [
																[
																	{
																		title: 'PDF Variables',
																		type: 'header'
																	}, 
																	{
																		type: 'html',
																		class: 'option-column_750px',
																		data_model: function (fieldModelNestedList) {
																			return {
																				patterns: [
																					{
																						prop_name: 'Variable',
																						type: 'text',
																						property: 'variable_name',
																						display: true,
																						data_model: function (option) {
																							return;
																						}
																					},
																					{
																						prop_name: 'Type',
																						type: 'text_opt',
																						property: 'type',
																						display: true,
																						data_model: function (option) {
																							return {
																								options: [
																									{
																										name: "file",
																										value: "file",
																									},
																									{
																										name: 'text',
																										value: 'text'
																									},
																									{
																										name: 'list',
																										value: 'list'
																									},
																									{
																										name: 'object',
																										value: 'object'
																									},
																									{
																										name: 'constant',
																										value: 'constant'
																									}
																								]
																							};
																						}
																					},
																					{
																						prop_name: 'Interpretation',
																						type: 'boolean',
																						property: 'interpretation',
																						display: true,
																						data_model: function () {
																							return;
																						}
																					},
																					{
																						prop_name: 'Field',
																						property: 'field_id',
																						type: 'field',
																						display: true,
																						data_model: function(option) {
																							console.log('fieldModel:', fieldModel);
																							
																							return {
																								app_id : fieldModel.data_model.source_app_id
																							};
																						},
																					},
																					{
																						prop_name: 'List',
																						property: 'list',
																						type: 'additional_settings',
																						display: true,
																						data_model: function(option, scope) {
																							return {
																								appId: option.app_id,
																								elementId: option.field_id,
																								settings: [
																									{
																										title: "Settings",
																										type: "general_setting",
																										icon: "configuration",
																										columns_list: [
																											[
																												{
																													title: 'PDF Variables',
																													type: 'header'
																												}, 
																												{
																													type: 'html',
																													class: 'option-column_750px',
																													data_model: function (fieldModelNestedList) {
																														return {
																															patterns: [
																																{
																																	prop_name: 'Variable',
																																	type: 'text',
																																	property: 'variable_name',
																																	display: true,
																																	data_model: function (option) {
																																		return;
																																	}
																																},
																																{
																																	prop_name: 'Type',
																																	type: 'text_opt',
																																	property: 'type',
																																	display: true,
																																	data_model: function (option) {
																																		return {
																																			options: [
																																				{
																																					name: "file",
																																					value: "file",
																																				},
																																				{
																																					name: 'text',
																																					value: 'text'
																																				},
																																				{
																																					name: 'list',
																																					value: 'list'
																																				},
																																				{
																																					name: 'object',
																																					value: 'object'
																																				},
																																				{
																																					name: 'constant',
																																					value: 'constant'
																																				}
																																			]
																																		};
																																	}
																																},
																																{
																																	prop_name: 'Interpretation',
																																	type: 'boolean',
																																	property: 'interpretation',
																																	display: true,
																																	data_model: function () {
																																		return;
																																	}
																																},
																																{
																																	prop_name: 'Field / Part Name',
																																	property: 'field_id',
																																	type: 'field',
																																	display: true,
																																	data_model: function(option) {
																																		if (option.type === 'constant') {
																																			this.display = false;
																																		} else {
																																			this.display = true;
																																		}
																																		
																																		return {
																																			app_id : fieldModel.data_model.source_app_id
																																		};
																																	},
																																},
																																{
																																	prop_name: 'Field / Part Name',
																																	type: 'text',
																																	property: 'part_name',
																																	display: false,
																																	data_model: function (option) {
																																		if (option.type === 'constant') {
																																			this.display = true;
																																		} else {
																																			this.display = false;
																																		}

																																		return;
																																	}
																																},																			
																															]
																														};
																													},
																													control: '<gh-option-table items="fieldModel.data_model.options" pattern="field_model.patterns"></gh-option-table>'
																												}
																											]
																										]
																									}
																								]
																							}
																						}
																					}																				
																				]
																			};
																		},
																		control: '<gh-option-table items="fieldModel.data_model.options" pattern="field_model.patterns"></gh-option-table>'
																	}
																]
															]
														}
													]
												}
											}
										}
									]
								};
							},
							control: '<gh-option-table items="fieldModel.data_model.options" pattern="field_model.patterns"></gh-option-table>'
						}
					]
				]
			}
		];
	}
}
