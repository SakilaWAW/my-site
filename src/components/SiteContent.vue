<template lang="html">
  <div id="site-content">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'site-content',
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
