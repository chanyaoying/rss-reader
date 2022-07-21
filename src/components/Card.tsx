// Card displatying the news, expected for standard RSS format

import Item from "../types/Item"
import parser from "html-react-parser"

const Card = (
    { title, link, description, pubDate, origin, }: Item
) => {

    // Convert description to HTML
    

    return (
        // TODO: implement css
        <div>
            <a
                href={link}
                target="_blank"
                rel="noreferrer">{title}</a>
            <div>{parser(description)}</div>
            <p>{pubDate}</p>
            <p>{origin}</p>
        </div>
    )
}

export default Card
