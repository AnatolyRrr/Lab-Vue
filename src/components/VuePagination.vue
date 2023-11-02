<template>
  <div class="pagination">
    <BaseButton
      border-radius="8px"
      color="#283f69"
      :disabled="disabled || data.page === 1"
      @click="$emit('change-page', data.page - 1)"
    >
      Prev
    </BaseButton>

    <div v-for="page in data.total" :key="'page' + page">
      <BaseButton
        v-if="page <= data.page + 3 && page >= data.page - 3"
        border-radius="50%"
        class="page-btn"
        :bgColor="page === data.page ? '#283f69' : ''"
        :color="page === data.page ? '#ffffff' : '#283f69'"
        :disabled="disabled"
        @click="$emit('change-page', page)"
      >
        {{ page }}
      </BaseButton>
    </div>

    <BaseButton
      border-radius="8px"
      :disabled="disabled || data.page === data.total"
      color="#283f69"
      @click="$emit('change-page', data.page + 1)"
    >
      Next
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

defineProps<{
  disabled: boolean
  data: {
    page: number
    total: number
    size: number
  }
}>()

defineEmits(['change-page'])
</script>

<style scoped lang="scss">
.pagination {
  display: flex;

  .page-btn {
    margin: 0 2px;
  }
}
</style>
