import IDuckClass from "../Backbone/IDuckClass";
import Section from "./Section";

export default class Pageable implements IDuckClass {
    id: string;
    title: string;
    layout: string;
    previewText: string;
    sections: Section[];
    data: any;

    constructor(id = ``, title = ``, layout = '', previewText = '', sections = [], data = {}) {
        this.id = id;
        this.title = title;
        this.layout = layout;
        this.previewText = previewText;
        this.sections = sections;
        this.data = data;
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            sections: this.sections,
            layout: this.layout,
            data: this.data
        }
    }
    static fromJSON(json: any) {
        let sections = json.sections.map((section: any) => {
            let section_obj = Section.fromJSON(section);
            return section_obj;
        });
        let pageable = new Pageable(json.id, json.title, json.layout, json.previewText, sections, json.data);
        return pageable;
    }
}