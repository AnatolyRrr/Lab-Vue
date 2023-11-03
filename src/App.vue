<template>
  <div class="page-wrapper">
    <AppHeader />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
</script>

<style scoped lang="scss">
.page-wrapper {
  max-width: 1240px;
  margin: 0 auto;
}
</style>
