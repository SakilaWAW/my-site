<template lang="html">
  <nav class="nav-bar">
    <nav-list></nav-list>
    <narrow-nav-list></narrow-nav-list>
  </nav>
</template>

<script>
import navList from './navbar/navList.vue'
import narrowNavList from './navbar/narrowNavList.vue'

export default {
  name: 'navBar',
  components: {
    navList,
    narrowNavList
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: whiteSmoke;
  padding: 15px 0;

}
</style>
