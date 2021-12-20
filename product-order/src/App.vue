<script setup>
import { useStore } from 'vuex';
import ProductOrder from './components/ProductOrder.vue'
const store = useStore();

const addOrder = () => {
  store.dispatch('orders/addOrder', { id: 4, title: "product 4", price: 34 })
};
</script>
<template>
  <div class="container-fluid">
    <button @click="addOrder">Add Test Product</button>
    <ProductOrder />
  </div>
</template>
