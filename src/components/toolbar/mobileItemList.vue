<template lang="html">
  <ul class="mobile-item-list">
    <li class="normal-item tg-ac-tuco" ><img :src="img" alt="site logo named Tuco"></li>
  </ul>
</template>

<script>
export default {
  name: 'mobileItemList',
  data() {
    return {
      img: require('../../assets/site-logo.png')
    }
  }
}
</script>

<style lang="scss">
.mobile-item-list {
  list-style-type: none;
  @media screen and (min-width: 768px){
    display: none;
  }
}
</style>
