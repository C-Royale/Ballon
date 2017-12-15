<template>
  <div>
    <div>
      <img src="../../assets/logo.png">
      <p>一款轻量级、模块化的前端 UI 组件库</p>
    </div>
    <div>
      <div>
        <router-link :to="`/${ lang }/component`">组件</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: document.documentElement.clientHeight
    }
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1] || 'zh-CN'
    }
  }
}
</script>
<style type="text/less" lang="less">

</style>
