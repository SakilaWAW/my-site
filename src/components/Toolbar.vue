<template lang="html">
  <nav class="nav-bar">
    <ul class="tg-ac-header">
      <li>this is header</li>
    </ul>
    <ul class="tg-ac-list">
      <li class="tg-ac-item tg-ac-tuco" ><img :src="img" alt="site logo named Tuco"></li>
      <li class="tg-ac-item tg-ac-aboutme">关于我</li>
      <li class="tg-ac-item tg-ac-java">Java</li>
      <li class="tg-ac-item tg-ac-python">Python</li>
      <li class="tg-ac-item tg-ac-js">Javascript</li>
      <li class="tg-ac-item tg-ac-algorithm">Algorithm</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'toolbar',
  data() {
    return{
      msg: 'WOW!',
      img: require('../assets/site-logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
$light-pink: #e2627d;

.nav-bar {
  background: whiteSmoke;
  padding: 15px 0;
  .tg-ac-header {
    @media screen and (min-width: 768px){
      display: none;
    }
  }
  .tg-ac-list{
    margin: 0 auto;
    padding: 0 22px 0 0;
    width: 750px;
    display: flex;
    list-style-type: none;
    align-items: center;
    @media screen and (max-width: 767px){
      display: none;
    }
  }
  .tg-ac-item {
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
