<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      radio: '1',
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill:currentColor;
  overflow: hidden;
}
</style>
