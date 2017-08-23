<template lang="html">
  <div class="wide-nav-bar">
    <img class="tg-ac-tuco" :src="img" alt="site logo named Tuco">
    <ul v-for="type in contentTypeList" class="nav-list">
      <li class="nav-item" @click="jumpTo(type.jumpURL)">{{ type.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wideNavList',
  data() {
    return {
      contentTypeList: [
        {text:'关于我', jumpURL: 'about-me'},
        {text:'Java', jumpURL: 'java'},
        {text:'Python', jumpURL: 'python'},
        {text:'Javascript', jumpURL: 'javascript'},
        {text:'Algorithm', jumpURL: 'algorithm'}
      ],
      img: require('../../assets/site-logo.png')
    }
  },
  methods: {
    jumpTo(targetURL){
      this.$router.push(targetURL);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/globalVariables.scss";

.wide-nav-bar {
  margin: 0 auto;
  padding: 0 22px 0 0;
  width: 750px;
  display: flex;
  align-items: center;
  .nav-list{
    list-style-type: none;
    flex: 5;
    display: flex;
    text-align: center;
    .nav-item {
      flex: 1;
      box-sizing: border-box;
      font-weight: bold;
      font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", Heiti, "黑体", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;
      color: $title-text;
      &:hover {
        color: $title-text-hover;
        cursor: pointer;
      }
    }
  }
  .tg-ac-tuco {
    flex: 1;
  }
}
</style>
