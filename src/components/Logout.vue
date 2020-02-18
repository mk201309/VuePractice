<template>
  <div class="logout">
    <button @click="logOut(message)">Click Me</button>
    <input type="text" v-model="newMessage">
  </div>
</template>

<script>
export default {
  name: 'Logout',
  props: ['message'],
  methods: {
    logOut (message) {
      alert(message);
    }
  },
  data () {
    return {
      newMessage: this.message
    }
  }
}
</script>
