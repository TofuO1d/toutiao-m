<template>
    <div class="home-container">
        <!-- 导航栏 -->
        <van-nav-bar class="page-nav-bar" fixed>
          <van-button
          class="search-btn"
          slot="title"
          type="info"
          size="small"
          round
          icon="search"
          >搜索</van-button>
        </van-nav-bar>
        <!-- 导航栏 -->
        <!-- 频道列表 -->
        <van-tabs class="channel-tabs" v-model="active" animated swipeable>
          <van-tab
          :title="channel.name"
          v-for="channel in channels"
          :key="channel.id"
          >
            <!-- 文章列表 -->
            <article-list :channel="channel"/>
            <!-- 文章列表 -->
          </van-tab>
          <div slot="nav-right" class="placeholder"></div>
          <div slot="nav-right" class="hamburger-btn">
            <i class="toutiao toutiao--gengduo"></i>
          </div>
        </van-tabs>
        <!-- 频道列表 -->
    </div>
  </template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 0,
      channels: []// 频道列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
      } catch (error) {
        this.$toast('获取频道数据失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  padding-top: 174px;
  padding-bottom: 100px;
  .search-btn{
    width: 555px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
  }
  .van-icon{
    color: #fff;
    font-size: 32px;
  }
  /deep/ .channel-tabs {
    .van-tabs__wrap{
      position: fixed;
      top: 92px;
      z-index: 1;
      left: 0;
      right: 0;
      height: 82px;
    }
    .van-tab {
      min-width: 200px;
      border-right: 1px solid #edeff3;
      font-size: 30px;
      color: #7777;
    }
    .van-tab--active{
      color: #333;
    }
    .van-tabs__nav{
      padding-bottom: 0px;
    }
    .van-tabs__line{
      bottom: 8px                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ;
      width: 31px !important;//!important权重提起
      height: 6px;
      background-color: #3296fa;
    }
    .hamburger-btn{
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.902;
      i.toutiao {
        font-size: 33px;
      }
      &:before{
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
    .placeholder{
      flex-shrink: 0;//不参与flex剩余空间的计算
      width: 66px;
      height: 82px;
    }
  }
}
</style>
