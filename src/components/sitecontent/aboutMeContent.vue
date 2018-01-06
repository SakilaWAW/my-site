<template lang="html">
  <div class="about-me-content">
    <div class="article-zone">
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
    name: 'aboutMeContent',
};
</script>

<style lang="scss">
  .article-zone {
    border: 2px solid purple;
    margin: auto;
    @media screen and (min-width: 900px) {
      width: 900px;
    }
    @media screen and (max-width: 899px) {
      width: 100%;
    }
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .box-card {
    width: 480px;
  }
</style>
