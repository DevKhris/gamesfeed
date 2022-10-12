import NewsCard from "../components/NewsCard";

function NewsPage(props) {
  const handleSearch = (query) => {
    props.setNews(props.searchNews(query));
  };

  const newsSection = props.news.map((gameNew, index) => {
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
      <div className="text-center mb-10">
        <form onSubmit={(e) => handleSearch(e.target.value)}>
          <input
            placeholder="Search news"
            className="p-2 transition-all border-none rounded hover:border-2 hover:border-solid text-slate-800 dark:text-white dark:bg-slate-800 dark:hover:border-blue-700 w-50 "
          ></input>
          <input
            className="p-2 mx-2 transition-all rounded text-slate-800 dark:bg-slate-80 dark:hover:bg-blue-700 dark:text-white hover:cursor-pointer"
            type="submit"
            value="Search"
          ></input>
        </form>
      </div>
      <div>
        <h2 className="text-4xl dark:text-white text-center">Recent News</h2>
        <br />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-0  bg-white dark:bg-slate-900">
        {newsSection}
      </div>
    </div>
  );
}

export default NewsPage;
