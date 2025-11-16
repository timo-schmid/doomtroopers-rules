<template>
  <h2 :id="'rule-' + path.join('-')" class="px-5 pb-5 text-2xl">{{item.title}}</h2>
  <div v-html="linkify(item.description, item.title)" class="px-5 pb-5" />
  <dialog :id="`modal_${path.join('_')}`" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box max-w-5xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</button>
      </form>
      <h3 class="text-lg font-bold">
        <a :href="`#rule-${path.join('-')}`" :onclick="`modal_${path.join('_')}.close()`">{{item.title}}</a>
      </h3>
      <div class="p-2 text-justify" v-html="item.description" />
    </div>
    <label class="modal-backdrop" for="${modalId}">Close</label>
  </dialog>
  <template class="rule-children" v-if="item.children">
    <Rule v-for="(item, i) in item.children" :path="path.concat(i)" :item="item" />
  </template>
</template>

<script setup lang="ts">
import {TreeItem} from '@/model/TreeItem'
import {linkify} from '@/data/Rules'

defineProps<{
  path: number[]
  item: TreeItem
}>()
</script>
