<script setup lang="ts"></script>
<template>
  <n-layout>
    <n-layout-sider>sider</n-layout-sider>
    <n-layout>
      <n-layout-header>header</n-layout-header>
      <n-layout-content>content</n-layout-content>
      <n-layout-footer>footer</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
