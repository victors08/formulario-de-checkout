<template>
  <q-layout view="lHh Lpr lFf">

    <Header />

    <HelloWorld />

    <q-page-container>
      <router-view />
    </q-page-container>
    
    
  </q-layout>
</template>

<script>

import FormCheckout from './components/formularios/FormCheckout.vue'
import Header from './components/navegacao/Header.vue'

export default {
  name: 'LayoutDefault',

  components: {
    FormCheckout,
    Header
  },

  setup () {
    return {
      
    }
  }
}
</script>
