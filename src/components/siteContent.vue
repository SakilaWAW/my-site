<template lang="html">
  <div class="site-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'siteContent'
}
</script>

<style lang="scss">
.site-content {
  box-sizing: border-box;
  border: 2px solid red;
}
</style>
