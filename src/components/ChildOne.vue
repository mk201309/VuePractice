<template>
  <div class="child-one">
    <h2 style="color: red;">Hello Vue</h2>
    <button @click="sayHi">Click</button>
  </div>
</template>

<script>

var mixinComponentOne = {
    template: '#childOne',
    data () {
      return{
        msg: 'Evening'
      }
    },
}

var mixinComponentTwo = {
    methods: {
      sayHi () {
        console.log('Good' + this.msg)
      }
    }
}

export default {
  name: 'ChildOne',
  mixins: [mixinComponentOne, mixinComponentTwo]
}
</script>
