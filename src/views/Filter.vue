<template>
  <div class="filter">
    <p>{{ price | currency}}</p>
    <p>{{ priceA | currency | dollarsSign }}</p>
    <p>{{ priceB | currency | dollarsSign }}</p>
  </div>
</template>

<script>

export default {
  name: 'Filters',
  data () {
    var tmp = {
      price: 45360,
      priceA: 45360,
      priceB: 3999
    }

    return tmp
  },
  filters: {
   currency: function(value) {
      return value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
        function (all, pre, groupOf3Digital) {
           return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
        }
      )
    },
    dollarsSign: function(value) {
      return `$ ${value}`
    },
  }
}
</script>