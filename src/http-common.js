import axios from "axios";

export default axios.create({
  baseURL: "https://www.baidu.com/",
  headers: {
    "Content-type": "application/json",
  },
});
