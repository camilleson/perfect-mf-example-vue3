<script setup>
import ProductOrder from 'productOrder/ProductOrder'
</script>
<template>
  <div class="container">
    <div class="grid">
      <router-view />
      <ProductOrder />
    </div>
  </div>
</template>
