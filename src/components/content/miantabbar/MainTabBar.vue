<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="img1" src="../../../assets/img/tabbar/shouye.svg">
        <img slot="img2" src="../../../assets/img/tabbar/shouye_hover.svg">
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="img1" src="../../../assets/img/tabbar/fenlei.svg">
        <img slot="img2" src="../../../assets/img/tabbar/fenlei_hover.svg">
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shoping">
        <img slot="img1" src="../../../assets/img/tabbar/baoshuicang.svg">
        <img slot="img2" src="../../../assets/img/tabbar/baoshuicang_hover.svg">
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="img1" src="../../../assets/img/tabbar/wo.svg">
        <img slot="img2" src="../../../assets/img/tabbar/wo_hover.svg">
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar"
  import TabBarItem from "../../common/tabbar/TabBarItem"
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>