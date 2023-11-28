function comment() {
    var nome = document.getElementById('form_nome').value;
    var mascotes = document.getElementsByName('form_masc');
    var selectMasc = [];

    for (var i = 0; i < mascotes.length; i++) {
        if (mascotes[i].checked) {
            selectMasc.push(mascotes[i].labels[0].textContent);
        }
    }

    var comentario = document.getElementById('form_comment').value;

    var novoComentario = document.getElementById('novo_comentario');
    novoComentario.innerHTML = '';

    if (nome || selectMasc.length > 0 || comentario) {
        var spanComentario = document.createElement('span');
        spanComentario.className = 'flex';

        var imgComentario = document.createElement('img');
        imgComentario.src = 'imgs/head_kitty.png';
        imgComentario.alt = '';
        imgComentario.className = 'img_3';

        var sectionComentario = document.createElement('section');

        if (nome) {
            var nomeComentario = document.createElement('p');
            nomeComentario.className = 'destaque';
            nomeComentario.textContent = nome;
            sectionComentario.appendChild(nomeComentario);
        }

        if (selectMasc.length > 0) {
            var mascotesComentario = document.createElement('p');
            mascotesComentario.textContent = 'Meus mascotes prediletos são: ' + selectMasc.join(', ');
            mascotesComentario.className = 'destaque';
            sectionComentario.appendChild(mascotesComentario);
        }

        if (comentario) {
            var comentarioComentario = document.createElement('p');
            comentarioComentario.textContent = comentario;
            sectionComentario.appendChild(comentarioComentario);
        }

        spanComentario.appendChild(imgComentario);
        spanComentario.appendChild(sectionComentario);
        novoComentario.appendChild(spanComentario);
        novoComentario.style.display = 'flex';

        document.getElementById('hr').scrollIntoView({ behavior: 'smooth' });
    }
}