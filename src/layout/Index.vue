<script setup lang="ts">
const useNativeScrollbar = false;
</script>
<template>
  <!-- <n-layout-header bordered>header </n-layout-header> -->
  <n-layout has-sider class="main-layout">
    <n-layout-sider bordered show-trigger
      >sider
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
    </n-layout-sider>
    <n-layout-content
      >content
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
    </n-layout-content>
    <n-layout-footer bordered position="absolute">footer</n-layout-footer>
  </n-layout>
</template>

<style scoped>
.main-layout {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.n-layout-header {
  height: 45px;
}
.n-layout-footer {
  height: 35px;
}
.n-layout-header,
.n-layout-footer {
  /* background-color: gray; */
}

.n-layout-sider {
  /* background: rgba(128, 128, 128, 0.3); */
}

.n-layout-content {
  /* background: rgba(128, 128, 128, 0.4); */
}
</style>
