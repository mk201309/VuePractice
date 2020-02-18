<template>
  <div class="child1">
    <h2>This is Child 1 !!!!</h2>
    <button @click="doShowAlert(message)">Click Me</button>
  </div>
</template>

<script>

export default {
  name: 'Child1',
  data () {
    return {
      message: 'This is from Child1'
    }
  },
  methods: {
    doShowAlert(msg) {
      this.$bus.$emit('alert:message', msg);
    }
  }
}
</script>
