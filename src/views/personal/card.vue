<template>
  <div>
    <van-nav-bar title="学习卡充值" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-cell-group>
  <van-field
    clearable
    label="学习卡号"
    placeholder="请输入学习卡号"
    @click-right-icon="$toast('question')"
  />
  <van-field
    type="password"
    label="学习卡密码"
    placeholder="请输入学习卡密码"
  />
  <van-field
    type="password"
    label="验证码"
    placeholder="请输入验证码"
  />
</van-cell-group>
<div class="btn">
  <van-button plain round type="info" class="pbtn">确认充值</van-button>
</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="less" scoped>
.btn {
   margin: 30px 50px 0 100px;
   .pbtn {
      width: 70%;
      border-radius: 20px;
   }
}
</style>
