// Ações do carrinho

// Casos de uso

// add item 
async function addItem(useCart, item) {
  useCart.push(item);  
}

// calcular o total
async function calculeTotalCarinho(useCart) {
    const result = useCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total do carrinho: R$ ${result}`);
}

// del item 
async function deleteItem(useCart, name) {
    const index = useCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        useCart.splice(index, 1);
        console.log(`Item ${name} removido do carrinho.`);
    } else {
        console.log(`Item ${name} não encontrado no carrinho.`);
    }
}
// remover item -> Diminuir ou aummentar a quantidade do item
async function removeItem(useCart, item) {
  // Encontrar o índice do item no carrinho
const indexFound = useCart.findIndex((cartItem) => cartItem.name === item.name);
 
// Caso nao encontrado
if (indexFound === -1) {
    console.log(`Item ${item.name} não encontrado no carrinho.\n`);
    return;
}

// Se o item for encontrado, verifica a quantidade
if (useCart[indexFound].quantity > 1) { 
  useCart[indexFound].quantity -= 1; // Diminui a quantidade
  console.log(`Quantidade do item ${item.name} reduzida para ${useCart[indexFound].quantity}`);
return
} 
// Caso a quantidade seja 1, remove o item do carrinho
else {
  useCart.splice(indexFound, 1); // Remove o item do carrinho
  console.log(`Item ${item.name} removido do carrinho.`);
  return
}


  /** 
  // Ajusta o índice para corresponder à posição do item no array
  // O índice é baseado em 1, então subtrai 1 para obter o índice correto do array
 const deleteIndex = item - 1;

  // Se index é maior que 0 e menor que o tamanho do carrinho, remove o item
  if(item >= 0 && item < useCart.length) {
    useCart.splice(deleteIndex, 1);
  }  */

}

async function displayCart(useCart) {
    // Implementar a lógica para exibir o carrinho
    console.log("Itens no carrinho:");
    useCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal =  ${item.subtotal()}`
        );
    });
}

export {
    addItem,
    calculeTotalCarinho,
    deleteItem,
    removeItem, 
    displayCart
};
