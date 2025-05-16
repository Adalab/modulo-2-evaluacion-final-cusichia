"use strict";

// CONSTANTES
const ulProducts = document.querySelector(".js_listProducts");
const btnFind = document.querySelector(".js_btnFind");
const inputFind = document.querySelector(".js_inputFind");
const btnComprar = document.querySelector(".js_btnComprar");

// VARIABLES GLOBALES
let urlProducts =
	"https://raw.githubusercontent.com/Adalab/resources/master/apis/products.json";

let allProducts = [];

// FUNCIONES
const renderProducts = (allProducts) => {
	console.log("pintando productos");
    ulProducts.innerHTML = ""; 
	for (const product of allProducts) {
		ulProducts.innerHTML += `<li class="liStyle">
              <img src="https://placecats.com/g/100/150" alt="imagen">
              <h3 class="productName">${product.title}</h3>
              <p class="productPrice">${product.price}</p>
              <button class="btnComprar js_btnComprar"> Comprar </button>
            </li>`;
	}
};

// FUNCIONES MANEJADORAS
function handleClickFind(event) {
	event.preventDefault(); // porque es un form y si no se recarga sin parar :(
	const inputFindValue = inputFind.value; // sacar el valor de lo que se escribe en el input
	const filterProducts = allProducts.filter(
		(product) =>
			product.title.toLowerCase().includes(inputFindValue.toLowerCase()) // filtrar sin tener en cuenta mayusculas y nminusculas
	);
	ulProducts.innerHTML = ""; // limpiar HTML para después pintar solo lo filtrado
	renderProducts(filterProducts);
}

/* function handleClickComprar(event) {
    console.log("click en comprar");
} */

// LLAMAR FUNCIONES

// EVENTOS
btnFind.addEventListener("click", handleClickFind);
//btnComprar.addEventListener("click", handleClickComprar);


// LLAMADAS A LA API
fetch(urlProducts)
	.then((response) => response.json())
	.then((data) => {
		console.log("hola fetch");
		allProducts = data;
		renderProducts(allProducts);
	});
