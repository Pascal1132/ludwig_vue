import IDuckClass from "../Backbone/IDuckClass";

export default class Field implements IDuckClass {
  name: string;
  type: string;
  value: any;
  optionsValue: any;
  attributes: any;
  data: any;

  static get FIELD_TYPES() {
    return [
      "text",
      "wysiwyg",
      "imageupload",
      "fileupload",
      "video",
      "audio",
      "gallery",
      "breadcrumb",
      "link",
      "date",
      "time",
      "datetime",
      "textarea",
      "checkbox",
      "radio",
      "select",
    ];
  }

  constructor(
    name = ``,
    type = "text",
    value = {},
    optionsValue = {},
    data = {}
  ) {
    // Verify if the type is valid with the values of the properties FIELD_TYPES
    if (!Field.FIELD_TYPES.includes(type)) {
      throw new Error(`The type "${type}" is not valid.`);
    }
    this.name = name;
    this.type = type;
    this.value = value;
    this.optionsValue = optionsValue;
    this.data = data;
  }

  // Get the value of the field
  getValue(): any {
    // Switch the type of the field
    switch (this.type) {
      default:
        return this.value;
    }
  }

  // Maybe add to API
  generateTagAttributes() {
    let attributes = <any>{};
    // Switch the type of the field
    switch (this.type) {
      case "link":
        attributes["to"] = this.value;
        attributes["target"] = this.optionsValue?.target;
        break;
      case "imageupload":
        if (this.optionsValue?.isBundle) {
          attributes["src"] = this.value.desktop;
        }
        this.data.backgroundDataAttributes = {
          "data-backgrounds": this.value.desktop,
          style: `
                background-image: url("${this.value.desktop}")`,
        };

        break;
      case "fileupload":
        attributes["src"] = this.value;
        break;
    }
    return attributes;
  }
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      value: this.value,
      optionsValue: this.optionsValue,
      attributes: this.attributes,
      data: this.data,
    };
  }
  static fromJSON(json: any) {
    let field_obj = new Field(
      json.name,
      (json.type ?? "text").toLowerCase(),
      json.value,
      json.optionsValue,
      json.data
    );
    field_obj.attributes = field_obj.generateTagAttributes();
    return field_obj;
  }
}
