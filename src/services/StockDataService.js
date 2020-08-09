import http from "../http-common";

class StockDataService {
  getHS300() {
    return http.get("/stocks?type=hs300");
  }

  getZZ500() {
    return http.get("/stocks?type=zz500");
  }
  getAll() {
    return http.get("/stocks");
  }
}

export default new StockDataService();
