<template lang="html">
  <div class="wide-nav-bar">
    <img class="site-logo" :src="img" alt="site logo named Tuco">
    <ul class="nav-list">
      <li v-for="type in contentTypeList" class="nav-item" @click="jumpTo(type.jumpURL)">{{ type.text }}</li>
    </ul>
  </div>
</template>

<script>
const sl = require('../../assets/site-logo.png');

export default {
  name: 'wideNavList',
  data () {
    return {
      contentTypeList: [
        { text: '关于我', jumpURL: 'about-me' },
        { text: 'Java', jumpURL: 'java' },
        { text: 'Python', jumpURL: 'python' },
        { text: 'Javascript', jumpURL: 'javascript' },
        { text: 'Algorithm', jumpURL: 'algorithm' }
      ],
      img: sl
    };
  },
  methods: {
    jumpTo (targetURL) {
      this.$router.push(targetURL);
    }
  }
};
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
    display: flex;
    align-items: baseline;
    flex: 5;
    list-style-type: none;
    .nav-item {
      display: inline;
      text-align: center;
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
  },
  .site-logo {
    flex: 1;
  }
}
</style>
