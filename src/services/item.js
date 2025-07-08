// Caso de usos dos itens do carrinho
// Criar itemm com subtotal, quantidade e nome
export default createItem

async function createItem(name, price, quantity) {
    return {
        name: name,
        quantity: quantity,
        price: price,
        subtotal: () => Number((price * quantity).toFixed(2))
    };
}


