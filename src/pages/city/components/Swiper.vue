<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper  v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <a :href="item.imgUrl">
          <img class="swiper-img" :src="item.imgUrl" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array // 接收的数据类型
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        loop: true
      }
      // imgList: [{
      //   id: '01',
      //   imgUrl: 'https://picjumbo.com/wp-content/uploads/christmas-tree-decorations-with-lovely-bokeh-1080x720.jpg'
      // },
      // {
      //   id: '02',
      //   imgUrl: 'https://picjumbo.com/wp-content/uploads/woman-with-a-cup-of-tea-1080x720.jpg'
      // },
      // {
      //   id: '03',
      //   imgUrl: 'https://picjumbo.com/wp-content/uploads/free-stock-photo-1080x720.jpg'
      // },
      // {
      //   id: '04',
      //   imgUrl: 'https://picjumbo.com/wp-content/uploads/cute-puppy-christmas-1080x720.jpg'
      // },
      // {
      //   id: '05',
      //   imgUrl: 'https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_960_720.jpg'
      // }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped="scoped">
.wrapper{
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 37%;
  background-color: darkgrey;
}
  .swiper-img{
    width: 100%;
  }
</style>
