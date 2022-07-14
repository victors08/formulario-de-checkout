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
        <div class="col-8 q-ma-sm q-pa-sm" style="width: 50%; height: 40%">
          <h6 class="q-ml-sm">Dados pessoais</h6>

          <q-form 
            class="fit row"
            @submit="onSubmit"
          >
            <InputTexto
              string_etiqueta="Nome completo"
              class="col-6 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="CPF"
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Telefone"
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Email"
              class="col-6 q-ma-xs"
              type="email"
            />

            <q-btn
            class="col-md-4 offset-md-7 q-ma-sm"
            label="Salvar"
            type="submit"
            color="positive"
            style="height: 22px; width: 110px"
            v-on:click="salvarDadosPessoais()"
          />
          </q-form>

          <h6 class="q-ml-sm">Dados para entrega</h6>

          <q-form 
            class="fit row"
            @submit="onSubmit">
            <InputTexto
              v-model="prm_cep"
              string_etiqueta="CEP"
              class="col-3 q-ma-xs"
              maxlength="8"
              v-on:focusout="buscarCep()"
            />

            <InputTexto
              string_etiqueta="Rua"
              class="col-7 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Complemento"
              class="col-6 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Bairro"
              class="col-4 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="Cidade"
              class="col-7 q-ma-xs"
            />

            <InputTexto
              string_etiqueta="UF"
              class="col-3 q-ma-xs"
            />

            

            <q-btn
            class="col-md-4 offset-md-7 q-ma-sm"
            label="Salvar"
            type="submit"
            color="positive"
            style="height: 22px; width: 110px"
            v-on:click="salvarDadosEntrega()"
          />
          </q-form>
        </div>

        <div class="col-4 q-ma-xs">
          <h6>Resumo do pedido</h6>

          <div style="color:gray;"> 
            Quantidade de itens selecionados: <br/>
            <q-separator spaced style="color:gray"/>
            Adesivo React: {{react}} <br/>
            Adesivo Vue: {{vue}} <br/>
            Adesivo Angular: {{angular}}
          </div>

          <q-btn
            class= "full-width q-ma-md"
            color="primary" 
            label="Ir para o pagamento"
            v-on:click="toPayment()"
          />
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
                    icon="img:https://logospng.org/download/pix/logo-pix-icone-512.png" 
                    label="Pix"
                  />
                </q-tab>
              </q-tabs>

              <q-separator />

              <q-tab-panels class="q-ma-md" v-model="tab" animated>
                <q-tab-panel name="credit">
                  <div class="text-h6">Cartão de crédito</div>
                    <q-form class="fit row flex">
                      <InputTexto
                        string_etiqueta="Nome impresso no cartão"
                        class="col-6 q-ma-sm"
                      />

                      <InputTexto
                        string_etiqueta="Número do cartão"
                        class="col-5 q-ma-sm"
                      />

                      <InputTexto
                        string_etiqueta="Validade"
                        class="col-3 q-ma-xs"
                        type="date"
                      />

                      <InputTexto
                        string_etiqueta="Código de verificação(CVV)"
                        class="col-2 q-ma-xs"
                        maxlength="3"
                      />

                      <InputTexto
                        string_etiqueta="CPF do titular"
                        class="col-4 q-ma-xs"
                        maxlength="11"
                      />

                      <InputTexto
                        string_etiqueta="Data de nascimento"
                        class="col-2 q-ma-xs"
                        type="date"
                      />

                      <q-btn
                        class= "col-3 offset-md-8 q-ma-md "
                        color="primary" 
                        label="Realizar pagamento"
                      />
                    </q-form>
                </q-tab-panel>

                <q-tab-panel name="boleto">
                  <div class="text-h6">Boleto</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="pix">
                  <div class="text-h6">Pix</div>
                  <p> 
                    A melhor opção para suas compras à vista.
                  </p>  
                  <p>
                    Pague com PIX e aproveite até 15% OFF. Nessa modalidade, seu pedido é aprovado instantaneamente, 
                    o que torna a expedição do seu pedido ainda mais rápida.
                  </p>
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
//import { getCep } from '@/services/axios_cep.js'

import InputTexto from '@/components/campos/inputTexto.vue'

export default {
  name: 'CheckoutView',
  props: {
    vue: Number,
    angular: Number,
    react: Number,
  },
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
  mounted(){
    let arrayPedidos = {vue: this.vue, angular: this.angular, react:this.react}
    console.log(arrayPedidos)
  },
  data(){
    return { 
      prm_cep: '',
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault()
    },
    salvarDadosPessoais(){
      window.alert("Dados pessoais salvos com sucesso!")
    },
    salvarDadosEntrega(){
      window.alert("Endereço salvo com sucesso!")
    },
    toPayment(){
      window.scrollTo(0 , 850);
    }
    /*async buscarCep(){
      getCep(this.prm_cep)
      .then(response => {
        const data = response.data
        if (response.data == 200) {
          this.response = data
          console.log(data)
        }else {
          alert("CEP não encontrado")
        }
      }).cacth(error => {
        console.error(error)
      })
    }
  }*/
  }
}
</script>
