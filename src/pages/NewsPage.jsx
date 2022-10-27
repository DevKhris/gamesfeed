import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import Alert from "../components/Alert";

import { useState, useEffect } from "react";
import { getNews } from "../helpers/newsAPI";
import moment from "moment/moment";

function NewsPage(props) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [dispatchNews, setDispatchNews] = useState(true);

  useEffect(() => {
    if (dispatchNews) {
      getNews(setError)
        .then((result) => {
          setLoading(true);
          result && setNews((prev) => [...prev, ...result]);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });

      setDispatchNews(false);
    }
  }, [dispatchNews]);

  return (
    <div>
      <Alert error={error} setError={setError}></Alert>
      <div>
        <h2 className="text-4xl text-center dark:text-white">RECENT NEWS</h2>
        <br />
        <SearchBar setNews={setNews} setError={setError}></SearchBar>
      </div>

      {loading ? (
        // Loading logic
        <p className="text-center text-white ">Loading latest gaming news...</p>
      ) : news?.length > 0 ? (
        // If news exists iterate and draw cards
        <>
          <div className="grid items-center h-auto gap-0 overflow-auto bg-white md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 dark:bg-slate-900">
            {news?.map((gameNew, index) => {
              return (
                <NewsCard
                  title={gameNew.title}
                  description={gameNew.description}
                  image={gameNew.image}
                  link={gameNew.link}
                  date={moment(gameNew.date).startOf("day").fromNow()}
                  key={new Date().getTime() + index}
                ></NewsCard>
              );
            })}
          </div>
          <div className="container items-center w-screen py-5 text-center dark:bg-slate-900">
            <button
              onClick={() => setDispatchNews(true)}
              className="p-2 mx-2 text-lg text-white transition-all bg-orange-500 rounded dark:bg-slate-80 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-white hover:cursor-pointer hover:bg-orange-700"
            >
              Load More
            </button>
          </div>
        </>
      ) : (
        // If news doesn't exist show message
        <p className="text-center text-white ">Not results found</p>
      )}
    </div>
  );
}

export default NewsPage;
