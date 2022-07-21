import Item from "../types/Item";
import { parseString } from "xml2js";
import { v4 as uuidv4 } from "uuid";

export default function rssParser(text: string) {
    // const parser = new DOMParser();
    const items: any[] = []
    if (typeof text === "string") {
        parseString(text, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            const channel = result.rss.channel[0]
            var origin: string = channel?.title[0]
            if (channel.item) {
                channel.item.forEach((item: any) => {
                    const id = uuidv4();
                    const title = item.title[0]
                    const link = item.link[0]
                    const description = item.description[0]
                    const pubDate = item.pubDate[0]
                    items.push({ id, title, link, description, pubDate, origin } as Item)
                })
            }
        });
    }
    return items as Item[];
}