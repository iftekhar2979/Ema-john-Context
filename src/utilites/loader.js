import { getStoredCart } from './fakeDb';
export const getProductAndCart = async () => {
  const productData = await fetch('products.json');
  const products = await productData.json();
  //    console.log(products);

  const savedCart = getStoredCart();
  // console.log(savedCart);
  const intialCart = [];
  if (savedCart) {
    for (const id in savedCart) {
      const foundProduct = products.find((product) => product.id === id);
      if (foundProduct) {
        const quantity = savedCart[id];
        foundProduct.quantity = quantity;
        intialCart.push(foundProduct);
        //   console.log(intialCart);
      }
    }
  }
  return { products, intialCart };
};
