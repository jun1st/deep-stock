import http from "../http-common";

class StockDataService {
  getAll() {
    return http.get("/stocks");
  }
}

export default new StockDataService();
