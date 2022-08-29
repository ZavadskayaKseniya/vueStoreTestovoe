<template>

<div class="v-catalog">

  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>
  <CardItem/>

</div>
</template>

<script>

import CardItem from "@/components/card-item";
export default {
    name: "v-catalog",
    components:{CardItem},
    data() {
        return{
            title: "Catalog"
        };
    },
};
</script>

<style lang="scss">
.v-catalog {
  background-color: rgba(255, 0, 0, 0.09);
  width: 1028px;
  display:flex;
  flex-wrap: wrap;

}

</style>