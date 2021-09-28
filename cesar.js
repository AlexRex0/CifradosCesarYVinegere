function cifrarCesar(abecedario){
    let texto = document.datosCesar.texto1.value;
    let clave = document.datosCesar.clave1.value;
    if(texto == ""){
        alert('Ingrese el texto');
    }
    if(clave == ""){
        alert('Ingrese la clave');
    }
    if(texto != "" && clave != ""){
        let ans = "";
        clave = parseInt(clave);
        for(let i = 0; i < texto.length; ++i){
            if(texto[i] == ' '){
                ans+= ' ';
            }else{
                let pos = 0;
                for(let j = 0; j < 26; ++j){
                    if(abecedario[j] == texto[i]){
                        pos = j;
                    }
                }
                ans+= abecedario[(pos + clave) % 26];
            }
        }
        document.datosCesar.respuesta1.value = ans;
    }
    return false;
}