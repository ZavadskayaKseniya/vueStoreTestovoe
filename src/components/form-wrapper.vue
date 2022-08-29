<template>
  <div class="form-wrapper">
  <p class="text-dark">{{title}}</p>
  </div>

</template>

<script>
export default {
    name: "form-wrapper",
    components:{},
    data() {
        return{
            title: "Order form"
        };
    },
};
</script>

<style lang="scss">
 .form-wrapper {
   margin-top:16px;
   background: #FFFEFB;
   box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
   border-radius: 4px;
   width: 332px;
   height: 440px;

 }
</style>