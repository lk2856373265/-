<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
    />
    <br>
     <van-tabs v-model="activeName" title-active-color="#1c65f8" line-height="0" :border= false >
        <van-tab title="用户登录"  name="a" >
              <br>
              <div class="input">
                <form>
                   <van-cell-group>
                    <van-field
                      class="iconfont my-icon-shouji2"
                      clearabl
                      placeholder="请输入手机号"
                      input-align="left"
                      style="letter-spacing: 15px"
                      v-model="user.login_name"
                      v-validate="'required'"
                      name="mobile"
                      :error-message="errors.first('mobile')"
                    />
                    <van-field
                      type="password"
                      placeholder="请输入密码"
                      class="iconfont mine my-icon-mima2"
                      input-align="left"
                      style="letter-spacing: 15px"
                      v-model="user.password"
                      v-validate="'required'"
                      name="password"
                      :error-message="errors.first('password')"
                    />
                </van-cell-group>
              </form>
                <input type="checkbox" class="remberpassward" >
                <span class="rember" >记住密码</span>
                <span><a href="#" class="forgetpassword">忘记密码？</a></span>
              </div>
                  <div class="login-btn">
                    <van-button
                    type="info"
                    class="btn"
                    @click.prevent="handleLogin"
                    :loading="loginLoading"
                    >登录</van-button>
                  </div>
            </van-tab>
      <div>
        <van-tab title="学习卡登录" name="c">
          <br>
          <div class="input">
          <van-cell-group>
              <van-field
                class="iconfont iconziyuan1"
                clearabl
                placeholder="请输入学习卡号"
                input-align="left"
                style="letter-spacing: 15px"
              />
              <van-field
                type="password"
                placeholder="请输入学习卡密码"
                class="iconfont my-icon-mima2"
                input-align="left"
                style="letter-spacing: 15px"
              />
          </van-cell-group>
          </div>
          <div class="login-btn">
              <van-button
               type="info"
               class="btn"
               >登录</van-button>
          </div>
        </van-tab>
      </div>
      <div class="other">
        <van-divider dashed :style="{ padding: '0 20px' }">其它方式</van-divider>
      </div>
      <a class="b" href="javascript"><i class="iconfont icon my-icon-weixin1"></i></a>
      <a class="a" href="javascript"><i class="iconfont icon my-icon-QQ"></i></a>
      <span class="none" >还没有账号？点击<a href="javascript:void(0);" style="color:#1c65f8 ">立即注册</a>哦~</span>
    </van-tabs>
    <van-icon class="iconfont" class-prefix='icon' name='iconlock-o' />
  </div>
</template>
<script>
import { login } from '@/api/user'
// import axios from 'axios'
export default {
  name: 'LoginIndex',
  data () {
    return {
      activeName: 'a',
      // radio: '',
      user: {
        login_name: '',
        password: ''
      },
      loginLoading: false // 控制登录请求的loading状态
    }
  },
  created () {
    this.configCustomMessages()
  },
  methods: {
    // async handleLogin () {
    //   const res = await axios({
    //     method: 'POST',
    //     url: 'http://api.rujiaowang.net/api/all/login',
    //     data: "login_name=13568683001&password=123456"
    //   })
    //   console.log(res)
    // },
    async handleLogin () {
      this.loginLoading = true
      try {
        const valid = await this.$validator.validate()
        // 如果表单验证失败，则什么都不做
        if (!valid) {
          // 验证失败，代码不会往后执行，所以这里也要取消loading
          this.loginLoading = false
          return
        }
        // 表单验证通过，提交表单
        const data = await login(this.user)
        // this.$store.commit('setUser', data)
        console.log(data)
        // 登录成功，跳转到首页
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        console.log(err)
        console.log('登录失败')
      }
      this.loginLoading = false
    },
    configCustomMessages () {
      const dict = {
        custom: {
          mobile: {
            required: '请输入手机号'
          },
          password: {
            required: () => '请输入密码'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
    }
  }
}
</script>
<style lang="less" scoped >
.input {
  padding-left: 40px;
  padding-right: 40px
}
.login-btn {
  padding: 40px 50px 0 50px;
  .btn {
    width: 100%;
    border-radius: 20px;
    background-image: linear-gradient(-90deg, #286efd 0%, #3abcff 100%), linear-gradient(-90deg, #436ffd 0%, #4f95ff 100%), linear-gradient(#3d81e9, #3d81e9);
  }
}
.remberpassward {
    width: 14px;
    height: 14px;
    cursor: pointer;
    margin-right: 5px;
    display: inline-block;
    border: 1px solid #bdbdbd;
    margin-top: 15px;
  }
.forgetpassword {
  margin-top: 15px;
  float: right;
  color: #1c65f8;
  font-size: 15px
}
.other {
  margin-top: 40px
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
.rember {
  font-size: 15px
  }
.none {
  display:inline-block ;
  padding:45px ;
  font-size:20px
}
.van-field__error-message {
  letter-spacing: 0px
}
@media screen and(min-width: 680px) {
 .rember {
    font-size: 15px
  }
 .none {
   display:inline-block ;
   padding:45px ;
   font-size:20px
  }
 }
</style>
