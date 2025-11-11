<template>
  <div class="drawer lg:drawer-open">
    <input type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <h1 class="text-5xl p-5">DOOMTROOPERS 2025</h1>
      <h2 class="text-3xl p-5">Rules</h2>
      <div class="flex flex-col">
        <Rule v-for="(rule, index) in rules" :path="[index]" :item="rule" />
      </div>
    </div>
    <div class="drawer-side z-1">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <IndexItem v-for="(item, index) in rules" :path="[index]" :item="item" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import IndexItem from './IndexItem.vue'
import {type TreeItem} from '../model/TreeItem'
import Rule from './Rule.vue'
defineProps<{
  rules: TreeItem[]
}>()
</script>