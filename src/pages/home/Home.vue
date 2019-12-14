<template>
  <div>
    <home-header></home-header>
    <home-swipe></home-swipe>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwipe from './components/Swiper.vue'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipe
  }
}
</script>

<style>
</style>
