"use strict";

// CONSTANTES
const ulProducts = document.querySelector(".js_listProducts");
const btnFind = document.querySelector(".js_btnFind");
const inputFind = document.querySelector(".js_inputFind");
const btnComprar = document.querySelector(".js_btnComprar");
const ulCart = document.querySelector(".js_listCart");
const btnEmptyCart = document.querySelector(".js_btnEmptyCart");

// VARIABLES GLOBALES
let urlProducts =
	"https://raw.githubusercontent.com/Adalab/resources/master/apis/products.json";

let allProducts = [];
let cartProducts = [];

// FUNCIONES
function renderOneProductComprar(oneProduct){
	if (oneProduct.price >= 100){
		let html = `<li class="ulStyle__liStyle">
              <img class="ulStyle__img" src="${oneProduct.image}" alt="imagen">
              <h4 class="ulStyle__productNameDestacado">${oneProduct.title}</h4>
              <p class="ulStyle__productPrice">${oneProduct.price}€</p>
			  <p class="ulStyle__productName">${oneProduct.rating.rate}</p>
              <button class="ulStyle__btnComprar js_btnComprar" id="${oneProduct.id}"> Comprar </button>
            </li>`;
			return html;
	} else {
		let html2 = `<li class="ulStyle__liStyle">
              <img class="ulStyle__img" src="${oneProduct.image}" alt="imagen">
              <h4 class="ulStyle__productName">${oneProduct.title}</h4>
              <p class="ulStyle__productPrice">${oneProduct.price}€</p>
			  <p class="ulStyle__productName">${oneProduct.rating.rate}</p>
              <button class="ulStyle__btnComprar js_btnComprar" id="${oneProduct.id}"> Comprar </button>
            </li>`;
			return html2;
	}

}

function renderOneProductEliminar(oneProduct) {
	let html = `<li class="ulStyle__liStyle">
              <img class="ulStyle__img" src="${oneProduct.image}" alt="imagen">
              <h4 class="ulStyle__productName">${oneProduct.title}</h4>
              <p class="ulStyle__productPrice">${oneProduct.price}€</p>
			  <p class="ulStyle__productName">${oneProduct.rating.rate}</p>
              <button class="ulStyle__btnEliminar js_btnComprar" id="${oneProduct.id}"> Eliminar </button>
            </li>`;
	return html;
}

function renderProducts(allProducts) {
    ulProducts.innerHTML = ""; 
	for (const product of allProducts) {
		let foundProducts = cartProducts.find((productCart) => productCart.id === product.id)
		if (foundProducts != undefined) {
			ulProducts.innerHTML += renderOneProductEliminar(product);
		} else {
			ulProducts.innerHTML += renderOneProductComprar(product);
		}
	}
};

function renderCart() {
	ulCart.innerHTML = ""; 
	for (const product of cartProducts) {
		ulCart.innerHTML += renderOneProductEliminar(product);
	}
}


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

function handleClickComprar(event) {
	const clickIdComprar = parseInt(event.target.id);
	
	if (!clickIdComprar) return; //si no clico encima del boton comprar salgo de la funcion

	let foundProducts = allProducts.find((product) => product.id === clickIdComprar);

	//condición para añadir, que no esté en el array de carrito
	let existeEnCart = cartProducts.findIndex(product => product.id === clickIdComprar);
	
	if (existeEnCart === -1) {
		cartProducts.push(foundProducts); 
	} else {
		cartProducts.splice(existeEnCart, 1);
	}

	renderCart(cartProducts);
	renderProducts(allProducts);
	
	localStorage.setItem('myCart', JSON.stringify(cartProducts));
}

function handleClickbtnEmptyCart() {
	cartProducts = [];
	ulCart.innerHTML = "";
	localStorage.removeItem("myCart"); 
	renderProducts(allProducts);
}

// LLAMAR FUNCIONES


// EVENTOS
btnFind.addEventListener("click", handleClickFind);
ulProducts.addEventListener("click", handleClickComprar);
ulCart.addEventListener("click", handleClickComprar);
btnEmptyCart.addEventListener("click", handleClickbtnEmptyCart);


// LLAMADAS A LA API
fetch(urlProducts)
	.then((response) => response.json())
	.then((data) => {
		allProducts = data;

		localStorage.setItem("Products", JSON.stringify(allProducts)); //guardar todos productos en LS

		renderProducts(allProducts);
	});

if (localStorage.getItem("myCart") !== null) {
	cartProducts = JSON.parse(localStorage.getItem("myCart"));
	renderProducts(allProducts);
	renderCart();
}
