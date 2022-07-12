<template>
  <q-header class="bg-primary">
    <div class="fir row justify-end q-pa-sm">
          <q-btn 
            flat color = "white" 
            icon="home"
            label="Home"
            @click="this.$router.push('/')"
          />

          <q-btn 
            flat color = "white" 
            icon="shopping_cart"
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