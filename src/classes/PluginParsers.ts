import Item from "../types/Item";
import PluginParser from "./PluginParser";

export default class PluginParsers {
    plugins: PluginParser[];

    constructor(plugins: PluginParser[] = []) {
        this.plugins = plugins;
    }

    merge(parser: PluginParser) {
        this.plugins.push(parser);
        return this;
    }

    parse(item: Item) {
        for (let i = 0; i < this.plugins.length; i++) {
            const parser = this.plugins[i];
            if (parser && parser.source === item.origin) {
                item = parser.parse(item);
            }
        }
        return item as Item;
    }
}