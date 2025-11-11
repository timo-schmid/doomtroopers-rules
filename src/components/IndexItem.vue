<template>
  <li>
    <a :href="'#rule-' + path.join('-')"> {{ item.title }}</a>
    <ul v-if="item.children">
      <IndexItem v-for="(item, i) in item.children" :path="path.concat(i)" :item="item" />
    </ul>
  </li>
</template>

<script setup lang="ts">
import {TreeItem} from '../model/TreeItem'
defineProps<{
  path: number[]
  item: TreeItem
}>()
</script>