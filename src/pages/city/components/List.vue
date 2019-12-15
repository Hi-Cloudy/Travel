<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class='area'>
        <div class="title border-top-bottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom border-bottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div> <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div> <div class='area'>
        <div class="title border-top-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
