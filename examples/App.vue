<template>
  <div id="app">
    <div class="container">
      <sideNav class="nav" v-if="!isIndex"></sideNav>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import sideNav from './components/side-nav'

export default {
  name: 'app',
  components: {
    sideNav
  },
  computed: {
    isIndex () {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="less" type="text/less">
  // @import "./assets/less/index";
  .container{
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
    .nav{
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }
  .container:after{
    content:"";
    clear: both;
    display: block;
  }
</style>
