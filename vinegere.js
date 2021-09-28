function cifrarVinegere(abecedario){
    let texto = document.datosVinegere.texto2.value;
    let clave = document.datosVinegere.clave2.value;
    if(texto == ""){
        alert('Ingrese el texto');
    }
    if(clave == ""){
        alert('Ingrese la clave');
    }
    if(texto != "" && clave != ""){
        let ans = "";
        let indClave = 0;
        for(let i = 0; i < texto.length; ++i){
            if(texto[i] == ' '){
                ans+= ' ';
            }else{
                let pos = 0, posClave = 0;
                for(let j = 0; j < 26; ++j){
                    if(abecedario[j] == texto[i]){
                        pos = j;
                    }
                    if(abecedario[j] == clave[indClave]){
                        posClave = j;
                    }
                }
                ans+= abecedario[(pos + posClave) % 26];
                indClave+=1;
                if(indClave > clave.length - 1){
                    indClave = 0;
                }
            }
        }
        document.datosVinegere.respuesta2.value = ans;
    }
    return false;
}

function descifrarVinegere(abecedario){
    let texto = document.datosVinegere.texto2.value;
    let clave = document.datosVinegere.clave2.value;
    if(texto == ""){
        alert('Ingrese el texto');
    }
    if(clave == ""){
        alert('Ingrese la clave');
    }
    if(texto != "" && clave != ""){
        let ans = "";
        let indClave = 0;
        for(let i = 0; i < texto.length; ++i){
            if(texto[i] == ' '){
                ans+= ' ';
            }else{
                ans+= abecedario[(abecedario.indexOf(texto[i]) - abecedario.indexOf(clave[indClave])) % 26];
                indClave+=1;
                if(indClave == clave.length){
                    indClave = 0;
                }
            }
        }
        document.datosVinegere.respuesta2.value = ans;
    }
    return false;
}