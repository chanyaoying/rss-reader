import Item from "../types/Item";

export default class PluginParser {
    source: string;
    parsingFunction: Function;

    constructor(source: string, parsingFunction: Function) {
        this.source = source;
        this.parsingFunction = parsingFunction;
    }

    parse(item: Item) {
        return this.parsingFunction(item) as Item;
    }
}