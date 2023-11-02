<template>
  <section class="profile-page card">
    <BaseTable
      :columns="formattedTableColumns"
      :data="tableData"
      :loading="tableLoading"
      @change-favorite="changeFavorite"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPeopleById } from '@/api'
import BaseTable from '@/components/BaseTable.vue'
import { tableColumns } from '@/lib/constants'
import { changeFavorite, getFavorites } from '@/helpers/favorite'
import type { IPeopleData } from '@/types'

const route = useRoute()
const tableData = ref<IPeopleData[]>([])
const tableLoading = ref(true)

const formattedTableColumns = computed(() => {
  if (tableData.value.length && !tableData.value[0].isFavorite) {
    return tableColumns
  }
  return tableColumns.filter((column) => column.name !== 'isFavorite')
})

const getProfileData = () => {
  tableLoading.value = true

  getPeopleById(route.params.id as string)
    .then((res) => {
      if (res.data) {
        const favorites = getFavorites()

        res.data.isFavorite = favorites.some(
          (favorite: IPeopleData) => favorite.name === res.data.name
        )

        tableData.value.push(res.data)
      }
    })
    .finally(() => {
      tableLoading.value = false
    })
}

onMounted(() => {
  getProfileData()
})
</script>
