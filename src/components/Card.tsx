// Card displatying the news, expected for standard RSS format

import { SyntheticEvent, useState } from "react"
import Item from "../types/Item"
import Subscription from "../types/Subscription"
import parser from "html-react-parser"
import Button from "./Button"

const Card = (
    { title, link, description, pubDate, origin, }: Item,
) => {

    const [expanded, setExpanded] = useState(false)

    const expandDescription = (e: SyntheticEvent) => {
        setExpanded(!expanded)
        e.preventDefault()
    }


    return (
        // TODO: implement css
        <div className="container mx-auto px-4">

            <a href={link} target="_blank" rel="noreferrer" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {/* <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""></img> */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="text-gray-700 dark:text-amber-200">
                    {origin}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {pubDate}
                </p>
                <Button text={!expanded ? "Show more" : "Show less"} onClick={(e) => expandDescription(e)}></Button>
                {!expanded ? "" : <div className="font-normal text-700 dark:text-slate-400">
                    {parser(description)}
                </div>}
            </a>

        </div>
    )
}

export default Card
