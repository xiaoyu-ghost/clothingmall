<template>
  <div id = "nav-bar">
    <div class="left">
      <slot name = "left"></slot>
    </div>
    <div class="center">
      <slot name = "center"></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #nav-bar{
    text-align: center;
    line-height: 44px;
    height: 44px;
    display: flex;
    box-shadow: 0px 0.04rem 2px rgba(100, 100, 100, 0.3);
    font-size: 0.768rem;
  }

  .left, .right{
    width:60px;
  }
  .center{
    flex: 1;

  }
</style>