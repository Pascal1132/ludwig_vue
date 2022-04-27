import Field from "./Field";

export default class Section {
    id: string;
    title: string;
    fields: Field[];
    component: string;

    constructor(id = ``, title = ``, fields = [], component = 'default') {
        this.id = id;
        this.title = title;
        this.fields = fields;
        this.component = component;
    }

    // Get field by its name
    getField(name: string): Field|undefined {
        return this.fields.find(field => field.name === name);
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            fields: this.fields,
            component: this.component,
        }
    }
    static fromJSON(json: any) {
        let fields = json.fields.map((field: any) => {
            let field_obj = Field.fromJSON(field);
            return field_obj;
        });
        let section = new Section(json.id, json.title, fields, json.component);
        return section;
    }
}