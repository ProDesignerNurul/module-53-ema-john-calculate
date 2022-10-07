import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoaders = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const saveCart = getStoredCart();
    const initialCart = [];

    for(const id in saveCart){
        const addedCart = products.find(product => product.id === id);
        if(addedCart){
            const quantity = saveCart[id];
            addedCart.quantity = quantity;
            initialCart.push(addedCart);
        }
    }

    return {products: products, initialCart: initialCart};
}