import { data } from './data/data.js';

const templateCard = document.getElementById('template-card').content;
const items = document.getElementById('items');
const fragment = document.createDocumentFragment();
const search = document.getElementById('search')

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})


const loadData = dat => {
    dat.forEach(personaje => {
        const { name, image } = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
 
    items.appendChild(fragment);
}


search.addEventListener('keyup', () => {
    const txtSearch = document.getElementById('search').value;
    const buscado = data.filter(p => p.name.toLowerCase().includes(txtSearch.toLowerCase()))
    items.innerHTML = ""
    loadData(buscado)

})
