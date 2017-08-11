<template lang="html">
  <ul class="narrow-nav-list">
    <li class="normal-item tg-ac-tuco" ><img :src="img" alt="site logo named Tuco"></li>
  </ul>
</template>

<script>
export default {
  name: 'narrowNavList',
  data() {
    return {
      img: require('../../assets/site-logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.narrow-nav-list {
  list-style-type: none;
  @media screen and (min-width: 768px){
    display: none;
  }
}
</style>
