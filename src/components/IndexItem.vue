<template>
  <li>
    <details v-if="item.children.length > 1">
      <summary>
        <a :href="'#rule-' + path.join('-')"> {{ item.title }}</a>
      </summary>
      <ul>
        <IndexItem v-for="(item, i) in item.children" :path="path.concat(i)" :item="item" />
      </ul>
    </details>
    <template v-else>
      <a :href="'#rule-' + path.join('-')"> {{ item.title }}</a>
    </template>
  </li>
</template>

<script setup lang="ts">
import {TreeItem} from '../model/TreeItem'
defineProps<{
  path: number[]
  item: TreeItem
}>()
</script>