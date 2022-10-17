import { imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<imprimivel>) {
  objetos.forEach((objeto) => console.log(objeto.paraTexto()));
}
