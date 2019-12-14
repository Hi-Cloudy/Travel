<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide>
        <a href="https://picjumbo.com/wp-content/uploads/christmas-tree-decorations-with-lovely-bokeh-1080x720.jpg">
          <img class="swiper-img img-responsive" src="https://picjumbo.com/wp-content/uploads/christmas-tree-decorations-with-lovely-bokeh-1080x720.jpg" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="">
        <img class="swiper-img img-responsive" src="https://picjumbo.com/wp-content/uploads/blue-abstract-bokeh-lights_free_stock_photos_picjumbo_HNCK3418-1080x720.jpg" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_960_720.jpg">
          <img class="swiper-img img-responsive" src="https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_960_720.jpg" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://picjumbo.com/wp-content/uploads/cute-puppy-christmas-1080x720.jpg">
          <img class="swiper-img img-responsive" src="https://picjumbo.com/wp-content/uploads/cute-puppy-christmas-1080x720.jpg" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="https://picjumbo.com/wp-content/uploads/free-stock-photo-1080x720.jpg">
          <img class="swiper-img img-responsive" src="https://picjumbo.com/wp-content/uploads/free-stock-photo-1080x720.jpg" />
        </a>
      </swiper-slide>
      <swiper-slide>
      <a href="https://picjumbo.com/wp-content/uploads/woman-with-a-cup-of-tea-1080x720.jpg">
        <img class="swiper-img img-responsive" src="https://picjumbo.com/wp-content/uploads/woman-with-a-cup-of-tea-1080x720.jpg" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
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
