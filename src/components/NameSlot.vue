<template>
  <div class="single-slot">
    <h2>Component</h2>
    <p>一個段落</p>
    <slot name="head">一個 H3</slot>
    <h4>一個 H4</h4>
    <slot name="head">一個 H3</slot>
  </div>
</template>

<script>
export default {
  name: 'NameSlot'
}
</script>
