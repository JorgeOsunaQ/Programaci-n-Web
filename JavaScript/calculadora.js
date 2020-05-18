var ans=null
var espera_operador=false
var operador=''

var display=document.querySelector('#in-display');
var disp_memory=document.querySelector('#memory');

var numeros=document.querySelectorAll('.number');
var operadores=document.querySelectorAll('.operador');
var operadores_op=document.querySelectorAll('.operador-op');
var back_space=document.querySelector('#boton-backspace');

//Agregamos los eventos

numeros.forEach(item =>{
    item.addEventListener('click',listenerNumero);
})

operadores_op.forEach(item =>{
    item.addEventListener('click',listenerOperacionesOP);
})

operadores.forEach(item =>{
    item.addEventListener('click',listenerOperaciones);
})

back_space.addEventListener('click',listenerBackSpace);

//Creamos las funciones de los eventos
function listenerNumero(event){
    if(display.value=='0')
        display.value='';

    if(espera_operador || operador=='='){
        display.value=this.value;
        espera_operador=false;
        return
    }
    display.value+=this.value;
}

function listenerBackSpace(event){

    if(parseFloat(display.value)!=0)
        display.value=display.value.slice(0,-1);

    if(display.value=='')
        display.value=0;
}

function listenerOperaciones(event){
    numero=parseFloat(display.value);
    sig_operador=this.value;
    debugger;    
    if(ans==null){
        ans=numero;
        disp_memory.innerText=ans+''+sig_operador;
        espera_operador=true;
    }
    else{
        if(sig_operador=='='){
            res=operacion(operador);    
            if(operador=='=' || ans==numero){
                disp_memory.innerText=numero+''+sig_operador;
            }
            else{
                disp_memory.innerText+=numero+''+sig_operador;
            }
            espera_operador=false;
        }
        else{
            res=operacion(sig_operador);
            if(operador=='=')
                disp_memory.innerText=ans+''+sig_operador;
            else{
                if(operador!='' && espera_operador){
                    operador=sig_operador;
                    disp_memory.innerText=disp_memory.innerText.slice(0,-1);
                    disp_memory.innerText+=sig_operador+''+numero;    
                }
                else
                    disp_memory.innerText+=numero+''+sig_operador;
                }
            espera_operador=true;
            }
        display.value=ans;
    }
    operador=sig_operador;
}

function operacion(temp){
    let res=0;
    numero=parseFloat(display.value);
    switch(temp){
        case '+':
            res=ans+numero;
            break
        case '*':
            res=ans*numero;
            break;
        case '-':
            res=ans-numero;
            break
        case '÷':
            res=ans/numero;
            break
        case '=':
            res=numero;
            break
    }
    if(operador!='=')
        ans=res;
    if(operador=='=' && sig_operador=='=')
        ans=res;
    return res;
}

function listenerOperacionesOP(event){
    let id=event.target.id;
    numero=parseFloat(display.value)
    switch(id){
        case 'boton-punto': 
            console.log(display.value.slice(-1))
            if(!display.value.includes('.') && (!espera_operador || operador=='='))
                display.value+='.';
            break
        case 'boton-C':
            display.value=0;
            disp_memory.innerText='';
            ans=null;
            espera_operador=false;
            operador='';
            break
        case 'boton-CE':
            display.value=0;
            break
    }
}

/*var contador = 0;

var listenerClick = () => {
  label.innerHTML = `El numero de click: ${++contador}`;
};
boton.addEventListener("click", listenerClick);*/