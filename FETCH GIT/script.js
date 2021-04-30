function preencherDados(dados) {
    document.getElementById('login').innerHTML = dados.login;
    document.getElementById('foto').innerHTML = "<img class='foto' src='" + dados.avatar_url + "'>";
    document.getElementById('qtdFol').innerHTML = dados.followers;
    document.getElementById('qtdSeg').innerHTML = dados.following;
    document.getElementById('qtdRep').innerHTML = dados.public_repos;
}

function inserirSeguidores(dados) {
    document.getElementById('seguidores').innerHTML = '';
    dados.forEach(function(dado) {
        let li = document.createElement('li');
        li.innerHTML = dado.login;
        document.getElementById('seguidores').appendChild(li);
    })
}

function pegarDadosSeguidores() {
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/' + nome + '/followers')
        .then(response => response.json())
        .then(dados => inserirSeguidores(dados))
}


function pegarDadosGitHub() {
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/' + nome)
        .then(response => response.json())
        .then(dados => preencherDados(dados))
    pegarDadosSeguidores();
}