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
      // eslint-disable-next-line
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

  width: 70%;
  display:flex;
  flex-wrap: wrap;
  margin-bottom:auto;
  margin-top: 3.125rem;
  //margin-left: $margin;

  @media(max-width: 635px){
    width: 60%;
  }

}
.c-pointer {
  cursor: pointer;
}

</style>