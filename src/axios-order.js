import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-27f12.firebaseio.com/"
});

export default instance;
