<template>
  <section class="people-page card">
    <SearchPeople />

    <BaseTable
      :columns="tableColumns"
      :data="tableData"
      :loading="tableLoading"
      @change-favorite="changeFavorite"
    />

    <VuePagination
      v-if="tablePagination.total > 1"
      :disabled="tableLoading"
      :data="tablePagination"
      @change-page="changePage"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { getPeople } from '@/api';

import BaseTable from '@/components/BaseTable.vue';
import VuePagination from '@/components/VuePagination.vue';
import SearchPeople from '@/components/SearchPeople.vue';

import { changeFavorite, getFavorites } from '@/helpers/favorite';
import { tableColumns } from '@/lib/constants';
import type { IPeopleData } from '@/types';

const tableData = ref<IPeopleData[]>([]);
const tablePagination = reactive({
  page: 1,
  total: 1,
  size: 10
});
const tableLoading = ref(true);

const getTableData = () => {
  tableLoading.value = true;

  getPeople('', tablePagination.page)
    .then((res) => {
      if (res?.data) {
        const favorites = getFavorites();
        tablePagination.total = Math.ceil(res.data.count / tablePagination.size);
        tableData.value = res.data.results.map((item: Omit<IPeopleData, 'isFavorite'>) => {
          return {
            ...item,
            isFavorite: favorites.some((favorite: IPeopleData) => favorite.name === item.name)
          };
        });
      }
    })
    .finally(() => {
      tableLoading.value = false;
    });
};

const changePage = (page: number) => {
  tablePagination.page = page;
  getTableData();
};

onMounted(() => {
  getTableData();
});
</script>
