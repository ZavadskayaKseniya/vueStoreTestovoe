<template>

<div class="v-catalog">

  <CardItem
    v-for="product in this.$store.state.products"
    :key="product.id"
    v-bind:product_data="product"
    @sendArticle="showChildIdInConsole"
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

    methods: {
        ...mapActions([
            "GET_PRODUCTS_FROM_API"
        ]),
        showChildIdInConsole(data) {
            console.log(data);
        }
    },
  mounted() {
      this.GET_PRODUCTS_FROM_API();
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

}

</style>