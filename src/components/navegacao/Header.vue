<template>
  <q-header class="bg-primary">
    <div class="fir row justify-end q-pa-sm">
          <q-btn 
            flat color = "white" 
            label="Home"
            @click="this.$router.push('/')"
          />

          <q-btn 
            flat color = "white" 
            label="Carrinho"
            @click="this.$router.push('/checkout')"
          />
    </div>
  </q-header>
</template>

<script>

export default {
  name:'Header'  
}
</script>