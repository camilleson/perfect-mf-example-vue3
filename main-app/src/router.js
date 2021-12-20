import { createRouter, createWebHistory } from "vue-router";
import ProductListPage from "./pages/ProductListPage.vue";

const routes = [
  {
    name: "productList",
    path: "/",
    component: ProductListPage,
  },

  {
    name: "productDetail",
    path: "/product/:productId",
    props: (route) => {
      return {
        productId: route.params.productId,
      };
    },
    component: () =>
      import(
        /* webpackChunkName: "productDetailPage" */ "./pages/ProductDetailPage.vue"
      ),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
