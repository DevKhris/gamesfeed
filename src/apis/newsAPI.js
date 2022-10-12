import { request } from "axios";

const apiUrl = "https://videogames-news2.p.rapidapi.com/videogames_news";
export function getNews() {
  const options = {
    method: "GET",
    url: `${apiUrl}/recent`,
    headers: {
      "X-RapidAPI-Key": "54d792eaf5msha89db865474f599p19dbcfjsn5406307a8833",
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
      "X-RapidAPI-Key": "54d792eaf5msha89db865474f599p19dbcfjsn5406307a8833",
      "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
    },
  };

  return request(options)
    .then(({ data }) => data)
    .catch(function (error) {
      console.error(error);
    });
}
