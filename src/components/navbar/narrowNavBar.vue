<template lang="html">
  <div class="narrow-nav-bar">
    <ul class="narrow-nav-list">
      <li class="pitts-logo" ><img :src="siteLogo" alt="site logo named Tuco"></li>
      <li class="toggle-button"><img :src="toggleButton" alt="button for toggle menu" @click="alertMsg"></li>
    </ul>
    <hidden-nav-bar></hidden-nav-bar>
  </div>
</template>

<script>
import hiddenNavBar from './narrownavbar/hiddenNavBar.vue'

export default {
  name: 'narrowNavBar',
  data() {
    return {
      siteLogo: require('../../assets/site-logo.png'),
      toggleButton: require('../../assets/hamburg-menu.svg')
    }
  },
  methods: {
    alertMsg: function(event) {
      alert('wow');
    }
  },
  components: {
    hiddenNavBar
  }
}
</script>

<style lang="scss" scoped>
.narrow-nav-bar {
  @media screen and (min-width: 768px){
    display: none;
  }
  .narrow-nav-list {
    margin: 0 auto;
    width: 93%;
    padding: 0 22px 0 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pitts-logo {
      display: inline-block;
    }
    .toggle-button {
      height: 50px;
      width: 50px;
      display: inline-block;
    }
  }
}
</style>
