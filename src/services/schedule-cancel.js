
import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {

  try {

    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    });

    alert("Cancelado com sucesso!")
    
  } catch (error) {
    alert("Ocorreu um erro ao tentar cancelar o agendamento.");
    console.log(error);
  }

}