<template>
  <div class="slot">
    <no-slot>新增的內容</no-slot>
    <single-slot>
      <p>有使用 slot 就可以插入新的內容。</p>
    </single-slot>
    <name-slot>
      <h3 slot="head">替換掉的內容</h3>
    </name-slot>
  </div>
</template>

<script>
import NoSlot from '@/components/NoSlot.vue'
import SingleSlot from '@/components/SingleSlot.vue'
import NameSlot from '@/components/NameSlot.vue'

export default {
  name: 'Slots',
  components: {
    'noSlot': NoSlot,
    'singleSlot': SingleSlot,
    'nameSlot': NameSlot,
  }
}
</script>