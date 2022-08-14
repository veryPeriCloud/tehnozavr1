<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <ul class="catalog__list">
    <ProductItem :product="product" v-for="(product) in products" :key="product.id"></ProductItem>
  </ul>
</template>

<script>

import ProductItem from './ProductItem.vue';

export default {
  props: ['products'],
  components: { ProductItem },
};
</script>
