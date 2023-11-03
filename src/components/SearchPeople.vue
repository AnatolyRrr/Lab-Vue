<template>
  <div v-click-outside="closeList" class="custom-search">
    <div class="input-wrapper">
      <input v-model="search" type="text" />
      <button @click="searchPeople">Search</button>
    </div>

    <div v-show="isOpenList" class="list-wrapper">
      <template v-if="!loading && peopleList.length">
        <div
          v-for="(item, index) in peopleList"
          :key="'people' + index"
          class="list-item"
          @click="selectPeople(item)"
        >
          <span>{{ item.name }}</span>
        </div>
      </template>

      <template v-else-if="loading">
        <div>
          <span>Загрузка...</span>
        </div>
      </template>

      <template v-else>
        <div>
          <span>Нет данных</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getPeople } from '@/api'
import vClickOutside from '@/directives/clickOutside'
import type { IPeopleData } from '@/types'

const router = useRouter()
const search = ref('')
const loading = ref(false)
const isOpenList = ref(false)
const peopleList = ref<IPeopleData[]>([])

const getPeopleList = () => {
  loading.value = true

  getPeople(search.value)
    .then((res) => {
      if (res?.data) {
        peopleList.value = res.data.results
      }
    })
    .finally(() => {
      loading.value = false
    })
}

const searchPeople = () => {
  isOpenList.value = true
  getPeopleList()
}

const selectPeople = (item: IPeopleData) => {
  isOpenList.value = false
  const id = (item.url.match(/[0-9]+/gm) as string[])[0]
  router.push(`/people/${id}`)
}

const closeList = () => {
  isOpenList.value = false
}
</script>

<style scoped lang="scss">
.custom-search {
  max-width: max-content;
  position: relative;

  .list-wrapper {
    position: absolute;
    width: 100%;
    margin-top: 16px;
    padding: 8px 0;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px 0px #dcdcdc99;

    div {
      span {
        display: flex;
        align-items: center;
        height: 48px;
        width: 100%;
        padding: 4px 16px;
      }
    }

    .list-item {
      :hover {
        background: #d5e9fe;
      }
    }
  }
}
</style>
