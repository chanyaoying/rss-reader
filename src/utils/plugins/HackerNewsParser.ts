import PluginParser from "../../classes/PluginParser";
import Item from "../../types/Item";

const HackerNewsParser = new PluginParser(
    "Hacker News: Front Page", (item: Item) => {
        const { id, title, link, description, pubDate, origin } = item;
        
        const newDescription = description
            .replace(/(<p>Points:).+/, "")
            .replace(/(<p># Comments:).+/, "")
            .replace("<hr>", "")
            .split("\n")
            .filter(line => line.length > 0)
            .filter(line => !line.includes("<p>Article URL"))
            .join("\n");

        const newItem = {
            id,
            title,
            link,
            description: newDescription,
            pubDate,
            origin
        };
        return newItem as Item;
    }
);

export default HackerNewsParser