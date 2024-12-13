import dayjs from "dayjs";

//Captura os elementos do form
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Define a data atual
const today = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = today;

//Define a data mínima como data atual
selectedDate.min = today;

form.onsubmit = (event) => {
  //Previne o comportamento padrão do formulário
  event.preventDefault();

  console.log("Enviado");
}