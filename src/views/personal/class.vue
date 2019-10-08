<template>
  <div>
    <van-nav-bar title="我的课程" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="未学完"></van-tab>
      <van-tab title="已学完"></van-tab>
    </van-tabs>
    <van-row type="flex" justify="space-around">
        <van-col span="6"><img src="@/assets/test.png" class="test"> </van-col>
        <van-col span="8">
          <div>
            <span class="study">小学语文北师大版智慧...</span>
            <!-- <span class="study">课程数  7节</span> -->
            <!-- <span>主讲老师：李明兰</span> -->
            <div class="coupon">惠学节特惠 8.5折</div>
            <!-- <span>惠学节特惠 8.5折速抢</span> -->
          </div>
          </van-col>
         <van-col span="6"><van-button type="primary" size="small">立即报名</van-button></van-col>
      </van-row>
        <van-row type="flex" justify="space-around">
        <van-col span="6"><img src="@/assets/test.png" class="test"> </van-col>
        <van-col span="8">
          <div>
            <span class="study">小学语文北师大版智慧...</span>
            <!-- <span class="study">课程数  7节</span> -->
            <!-- <span>主讲老师：李明兰</span> -->
            <div class="coupon">惠学节特惠 8.5折</div>
            <!-- <span>惠学节特惠 8.5折速抢</span> -->
          </div>
          </van-col>
         <van-col span="6"><van-button type="primary" size="small">立即报名</van-button></van-col>
      </van-row>
        <van-row type="flex" justify="space-around">
        <van-col span="6"><img src="@/assets/test.png" class="test"> </van-col>
        <van-col span="8">
          <div>
            <span class="study">小学语文北师大版智慧...</span>
            <!-- <span class="study">课程数  7节</span> -->
            <!-- <span>主讲老师：李明兰</span> -->
            <div class="coupon">惠学节特惠 8.5折</div>
            <!-- <span>惠学节特惠 8.5折速抢</span> -->
          </div>
          </van-col>
         <van-col span="6"><van-button type="primary" size="small">立即报名</van-button></van-col>
      </van-row>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      active: 2
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.study {
  display: inline-block;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.coupon {
  padding-top:10px;
  font-size: 12px;
  color: red
}
.test {
  width: 100%;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px
}
</style>
