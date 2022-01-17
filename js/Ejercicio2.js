alert("Ten cuidado a la hora de escribir en mayúsculas y poner acentos cuándo escribas la figura que deseas ya que si no lo pones no funcionará")
let figura = prompt("Escoge la figurageométrica que más te guste entre: Triángulo, Rectángulo o Círculo");
let base;
let altura;
let radio;
switch(figura){
    case 'Triángulo':
    base= prompt("Introduce la base")
    altura= prompt("Introduce la altura")
    alert(`El area del triángulo es : ${(base*altura)/2}`);
    break
}
switch(figura){
    case 'Círculo':
    radio= prompt("Introduce el radio")
    alert(`El area del círculo es : ${Math.PI*Math.pow(radio,2)}`);
    break
}
switch(figura){
    case 'Rectángulo':
    base= prompt("Introduce la base")
    altura= prompt("Introduce la altura")
    alert(`El area del rectángulo es : ${(base*altura)}`);
    break
}