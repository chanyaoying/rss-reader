// Card displatying the news, expected for standard RSS format

import Item from "../types/Item"

const Card = (
  {
    title,
    link,
    description,
    pubDate,
    origin,
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
      <p>{pubDate}</p>
      <p>{origin}</p>
    </div>
  )
}

export default Card
