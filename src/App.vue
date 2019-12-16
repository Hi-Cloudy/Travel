<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
   <keep-alive exclude="Detail"><!-- 加载后从内存获取 -->
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
