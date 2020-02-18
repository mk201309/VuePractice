<template>
  <div class="watch">
    <div class="box" :class="{trigger: isTrigger}"></div>
    <button @click="isTrigger = true">Click</button>
  </div>
</template>

<script>

export default {
  name: 'Watch',
  data () {
    var tmp = {
      isTrigger: false
    }

    return tmp
  },
  watch: {
    isTrigger: function () {
      const vm = this;
      setTimeout(()=> {
        vm.isTrigger = false;
      },3000)
    }
  }
}
</script>

<style scoped>

/* 這是CSS */
.box{
  width: 50px;
  height: 50px;
  background: red;
  transition: all .3s;
}
.trigger{
  transform: rotate(45deg)
}
</style>