<template>
  <div>
    <home-header></home-header>
    <home-swipe></home-swipe>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwipe from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipe,
    HomeIcons
  }
}
</script>

<style>
</style>
