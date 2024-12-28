import dayjs from "dayjs";
import { scheduleNew } from '../../services/schedule-new.js';
import { schedulesDay } from '../schedules/load.js';

//Captura os elementos do form
const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Define a data atual
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = today;

//Define a data mínima como data atual
selectedDate.min = today;

form.onsubmit = async (event) => {
  //Previne o comportamento padrão do formulário
  event.preventDefault();

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();
    if(!name) {
      return alert('Informe o nome do cliente');
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector('.hour-selected');
    if(!hourSelected) {
      return alert('Selecione um horário para o agendamento');
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(':');
    
    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, 'hour');
  
    //Gera um id
    const id = new Date().getTime();

    //Faz o agendamento
    await scheduleNew({
      id,
      name,
      when
    });

    //Recarrega os agendamentos
    await schedulesDay();

    //Limpa o input de nome do cliente
    clientName.value = "";

  } catch (error) {
    alert('Não foi possível realizar o agendamento');
    console.log(error);
  }
}