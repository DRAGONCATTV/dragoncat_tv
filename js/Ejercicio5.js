let numero = parseInt(prompt('Introduzca un número mayor que 1'));
let divisores = 0;
if(numero === 1) document.write('El número no es válido')
else{

    for( i = 2; i < numero; i++){
        if(numero % i ==0){
        document.write(`${numero} / ${i} = ${numero/
        i} No es primo <br>`);
            divisores++
        }
    }
}
if(divisores==0)
if(numero ==1)document.write(', prueba otra vez') 
else document.write(`${numero} es primo`)
