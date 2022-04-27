import IDuckClass from "../Backbone/IDuckClass";

export default class Field implements IDuckClass{
    id: string;
    name: string;
    type: string;
    data: {value: string};

    static get FIELD_TYPES() {
        return [
            'text',
            'wysiwyg',
            'image',
            'file',
            'video',
            'audio',
            'gallery',
            'link',
            'date',
            'time',
            'datetime',
            'checkbox',
            'radio',
            'select',
        ]
    }

    constructor(id = ``, name = ``, type = 'text', data = {value: ''}) {
        // Verify if the type is valid with the values of the properties FIELD_TYPES
        if (!Field.FIELD_TYPES.includes(type)) {
            throw new Error(`The type "${type}" is not valid.`);
        }
        
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
    }

    // Get the value of the field
    getValue(): any {
        // Switch the type of the field
        switch (this.type) {
            case 'text':
            case 'wysiwyg':
                return this.data.value;
            case 'image':
            case 'file':
            case 'video':
            case 'audio':
            case 'gallery':
            case 'link':
                return this.data.value;
        }
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            data: this.data,
        }
    }
    static fromJSON(json: any) {
        let field_obj = new Field(json.id, json.name, json.type, json.data);
        return field_obj;
    }
}