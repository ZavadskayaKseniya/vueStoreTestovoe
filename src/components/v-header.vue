<template>
  <div class="v-header">
    <VCart

        :cart_data="CART"
    />
  </div>
</template>

<script>
import VCart from "@/components/v-cart";
import {mapActions, mapGetters} from "vuex";
export default {
    name: "v-header",
    components: {VCart},
    props:{},
    data() {
      return {};
    },
    computed:{
      // eslint-disable-next-line
      ...mapGetters([
          "CART"
      ])
    },
    methods:{}
};
</script>

<style lang="scss">
.v-header {
  width: 100%;
  height: 35px;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  padding: 1%;

}
</style>