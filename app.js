let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const nomeNormalizado = nome.toLowerCase();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Validação: permite apenas letras, sem espaços
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;

    if (!regex.test(nome)) {
        alert("Por favor, insira um nome válido. Números, espaços e caracteres especiais não são permitidos.");
        return;
    }

    // Verifica se o nome já está na lista (ignorando maiúsculas e minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nomeNormalizado)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;

    // Limpar lista de amigos após sorteio
    amigos = [];
    atualizarListaAmigos();
}
