<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Stocks</h4>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">名字</th>
                        <th scope="col">沪/深</th>
                        <th scope="col">板块</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(stock, index) in stocks" :key="index">
                        <td>{{ stock.symbol }}</td>
                        <td>{{ stock.name }}</td>
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
            if (type === "hs300") {
                StockDataService.getHS300().then((response) => {
                    this.stocks = response.data;
                });
            } else {
                StockDataService.getAll().then((response) => {
                    this.stocks = response.data;
                });
            }
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
