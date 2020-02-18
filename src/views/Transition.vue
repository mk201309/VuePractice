<template>
  <div class="transition ">
    <button @click="isShow = !isShow">Toggle</button>
    <transition name="fade">
      <h2 v-if="!isShow">Hello Vue</h2>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Extend',
  data () {
    var tmp = {
      isShow: false
    }

    return tmp
  },
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>

