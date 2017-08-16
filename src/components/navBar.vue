<template lang="html">
  <nav class="nav-bar">
    <wide-nav-list></wide-nav-list>
    <narrow-nav-bar></narrow-nav-bar>
  </nav>
</template>

<script>
import wideNavList from './navbar/wideNavList.vue'
import narrowNavBar from './navbar/narrowNavBar.vue'

export default {
  name: 'navBar',
  components: {
    wideNavList,
    narrowNavBar
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: whiteSmoke;
  padding: 15px 0;
}
</style>
