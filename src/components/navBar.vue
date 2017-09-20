<template lang="html">
  <nav class="nav-bar">
    <wide-nav-list class='wide-nav'></wide-nav-list>
    <narrow-nav-bar class="narrow-nav"></narrow-nav-bar>
  </nav>
</template>

<script>
import wideNavList from './navbar/wideNavList.vue';
import narrowNavBar from './navbar/narrowNavBar.vue';

export default {
  name: 'navBar',
  components: {
    wideNavList,
    narrowNavBar
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  background: whiteSmoke;
  padding: 15px 0;
  .narrow-nav {
    @media screen and (min-width: 768px){
      display: none;
    }
  }
  .wide-nav {
    @media screen and (max-width: 767px){
      display: none;
    }
  }
}
</style>
