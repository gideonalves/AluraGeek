import {buscaPorCategoria, buscaPorId } from "./serverDb.js";
import { card } from "./utils.js";

const productView = document.querySelector('.product-view')
const containersCard = document.querySelector('.container__cards')
console.log(productView);
const id = location.search.slice(4)

buscaPorId(id).then(produto => {
    productView.innerHTML = `
        <div class="produtos-divisao">
            <img src="${produto.imageUrl}" alt="${produto.alt}">
            <div class="conteudo">
                <a class="voltar" href="/index.html">Voltar</a>
                
                <p class="product__view__titulo">${produto.name}</p>
                <span class="produto__preco">R$ ${produto.price}</span>

                <div class="descricao">
                    <p>${produto.description}</p>
                </div>

            </div>

        </div>  
    
    `
    buscaPorCategoria(produto.categoria).then(produtos => {
       containersCard.innerHTML = card(produtos)
    })

})
