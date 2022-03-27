<script setup lang="ts">
const useNativeScrollbar = false;
</script>
<template>
  <!-- <n-layout-header bordered>header </n-layout-header> -->
  <n-layout has-sider position="absolute">
    <n-layout-sider bordered show-trigger>
      sider
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
    </n-layout-sider>
    <n-layout-content>
      content
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <div>6666dsds</div>
      <n-layout-footer bordered position="absolute">footer</n-layout-footer>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.n-layout-footer {
  height: 30px;
}
</style>
