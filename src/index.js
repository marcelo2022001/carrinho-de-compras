import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
const myWishlist = [];

console.log("\n");

console.log("Bem vindo ao Carrinho de compras da Shopee.\n");

const item1 = await createItem("Tênis Nike", 20.99, 11);
const item2 = await createItem("Camisa Adidas", 39.99, 2);

// Adiciona itens ao carrinho
await cartService.addItem(myCart, item1);

await cartService.addItem(myCart, item2);


// Remover um item do carrinho
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);

//Mostra itens contidos no carrinho
await cartService.displayCart(myCart);


//Deleta itens do carrinho
//await cartService.deleteItem(myCart, item1.name);
//await cartService.deleteItem(myCart, item2.name);

await cartService.calculeTotalCarinho(myCart);

console.log("\n")