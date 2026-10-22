let contador = 0;
const btn = document.getElementById("btn");
const elemento = document.getElementById("cont");

btn?.addEventListener("click", () => {
  contador++; // Incrementamos el valor
  if (elemento) {
    elemento.textContent = String(contador);
  }
});