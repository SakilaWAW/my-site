<template lang="html">
  <div class="wide-nav-bar">
    <ul class="nav-list">
      <li class="nav-item tg-ac-tuco" ><img :src="img" alt="site logo named Tuco"></li>
      <li class="nav-item tg-ac-aboutme">关于我</li>
      <li class="nav-item tg-ac-java">Java</li>
      <li class="nav-item tg-ac-python">Python</li>
      <li class="nav-item tg-ac-js">Javascript</li>
      <li class="nav-item tg-ac-algorithm">Algorithm</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wideNavList',
  data() {
    return {
      msg: 'WOW!',
      img: require('../../assets/site-logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/globalVariables.scss";

.wide-nav-bar {
  .nav-list{
    margin: 0 auto;
    padding: 0 22px 0 0;
    width: 750px;
    display: flex;
    list-style-type: none;
    align-items: center;
    @media screen and (max-width: 767px){
      display: none;
    }
    .nav-item {
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
    .tg-ac-tuco {
      flex: 1.5;
    }
  }
}
</style>
