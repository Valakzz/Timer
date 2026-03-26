 const relogio = document.querySelector('.relogio')
  const iniciar = document.querySelector('.iniciar')
   const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let time;
    let segundos = 0



  //  function corPause(cor){
  //   const corEscolhia = relogio.style.color = cor
  //   return corEscolhia
  //  }

    
  document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('zerar')){
           setTimeout(function(){
    //  corPause('#000000')
    relogio.classList.remove('relogiopausado')
     clearInterval(time)
      relogio.innerHTML = '00:00:00'   
      segundos = 0 
      console.log('paramos o codigo')
},0)
      
    }
    if(el.classList.contains('pausar')){
       clearTimeout(time)
        // corPause('#c70e0e')
        relogio.classList.add('relogiopausado') 

    }

    if(el.classList.contains('iniciar')){
     clearInterval(time)
      relogio.classList.remove('relogiopausado')
        iniciarRelogio()
    }
  })

   function retornaData(data){
   const  datanova = new Date(data * 1000)

    return datanova.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
   }

   function iniciarRelogio(){
     time = setInterval(function(){
            {
              
              // corPause('#000000')
              segundos++
          relogio.innerHTML = retornaData(segundos)
        }
        },1000)
   }

//     iniciar.addEventListener('click', function(evento){
//       // clearInterval(time)
//       // relogio.classList.remove('relogiopausado')
//       //   iniciarRelogio()
        
       
//     })

//     pausar.addEventListener('click', function(evento){
//         // clearTimeout(time)
//         // // corPause('#c70e0e')
//         // relogio.classList.add('relogiopausado')  
        
//     })

// //    zerar.addEventListener('click', function(evento){
// //      setTimeout(function(){
// //     //  corPause('#000000')
// //     relogio.classList.remove('relogiopausado')
// //      clearInterval(time)
// //       relogio.innerHTML = '00:00:00'   
// //       segundos = 0 
// //       console.log('paramos o codigo')
// // },0)
      
       
// //     })

   