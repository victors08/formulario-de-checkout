<template>
  <q-page-container>
    <div class="q-pl-xl" style="max-width: 80%;">
      <div class="row justify-between">
        <h5 class="col-5 text-weight-bold" style="color:blue">
          Meu carrinho
        </h5>

        <h6 class="col-4" color="gray">
          Quantidade de itens:
        </h6>

      </div>

      <q-separator color="primary"/>

      
        <div class="fit column content-start">
          <div class="fit row justify-between q-pa-md">
            <q-img
              class="col-3"
              src="https://www.stickersdevs.com.br/wp-content/uploads/2019/08/react_native_sticker-adesivo.png"
              style="height: auto; width: 150px"
            />
            <div class="col-3">
              <h6 class="q-mx-md">Adesivo React Js</h6>
              <InputTexto 
                string_etiqueta="Adesivos"
                type="number"
                v-model="selected"
              />
            </div>
          </div>

          <q-separator spaced />

          <div class="fit row justify-between q-pa-md">
            <q-img
              class="col-3"
              src="https://www.stickersdevs.com.br/wp-content/uploads/2022/01/vuejs-adesivo-sticker-600x600.png"
              style="height: auto; width: 150px"      
            />
            
            <div class="col-3">
              <h6 class="q-mx-md">Adesivo Vue Js</h6>
              <InputTexto 
                string_etiqueta="Adesivos"
                type="number"
                v-model="selected"
              />
            </div>
          </div>

          <q-separator spaced />

          <div class="fit row justify-between q-pa-md">
            <q-img
              class="col-3"
              src="https://www.stickersdevs.com.br/wp-content/uploads/2015/03/angular-stickers-adesivo-600x600.png"
              style="height: auto; width: 150px"
            />
            
            <div class="col-3">
              <h6 class="q-mx-md">Adesivo Angular Js</h6>
              <InputTexto 
                string_etiqueta="Adesivos"
                type="number"
                v-model="selecionado"
              />
            </div>
          </div>

        </div>

        <q-separator spaced />

        <div class="row justify-end">
          <q-btn
            class="col-2 q-ma-xl"
            label="Confirma pedido"
            type="submit"
            color="primary"
            @click="this.$router.push('/checkout')"
          />
        </div>
      

    </div>
  </q-page-container>
</template>

<script>


import InputTexto from '@/components/campos/inputTexto.vue'

export default {
  name: 'HomeView',
  components: {
    InputTexto,
  },
  setup(){
    
    return { 
      selecionado: '',
    }
  },
}
</script>
