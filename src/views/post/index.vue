<template>
  <div>
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
    />
    <div class="input">
      <van-cell-group>
        <van-field
          class="iconfont my-icon-shouji2"
          clearabl
          placeholder="请输入手机号"
          input-align="left"
          style="letter-spacing: 15px"
          @click-right-icon="$toast('用户名必须是手机号')"
          v-model="username"
        />
            <van-field
              type="password"
              placeholder="请输入验证码"
              class="iconfont my-icon-mima2"
              input-align="left"
              style="letter-spacing: 15px"
              clearable
            >
            <van-button slot="button" size="small" type="info" class="identify" @click="handleSendCode">获取验证码</van-button>
            </van-field>
        <van-field
          type="password"
          placeholder="请输昵称"
          input-align="left"
          class="iconfont iconziyuan1"
          style="letter-spacing: 15px"
        />
        <van-field
          type="password"
          placeholder="请输入密码"
          class="iconfont my-icon-mima2"
          input-align="left"
          style="letter-spacing: 15px"
        />
        <van-field
          type="password"
          placeholder="确认密码"
          class="iconfont my-icon-mima2"
          input-align="left"
          style="letter-spacing: 15px"
        />
    </van-cell-group>
    </div>
    <div class="login-btn">
        <van-button type="info" class="btn">注册</van-button>
    </div>
    <van-divider dashed :style="{ padding: '0 20px' }">其它方式</van-divider>
      <a class="b" href=""><i class="iconfont icon my-icon-weixin1"></i></a>
      <a class="a" href=""><i class="iconfont icon my-icon-QQ"></i></a>
  </div>
</template>

<script>
import axios from 'axios'
import '@/vendor/gt'
export default {
  name: 'PostIndex',
  data () {
    return {
      username: '17862066801',
      password: '',
      error: [],
      captchaObj: null
    }
  },
  methods: {
    handleSendCode () {
      const username = this.username
      if (this.captchaObj) {
        return this.captchaObj.verify()
      }
      axios({
        method: 'GET',
        url: `http://ttapi.research.itcast.cn/mp/v1_0/captchas/${username}`
      }).then(res => {
        const data = res.data.data
        initGeetest({
          // 以下配置参数来自服务端 SDK
          gt: data.gt,
          challenge: data.challenge,
          offline: !data.success,
          new_captcha: data.new_captcha,
          product: 'bind'
        }, (captchaObj) => {
          this.captchaObj = captchaObj
          // 这里可以调用验证实例 captchaObj 的实例方法
          // console.log(captchaObj)
          captchaObj.onReady(function () {
            captchaObj.verify() // 显示验证码
          }).onSuccess(function () {
            const {
              geetest_challenge: challenge,
              geetest_seccode: seccode,
              geetest_validate: validate } =
            captchaObj.getValidate()
            axios({
              method: 'GET',
              url: `http://ttapi.research.itcast.cn/mp/v1_0/sms/codes/${username}`,
              params: {
                challenge,
                seccode,
                validate
              }
            }).then(res => {
              console.log(res.data)
            })
          })
        })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.input {
  padding:40px 40px 0 40px;
}
.login-btn {
  padding: 40px 50px 0 50px;
  .btn {
    width: 100%;
    border-radius: 20px;
    background-image: linear-gradient(-90deg, #286efd 0%, #3abcff 100%), linear-gradient(-90deg, #436ffd 0%, #4f95ff 100%), linear-gradient(#3d81e9, #3d81e9);
  }
}
.a {
  color: #40ade4;
  display: inline-block;
  padding-left: 30px;
}
.b{
  color: #56b769;
  display: inline-block;
  padding-left: 120px;
}
.icon {
  font-size: 50px;
}
.identify {
  border-radius: 20px;
  background:#3d81e9
}
</style>
