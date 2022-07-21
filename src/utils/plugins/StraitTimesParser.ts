import PluginParser from "../../classes/PluginParser";
import Item from "../../types/Item";

const StraitTimesParser = new PluginParser(
    "The Straits Times Singapore News", (item: Item) => {
        const { id, title, link, description, pubDate, origin } = item;
        
        const newDescription = description.replace(/.+(<p>)/, "").replace(/(<\/p>)+/, "");
        console.log('newDescription :>> ', newDescription);
        
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

export default StraitTimesParser