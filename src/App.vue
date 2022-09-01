<template>
  <div  id="app">
    <mainWrapper/>
  </div>

</template>

<script>

import mainWrapper from "@/components/main-wrapper";

export default {
    name: "App",
    components: {
        mainWrapper
    }
};
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090000;
  background:#E5E5E5;

}
</style>
