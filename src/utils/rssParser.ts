import Item from "../types/Item";

export default function rssParser(text: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    const items = doc.querySelectorAll("item");
    const result = Array.from(items).map((item) => {
        const id = 0;
        const title = item.querySelector("title")?.textContent || "";
        const link = item.querySelector("link")?.textContent || "";
        const description = item.querySelector("description")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        return { id, title, link, description, pubDate } as Item;
    }) ;
    return result;
}