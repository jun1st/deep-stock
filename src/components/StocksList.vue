<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Stocks</h4>
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
      StockDataService.getAll().then((response) => {
        this.stocks = response.data;
      });
    },

    refresh() {},
  },

  mounted() {
    console.log("component is mounted");
    this.retrieve();
  },
};
</script>
