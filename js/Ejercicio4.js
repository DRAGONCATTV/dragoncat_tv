let figura = prompt("Introduce como quieres que se vea el resultado: Consola o Documento");
let Consola;
let Documento;
let numero = parseInt(prompt("Introduce un número"))
switch(figura){

    case 'Documento':

        for (let i=1; i<=numero; i++){
            if(i % 2 == 0){
                document.write(`${i} - es par <br> `);
            }
            else {
                document.write(`${i} - es impar <br>`)
            }
        }
        break
    
    case 'Consola':
            
            for (let i=1; i<=numero; i++){
                if(i % 2==0){
                    console.log(`${i} - es par `);
                }
                else{
                    console.log(`${i} - es impar `)
                }
        }
        break
    default: alert('La opción seleccionada no es válida');
    }
                
