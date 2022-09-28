
// let contador = 0;

// aumentar.addEventListener('click', function (){
//     // console.log(contador++)
//     valor.innerHTML = contador++;

// })

// reset.addEventListener('click', function (){
   
//     valor.innerHTML =(contador =0);

// })


// disminuir.addEventListener('click', function (){
//     // console.log(contador++)
//     valor.innerHTML = contador--;

// })

let conta = 0;
function contador(a){
    switch (a.id){
        case "aumentar": 
            valor.innerHTML = ++conta; 
        break;
        case "reset": 
            valor.innerHTML =(conta =0); 
            break;
        case "disminuir": 
            valor.innerHTML = --conta;  
        break;
        default: break;
    }
}
