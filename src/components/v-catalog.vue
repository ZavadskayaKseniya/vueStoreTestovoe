<template>

<div class="v-catalog">

  <CardItem
    v-for="product in PRODUCTS"
    :key="product.id"
    v-bind:product_data="product"
    @addToCart="addToCart"
  />


</div>
</template>

<script>
import { uuid } from "vue-uuid";
import {mapActions, mapGetters} from "vuex";
import CardItem from "@/components/card-item";
export default {
    name: "v-catalog",
    components:{CardItem},
    data() {
        return {};
    },
    computed: {
      ...mapGetters([
          "PRODUCTS"
      ])
    },

    methods: {
        ...mapActions([
            "GET_PRODUCTS_FROM_API",
            "ADD_TO_CART"
        ]),
      addToCart(data) {
        this.ADD_TO_CART(data);
        }
    },
  mounted() {
      this.GET_PRODUCTS_FROM_API()


  }

};
</script>

<style lang="scss">
.v-catalog {

  width: 1028px;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom:auto;
  margin-top: 50px;
  margin-left: $margin;

}
.c-pointer {
  cursor: pointer;
}

</style>