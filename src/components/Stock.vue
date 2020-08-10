<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Stock</h4>
      <commit-chart />
    </div>
  </div>
</template>

<script>
import CommitChart from "./CommitChart";
import StockDataService from "../services/StockDataService";

export default {
  components: {
    CommitChart,
  },
  name: "stock-detail",
  data() {
    return {
      stock: null,
      trades: [],
    };
  },
  methods: {
    fetch() {
      let code = this.$route.params.code;

      StockDataService.findOne(code).then((response) => {
        this.stock = response.data.stock;
        this.trades = response.data.trades;
      });
    },

    refresh() {},
  },

  mounted() {
    console.log(this.$route.params.code);
    this.fetch();
  },
};
</script>
