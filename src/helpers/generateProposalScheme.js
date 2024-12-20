import { v4 as generateUniqueId } from 'uuid';

export const generateProposalScheme = (dataModel, filterList) => {
    const {
        options,
        source_app_id
    } = dataModel;

    return {
      "type": "array",
      "id": generateUniqueId(),
      "childs": [
        {
          "type": "object",
          "id": generateUniqueId(),
          "property_name": "item_properties",
          "childs": generateChilds(options)
        }
      ],
      "app_id": source_app_id,
      "filter": filterList,
      "property_name": "items_array"
    };
};

const generateNestedChilds = (nestedOptions, hasNestedOptions = false) => {
  if (hasNestedOptions) {
    return (
      nestedOptions?.map((nestedOption) => {
        const nestedChilds = generateNestedChilds(nestedOption?.list?.data_model?.options);

        return {
          type: "object",
          id: generateUniqueId(),
          property_name: nestedOption.variable_name,
          childs: nestedChilds,
        };
      }) || []
    );
  }

  return (
    nestedOptions?.map((nestedOption) => {
      if (nestedOption?.part_name) {
        return             {
          type: "property",
          property_name: "part_name",
          property_type: "static",
          static_field_value: nestedOption?.part_name,
        };
      }

      return {
        type: "property",
        id: generateUniqueId(),
        property_name: nestedOption.variable_name,
        property_type: "field_value",
        field_id: nestedOption.field_id,
        interpretation: nestedOption.interpretation,
      };
    }) || []
  );
};

const generateChilds = (options) => {
  if (!options || !Array.isArray(options)) {
    console.warn('Invalid options provided:', options);
    return [];
  }

  return options.map((option) => {
    const { type, variable_name, field_id, interpretation } = option;

    switch (type) {
      case 'list': {
        const nestedChilds = generateNestedChilds(option?.list?.data_model?.options, true);

        return {
          type: "object",
          id: generateUniqueId(),
          property_name: variable_name,
          childs: nestedChilds,
        };
      }

      case 'text': {
        return {
          type: "property",
          id: generateUniqueId(),
          property_name: variable_name,
          property_type: "field_value",
          field_id,
          interpretation,
        };
      }

      case 'file': {
        return {
          type: "object",
          id: generateUniqueId(),
          property_name: variable_name,
          childs: [
            {
              type: "property",
              property_name: "type",
              property_type: "static",
              static_field_value: "file",
            },
            {
              type: "property",
              id: generateUniqueId(),
              property_name: "src",
              property_type: "field_value",
              field_id,
              interpretation,
            },
          ],
        };
      }

      default: {
        return null;
      }
    }
  });
};
