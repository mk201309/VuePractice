<template>
  <div class="extend">
    <child-one></child-one>
    <child-two></child-two>
  </div>
</template>

<script>

import ChildOne from '@/components/ChildOne.vue'
import ChildTwo from '@/components/ChildTwo.vue'


export default {
  name: 'Extend',
  data () {
    var tmp = {
     
    }

    return tmp
  },
  components: {
    'childOne': ChildOne,
    'childTwo': ChildTwo,
  },
}
</script>

