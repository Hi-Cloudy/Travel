<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class='icon-img'>
              <img class='icon-img-content' :src='item.imgUrl' />
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      // iconList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
      //   desc: '景点门票'
      // }, {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
      //   desc: '滑雪季'
      // }, {
      //   id: '0003',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
      //   desc: '泡温泉'
      // }]
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
