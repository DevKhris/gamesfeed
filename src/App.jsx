import NavBar from "./components/NavBar";
import NewsPage from "./pages/NewsPage";
import { useState, useEffect } from "react";
// eslint-disable-next-line
import { getNews, searchNews } from "./apis/newsAPI";

function App() {
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

  return (
    <div className="bg-inherit">
      <header className="header-area">
        <NavBar />
      </header>
      <div className="container">
        if (error) {<div>{error}</div>}
        <NewsPage news={news} searchNews={searchNews} setNews={setNews} />
      </div>
      <div className="container  dark:bg-slate-900 text-center py-5">
        <button className="p-2 mx-2 transition-all rounded text-slate-800 dark:bg-slate-80 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-white hover:cursor-pointer text-lg">
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;

