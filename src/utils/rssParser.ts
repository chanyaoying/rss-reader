import Item from "../types/Item";
import { parseString } from "xml2js";

export default function rssParser(text: string) {
    // const parser = new DOMParser();
    const items: any[] = []
    parseString(text, {trim: true}, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        items.push(result.rss.channel[0].item);
    });
    if (!items.length) {
        console.log("it is rss");
    }
    // const result = Array.from(items).map((item) => {
    //     const id = 0;
    //     const title = item.querySelector("title")?.textContent || "";
    //     const link = item.querySelector("link")?.textContent || "";
    //     const description = item.querySelector("description")?.textContent || "";
    //     const pubDate = item.querySelector("pubDate")?.textContent || "";
    //     return { id, title, link, description, pubDate } as Item;
    // }) ;
    return items[0];
}