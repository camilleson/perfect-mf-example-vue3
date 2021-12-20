<script setup>
import { ref, defineEmits } from 'vue';
import { findAll } from '../services';

const emit = defineEmits(['productSelected'])

const products = ref([]);

findAll().then(data => products.value = data);

</script>
<template>
    <div class="container-fluid">
        <article
            :key="product.id"
            v-for="product in products"
            @click="emit('productSelected', product.id)"
        >
            <header>{{ product.title }} | {{ product.price }} €</header>
            <div class="grid">
                <img :src="product.image" width="200" />
                <div>
                    <h3>{{ product.rating.rate }} / 5</h3>
                    <span>{{ product.category }}</span>
                </div>
            </div>
        </article>
    </div>
</template>