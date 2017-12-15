<template>
  <div id="app">
    <div class="container">
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1] || 'zh-CN'
    }
  },
  methods: {
    localize () {
      // TODO
      // When the corresponding language switch is triggered
    }
  },
  mounted () {
    this.localize()
  },
  watch: {
    lang () {
      this.localize()
    }
  }
}
</script>

<style lang="less" type="text/less">
@import "../packages/theme-default/index.less";
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(~"100% - 215px");
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>
