<template lang="html">
  <div id="footbar">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'footbar',
  data() {
    return {
      content: 'This is footbar area!'
    };
  }
}
</script>

<style lang="scss">
#footbar {
  border: 2px solid green;
}
</style>
