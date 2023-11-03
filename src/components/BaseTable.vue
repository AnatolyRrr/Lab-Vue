<template>
  <div class="base-table">
    <table>
      <thead>
        <tr>
          <th v-for="(key, index) in columns" :key="'head-key' + index">
            <span>{{ key.label }}</span>
          </th>
        </tr>
      </thead>

      <tbody v-if="!loading && data.length">
        <tr v-for="(item, index) in data" :key="'row' + index">
          <td v-for="(key, index) in columns" :key="'row-key' + index">
            <span v-if="key.name === 'isFavorite'">
              <BaseButton
                :bg-color="item[key.name] ? colors.Status.ErrorSmoke : colors.Status.SuccessSmoke"
                border-radius="8px"
                @click="$emit('change-favorite', item)"
              >
                {{ item[key.name] ? 'Remove' : 'Add' }}
              </BaseButton>
            </span>

            <span v-else>
              {{ item[key.name] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="no-data loading">
      <span>Загрузка...</span>
    </div>

    <div v-if="!loading && !data.length" class="no-data">
      <span>Нет данных</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import { colors } from '@/style';

defineProps<{
  columns: {
    label: string;
    name: string;
  }[];
  data: {
    [key: string]: string | number | boolean;
  }[];
  loading?: boolean;
}>();

defineEmits(['change-favorite']);
</script>

<style scoped lang="scss">
.base-table {
  border: 1px solid $greySmoke;
  border-radius: 8px;

  table {
    width: 100%;

    thead {
      background-color: $greyLight;

      th {
        text-align: start;
        padding: 1rem 1rem;
      }
    }

    tbody {
      td {
        padding: 1rem 1rem;
      }
    }
  }
  .no-data {
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
  }

  .loading {
    display: flex;
    align-items: center;
    height: 570px;
  }
}
</style>
