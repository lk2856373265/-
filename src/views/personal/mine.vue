<template>
  <div>
    <van-nav-bar
      title="个人资料"
      left-text="返回"
      left-arrow
    />
     <van-cell-group>
      <van-cell title="头像" is-link>
        <van-image
          round
          width="30"
          height="30"
          src=""
        />
      </van-cell>
      <van-cell title="昵称" is-link />
      <van-cell title="姓名" is-link />
      <van-cell title="性别" is-link />
      <van-cell title="手机号" is-link />
      <van-cell title="生日" is-link />
      <van-cell title="地区" is-link />
    </van-cell-group>
    </div>
</template>
<script>
export default {
  name: 'mine',
  data () {
    return {}
  },
  components: {}
}
</script>

<style>
</style>
