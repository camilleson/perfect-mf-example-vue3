<template>
  <suspense>
    <ProductDetail :productId="1" />
  </suspense>
</template>

<script>
import ProductDetail from './components/ProductDetail.vue'

export default {
  name: 'App',
  components: {
    ProductDetail
  }
}
</script>
