<template>
  <div class="v-header">
    <VCart/>
  </div>
</template>

<script>
import VCart from "@/components/v-cart";
export default {
    name: "v-header",
    components: {VCart}
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