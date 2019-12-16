<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
   <keep-alive><!-- 加载后从内存将在 -->
     <router-view/>
   </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
