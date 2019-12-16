<template>
  <ul class="list">
    <li class="item" v-for='(item , key ) of cities' :key='key' @click="handerLetterClick">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpabet',
  props: {
    cities: Object
  },
  methods: {
    handerLetterClick (e) {
      console.log(e.target.innerText)
      this.$emit('changed', e.target.innerText)
    }
  }
}
</script>

<style scoped="scoped">
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
  }
  .item{
    line-height: .44rem;
    color: #94913c;
    text-align: center;
  }
</style>
