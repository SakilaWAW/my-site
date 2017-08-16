<template lang="html">
  <div class="narrow-nav-bar">
    <ul class="narrow-nav-list">
      <li class="pitts-logo" ><img :src="siteLogo" alt="site logo named Tuco"></li>
      <li class="toggle-button" tabindex="1"><img :src="toggleButton" alt="button for toggle menu" @click="toggleHiddenBar"></li>
    </ul>
    <transition name="toggle">
      <hidden-nav-bar v-show="notCollapsed"></hidden-nav-bar>
    </transition>
  </div>
</template>

<script>
import hiddenNavBar from './narrownavbar/hiddenNavBar.vue'

export default {
  name: 'narrowNavBar',
  data() {
    return {
      notCollapsed: true,
      siteLogo: require('../../assets/site-logo.png'),
      toggleButton: require('../../assets/hamburg-menu.svg')
    }
  },
  methods: {
    toggleHiddenBar: function(event) {
      this.notCollapsed = !this.notCollapsed;
    }
  },
  components: {
    hiddenNavBar
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/globalVariables";

.toggle-enter-active, .toggle-leave-active {
  transition-property: max-height;
  transition-duration: .35s;
  transition-timing-function: ease-in-out;
}

.toggle-enter, .toggle-leave-to {
  max-height: 0;
}

.toggle-enter-to, .toggle-leave {
  max-height: 800px;
}

.narrow-nav-bar {
  @media screen and (min-width: 768px){
    display: none;
  }
  .narrow-nav-list {
    margin: 0 auto;
    width: 93%;
    padding: 0 22px 0 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pitts-logo {
      display: inline-block;
    }
    .toggle-button {
      height: 50px;
      width: 50px;
      display: inline-block;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        border: 1px solid red inset;
      }
    }
  }
}
</style>
