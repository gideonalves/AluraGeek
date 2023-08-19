async function api2(params = '', method = 'GET', body = {}) {
  const config = {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  const resposta = await fetch(
    `http://localhost:3000/produto/${params}`,
    method === 'GET' ? undefined : config,
  )
  const produtos = await resposta.json()

  
  return produtos
}

export const conectaApi = {
  api2,
}
