<template>
  <div>
    <div class="title">推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key='item.id'>
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'https://images.pexels.com/photos/3290071/pexels-photo-3290071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '111',
        desc: '111111111111111'
      }, {
        id: '02',
        imgUrl: 'https://images.pexels.com/photos/3326195/pexels-photo-3326195.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '222',
        desc: '2222222222222'
      }, {
        id: '03',
        imgUrl: 'https://images.pexels.com/photos/3333538/pexels-photo-3333538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '333',
        desc: '333333333333'
      }, {
        id: '04',
        imgUrl: 'https://images.pexels.com/photos/3075061/pexels-photo-3075061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '444',
        desc: '114444444441111'
      }, {
        id: '05',
        imgUrl: 'https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: '555',
        desc: '1115555555555511'
      }]
    }
  }
}
</script>

<style scoped="scoped">
  .title{
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  .item{
    display: flex;
    height: 1.9rem;
    overflow: hidden;
  }
  .item-img{
     width: 1.7rem;
     height: 1.7rem;
     padding: .1rem;
  }
  .item-info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
  }
  .item-title{
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    line-height: .4rem;
    color: #CCCCCC;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-button{
    background-color: #ff9300;
    padding: 0 .1rem;
    border-radius: .6rem;
    margin-top: .1rem;

  }
</style>
