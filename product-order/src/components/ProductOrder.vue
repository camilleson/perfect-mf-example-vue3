<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const orders = computed(() => store.getters['orders/orders']);
const amount = computed(() => store.getters['orders/amount']);

const removeOrder = (product) => {
    store.dispatch('orders/removeOrder', product)
};
</script>
<template>
    <div class="container-fluid">
        <table>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="order, index in orders">
                    <td>{{ order.product.title }}</td>
                    <td style="width: 40px">{{ order.product.price }}</td>
                    <td style="width: 40px">{{ order.quantity }}</td>
                    <td style="width: 60px">
                        <button style="width:60px" @click="removeOrder(order.product)">X</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>{{ amount }}</td>
                    <td></td>
                    <td>
                        <button v-if="amount > 0" @click="removeOrder(order.product)">Valider</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>