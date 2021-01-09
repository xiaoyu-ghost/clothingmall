<template>
  <div id = "tab-Bar-Item" @click="itemClick">
    <div v-if="!isActive"><slot name = "img1"></slot></div>
    <div v-else> <slot name = "img2"></slot></div>
    <div :style = "isActiveStyle"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        default:'red',
        type:String
      }

    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      isActiveStyle(){
        return this.isActive ? {color: this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){

         return this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  #tab-Bar-Item{
    flex: 1px;
    text-align: center;
    font-size: 14px;
  }
  #tab-Bar-Item img{
    height:17px;
    width:17px;
    margin: 3px;
  }
 .active{
   color:red;
 }
</style>