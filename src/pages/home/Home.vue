<template>
  <div>
    <home-header :city='city'></home-header>
    <home-swipe :list='swiperList'></home-swipe>
    <home-icons :list='iconlist'></home-icons>
    <home-recommend :list='recommendList'></home-recommend>
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwipe from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '上海',
      swiperList: [],
      iconlist: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (xhr) {
      // console.log(xhr)
      xhr = xhr.data
      if (xhr.code && xhr.data) {
        // this.city = xhr.data.hotCities[0].name
        this.swiperList = xhr.data.swiperList
        this.iconlist = xhr.data.iconList
        this.recommendList = xhr.data.recommendList
        this.weekendList = xhr.data.weekendList
        console.log(xhr.data.iconList)
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
