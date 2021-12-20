<script setup>
import { defineProps, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import ProductDetail from 'productDetail/ProductDetail'

const props = defineProps({
    productId: String,
})

const router = useRouter();
const store = useStore();

const productId = computed(() => props.productId)

const addOrder = (product) => {
    store.dispatch('orders/addOrder', product)
};
</script>
<template>
    <suspense>
        <template #default>
            <div>
                <button style="width:50px" @click="router.push({ name: 'productList' })">&lt;</button>
                <ProductDetail :productId="productId" @add-product="addOrder"></ProductDetail>
            </div>
        </template>
        <template #fallback>
            <progress></progress>
        </template>
    </suspense>
</template>