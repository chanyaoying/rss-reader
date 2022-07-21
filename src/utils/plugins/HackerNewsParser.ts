import PluginParser from "../../classes/PluginParser";
import Item from "../../types/Item";

const HackerNewsParser = new PluginParser(
    "Hacker News: Front Page", (item: Item) => {
        const { id, title, link, description, pubDate, origin } = item;
        
        const newDescription = description
            .replace(/(<p>Points:).+/, "")
            .replace(/(<p># Comments:).+/, "")
            .replace(/.+(<\/a><\/p>)/, "")
            .replaceAll("\n", "")
            .replace("<hr>", "")
            .replaceAll("<p>", " ")
            .replaceAll("</p>", " ")

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