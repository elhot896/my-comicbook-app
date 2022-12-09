import axios from "axios";

const apiUrl = "http://localhost:8000";

const GetListComics = () => {
  return axios.get(`${apiUrl}/comics`);
};

const GetComicDetails = (id) => {
  return axios.get(`${apiUrl}/comic/${id}`);
};

export { GetListComics, GetComicDetails };
