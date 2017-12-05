<template>
  <div>
    <div>
      <img src="../assets/logo.png">
      <p>一款轻量级、模块化的前端 UI 组件库</p>
    </div>
    <div>
      <div>
        <router-link :to="{name: 'guide'}">开始使用</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/less" lang="less">
</style>
