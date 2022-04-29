import Field from "./Field";

export default class Section {
    code: string;
    component: string;
    fields: Field[];

    constructor(code: string, component: string, fields: Field[]) {
        this.code = code;
        this.component = component;
        this.fields = fields;
    }

    // Get field by its name
    getField(name: string): Field|undefined {
        return this.fields.find(field => field.name === name);
    }

    toJSON() {
        return {
            code: this.code,
            component: this.component,
            fields: this.fields,
        }
    }
    static fromJSON(json: any) {
        let fields = json.fields.map((field: any) => {
            let field_obj = Field.fromJSON(field);
            return field_obj;
        });
        // component from view path
        let component = json.view.replace("/", "-");

        return new Section((json.code).toUpperCase(), component, fields);
    }
}