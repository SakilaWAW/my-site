<template lang="html">
  <ul class="normal-item-list">
    <li class="normal-item tg-ac-tuco" ><img :src="img" alt="site logo named Tuco"></li>
    <li class="normal-item tg-ac-aboutme">关于我</li>
    <li class="normal-item tg-ac-java">Java</li>
    <li class="normal-item tg-ac-python">Python</li>
    <li class="normal-item tg-ac-js">Javascript</li>
    <li class="normal-item tg-ac-algorithm">Algorithm</li>
  </ul>
</template>

<script>
export default {
  name: 'normalItemList',
  data() {
    return {
      msg: 'WOW!',
      img: require('../../assets/site-logo.png')
    }
  }
}
</script>

<style lang="scss">
$light-pink: #e2627d;

.normal-item-list{
  margin: 0 auto;
  padding: 0 22px 0 0;
  width: 750px;
  display: flex;
  list-style-type: none;
  align-items: center;
  @media screen and (max-width: 767px){
    display: none;
  }
  .normal-item {
    text-align: center;
    flex: 1;
    box-sizing: border-box;
    font-weight: bold;
    font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", Heiti, "黑体", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;
    color: $light-pink;
    &:hover {
      color: midnightBlue;
      cursor: pointer;
    }
  }
  .tg-ac-tuco {
    flex: 1.5;
  }
}
</style>
