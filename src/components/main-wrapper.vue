<template>
  <div class="main-wrapper">
    <p>{{title}}}</p>
    <FormWrapper/>
    <VCatalog/>
  </div>>
</template>


<script>
import FormWrapper from "@/components/form-wrapper";
import VCatalog from "@/components/v-catalog";

export default {
    name: "main-wrapper",
    components:{VCatalog, FormWrapper},
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

<style>
 .main-wrapper {
   display: grid;
   align-items: center;
   max-width: 900px;
   margin: 0 auto;
 }

</style>