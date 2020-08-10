<template>
    <div class="list row">
        <div class="col-md-12">
            <h4>Stock One</h4>
        </div>
    </div>
</template>

<script>
import StockDataService from "../services/StockDataService";

export default {
  name: "stock detail",
  data() {
    return {
      stock: null,
      title: "",
    };
  },
  methods: {
    fetch() {
      let code = this.$route.params.code;

      StockDataService.findOne(code).then((response) => {
        this.stock = response.data;
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