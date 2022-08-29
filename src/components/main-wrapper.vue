<template>
  <div class="main-wrapper">

    <FormWrapper/>
    <VCatalog/>
  </div>
</template>


<script>
import FormWrapper from "@/components/form-wrapper";
import VCatalog from "@/components/v-catalog";

export default {
    name: "main-wrapper",
    components:{FormWrapper,VCatalog},
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
   display: flex;
   justify-content: space-between;
   max-width: 1201px;
   min-height: 1000px;
   margin: 0 auto;

 }

</style>