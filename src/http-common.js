import axios from "axios";

export default axios.create({
  baseURL: "http://api.666666.style/api",
  headers: {
    "Content-type": "application/json",
  },
});
