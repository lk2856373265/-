<template>
  <div>
    <van-nav-bar title="我的订单" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active" line-width="15px" animated>
      <van-tab title="微课">
        <van-tabs type="card">
          <van-tab title="未付款">
            <van-panel title="购买课程 《小学语文 人教版三年级..." desc="订单号：200589341253997  2018-08-23 16:24:04" status="未付款">
              <!-- <div>内容</div> -->
              <div slot="footer" class="button">
                 <span> 实付：￥240.00R点 </span>
                 <van-button size="small" type="danger" round>去付款</van-button>
              </div>
            </van-panel>
            <van-panel title="购买课程 《小学语文 人教版三年级..." desc="订单号：200589341253997  2018-08-23 16:24:04" status="未付款">
              <!-- <div>内容</div> -->
              <div slot="footer" class="button">
                 <span> 实付：￥240.00R点 </span>
                 <van-button size="small" type="danger" round>去付款</van-button>
              </div>
            </van-panel>
            <van-panel title="购买课程 《小学语文 人教版三年级..." desc="订单号：200589341253997  2018-08-23 16:24:04" status="未付款">
              <!-- <div>内容</div> -->
              <div slot="footer" class="button">
                 <span> 实付：￥240.00R点 </span>
                 <van-button size="small" type="danger" round>去付款</van-button>
              </div>
            </van-panel>
          </van-tab>
          <van-tab title="已付款">内容 2</van-tab>
        </van-tabs>
      </van-tab>
      <van-tab title="资源">内容 2</van-tab>
      <van-tab title="双师课堂">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="less" scoped>
.buy {
  font-size: 20px
}
.button {
  padding-left: 140px;
  span {
    font-size: 15px
  }
}
</style>
