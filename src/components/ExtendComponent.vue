<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ExtendComponent',
  data () {
    return{
      msg: 'Evening'
    }
  },
  methods: {
    sayHi () {
      console.log('Good' + this.msg)
    }
  }
})

</script>
