
import { apiConfig } from './api-config';

export async function scheduleNew({ id, name, when }) {
  try {
    //Fazendo a requisição para incluir os dados do novo agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ id, name, when })
    })

    alert('Agendamento realizado com sucesso!');
  } catch (error) {
    alert('Não foi possível agendas, comunique o administrador do sistema');
    console.log(error);
  }
}