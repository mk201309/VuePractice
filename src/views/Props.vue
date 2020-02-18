<template>
  <div class="props">
    <button-component :message="msg"></button-component>
  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'

export default {
  name: 'Props',
  components: {
    'button-component': Logout
  },
  data () {
    var tmp = {
      msg: 'Hello Vue',
    }
    return tmp
  },
}
</script>