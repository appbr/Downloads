
var jogador = 'x';
var jogada = 0;

function verificarJogo(id) {


    var enderoSRC_Resumido = enderecoSRC_Resumido(id);
    
    if (enderoSRC_Resumido == 'images/branco.png') {
        document.getElementById(id).src = "images/" + jogador + ".png";
        jogada++;
        if (verificarVitoria()) {
            var audio = document.querySelector('#vitoria')
            audio.play();
            msg.hidden = false;
            msg.innerHTML = `O vencedor é o jogador (${jogador})`
            enderecoSRC_Resumido = "images/branco.png"

           
            
        }

        if(jogada >=9){
            var falha = document.querySelector('#falha')
            falha.play();
            msg.hidden = false;
            msg.innerHTML = `EMPATE!!!`
            enderecoSRC_Resumido = "images/branco.png"
        }
        

        if (jogador == 'x') {
            jogador = 'o'
        } else {
            jogador = 'x'
        }







    }

}

function enderecoSRC_Resumido(id) {

    var src = document.getElementById(id).src;


    return src.substring(src.length - 17, src.length);

}

function reiniciar() {
    window.location.reload(true);

}

function esconderMsg() {
    var msg = window.document.getElementById('msg')
    msg.hidden = true;
}

function verificarVitoria() {
    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c2') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c3') && enderecoSRC_Resumido('c1') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c4') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c4') == enderecoSRC_Resumido('c6') && enderecoSRC_Resumido('c4') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c7') == enderecoSRC_Resumido('c8') && enderecoSRC_Resumido('c7') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c7') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c4') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c7') && enderecoSRC_Resumido('c1') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c2') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c2') == enderecoSRC_Resumido('c8') && enderecoSRC_Resumido('c2') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c6') && enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c3') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c1') == enderecoSRC_Resumido('c9') && enderecoSRC_Resumido('c1') != "images/branco.png") {
        return true;
    }

    if (enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c5') && enderecoSRC_Resumido('c3') == enderecoSRC_Resumido('c7') && enderecoSRC_Resumido('c3') != "images/branco.png") {
        return true;
    }
    return false;
}

function empate(){
    
}