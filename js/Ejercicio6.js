let numero = parseInt(prompt('Escribe un número mayor que cero'));
let resultado = 1;
for(let i = numero; i > 0; i--){
resultado *=i
}
document.write(`El factorial del numero ${numero} es ${resultado}`);