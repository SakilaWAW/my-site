<template>
  <div id="app">
    <nav-bar></nav-bar>
    <site-content></site-content>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import navBar from './components/navBar.vue';
import siteContent from './components/siteContent.vue';
import footBar from './components/footBar.vue';

export default {
    name: 'app',
    components: {
        navBar,
        siteContent,
        footBar,
    },
};
</script>

<style lang="scss">
@import "scss/globalVariables.scss";
$nav-height: 300px;
$footer-height: 50px;

html {
  height: 100%;
}
body{
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $article-text;
  min-width: 320px;
  height: 100%;
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .site-content {
      flex-grow: 1;
      margin: 10px 0;
    }
  }
}
</style>
