<script setup>
import { useRouter } from 'vue-router'
import ProductList from 'productList/ProductList'

const router = useRouter();

const onProductSelected = (productId) => {
    router.push({
        name: 'productDetail',
        params: { productId },
    });
}
</script>
<template>
    <ProductList @product-selected="onProductSelected"></ProductList>
</template>