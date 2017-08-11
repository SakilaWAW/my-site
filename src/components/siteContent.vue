<template lang="html">
  <div id="site-content">
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
#site-content {
  border: 2px solid red;
}
</style>
