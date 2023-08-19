import { conectaApi } from './conectaApi.js'

// C. R. U. D.
// ______________________________________________________________________
//                    - C : CREATE -
// ###### Cadastra Produto
export async function cadastraProduto  (imageUrl, categoria, name, price,description ) {
 const body = {imageUrl, categoria, name, price,description}
 const produto = await conectaApi.api2('','POST',body)
 return produto
}
// ______________________________________________________________________
// ______________________________________________________________________
//                    - R : READ -
// ###########      4 funções de Leitura de dados                  #########

// ### 1 - busca os produtos e organiza por cadegoria ###
export async function buscaDeProdutosPorCategoria() {
  const produtos = await conectaApi.api2()
  const categorias = produtos.map((produto) => produto.categoria)
  const categoriaUnica = [...new Set(categorias)]
  const produtosCategoria = categoriaUnica.map((categoria) => {
    const novoObjetoDeProdutos = {
      titulo: categoria,
      produtos: produtos.filter((produto) => produto.categoria == categoria),
    }
    return novoObjetoDeProdutos
  })
  return produtosCategoria
}
                 
// ##### 2 - Busca o produto por ID
export async function buscaPorId(id = '') {
  const produto = await conectaApi.api2(id)
  return produto
}
                 
//### 3 - busca produtos por categoria
export async function buscaPorCategoria(categoria) {
  const params = `?categoria=${categoria}`
  const produto = await conectaApi.api2(params)
  return produto
}
//## 4 -  %Like% Pesquisa por nomes do produto
export async function pesquisaProdutos(filtroLike = '') {
  const key = Object.keys(filtroLike)
  const value = filtroLike[key]
  const url = `?${key}_like=${value}`
  console.log(url)
  const produtosFiltrados = await conectaApi.api2(url)

  return produtosFiltrados
}
// ---------------------------------------------------------------------

// ______________________________________________________________________
//                    - U : UPDATE -
//    Edita os dados dos produto existentes da API
export async function editarProduto  (id,imageUrl, categoria, name, price,description ) {
  
  
  // const body = {imageUrl, categoria, name, price,description}
  console.log(id);
  // const produto = await conectaApi.api2(id,'PUT',body)
  return id
 }

// ---------------------------------------------------------------------
//                    - D : DELETE -
// ### Deleta Produto
export async function deletaProduto(idObj) {
  const id = idObj.id
  const produto = await conectaApi.api2(id, 'DELETE')
  const produtoDeletado = await produto.json()
  console.log(produtoDeletado)
  return produtoDeletado
}
// ______________________________________________________________________