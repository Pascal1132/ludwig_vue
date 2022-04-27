import IDuckClass from "../Backbone/IDuckClass";
export default class Configuration implements IDuckClass {
    menus: object[]; // list of menus
    colors: {} | undefined;
    constructor(menus: object[] = [], colors?: {}) {
        this.menus = menus;
        this.colors = colors;
    }

    static fromJSON(json: any) {
        // for each menu object keys in the json object
        
        let configuration = new Configuration(this._generateMenuFromNative(json.menus), json.colors);
        return configuration;
    }

    static _generateMenuFromNative(menus: any) {
        let menusArray = [];
        for (let key in menus) {
            // if the key is not a menu object
            if (!menus.hasOwnProperty(key)) {
                continue;
            }
            // get the menu object
            let menu = menus[key];
            // key has the name
            menu.name = key;
            // create a new menu object
            menusArray.push(menu);
        }
        return menusArray;
    }

    getMenuByName(name: string) {
        return this.menus.find((menu: any) => menu.name === name);
    }

    toJSON() {
        return {
            menus: this.menus,
            colors: this.colors
        }
    }
}