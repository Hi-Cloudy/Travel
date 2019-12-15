<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom" v-for="item of lList" :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      lList: [{
        id: '0001',
        imgUrl: 'https://images.pexels.com/photos/3293415/pexels-photo-3293415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '1111111111',
        desc: '1111111111111111111'
      }, {
        id: '0002',
        imgUrl: 'https://images.pexels.com/photos/3300825/pexels-photo-3300825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '22222222222222',
        desc: '2222222222222222222222222'
      }, {
        id: '0003',
        imgUrl: 'https://images.pexels.com/photos/2949717/pexels-photo-2949717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '3333',
        desc: '333333333333333333333'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
