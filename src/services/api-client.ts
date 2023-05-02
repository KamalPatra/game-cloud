import axios from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad0b34849a644ca5ae2187459f480b93",
  },
});
