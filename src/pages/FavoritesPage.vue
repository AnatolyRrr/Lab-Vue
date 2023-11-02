<template>
  <section class="favorites-page card">
    <BaseTable :columns="tableColumns" :data="tableData" @change-favorite="removeFavorite" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTable from '@/components/BaseTable.vue'
import { changeFavorite, getFavorites } from '@/helpers/favorite'
import { tableColumns } from '@/lib/constants'
import type { IPeopleData } from '@/types'

const tableData = ref<IPeopleData[]>(getFavorites())

const removeFavorite = (item: IPeopleData) => {
  changeFavorite(item)
  tableData.value = tableData.value.filter((favorite) => favorite.name !== item.name)
}
</script>
