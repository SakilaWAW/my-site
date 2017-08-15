<template lang="html">
  <ul class="narrow-nav-list">
    <li class="pitts-logo" ><img :src="siteLogo" alt="site logo named Tuco"></li>
    <li class="toggle-button"><img :src="toggleButton" alt="button for toggle menu" @click="alertMsg"></li>
  </ul>
</template>

<script>
export default {
  name: 'narrowNavList',
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
  }
}
</script>

<style lang="scss" scoped>
.narrow-nav-list {
  margin: 0 auto;
  width: 93%;
  padding: 0 22px 0 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    display: none;
  }
  .pitts-logo {
    display: inline-block;
  }
  .toggle-button {
    height: 50px;
    width: 50px;
    display: inline-block;
  }
}
</style>
