import { pesquisaProdutos } from "./serverDb.js";
import { card } from "./utils.js";

const produtosContainer = document.querySelector('.produtos__container')
const form = document.querySelector(".pesquisa-produto");

form.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const data = new FormData(e.target)
  const dataObjeto = Object.fromEntries(data.entries())

 produtosContainer.innerHTML=''
  pesquisaProdutos(dataObjeto).then(resposta =>{
    if (resposta.length ===0) return produtosContainer.innerHTML= `<h1 style="color:red">Produto Não encontrado</h1>`
    produtosContainer.innerHTML +=`
    <div class="produto__categoria">
    <h3 class="categoria__titulo">Resultado da Pesquisa = ${dataObjeto.name}</h3>

    <a href="/produtos.html" class="produto__link"
    >Ver tudo
    <img
        src="/assets/img/arrow.png"
        alt="Seta apontando para a direita"
    />
    </a>
</div> 
<div class="container__cards">
${card(resposta)}
</div>
`;

  })
})