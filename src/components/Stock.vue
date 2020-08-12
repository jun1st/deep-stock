<template>
    <div class="list row">
        <div class="col-md-12">
            <h4>Stock</h4>
            <commit-chart v-if="loaded" :chartData="chartData" :options="options" />
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
            loaded: false,
            chartData: null,
            options: null,
        };
    },
    methods: {
        fetch() {
            let code = this.$route.params.code;

            StockDataService.findOne(code).then((response) => {
                // this.chartData = {
                //     labels: [
                //         "January",
                //         "February",
                //         "March",
                //         "April",
                //         "May",
                //         "June",
                //         "July",
                //         "August",
                //         "September",
                //         "October",
                //         "November",
                //         "December",
                //     ],
                //     datasets: [
                //         {
                //             label: "GitHub Commits",
                //             backgroundColor: "#f87979",
                //             data: [
                //                 40,
                //                 20,
                //                 12,
                //                 39,
                //                 10,
                //                 40,
                //                 39,
                //                 80,
                //                 40,
                //                 20,
                //                 12,
                //                 11,
                //             ],
                //         },
                //     ],
                // };

                this.options = {};
                this.stock = response.data.stock;
                this.chartData = response.data.trades;
                this.trades = response.data.trades;
                this.loaded = true;
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
