function validarEntrada(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

function mudarFoco(atual, proximo) {
    if (atual.value.length === 1) {
        document.getElementById(proximo).focus();
    }
}

var palavra = ['K', 'I', 'T', 'T', 'Y'];
var guess = [];
var linhaAtual = 1;

function verificar(linha) {
    var inputs = [];
    for (var i = 1; i <= 5; i++) {
        inputs.push(document.getElementById('input' + linha + '_' + i));
    }

    var guess = inputs.map(function (input) {
        return input.value.toUpperCase();
    });

    if (guess.every(Boolean)) { 
        resetClasses(inputs);

        for (var i = 0; i < 5; i++) {
            if (guess[i] === palavra[i]) {
                inputCorreto(linha, i + 1); 
            } else if (palavra.includes(guess[i])) {
                inputMeio(linha, i + 1);
            }
        }
    } else {
        alert('Preencha todos os inputs!');
    }
}

function inputCorreto(linha, index) {
    var input = document.getElementById('input' + linha + '_' + index);
    input.classList.add('correto');
}

function inputMeio(linha, index) {
    var input = document.getElementById('input' + linha + '_' + index);
    input.classList.add('meio');
}

function resetClasses(inputs) {
    inputs.forEach(function (input) {
        input.classList.remove('correto', 'meio');
    });
}