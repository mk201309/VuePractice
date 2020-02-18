<template>
  <div class="dynamic">
    <button @click="current = 'primary-component'">Primary</button>
    <button @click="current = 'danger-component'">Danger</button>
    <div :is="current" :data="msg"></div>
  </div>
</template>

<script>
import PrimaryComponent from '@/components/Primary.vue'
import DangerComponent from '@/components/Danger.vue'

export default {
  name: 'Dynamic',
  data () {
    var tmp = {
      msg: 'Hello Vue !!',
      current: 'primary-component'
    }

    return tmp
  },
  components: {
    'primary-component': PrimaryComponent,
    'danger-component': DangerComponent,
  },
}
</script>

