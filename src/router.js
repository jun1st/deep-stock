import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("./components/StocksList"),
    },
    {
      path: "/stocks/:code",
      name: "stock",
      component: () => import("./components/Stock"),
    },
  ],
});
