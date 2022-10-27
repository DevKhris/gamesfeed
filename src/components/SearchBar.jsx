import { searchNews } from "../helpers/newsAPI";

function SearchBar(props) {
  let query = "";

  const handleSearch = (query) => {
    searchNews(query, props.setError)
      .then((result) => {
        props.setNews(result);
      })
      .catch((err) => {
        props.setNews([]);
        props.setError(err.message);
      });
  };

  return (
    <div className="mb-10 text-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(query);
        }}
      >
        <input
          placeholder="Search news"
          className="p-2 transition-all border-none rounded bg-slate-300 hover:border-2 hover:border-solid text-slate-800 dark:text-white dark:bg-slate-800 dark:hover:border-blue-700 w-50 hover:border-orange-300"
          onChange={(e) => {
            query = e.target.value;
          }}
        ></input>
        <span>
          <input
            className="p-2 mx-2 text-white transition-all bg-orange-500 rounded dark:bg-slate-800 dark:hover:bg-blue-700 dark:text-white hover:cursor-pointer hover:bg-orange-700"
            type="submit"
            value="Search"
          ></input>
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
