<template>
  <div id="app">
    <nav-bar></nav-bar>
    <site-content></site-content>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import siteContent from './components/siteContent.vue'
import footBar from './components/footBar.vue'

export default {
  name: 'app',
  components: {
    navBar,
    siteContent,
    footBar
  }
}
</script>

<style lang="scss">
@import "scss/globalVariables.scss";

body{
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $article-text;
  min-width: 320px;
}
</style>
