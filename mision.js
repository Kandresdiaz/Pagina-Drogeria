let cant =0
// let btnagregar= document.querySelector("#agregar")
// let disminui= document.querySelector("#disminuir")
// let aviso =  `Añade un producto `
let contador1=parseInt(0)
let contador2=parseInt(0)
let contador3=parseInt(0)
let contador4=parseInt(0)
function incrementar(x){ 
   
    switch (x) {
        case 'cantidad':
            contador1++
              if (contador1>=0) {     
                document.getElementById(x).innerHTML=contador1;
                } 
            break;
        case 'cantidad2':
            contador2++
            if (contador2>=0)
             {     
              document.getElementById(x).innerHTML=contador2;
              } 
        break;
        case 'cantidad3':
              contador3++
            if (contador3>=0) {     
              document.getElementById(x).innerHTML=contador3;
              } 
        break;
        case 'cantidad4':
              contador4++
            if (contador4>=0) {     
              document.getElementById(x).innerHTML=contador4;
              } 
        break;
        default:
            break;
    }  
}

function disminuye(x){  
 
    switch (x) {
        case 'cantidad':
            contador1--
              if (contador1>=0) {     
                document.getElementById(x).innerHTML=contador1;
                } 
                if(contador1<=0){
                  alert("Añade un producto")
                   }
            break;
        case 'cantidad2':
            contador2--
            if (contador2>=0)
             {     
              document.getElementById(x).innerHTML=contador2;
              }
              if(contador2<=0){              
                alert("Añade un producto")
              } 
        break;
        case 'cantidad3':
            contador3--
            if (contador3>=0) {     
              document.getElementById(x).innerHTML=contador3;
              }
              if(contador3<=0){
                alert("Añade un producto")
               } 
        break;
        case 'cantidad4':
            contador4--
            if (contador4>=0) {     
              document.getElementById(x).innerHTML=contador4;
            } 
              if(contador4<=0){
              alert("Añade un producto")
              }
        break;
        default:
            
            break;
    }  
   
   
}

// seccion 3, da click y aumenta la imformacion 
// let img1= document.getElementById('img1')
// function tamaño(){
  
//   img1.style.width = parseInt(img1.style.width) + 500 + "px";
//   img1.style.height = parseInt(img1.style.height) + 500 + "px";
  
// }

// carrito.addEventListener('click',tamaño);
// btnagregar.addEventListener('click',incrementar);
// disminui.addEventListener('click',disminuye);
let precNoxpirin=16150  
let result4=0
function resumen(i){ 
   
  switch (i) {
      case 'cantidad':
          contador1++
            if (contador1>=0) {     
              document.getElementById(x).innerHTML=contador1;
              } 
          break;
      case 'cantidad2':
          contador2++
          if (contador2>=0)
           {     
            document.getElementById(x).innerHTML=contador2;
            } 
      break;
      case 'cantidad3':
            contador3++
          if (contador3>=0) {     
            document.getElementById(x).innerHTML=contador3;
            } 
      break;
      case 'cantidad4':
         
            
         alert(x)
      break;
      default:
          break;
  }  
}
