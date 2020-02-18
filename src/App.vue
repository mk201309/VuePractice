<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'Computed'}">Computed</router-link> |
      <router-link :to="{name: 'Watch'}">Watch</router-link> |
      <router-link :to="{name: 'Filters'}">Filter</router-link> |
      <router-link :to="{name: 'Props'}">Props</router-link> |
      <router-link :to="{name: 'Emit'}">Emit</router-link> |
      <router-link :to="{name: 'Slots'}">Slot</router-link> |
      <router-link :to="{name: 'Dynamic'}">Dynamic</router-link> |
      <router-link :to="{name: 'Extend'}">Extend</router-link> |
      <router-link :to="{name: 'Transition'}">Transition</router-link> |
      <router-link :to="{name: 'EventBus'}">EventBus</router-link> |
      <router-link :to="{name: 'Count'}">Count</router-link> |
    </div>
    <div>
      <a href="#" @click.prevent="aboutPath">切換到 About</a> |
      <a href="#" @click.prevent="beforePath">回到前一頁</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    aboutPath() {
      this.$router.push('/about')
    },
    beforePath() {
      this.$router.back()
    },
    getCard() {
      this.$http.get('https://randomuser.me/api/').then((response) => {
        console.log(response)
      })
    },
    showAlert(msg) {
      alert(msg)
    },
  },
  created() {
    this.getCard();
    this.$bus.$on('alert:message', (msg) => {
      this.showAlert(msg)
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
