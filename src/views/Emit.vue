<template>
  <div class="emit">
    <button @click="incrementTotal2">click</button>
    {{cash}}
    <button-counter @increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name: 'Emit',
  components: {
    'buttonCounter': Counter
  },
  data () {
    var tmp = {
      cash: 300,
    }
    return tmp
  },
  methods: {
    incrementTotal (newValue) {
      this.cash = this.cash + newValue
    },
    incrementTotal2 () {
      this.cash++
    }
  }
}
</script>