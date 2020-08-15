import axios from "axios";

export default axios.create({
  baseURL: "http://13.75.114.205/api",
  headers: {
    "Content-type": "application/json",
  },
});
