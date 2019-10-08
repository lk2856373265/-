<template>
  <div>
    <van-nav-bar title="修改密码" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-cell-group>
  <van-field
    clearable
    label="旧密码"
    placeholder="请输入旧密码"
    @click-right-icon="$toast('question')"
  />
  <van-field
    type="password"
    label="新密码"
    placeholder="请输入新密码"
  />
  <van-field
    type="password"
    label="确定密码"
    placeholder="请再次输入新密码"
  />
</van-cell-group>
<div class="btn">
  <van-button plain round type="info" class="pbtn">确定修改</van-button>
</div>
  </div>
</template>

<script>
export default {
  name: 'change',
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
