// Função para formatar 1 em 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data
  const dataHora =
    zeroFill(now.getUTCDate()) +
    "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Exibe na tela
  document.getElementById("data-hora").innerHTML = dataHora;
}, 1000);

//Adicionar Tarefa

function addTarefa() {
    var list = document.getElementById("lista");
    var tarefa = document.getElementById("tarefa").value;
    var listaDeTarefa = document.createElement("li");
    listaDeTarefa.className = "lista-tarefa"

    const textoLi = document.createTextNode(tarefa);
    listaDeTarefa.appendChild(textoLi)
    list.appendChild(listaDeTarefa)

    if (tarefa.lenght === 0) {
        alert('A tarefa precisa ter mais de um caracter');
        return;
    }
}

//remover tarefa


