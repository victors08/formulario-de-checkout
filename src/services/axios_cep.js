import axios from "axios";

const URLBase= 'https://viacep.com.br/ws/'

async function getCep(cep){
  return axios ({
    method: 'GET',
    url: `${URLBase}${cep}/json/`
  })
}

export { getCep }