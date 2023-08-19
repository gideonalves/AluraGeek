export function card(produtos = []) {
  let cards = "";
  produtos.map((produto) => {
    cards += `
        <div class="produto__card">
        <img src="${produto.imageUrl}" alt="${produto.alt}" />
        <p class="protuto__titulo">${produto.name}</p>
        <span class="produto__preco">R$ ${produto.price}</span>
        <a href="/product-view.html?id=${produto.id}" class="link__ver__produto">Ver produto</a>
        </div>
        `;
  });

  return cards;
}

export function cardAdm(produtos = []) {
  let cards = "";
  produtos.map((produto) => {
    cards += `
      <div class="produto__card produto__link">
      <img src="${produto.imageUrl}" alt="${produto.alt}" />
          <p class="protuto__titulo">${produto.name}</p>
          <span class="produto__preco">R$ ${produto.price}</span>
          <a href="/product-view.html?id=${produto.id}" class="link__ver__produto">Ver produto</a>

          <div class="produtos__botoes">
          <form class="editar-produto">
          <input type="hidden" name="id" value=${produto.id} />
          <button class="produto__btn produto__btn--editar" title="Editar produto"></button>
          </form>
          <form class="deleta-produto">
            <input type="hidden" name="id" value=${produto.id} />
            <button class="produto__btn produto__btn--deletar" type="submit" title="Deletar produto"></button>
          </form>
          </div>
      </div>
        `;
  });

  return cards;
}

export function deleteCard(formulario = [], cb) {
  for (let index = 0; index < formulario.length; index++) {
    formulario[index].addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const dataObjeto = Object.fromEntries(data.entries());
      console.log(dataObjeto);

      const isDeleted = confirm("tem certeza que vai deletar esse produto?");
      if (!isDeleted) return;
      cb(dataObjeto).then((res) => {
        console.log("deletado com sucesso! => " + res);
        return res;
      });
    });
  }
}
export function editarCard(formulario = []) {
  for (let index = 0; index < formulario.length; index++) {
    formulario[index].addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const dataObjeto = Object.fromEntries(data.entries());
      console.log(dataObjeto);
    });
  }
}
