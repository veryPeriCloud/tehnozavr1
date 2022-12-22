<template>
  <ul class="cart__orders">
    <OrderCartItem :item="item" v-for="item in items" :key="item.id"></OrderCartItem>
  </ul>
</template>

<script>
import OrderCartItem from './OrderCartItem.vue';

export default {
  components: { OrderCartItem },
  props: ['items'],
};
</script>
