<template>
    <search-container/>
</template>

<script>
import searchContainer from './components/search-container/index.vue'

export default {
  name: 'App',
  components: {
    'search-container': searchContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body { margin: 0; }
</style>
