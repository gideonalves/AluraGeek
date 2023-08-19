
import { buscaDeProdutosPorCategoria,deletaProduto } from "./serverDb.js";
import { cardAdm, deleteCard, editarCard } from "./utils.js";
const produtosContainer = document.querySelector(".produtos__container");


buscaDeProdutosPorCategoria().then((produtos) => {
  produtos.map((produto) => {
    produtosContainer.innerHTML += ` 
    <div class="produto__categoria">
        <h3 class="categoria__titulo">${produto.titulo}</h3>

        <a href="/produtos.html" class="produto__linkAdm"
        >Ver tudo
        <img
            src="/assets/img/arrow.png"
            alt="Seta apontando para a direita"
        />
        </a>
    </div> 
    <div class="container__cards">
    ${cardAdm(produto.produtos)}
    </div>
  `;
  });
 
  const formEditar = document.getElementsByClassName('editar-produto')
  const formDelete = document.getElementsByClassName('deleta-produto')
  
  deleteCard(formDelete,deletaProduto)
  editarCard(formEditar)
    

   
    
  });
  
 
// ## Deletar ###



