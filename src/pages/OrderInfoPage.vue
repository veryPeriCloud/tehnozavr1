<!-- eslint-disable max-len -->
<template>
<main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Корзина
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ this.$route.params.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
            Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <OrderInfoItem title="Получатель" :value="orderInfo.name"></OrderInfoItem>
            <OrderInfoItem title="Адрес доставки" :value="orderInfo.address"></OrderInfoItem>
            <OrderInfoItem title="Телефон" :value="orderInfo.phone"></OrderInfoItem>
            <OrderInfoItem title="Email" :value="orderInfo.email"></OrderInfoItem>

            <li class="dictionary__item">
              <span class="dictionary__key">
                Способ оплаты
              </span>
              <span class="dictionary__value">
                картой при получении
              </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <OrderCartList :items="orderInfo.basket.items"></OrderCartList>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>{{ orderInfo.basket.items.length }}</b> товара на сумму <b>{{ orderInfo.totalPrice + 500 | numberFormat }} ₽</b></p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import OrderInfoItem from '@/components/OrderInfoItem.vue';
import OrderCartList from '@/components/OrderCartList.vue';

export default {
  components: { OrderInfoItem, OrderCartList },
  computed: {
    orderInfo() {
      return this.$store.state.orderInfo;
    },
  },
  created() {
    this.$store.dispatch('loadOrderInfo', this.$route.params.id);
  },
  props: ['items'],
  filters: {
    numberFormat,
  },
};
</script>
