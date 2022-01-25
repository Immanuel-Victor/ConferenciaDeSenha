
let min = 8;
let max = 32;

const botão = document.querySelector('#enviar');
botão.addEventListener('click', () => {
    let valor = document.querySelector('#senhaInp').value;
    return validaComplexidade(valor);
})


function validaComplexidade(valor){

        let contadorNumero = 0;
        let contadorMaiusculo = 0;
        let contadorMinusculo = 0;
        let contadorEspecial = 0;


    if(valor.length >= min && valor.length <= max){
     

        for(let i = 0; i < valor.length; i++){
            if(valor.charCodeAt(i) >= 48 && valor.charCodeAt(i) <= 57){
                contadorNumero+=1;
            }
            if(valor.charCodeAt(i) >= 65 && valor.charCodeAt(i) <= 90){
                contadorMaiusculo+=1;
            }
            if(valor.charCodeAt(i) >= 97 && valor.charCodeAt(i) <= 122){
                contadorMinusculo+=1;
            }
            if(valor.charCodeAt(i) < 48){
                contadorEspecial+=1;
            }
            if(valor.charCodeAt(i) > 57 && valor.charCodeAt(i) < 65){
                contadorEspecial+=1;
            }
            if(valor.charCodeAt(i) > 90 && valor.charCodeAt(i) < 97){
                contadorEspecial+=1;
            }
            if(valor.charCodeAt(i) > 122){
                contadorEspecial+=1;
            }
        }

        let somaContadoresCertos = contadorMinusculo+contadorMaiusculo+contadorNumero;
        
        
        if(somaContadoresCertos >= 3 && contadorEspecial == 0){
            return alert('1');
        }else if(contadorEspecial != 0 || somaContadoresCertos < 3){
            return alert('0');
        }else{
            return alert('0');
        }



    }else{
        alert('Insira um valor válido (entre 8 e 32 caracteres)');
    };
}

