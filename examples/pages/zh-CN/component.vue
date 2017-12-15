<template>
  <div class="component-container">
    <side-nav :data="navsData[lang]" :base="`/${ lang }/component`"></side-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import navsData from '../../nav.config.json'
export default {
  data () {
    return {
      lang: this.$route.meta.lang,
      navsData
    }
  }
}
</script>

<style>
.component-container {
  display: flex;
}
</style>
