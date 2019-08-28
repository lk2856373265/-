<template>
  <div id="app">
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
</style>
