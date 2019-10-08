<template>
<div>
  <van-row type="flex" justify="space-between">
  <van-col span="6"><img class="logo" src="../../assets/logo.png" alt=""></van-col>
  <van-col span="12"><van-search shape="round" placeholder="请输入搜索关键词" /></van-col>
  <van-col span="6"><van-button @click.prevent="handleLogin" class="btn" color="#dde8fe" size="small" type="default"> <a class="login" href="">登录</a> </van-button></van-col>
</van-row>
<!-- 轮播图 -->
<div class="png">
<van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../../assets/top_banner1.png" ></van-swipe-item>
  <van-swipe-item><img src="../../assets/top_banner2.png" ></van-swipe-item>
  <van-swipe-item><img src="../../assets/top_banner3.png" ></van-swipe-item>
  <van-swipe-item><img src="../../assets/top_banner4.png" ></van-swipe-item>
</van-swipe>
</div>
<!-- /轮播图 -->
  <!-- 通知栏 -->
    <van-notice-bar
      text="哪一个瞬间让你不想当老师了？（读完泪目）哪一个瞬间让你不想当老师了？（读完泪目）"
      left-icon="volume-o"
    />
    <!--/通知栏-->
    <!-- 资源中心 -->
       <van-row type="flex" justify="end">
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconjingpinweike"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconzixun"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconziyuanzhongxin"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconshuangshiketang"></use>
              </svg>
            </van-col>
          </van-row>
          <div class="two">
              <van-row type="flex" justify="end">
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconzujuanxitong"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconyingjianchanpin"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconruanjianchanpin"></use>
              </svg>
            </van-col>
            <van-col span="6" style="font-size: 40px">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontoutiao"></use>
              </svg>
            </van-col>
          </van-row>
          </div>
      <!-- 资源中心 -->
      <!-- 特色课程 -->
      <span class="class"> 特色课程</span>
     <van-grid :gutter="2" :column-num="2" :border="false">
        <van-grid-item
          v-for="(image, index) in imageList"
          :key="index"
          icon="photo-o"
          text="文字"
          :borde= false
        >
        <img :src="image" style="width: 110%">
        </van-grid-item>
      </van-grid>
      <!-- 特色课程 -->
      <!-- 推荐阅读 -->
      <span class="class"> 推荐阅读 </span>
      <van-cell :title="listdiv.cs_name" />
      <!-- /推荐阅读 -->
      <!-- 精品微课 -->
      <span class="top-quality"><img src="../../assets/精品微课.png" alt=""></span>
      <span class="small">精品微课</span>
       <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell
            v-for="item in listdiv"
            :key="item.cs_name"
            :title="item.cs_name"
            :src="listdiv.cs_picture"
          />
        </van-list>
        <div>
          <!-- {{ data }} -->
        </div>
      <!-- /精品微课 -->
      <!-- 双师在线 -->
      <span class="top-quality"><img src="../../assets/双师在线.png" alt=""></span>
      <span class="small">双师在线</span>
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
            <!-- 主讲老师：李明兰 -->
            <div class="coupon">惠学节特惠 8.5折</div>
          </div>
          </van-col>
        <van-col span="6"><van-button type="primary" size="small">立即报名</van-button></van-col>
      </van-row>
       <van-row type="flex" justify="space-around">
        <van-col span="6"><img src="@/assets/test.png" class="test"> </van-col>
        <van-col span="8">
          <div>
            <span class="study">2019高考一模数学...</span>
            <!-- <span>主讲老师：李明兰</span> -->
            <div class="coupon">惠学节特惠 8.5折</div>
          </div>
          </van-col>
        <van-col span="6"><van-button type="primary" size="small">立即报名</van-button></van-col>
      </van-row>
      <!-- /双师在线 -->
      <!-- 优质资源 -->
      <span class="top-quality"><img src="../../assets/优质资源.png" alt=""></span>
      <span class="small">优质资源</span>
      <van-cell title="初一数学下册重难点解析总结..." is-link value="2019-05-20" />
      <van-cell title="初一数学下册重难点解析总结..." is-link value="2019-05-20" />
      <van-cell title="初一数学下册重难点解析总结..." is-link value="2019-05-20" />
      <van-cell title="初一数学下册重难点解析总结..." is-link value="2019-05-20" />
      <!-- /优质资源 -->
      <span class="top-quality"><img src="../../assets/智慧应用.png" alt=""></span>
      <span class="small">智慧应用</span>
      <div class="png">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="../../assets/图1.jpg" ></van-swipe-item>
          <van-swipe-item><img src="../../assets/图2.jpg" ></van-swipe-item>
          <van-swipe-item><img src="../../assets/图3.jpg" ></van-swipe-item>
          <van-swipe-item><img src="../../assets/图4.jpg" ></van-swipe-item>
          <van-swipe-item><img src="../../assets/图5.jpg" ></van-swipe-item>
        </van-swipe>
      </div>
      <div class="footer_bottom">
          <p>2017 rujiaowang.net 鲁ICP备17028823号-2</p>
          <p>2016-2018版权所有 @ 山东大课堂信息技术有限公司</p>
      </div>
</div>
</template>

<script>
import { getClass } from '@/api/class'
export default {
  name: 'HomeIndex',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      imageList: [
        require('../../assets/special-one.png'),
        require('../../assets/special-two.png'),
        require('../../assets/special-three.png'),
        require('../../assets/special-four.png')
      ],
      listdiv: []
    }
  },
  created () {

  },
  methods: {
    // handleLogin () {
    //   this.$router.push({
    //     name: 'login'
    //   })
    // },
    async onLoad () {
      console.log('onload')
      const data = await this.loadClass()
      this.listdiv = data.result
      console.log(this.listdiv)
      // 异步更新数据/
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    async loadClass () {
      const data = await getClass({
        subjectId: '2',
        page: '1',
        pageNum: '30',
        courseType: 'normal',
        type: '',
        PressId: '',
        keywords: '',
        isRecommend: ''
      })
      return data
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  border-radius: 18px;
  margin-top: 10px;
  margin-left: 15px
}
.images {
  img {
    width: 300px
  }
}
.head {
  width: 100%
}
.logo {
  width:100%;
  margin-top: 15px
}
.login {
  color:#1c65f8
}
.class {
  display: inline-block;
  font-size: 15px;
  margin-left: 10px;
  background: #feda33;
  color: #4c4c4c;
  border-radius: 10px;
  padding: 5px 10px
}
.more {
  margin-left: 160px;
  font-size: 15px;
  color: #bfc0c0
}
.png {
  img {
    width: 100%;
  }
}
.top-quality {
  img {
    width: 30px;
    margin: 10px 0 0 10px;
    padding-top: 10px
  }
}
.small {
  display: inline-block;
  font-size: 25px;
  padding-left: 10px;
  margin-bottom: 20px
}
.test {
  width: 100%;
  border-radius: 10px;
  margin-left: 10px
}
.study {
  display: inline-block;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-left: 23px
}
.coupon {
  padding-top:10px;
  font-size: 12px;
  color: red
}
.two {
  // margin-left: 30px;
  margin-top: 10px
}
.footer_bottom {
  height: 68px;
  margin: 0 auto;
  color: #92959c;
  font-size: 12px;
  text-align: center;
  padding-bottom: 50px
  }
</style>
