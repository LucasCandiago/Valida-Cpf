const btn = document.querySelector(".btn");
const campo = document.querySelector("#input-cpf");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let valida = new ValidaCPF(campo.value);
  let resultado = valida.valida();
 
  resultado ? result.innerHTML = "CPF Válido!" : result.innerHTML = "CPF Inválido!";
})