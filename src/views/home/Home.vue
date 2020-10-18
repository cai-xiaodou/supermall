<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control ref="tabControl1"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"
                      @recommendImageLoad="recommendImageLoad"
                      ref="recommend"/>
      <feature-view/>
      <tab-control ref="tabControl2"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import {banners,recommends,getGoodsList} from "./data";
  import {debounce} from "common/utils";

  //import {getHomeMultidata} from "network/home";


  export default {
    name: "Home",
    data() {
      return {
        banners: banners,
        recommends: recommends,
        goods: {
          "pop": {page: 0,list: []},
          "news": {page: 0,list: []},
          "sell": {page: 0,list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    components: {
      Scroll,
      HomeSwiper,
      NavBar,
      BackTop,
      GoodsList,
      RecommendView,
      FeatureView,
      TabControl
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // getHomeMultidata().then(res => {
      //   this.banners = res.banners;
      //   this.recommends = res.recommends;
      // })
      this.getHomeGoods("pop")
      this.getHomeGoods("news")
      this.getHomeGoods("sell")

    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh,500);
      this.$bus.$on('itemImageLoad',() => {
        refresh();
      })

    },
    activated() {
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
    },
    methods: {
      /**'
       * 网络请求相关方法
       */
      getHomeGoods(type){
        setTimeout(() => {
          const page = this.goods[type].page + 1;
          const list = getGoodsList(type,page);
          this.goods[type].list.push(...list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullingUp();
        },1000)

      },

      /**
       * 事件监听相关方法
       */

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType = "news"
            break
          case 2:
            this.currentType = "sell"
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        // 1. 判断backTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 2. 决定tabControl是否吸顶（position: fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.tabOffsetTop + this.$refs.tabControl2.$el.offsetTop;
      },
      recommendImageLoad(){
        this.tabOffsetTop = this.tabOffsetTop + this.$refs.recommend.$el.offsetTop;
      }
    }
  }
</script>

<style scoped>
  #home {
   /* padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    /*position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;*/
  }
  .tab-control {
    position: relative;
    z-index: 9;
    font-size: 15px;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
</style>
