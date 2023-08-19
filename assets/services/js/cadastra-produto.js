
import { cadastraProduto } from "./serverDb.js";

const form = document.querySelector(".cadastro-produto__form");

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const inputs = evento.target.querySelectorAll('.campo__texto')
    const imageUrl = evento.target.querySelector("#cadastro-produto__imagem").value;
    const alt = evento.target.querySelector("#cadastro-produto__alt").value;
    const name = evento.target.querySelector("#cadastro-produto__nome-produto").value;
    const price = evento.target.querySelector("#cadastro-produto__preco").value;
    const description = evento.target.querySelector("#cadastro-produto__descricao").value;
    
    cadastraProduto(imageUrl, alt, name, price, description)
    alert('Produto adicionado com sucesso!')
    inputs.forEach(input => {
        input.value = ''
    });

    window.location.href = '/index.html'

})

