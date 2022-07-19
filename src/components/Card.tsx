// Card displatying the news, expected for standard RSS format

import Item from "../types/Item"

const Card = (
  {
    title,
    link,
    description,
    pubDate,
  }: Item
) => {
  return (
    // TODO: implement css
    <div>
      <a 
        href={link}
        target="_blank"
        rel="noreferrer">{title}</a>
      <p>{description}</p>
      
      {pubDate}

    </div>
  )
}

export default Card
