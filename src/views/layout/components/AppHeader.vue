<template>
  <div>
    <van-nav-bar title="资源中心" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
  </div>
</template>
<script>
import { getResources } from '@/api/resources'
export default {
  name: 'AppHeader',
  data () {
    return {
      value1: 0,
      value2: 'a',
      value3: 'd',
      value4: 'g',
      option1: [
        { text: '同步课程', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '科目', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ],
      option3: [
        { text: '年级', value: 'd' },
        { text: '好评排序', value: 'e' },
        { text: '销量排序', value: 'f' }
      ],
      option4: [
        { text: '版本', value: 'g' },
        { text: '好评排序', value: 'h' },
        { text: '销量排序', value: 'i' }
      ]
    }
  },
  methods: {
    async getResources () {
      const data = await getClass()
      console.log(data)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
