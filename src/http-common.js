import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.3.30:8081/api",
  headers: {
    "Content-type": "application/json",
  },
});
