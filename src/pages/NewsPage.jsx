import NewsCard from "../components/NewsCard";
import { useState, useEffect } from "react";
// eslint-disable-next-line
import { getNews, searchNews } from "../helpers/newsAPI";

function NewsPage(props) {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNews()
      .then((result) => {
        setNews(result);
      })
      .catch((err) => {
        setError(error);
      });
  }, [error]);

  const handleSearch = (query) => {
    searchNews(query)
      .then((result) => {
        setNews(result);
      })
      .catch((err) => {
        setError(error);
      });
  };

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
      {error ? <div>{error}</div> : ""}
      <div className="mb-10 text-center">
        <form onSubmit={(e) => handleSearch(e.target.value)}>
          <input
            placeholder="Search news"
            className="p-2 transition-all border-none rounded bg-slate-300 hover:border-2 hover:border-solid text-slate-800 dark:text-white dark:bg-slate-800 dark:hover:border-blue-700 w-50 hover:border-orange-300"
          ></input>
          <span>
            <input
              className="p-2 mx-2 text-white transition-all bg-orange-500 rounded dark:bg-slate-800 dark:hover:bg-blue-700 dark:text-white hover:cursor-pointer hover:bg-orange-700 "
              type="submit"
              value="Search"
            ></input>
          </span>
        </form>
      </div>
      <div>
        <h2 className="text-4xl text-center dark:text-white">RECENT NEWS</h2>
        <br />
      </div>
      <div className="grid gap-0 bg-white md:grid-cols-2 sm:grid-cols-1 dark:bg-slate-900">
        {newsSection}
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
