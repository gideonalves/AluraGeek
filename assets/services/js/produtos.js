let produtosGeek = []

const endpointDaApi = "http://localhost:3000/produto"

getBuscarProdutoDaAPI()

const elementoParaInserirProdutos = document.getElementById('produtosGeek')

const elInserirProduto = document.createElement('div')  
elInserirProduto.className = 'produtos__container'

const cardContainer = document.createElement('div'); 
cardContainer.className = 'container__cards'
async function getBuscarProdutoDaAPI() {
    const res = await fetch(endpointDaApi)
    produtosGeek = await res.json()

    exibirProdutosNaTela(produtosGeek)
}

function exibirProdutosNaTela(listaDeProdutos) {
    const categoria = new Set(listaDeProdutos.map(categoria => categoria.categoria))


    categoria.forEach(produtoContainer => {
        
            elInserirProduto.innerHTML += `           
             
               
                 <div class="container__cards"> 
                    ${listaDeProdutos.filter(t => t.categoria.includes(produtoContainer)).map((produto) => `
                        <div class="produto__card">
                            <img src="${produto.imageUrl}" alt="">
                            <p class="protuto__titulo">${produto.name}</p>
                            <span class="produto__preco">R$ ${produto.price}</span>
                        </div>
                    
                    `)}
                </div>
           
        `})
       
        elementoParaInserirProdutos.appendChild(elInserirProduto)
}  
