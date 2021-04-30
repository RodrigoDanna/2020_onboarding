import axios, { AxiosInstance } from "axios";

interface ResultItemInterface {
  id: number,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: number,
  rank: number,
  explicit_lyrics: boolean,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  preview: string,
  md5_image: string,
  artist: {
    id: number,
    name: string,
    link: string,
    picture: string,
    picture_small: string,
    picture_medium: string,
    picture_big: string,
    picture_xl: string,
    tracklist: string,
    type: string
  },
  album: {
    id: number,
    title: string,
    cover: string,
    cover_small: string,
    cover_medium: string,
    cover_big: string,
    cover_xl: string,
    md5_image: string,
    tracklist: string,
    type: string
  },
  type: string
}

const instance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  timeout: 10000,
  headers: {
    'x-rapidapi-key': '48a6edf938mshdd048f9559b763bp1c9058jsn31233ed21ade',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    "useQueryString": true
  }
});

export default {
  getData(inputSearch: string, index: number): Promise<void | ResultItemInterface> {

    const options = {
      params: {
        q: inputSearch,
        index: index
      }
    };

    return instance.request(options).then(response => response.data).catch(error => error);
  }
}