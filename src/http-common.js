import axios from "axios";

export default axios.create({
  baseURL: "http://www.666666.style/api",
  headers: {
    "Content-type": "application/json",
  },
});
