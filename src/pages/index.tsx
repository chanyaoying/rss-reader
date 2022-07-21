import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useState } from "react";

import Item from "../types/Item";
import Subscription from "../types/Subscription";

import Card from "../components/Card";
import LoadingCard from "../components/loading/LoadingCard";

import rssParser from "../utils/rssParser";
import { RSSPluginParsers } from "../utils/plugins/index";


const Home: NextPage = () => {

    const [subscriptions, setSubscriptions] = useState<Subscription[] | null>(
        [
            {
              id: 1,
              title: "Example sub 1",
              link: "https://example.com",
              rssLink: "https://www.straitstimes.com/news/singapore/rss.xml",
              description: "example description",
              imageURL: "https://www.straitstimes.com/themes/custom/straitstimes/images/st-logo.png",
            },
            {
              id: 2,
              title: "Example sub 2",
              link: "https://example.com",
              rssLink: "https://hnrss.org/frontpage",
              description: "example description again",
              imageURL: "https://www.straitstimes.com/themes/custom/straitstimes/images/st-logo.png",
            }
        ]
    );

    var itemsLoading = true;
    var items: Item[] = []
    if (subscriptions) {
        const rssSet = new Set<string>()
        for (let sub of subscriptions) {
            const { isLoading, data, error } = trpc.useQuery(["rss.getRSS", { url: sub.rssLink }])
            data ? rssSet.add(data.data) : null
            itemsLoading = isLoading
            if (error) {
                console.log('error :>> ', error);
            }
        }
        rssSet.forEach((item: string) => {
            items.push(...rssParser(item))
        })
    }


  return (
    <>
        <Head>
            <title>RSS Reader</title>
            <meta name="description" content="Read and save " />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto flex flex-col items-center justify-center p-4">
            <p className="py-6 text-4xl md:text-[5rem] leading-normal font-bold text-gray-200">
                RSS Reader
            </p>
            <div className="grid gap-3 pt-3 mt-3 text-left">
                {
                    !itemsLoading ?
                      items?.map(item => (<Card key={item.id} {...(RSSPluginParsers.parse(item))} />)) :
                      <LoadingCard></LoadingCard>
                }
            </div>
            <div className="py-6 text-2xl text-blue-500 flex justify-center items-center w-full">
                {subscriptions ? <p>Subscriptions: {subscriptions.length}</p> : <p>Loading..</p>}
            </div>
        </main>
    </>
  );
};

// const TechnologyCard = ({
//   name,
//   description,
//   documentation,
// }: TechnologyCardProps) => {
//   return (
//     <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
//       <h2 className="text-lg text-gray-700">{name}</h2>
//       <p className="text-sm text-gray-600">{description}</p>
//       <a
//         className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
//         href={documentation}
//         target="_blank"
//         rel="noreferrer"
//       >
//         Documentation
//       </a>
//     </section>
//   );
// };

export default Home;
