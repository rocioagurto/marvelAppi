const formulario = document.getElementById('formulario'),
      boton = document.getElementById('boton'),
      resultado = document.getElementById('marvel-row')
     

const  searchHero = ()=>{
  const ts = 1,
  texto = formulario.value.toLowerCase(),
  urlAPI = `https://gateway.marvel.com/v1/public/characters?name=${texto}&ts=${ts}&apikey=3719936bbb13a511b2a1272077134a0c&hash=bbb7df7095952ab7cdf7dc9b51abb299`;
  fetch(urlAPI)
  .then(res => res.json())
  .then(res => {
    resultado.innerHTML = ''
    res.data.results.forEach(e => {
       resultado.innerHTML += `
       <div class=" col-12 col-md-4 col-lg-3 hero card m-3 " >
         <div class="hero-img mt-3" >
         <p class="description pr-3">${e.description}</p>
         <img class="imagen card-img-top img-thumbnail" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.name}">
         </div>
         <div class="card-body">
           <h3 class="card-title">${e.name}</h3>
         </div>
         </div>
       `
    })
    setTimeout(function(){ 
      formulario.value = ''; 
    }, 1000);
  })
  .catch(e => console.log(e))
}
boton.addEventListener('click', searchHero)

function render() {
  const ts = 1,
    urlAPI = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=3719936bbb13a511b2a1272077134a0c&hash=bbb7df7095952ab7cdf7dc9b51abb299`;
  fetch(urlAPI)
  .then(res => res.json())
  .then(res => {
    resultado.innerHTML = ''
    res.data.results.forEach(e => {
      resultado.innerHTML += `
       <div class=" col-12 col-md-4 col-lg-3 hero card m-3 " >
         <div class="hero-img mt-3" >
         <p class="description pr-3">${e.description}</p>
         <img class="imagen card-img-top img-thumbnail" src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.name}">
         </div>
         <div class="card-body">
           <h3 class="card-title">${e.name}</h3>
         </div>
         </div>`
    })
  })
  .catch(e=> console.log(e))
}

render()