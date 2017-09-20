<template lang="html">
  <div class="foot-bar">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'footbar',
  data () {
    return {
      content: 'Pitts wang copyright 2017'
    };
  }
};
</script>

<style lang="scss">
.foot-bar {
  box-sizing: border-box;
  border-top: 2px solid pink;
  width: 94%;
  margin: 0 3%;
  text-align: center;
}
</style>
