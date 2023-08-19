import { buscaDeProdutosPorCategoria } from "./serverDb.js";
import { card } from "./utils.js";
const produtosContainer = document.querySelector(".produtos__container");

buscaDeProdutosPorCategoria().then((produtos) => {
  produtos.map((produto) => {
    produtosContainer.innerHTML += ` 
    <div class="produto__categoria">
        <h3 class="categoria__titulo">${produto.titulo}</h3>

        <a href="/produtos.html" class="produto__link"
        >Ver tudo
        <img
            src="/assets/img/arrow.png"
            alt="Seta apontando para a direita"
        />
        </a>
    </div> 
    <div class="container__cards">
    ${card(produto.produtos.slice(0,6))}
    </div>
  `;
  });
});

