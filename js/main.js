let elLIst = document.querySelector('.list');
let elItem = document.querySelector('.items').content;
let elfragmet = document.createDocumentFragment();
iterat(0,pokemons.length);
function iterat(first,last){
  elLIst.innerHTML = "";
  for(let i of pokemons.slice(first,last)){
    let clon = elItem.cloneNode(true);
    clon.querySelector('.img').src = i.img;
    clon.querySelector('.title').textContent = i.candy;
    clon.querySelector('.text').textContent = i.num;
    elLIst.appendChild(clon);
  }
}


