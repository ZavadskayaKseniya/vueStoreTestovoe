<template>
  <div class="main-wrapper">
    <VHeader/>
    <div class="main-content">
      <FormWrapper/>
      <VCatalog/>
    </div>


  </div>
</template>


<script>
import FormWrapper from "@/components/form-wrapper";
import VCatalog from "@/components/v-catalog";
import VCart from "@/components/v-cart";
import VHeader from "@/components/v-header";

export default {
    name: "main-wrapper",
    components:{VHeader, FormWrapper,VCatalog},
    data() {
        return{
            title: "Main wrapper"
        };
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
        console.log("Hello i am alive!");
    }
};
</script>

<style lang="scss">
 .main-wrapper {

   max-width: 1201px;
   min-height: 1000px;
   margin: 0 auto;

 }
 .main-content {
   display: flex;
   justify-content: space-between;
   max-width: 1201px;
   min-height: 1000px;

 }

</style>