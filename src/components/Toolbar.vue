<template lang="html">
  <nav class="nav-bar">
    <mobile-item-list></mobile-item-list>
    <normal-item-list></normal-item-list>
  </nav>
</template>

<script>
import normalItemList from './toolbar/normalItemList.vue'
import mobileItemList from './toolbar/mobileItemList.vue'

export default {
  name: 'toolbar',
  components: {
    normalItemList,
    mobileItemList
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: whiteSmoke;
  padding: 15px 0;

}
/**
 * 不用flexbox的写法
 */
/**
  background: whiteSmoke;
  padding: 15px 0;
  .tg-ac-header {
    @media screen and (min-width: 768px){
      display: none;
    }
  }
  .tg-ac-list{
    margin: 0 -10px;
    padding: 0 22px;
    width: 90%;
    @media screen and (max-width: 767px) {
      display: none;
    }
    .tg-ac-item {
      box-sizing: border-box;
      vertical-align: middle;
      margin: 0 2.96%;
      color: $light-pink;
      display: inline-block;
      font-weight: bold;
      font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", Heiti, "黑体", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", sans-serif;
      &:hover {
        color: midnightBlue;
        cursor: pointer;
      }
    }
  }
}
**/
</style>
