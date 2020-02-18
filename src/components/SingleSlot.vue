<template>
  <div class="single-slot">
    <h2>Component</h2>
    <slot>如果沒有 slot ，內容顯示這裡</slot>
  </div>
</template>

<script>
export default {
  name: 'SingleSlot'
}
</script>
