import axios from "axios";

const instance = axios.create({
  baseURL: "https://eccommerce-backend-101.herokuapp.com/",
});

export default instance;
