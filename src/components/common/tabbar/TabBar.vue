<template>
  <div id = "tab-Bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
#tab-Bar{
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -0.02rem 10px rgba(160, 160, 160, 0.3);
  position: fixed;
}
</style>