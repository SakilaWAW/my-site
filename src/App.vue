<template>
  <div id="app">
    <toolbar></toolbar>
    <site-content></site-content>
    <footbar></footbar>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import SiteContent from './components/SiteContent.vue'
import Footbar from './components/Footbar.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    SiteContent,
    Footbar
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
