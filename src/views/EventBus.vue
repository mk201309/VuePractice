<template>
  <div class="bus">
    <child1></child1>
  </div>
</template>

<script>

import Child1 from '@/components/Child1.vue'


export default {
  name: 'Bus',
  data () {
    var tmp = {
     
    }

    return tmp
  },
  components: {
    'child1': Child1,
  },
}
</script>

