import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const allNews = useLoaderData();
  const {id} = useParams();

  useEffect(() => {
    const newsDetails = allNews.find((news) => news.id == id);
    setNews(newsDetails);
  }, [allNews, id]);

  return (
    <div className="mt-10 w-10/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9 mt-5">
            <h2 className="font-semibold mb-5 text-lg text-primary">Front page News</h2>
          <NewsDetailsCard news={news} key={news.id}></NewsDetailsCard>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
