<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class='area'>
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper" v-for="item of hot" @click="handleCityClick(item.name)" :key='item.id'>
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class='area' v-for='(item, key) of cities' :key='key' :ref="key">
        <div class="title border-top-bottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for='innerItem of item' :key='innerItem.id'  @click="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      console.log(city)
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      // console.log(this.letter)
      const element = this.$refs[this.letter][0]
      console.log(element)
      this.scroll.scrollToElement(element)
    }
  }
}

</script>

<style scoped="scoped">
  .list{
    overflow: hidden;
    position: absolute;
    top: 1.6rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title{
    line-height: .5rem;
    background-color: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }
  .border-top-bottom{
    border-color: #fff;
  }
  .button-wraper{
    float: left;
    width: 33.33%;
  }
  .button-list{
    overflow: hidden;
    padding: .1rem;
  }
  .button{
    margin: .16rem;
    border-radius: .1rem;
    padding: .26rem.;
    text-align: center;
    border: .02rem solid #CCCCCC;
  }
  .item-list .item{
    line-height: .79rem;
    color: #666;
    padding-left: .2rem;
  }
</style>
