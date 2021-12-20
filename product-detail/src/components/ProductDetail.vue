<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { find } from '../services';

const props = defineProps({
    productId: String,
})

const emit = defineEmits(['addProduct'])

const product = ref();

const result = await find(props.productId);

product.value = result;

</script>
<template>
    <div class="container-fluid">
        <article>
            <header>{{ product.title }} | {{ product.price }} €</header>
            <span>{{ product.category }} | {{ product.rating.rate }} / 5</span>
            <div class="grid">
                <img :src="product.image" width="200" />
                <div>
                    <span>{{ product.description }}</span>
                    <button @click="emit('addProduct', product)">Add</button>
                </div>
            </div>
        </article>
    </div>
</template>