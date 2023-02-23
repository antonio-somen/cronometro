primeiro = "0"
segundo = ""
operacao = ""
chave = true;
sinal = ""

var visor = document.getElementById("visor")
visor.innerHTML = primeiro+sinal+segundo

var limpa = function(){
    primeiro = "0"
    segundo = ""
    operacao = ""
    chave = true;
    sinal = ""
    visor.innerHTML = primeiro+sinal+segundo
}

var ponto = function(){
    salva(".")
}

var um = function(){
    salva(1)
}
var dois = function(){
    salva(2)
}

var tres = function(){
    salva(3)
}

var quatro = function(){
    salva(4)
}

var cinco = function(){
    salva(5)
}

var seis = function(){
    salva(6)
}

var sete = function(){
    salva(7)
}

var oito = function(){
    salva(8)
}

var nove = function(){
    salva(9)
}

var zero = function(){
    salva(0)
}

var somar = function(){
    chave = false;
    operacao = "soma"
    sinal = "+"
    visor.innerHTML = primeiro+sinal+segundo

}

var subtrair = function(){
    operacao = "sub"
    chave = false;
    sinal = "-"
    visor.innerHTML = primeiro+sinal+segundo

}

var multiplicar = function(){
    operacao = "mult"
    chave = false;
    sinal = "*"
    visor.innerHTML = primeiro+sinal+segundo

}

var dividir = function(){
    operacao = "div"
    chave = false;
    sinal = "/"
    visor.innerHTML = primeiro+sinal+segundo

}

var salva = function(n){
    if(primeiro === "0"){
        primeiro = ""
    }
    if(chave === true){
        primeiro = primeiro + n
    }else{
        segundo = segundo + n
    }
    visor.innerHTML = primeiro+sinal+segundo

    
}

var igual = function(){
        primeiro = parseFloat(primeiro)
        segundo = parseFloat(segundo)
        var result = 0
        if(operacao === "soma"){
            result = primeiro + segundo;
        }
        if(operacao === "sub"){
            result= primeiro - segundo;
        }
        if(operacao === "mult"){
            result= primeiro * segundo;
        }
        if(operacao === "div"){
            result= primeiro/segundo;
        }
        limpa()
        visor.innerHTML = result.toFixed(2)
}


