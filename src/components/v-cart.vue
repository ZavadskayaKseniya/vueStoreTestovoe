<template>
  <div class="v-cart c-pointer">
    <svg
        @click="toggleElement"
        xmlns="http://www.w3.org/2000/svg" style="transform: scale(2)" width="16" height="16" fill="currentColor" class="bi bi-bag-heart icon fa-2x" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
    </svg>
    <div
        v-if="cart_data.length"
        class="cart-circle"
    >
      {{cart_data.length}}
    </div>

    <div
        class="cart-menu"
        v-if="cart_data.length, isOpen"

    >
      <div
          class="cart-menu__item"
          v-for="item in cart_data"
          :key="item.id"
      >
        <p>{{item.name}}</p>
        <span>{{item.price}} руб.</span>

      </div>

    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "v-cart",
    props:{
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
          isOpen: false
        };
    },
    computed:{
      ...mapActions([
          "DELETE_FROM_CART"
      ])
    },
    methods:{
      toggleElement() {
        this.isOpen= !this.isOpen;
      }
    },

};
</script>

<style lang="scss">
.v-cart {
position: relative;

}
.cart-menu {
  position: absolute;
  top: 30px;
  background-color: #000000A3;
  width: 400px;
  padding: 10px 20px;
  z-index: 2;
  border-radius: 15px;
  color: white;

  &__item {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;

  }
}
icon {
  width: 50px;
  height: 50px;
  transform: scale(2);

}
.cart-circle {
  position: absolute;
  width: 17px;
  height: 17px;
  background-color: #FF0000DD;
  color:white;
  border-radius: 15px;
  font-size:13px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  right: -20px;
  top: -8px;

}
</style>