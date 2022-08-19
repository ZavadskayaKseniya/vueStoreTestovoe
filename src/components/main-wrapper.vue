<template>
  <div class="main-wrapper">
    <p>hyli</p>
  </div>>
</template>


<script>
export default {
    name: "main-wrapper",
    components:{},
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