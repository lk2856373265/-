<template>
<div>
  <router-view></router-view>
  <van-tabbar route>
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/class">微课</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/teacher">双师课堂</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/my">个人中心</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: 'TabbarLayout',
  data () {
    return {}
  },
  components: {}
}
</script>

<style>
</style>
