<template>
  <div class="computed">
    <input type="text" v-model="msg">
    <p>
      {{someText}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Computed',
  data () {
    var tmp = {
      msg: 'Hello World'
    }

    return tmp
  },
  computed: {
      someText: function() {
        return this.msg.split('').reverse().join('');
      }
  }
}
</script>