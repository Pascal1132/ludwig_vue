import IDuckClass from "../Backbone/IDuckClass";

export default class Field implements IDuckClass{
    name: string;
    type: string;
    value: any;
    optionsValue: any;

    static get FIELD_TYPES() {
        return [
            'text',
            'wysiwyg',
            'imageupload',
            'fileupload',
            'video',
            'audio',
            'gallery',
            'breadcrumb',
            'link',
            'date',
            'time',
            'datetime',
            'checkbox',
            'radio',
            'select',
        ]
    }

    constructor(name = ``, type = 'text', value = {}, optionsValue = {}) {
        // Verify if the type is valid with the values of the properties FIELD_TYPES
        if (!Field.FIELD_TYPES.includes(type)) {
            throw new Error(`The type "${type}" is not valid.`);
        }
        this.name = name;
        this.type = type;
        this.value = value;
        this.optionsValue = optionsValue;
    }

    // Get the value of the field
    getValue(): any {
        // Switch the type of the field
        switch (this.type) {
            default:
                return this.value;
        }
    }
    toJSON() {
        return {
            name: this.name,
            type: this.type,
            value: this.value,
            optionsValue: this.optionsValue,
        }
    }
    static fromJSON(json: any) {
        let field_obj = new Field(json.name, (json.type ?? 'text').toLowerCase(), json.value, json.optionsValue);
        return field_obj;
    }
}