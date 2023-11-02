<template>
  <button :style="{ color, borderRadius, background: bgColor }" :class="`size-${size ?? 'normal'}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  color?: string
  size?: 'small' | 'normal'
  bgColor?: string
  borderRadius?: string
}>()
</script>

<style scoped lang="scss">
button {
  border: none;
  padding: 8px;
}

.size-normal {
  min-width: 40px;
  min-height: 40px;
}
</style>
