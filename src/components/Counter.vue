<template>
  <div class="counter">
    <button @click="incrementCounter">Click</button>增加 {{counter}}
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    incrementCounter () {
      this.$emit('increment', Number(this.counter))
    }
  },
  data () {
    return {
      counter: 10
    }
  }
}
</script>
