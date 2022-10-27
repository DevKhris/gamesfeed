import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";

import { useState, useEffect } from "react";
import { getNews } from "../helpers/newsAPI";

function NewsPage(props) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNews()
      .then((result) => {
        setNews(result);
      })
      .catch((err) => {
        setError(err);
      });
  }, [error]);

  const loadMore = () => {
    getNews()
      .then((result) => {
        setNews([...news, ...result]);
      })
      .catch((err) => {
        setError(error);
      });
  };

  const newsSection = news.map((gameNew, index) => {
    return (
      <NewsCard
        title={gameNew.title}
        description={gameNew.description}
        image={gameNew.image}
        link={gameNew.link}
        date={gameNew.date}
        key={new Date().getTime() + index}
      ></NewsCard>
    );
  });

  return (
    <div className="">
      <div>
        <h2 className="text-4xl text-center dark:text-white">RECENT NEWS</h2>
        {error ? <div>{error}</div> : ""}
        <br />
        <SearchBar setNews={setNews} setError={setError}></SearchBar>
      </div>
      <div className="grid gap-0 bg-white md:grid-cols-2 sm:grid-cols-1 dark:bg-slate-900">
        {news.length > 0 ? newsSection : "Error"}
      </div>
      <div className="container py-5 text-center dark:bg-slate-900">
        <button
          onClick={() => loadMore()}
          className="p-2 mx-2 text-lg text-white transition-all bg-orange-500 rounded dark:bg-slate-80 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-white hover:cursor-pointer hover:bg-orange-700"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default NewsPage;
