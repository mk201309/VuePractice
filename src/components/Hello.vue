<template>
  <div class="hello">
    <p>{{count}}</p>
    <button @click="increase">Click Me</button>
  </div>
</template>

<script>
//mapState 可以方便我們獲取多個狀態
import { mapState } from 'vuex'

export default {
  name: "Hello",
  data() {
    return {
      counting: 10
    };
  },
  methods: {
    increase() {
      this.$store.dispatch('count/incrementCount', this.counting)
    }
  },
  computed: {
    ...mapState({
      count: state => state.count.count
    })
  }
};
</script>