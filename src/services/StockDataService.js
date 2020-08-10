import http from "../http-common";

class StockDataService {
  getAll(type) {
    if (type === undefined) {
      return http.get("/stocks");
    } else {
      return http.get("/stocks?type=" + type);
    }
  }

  findOne(code) {
    return http.get("/stocks/" + code);
  }
}

export default new StockDataService();
