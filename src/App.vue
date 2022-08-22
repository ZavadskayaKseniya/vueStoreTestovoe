<template>
  <div id="app">app</div>
  <main-wrapper/>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
  margin-top: 60px;
}
</style>
