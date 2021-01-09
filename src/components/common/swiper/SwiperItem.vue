<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.slide {
  width: 100%;
  flex-shrink: 0;
  background-color: #ff8198;
}
.slide img {
  width: 100%;
}
</style>
