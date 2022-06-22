const nombrePizza = document.getElementById('nombrePizza');
const btnBuscar = document.getElementById('btnBuscar');
const btnTodo = document.getElementById('bntTodos');
const containerCard = document.querySelector('.container__card');
const pizzas = document.querySelector('.pizzas');
const templateCard = document.querySelector('#templateCard').content;
const templateCardSearch = document.querySelector('#templateCardSearch').content;
const fragment = document.createDocumentFragment();


const Pizza = [{
        ID: 1,
        nombre: 'Muzzarella',
        ingradientes: ["Muzzarella", "Salsa de tomate", "Aceituna", "Oregano"],
        precio: 540,
        img: './assets/img/muzza.jpg'
    },
    {
        ID: 2,
        nombre: 'Napolitana',
        ingradientes: ["Muzzarella", "Salsa de tomate", "Tomate", "Jamon"],
        precio: 580,
        img: './assets/img/napo.jpg'
    },
    {
        ID: 3,
        nombre: 'Calabresa',
        ingradientes: ["Muzzarella", "Longaniza", "Provolone", "Aceituna"],
        precio: 600,
        img: './assets/img/calabresa.jpg'
    },
    {
        ID: 4,
        nombre: '4 Queso',
        ingradientes: ["Muzzarella", "Roquefort", "Parmesano", "Gruyer"],
        precio: 620,
        img: './assets/img/4Q.jpg'
    },
    {
        ID: 5,
        nombre: 'Panceta',
        ingradientes: ["Muzzarella", "Panceta", "Huevo frito", "Aceituna"],
        precio: 670,
        img: './assets/img/panceta.jpg'
    },
    {
        ID: 6,
        nombre: 'Jamon crudo',
        ingradientes: ["Muzzarella", "Jamon crudo", "Aceituna negras", "Rucula"],
        precio: 700,
        img: './assets/img/jamon_crudo.jpg'
    }
]

localStorage.setItem('ListaPizza', JSON.stringify(Pizza));

const limpiarBusqueda = () => {
    while (containerCard.firstChild) {
        containerCard.removeChild(containerCard.firstChild);
    }
}
const limpiar = () => {
    while (pizzas.firstChild) {
        pizzas.removeChild(pizzas.firstChild);
    }
}

btnBuscar.addEventListener('click', () => {
    limpiar();
    limpiarBusqueda();
    let pizza = nombrePizza.value;
    const resultadoBusqueda = Pizza.find(el => el.nombre.toLowerCase() == pizza);
    if (resultadoBusqueda) {
        templateCardSearch.querySelector('h3').textContent = `${resultadoBusqueda.nombre}`;
        templateCardSearch.querySelector('img').setAttribute('src', `${resultadoBusqueda.img}`);
        templateCardSearch.querySelector('h4').textContent = `$${resultadoBusqueda.precio}`;
        templateCardSearch.querySelector('p').textContent = `Los ingredientes son: ${resultadoBusqueda.ingradientes}`;
        const clone = document.importNode(templateCardSearch, true);
        fragment.appendChild(clone);
        containerCard.appendChild(fragment);
        nombrePizza.value = '';
    } else alert('No se encontro la pizza');

})

const mostrar = (array) => {
    array.forEach((pizza) => {
        templateCard.querySelector('h3').textContent = `${pizza.nombre}`;
        templateCard.querySelector('img').setAttribute('src', `${pizza.img}`);
        templateCard.querySelector('h4').textContent = `$${pizza.precio}`;
        templateCard.querySelector('p').textContent = `Los ingredientes son: ${pizza.ingradientes}`;
        const clone = document.importNode(templateCard, true);
        fragment.appendChild(clone);
        pizzas.appendChild(fragment);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    mostrar(Pizza);
})

btnTodo.addEventListener('click', () => {
    limpiar();
    limpiarBusqueda();
    mostrar(Pizza)
})