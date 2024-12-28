import { scheduleCancel } from "../../services/schedule-cancel";
import { schedulesDay } from "./load";

//Captura a lista de períodos
const periods = document.querySelectorAll('.period');

//Gera evento de click para cada item da lista ( manhã, tarde e noite )
periods.forEach((period) => {

  //Captura o evento de click na lista
  period.addEventListener('click', async (event) => {
    if(event.target.classList.contains('cancel-icon')) {

      //Obtém a li pai do elemento clicado
      const item = event.target.closest('li');

      //Captura o id do agendamento para cancelar
      const { id } = item.dataset;

      //Verifica se o id foi selecionado
      if(id) {

        //Confirma se o usuário quer cancelar
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");

        if(isConfirm) {
          //Realiza a requisição na API para cancelar
          await scheduleCancel({id});

          //Recarrega a lista de agendamentos
          schedulesDay();
        }
      }

    }
  })
});
