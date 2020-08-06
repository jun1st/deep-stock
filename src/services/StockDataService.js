import http from "../http-common";

class StockDataService {
  getAll() {
    http.get("/");
    return [
      {
        id: 1,
        name: "上海",
      },
      {
        id: 2,
        name: "北京",
      },
    ];
  }
}

export default new StockDataService();
