<template>
  <ul>
    <li v-for="item in data">
      <a v-if="!item.path && !item.href">{{item.name}}</a>
      <a v-if="item.href" :href="item.href" target="_blank">{{item.name}}</a>
      <router-link v-if="item.path" active-class="active" :to="base + item.path" exact v-text="item.title || item.name">
      </router-link>
      <ul v-if="item.children">
        <li v-for="navItem in item.children">
          <router-link active-class="active" :to="base + navItem.path" exact v-text="navItem.title || navItem.name">
          </router-link>
        </li>
      </ul>
      <template v-if="item.groups">
        <div v-for="group in item.groups">
          <div>{{group.groupName}}</div>
          <ul>
            <li v-for="navItem in group.list" v-if="!navItem.disabled">
              <router-link active-class="active" :to="base + navItem.path" exact v-text="navItem.title"></router-link>
            </li>
          </ul>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
    base: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" type="text/less">

</style>
