import { request } from "axios";

const apiUrl = "https://videogames-news2.p.rapidapi.com/videogames_news";
export function getNews() {
  const options = {
    method: "GET",
    url: `${apiUrl}/recent`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_NEWS_API_KEY,
      "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
    },
  };

  return request(options)
    .then(({ data }) => data)
    .catch(function (error) {
      console.error(error);
    });
}

export function searchNews(query) {
  const options = {
    method: "GET",
    url: `${apiUrl}/search_news`,
    params: { query: query },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_SEARCH_API_KEY,
      "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
    },
  };

  return request(options)
    .then(({ data }) => data)
    .catch(function (error) {
      console.error(error);
    });
}
