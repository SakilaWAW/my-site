<template lang="html">
  <div class="hidden-nav-bar">
    <ul class="hidden-nav-list">
      <li class="content-item" v-for="type in contentTypeList">{{ type }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hiddenNavBar',
  data() {
    return {
      contentTypeList: ['关于我','Java','Python','Javascript','Algorithm'],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../scss/globalVariables.scss";

.hidden-nav-bar {
  overflow: hidden;
  .hidden-nav-list {
    padding: 0 3%;
  }
  .content-item {
    padding-left: 1%;
    display: inline-block;
    line-height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: $title-text;
    width: 46%;
    margin: 1%;
    background: #EEE;
    list-style-type: none;
    @media screen and (max-width: 479px){
      width: 95%;
    }
    &:hover {
      background: #DDD;
      color: $title-text-hover;
      cursor: pointer;
    }
  }
}
</style>
