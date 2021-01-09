<template>
  <div class="recommend">
    <div v-for="item in recommends"  class="comm">
      <a :href = "item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 30px;
  border-bottom: 10px #f6f6f6 solid;
}
.recommend .comm{
  flex: 1;
  margin: auto;
  font-size: 16px;
  font-family: 华文楷体;
}
.recommend img{
  height:70px;
  width: 70px;
  margin-bottom: 10px;
}
</style>