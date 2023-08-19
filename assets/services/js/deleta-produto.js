// export const deletaProduto = async (idObj) => {

//   const id = idObj.id
//     const conexao = await fetch(`http://localhost:3000/produto/${id}`, {
//     method: "DELETE",
//     headers: {
//       'Content-type': 'application/json'
//     },

//   })
//   console.log(id);
//   const conexaoConvertida = await conexao.json()
//   return conexaoConvertida
//   }

const produto = {
  categoria: "PET",
      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEgASAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EADQQAAIBAwIEBAMFCQAAAAAAAAECAwAEEQUSBhMhMRRBUWFxgaEHIjJCsRUzNGJzkcHR8P/EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/EACIRAAMAAgEEAgMAAAAAAAAAAAABAgMRBBIhMVEyQSJCkf/aAAwDAQACEQMRAD8A3GlfMsiQxtJK6pGgyzMcAD1JqOj4h0WRtqarZk/1l6/WqbSLSb8EnSvOKeGYAwyxyA9ijA1HarrcGnq4CmWRe4BwAfTPrVVcyttlzFU9JErVV45139nWwsLeXl3NwhZnBwY484J9iT0Hz9Kjn4r1OdzyxFEo8lXP1NV3iWKfWy1023xgjCbuwdQc49jS1cma7SN4+LUvdnVwsqy6xpqr25mQfgCf8VqdZj9lUEs9480sZZLSNo+Y35ZTjoPfbn/jWnUbD8dguS/z16FKUooueN5aw31pNa3SB4ZkKOucZBrMOJOGNR0fdLbqbuyXtIB99R/MB+vb4VqtKzUqjcZHJhWnPHeanbrJErNzFIkUgMOoyM+Yq2X7HDKpLEN1yevWrhe8L6Ne3wvprMC5DBuYjsuSBgEgHBrJPtNstc0zX4pdOLmxwMSAZAbJyG+WKTvjtsdjkzrsiTa8gtZSJH79ahtS4yttN1e3tmiaSI4BkVh0z3znp0qNvppLR4muImnuJckKWxgDGTXZoGj6dxFdWtxtjdFId1BzlfMdDj2/vQ8WJeaXYLly/UvubtpkUUVhAIFUKyBsqPxEjvXVXhZfwkOcfgHbtXvXQnwjl09tilKVooUpSoQVXNYVZbpdpwG7Zxgn3+NTGp3Hh7SQr+8KnaKrVxMLlN4by9expbPf0hnBH7FY4q4KOrzRyQssaocgFc7emOhru4U4at+GbdmEjS3LkdcbQPYDyHzqyEN4Zevl1NcFwxjRRGcvnIzW32gpLdlwtseHjA8lAr0rj0mXnWMbHv512USHuUwNLVNClKVoyKUpUIQWtSkXLq2NqpUZZwo5O3tjOfWvzXbwyC82ECRAQPPsahtP1J0e2iMnL5hOCBnPtSPUnkH+lrEWd1Iix6fWot4zJKpyeg8ql03YTfjJ71E6lHJ4V3VTywRv2nB6nFMWuwCHplm0Vs22PQAdKkKr/Ck7Ms0LkllCsWPvVgrWL4A8q1bFKUogMV8ucKT6ClKhDOJtt+/jLNg/Ob7+PQjB+YNQ1rq8GniLxiLy95DOT1QjtgUpXPhLql+zpPfTS9FjtOJ4JbmGzSxu2u3j3qjgKMfE/wCqs1tYzSWM5u0VZpUwEXsvmPrSlOJbEqfT4I/hLcNSv0b8qIP1q00pWOO94zXJWsn8FKUo4A//2Q==",
      name: "Chihuahua",
      price: "1000.00",
      alt: "Product",
      section: "consoles",
      description: "Voluptas voluptatum quibusdam simil"
}

async function api(params = '', method = 'GET', body = {}) {
  const config = {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify(body)

  }
  const resposta = await fetch(`http://localhost:3000/produto/${params}`,method==='GET'?undefined:config )
  const produtos = await resposta.json()

  console.log(produtos)
  return produtos
}

api('','POST',produto)
