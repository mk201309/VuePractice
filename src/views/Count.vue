<template>
  <div class="count">
    <hello></hello>
  </div>
</template>

<script>

import Hello from '@/components/Hello.vue'


export default {
  name: 'Count',
  data () {
    var tmp = {
     
    }

    return tmp
  },
  components: {
    'hello': Hello,
  },
}
</script>

