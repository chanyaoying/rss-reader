import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useEffect, useState } from "react";
import Item from "../types/Item";
import Card from "../components/Card";
import Subscription from "../types/Subscription";
import rssParser from "../utils/rssParser";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  // const [items, setItems] = useState<Item[] | null>(null);


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

  // Get items from subscription rss links
  // TODO: encapsulate in a useEffect to avoid re-rendering
  // ? There is already useQuery that avoids re-rendering?
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
  console.log('rss :>> ', items);


  return (
    <>
      <Head>
        <title>RSS Reader</title>
        <meta name="description" content="Read and save " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          RSS Reader
        </h1>
        <div className="grid gap-3 pt-3 mt-3 text-left ">
          {
            !itemsLoading ?
              items?.map(item => (<Card key={item.id} {...item} />)) :
              <div>Loading...</div>
          }
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
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
