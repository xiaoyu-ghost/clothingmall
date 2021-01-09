<template>
  <div class="tab-control">
    <div class="control"
         v-for="(item,index ) in titles"
         :key="index"
         :class="{active:index == currenIndex}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
     titles:{
       type:Array,
       default(){
         return[]
       }
     }
    },
    data(){
      return{
        currenIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currenIndex = index;
        this.$emit('btnClick',index);
      }
    }
  }
</script>

<style scoped>
.tab-control {
  display: flex;
  z-index: 9;
}
  .control{
    flex: 1;
    text-align: center;
    font-size:small;
    color:darkslateblue;
    background-color: #f6f6f6;
    height: 44px;
    line-height: 44px;
    position: sticky;
  }
.control span{
  padding: 4px 0;
}
.active{
  color: #ff8198;
  padding-bottom: 10px;
}
.active span{
  border-bottom:4px palevioletred solid;
}

</style>
