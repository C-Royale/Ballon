<template>
  <div>
    <slot name="source"></slot>
    <div class="meta" v-if="isExpanded">
      <div class="description">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div @click="isExpanded = !isExpanded">
      点击显示/隐藏
    </div>
  </div>
</template>

<style>

</style>

<script type="text/babel">
export default {
  data () {
    return {
      isExpanded: false
    }
  }
}
</script>
