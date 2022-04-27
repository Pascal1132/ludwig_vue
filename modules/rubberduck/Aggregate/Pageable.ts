import IDuckClass from "../Backbone/IDuckClass";
import Section from "./Section";

export default class Pageable implements IDuckClass {
    id: string;
    title: string;
    sections: Section[];
    module_type: string;
    parent_id: string;
    layout: string;
    data: any;

    constructor(id = ``, title = ``, sections = [], module_type = '', parent_id = '', layout = '', data = {}) {
        this.id = id;
        this.title = title;
        this.sections = sections;
        this.module_type = module_type;
        this.parent_id = parent_id;
        this.layout = layout;
        this.data = data;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            sections: this.sections,
            module_type: this.module_type,
            parent_id: this.parent_id,
            layout: this.layout,
            data: this.data
        }
    }
    static fromJSON(json: any) {
        let sections = json.sections.map((section: any) => {
            let section_obj = Section.fromJSON(section);
            return section_obj;
        });
        let pageable = new Pageable(json.id, json.title, sections, json.module_type, json.parent_id, json.layout, json.data);
        return pageable;
    }
}