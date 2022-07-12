<template>
  <div>

    <FormCheckout />

  
  </div>
</template>

<script>

import FormCheckout from '@/components/formularios/FormCheckout.vue'

export default {
  name: 'HomeView',
  props: {
    vue: Number,
    angular: Number,
    react: Number,
  },
  components: {
    FormCheckout
  },
  mounted(){
    let arrayPedidos = {vue: this.vue, angular: this.angular, react:this.react}
    console.log(arrayPedidos)
  }
}
</script>
