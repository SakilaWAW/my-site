<template lang="html">
  <div class="site-content">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'siteContent',
  data() {
    return {
      content: 'this is site content area'
    }
  }
}
</script>

<style lang="scss">
.site-content {
  box-sizing: border-box;
  border: 2px solid red;
}
</style>
