import axios from "axios";

const apiUrl = "http://localhost:8000";

const GetListComics = () => {
  return axios.get(`${apiUrl}/comics`);
};

export { GetListComics };
