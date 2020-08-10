<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Stocks</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">名字</th>
            <th scope="col">开盘</th>
            <th scope="col">最高</th>
            <th scope="col">最低</th>
            <th scope="col">收盘</th>
            <th scope="col">成交量</th>
            <th scope="col">地区</th>
            <th scope="col">板块</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stock, index) in stocks" :key="index">
            <td>
              <router-link :to="{ name: 'stock', params: { code: stock.symbol }}">{{ stock.symbol }}</router-link>
            </td>
            <td>{{ stock.name }}</td>
            <td>{{ stock.open }}</td>
            <td>{{ stock.high }}</td>
            <td>{{ stock.low }}</td>
            <td>{{ stock.close }}</td>
            <td>{{ stock.amount }}</td>
            <td>{{ stock.area }}</td>
            <td>{{ stock.industry }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import StockDataService from "../services/StockDataService";

export default {
  name: "stocks-list",
  data() {
    return {
      stocks: [],
      currentStock: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieve() {
      let type = this.$route.query.type;

      StockDataService.getAll(type).then((response) => {
        this.stocks = response.data;
      });
    },

    refresh() {},
  },

  mounted() {
    console.log("component is mounted");
    console.log(this.$route.query.type);
    this.retrieve();
  },
};
</script>
