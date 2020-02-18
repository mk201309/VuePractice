<template>
  <div class="child-two">
    <h2 style="color: green;">Hello Vue</h2>
    <button @click="sayHi">Click</button>
  </div>
</template>

<script>
import ExtendComponent from '@/components/ExtendComponent.vue'

export default {
  name: 'ChildTwo',
  extends: ExtendComponent
}
</script>
