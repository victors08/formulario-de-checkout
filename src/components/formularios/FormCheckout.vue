<template>
  <q-page-container>
    <div class="q-pl-xl" style="max-width: 80%;">
      <div class="row">
        <h5 class="col-5 text-weight-bold" style="color:blue">
          Finalizar comprar
        </h5>
      </div>

      <q-separator color="primary"/>

      <div class="fit row">
        <div class="col-6 q-ma-sm q-pa-sm" style="width: 50%; height: 40%">
          <h6 class="q-ml-sm">Dados pessoais</h6>

          <q-form 
            class="fit row"
            @submit="onSubmit"
          >
            <InputTexto
              string_etiqueta="Nome completo"
              prm_isObrigatorio=true
              class="col-6 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="CPF"
              prm_isObrigatorio=true
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Telefone"
              prm_isObrigatorio=true
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Email"
              prm_isObrigatorio=true
              class="col-6 q-ma-xs"
              type="email"
            />

            <q-btn
            class="col-md-4 offset-md-7 q-ma-sm"
            label="Salvar"
            type="submit"
            color="positive"
            style="height: 22px; width: 110px"
          />
          </q-form>

          <h6 class="q-ml-sm">Dados para entrega</h6>

          <q-form 
            class="fit row"
            @submit="onSubmit">
            <InputTexto
              string_etiqueta="CEP"
              prm_isObrigatorio=true
              class="col-3 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Rua"
              prm_isObrigatorio=true
              class="col-7 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Complemento"
              prm_isObrigatorio=true
              class="col-6 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Bairro"
              prm_isObrigatorio=true
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Cidade"
              prm_isObrigatorio=true
              class="col-6 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="UF"
              prm_isObrigatorio=true
              class="col-4 q-ma-xs"
            />

            <q-btn
            class="col-md-4 offset-md-7 q-ma-sm"
            label="Salvar"
            type="submit"
            color="positive"
            style="height: 22px; width: 110px"
          />
          </q-form>
        </div>

        <div class="col-5 q-ma-xs">
          <h6>Resumo do pedido</h6>

          <div style="color:gray;"> 
            Quantidade de itens selecionados: <br/>
            Adesivo React: {{react}}
          </div>
      </div>

      </div>
     
      <q-separator spaced />

      <div class="fit row">
        
        <h5 class="row text-weight-bold col-5" style="color:blue">
          Pagamento
        </h5>

        <q-separator color="primary" />

          <div class="col-12">

            <div class="q-gutter-y-md">
              <q-tabs
                v-model="tab"
                dense
                align="justify"
                active-color="primary"
                indicator-color="primary"
                class="text-teal"
                narrow-indicator
              >
                <q-tab name="credit" >
                  <q-btn
                    icon="credit_card" 
                    label="Cartão de crédito" 
                  />
                </q-tab>
                <q-tab name="boleto">
                  <q-btn 
                    :icon="fasBarcode" 
                    label="Boleto bancário"
                  />
                </q-tab>
                <q-tab name="pix">
                  <q-btn
                    :icon="fasPix" 
                    label="Pix"
                  />
                </q-tab>
              </q-tabs>

              <q-separator />

              <q-tab-panels class="q-ma-md" v-model="tab" animated>
                <q-tab-panel name="credit">
                  <div class="text-h6">Mails</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="boleto">
                  <div class="text-h6">Alarms</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="pix">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>

            </div>
          </div>
      </div>
    </div>
  </q-page-container>
</template>

<script>

import { ref } from 'vue'
import { fasBarcode } from '@quasar/extras/fontawesome-v6'

import InputTexto from '@/components/campos/inputTexto.vue'

export default {
  name: 'FormCheckout',
  components: {
    InputTexto,
  },
  setup(){
    return {
      tab: ref('mails')
    }
  },
  created(){
    this.fasBarcode = fasBarcode
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
    }
  }
}
</script>
