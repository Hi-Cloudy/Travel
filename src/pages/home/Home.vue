<template>
  <div>
    <home-header></home-header>
    <home-swipe></home-swipe>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwipe from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>
</style>
