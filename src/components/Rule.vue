<template>
  <h2 :id="'rule-' + path.join('-')" class="px-5 pb-5 text-2xl">{{item.title}}</h2>
  <div v-html="linkify(item.description, item.title)" class="px-5 pb-5" />
  <template class="rule-children" v-if="item.children">
    <Rule v-for="(item, i) in item.children" :path="path.concat(i)" :item="item" />
  </template>
</template>

<script setup lang="ts">
import {TreeItem} from '../model/TreeItem'
import {linkify} from '../data/Rules'

defineProps<{
  path: number[]
  item: TreeItem
}>()
</script>
