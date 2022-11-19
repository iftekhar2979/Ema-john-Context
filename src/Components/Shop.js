import React, { useContext } from 'react';
import { addToShoppingCart } from '../utilites/fakeDb';
import { cartContext, productContext } from './Root';
import ShopCard from './ShopCard';

const Shop = () => {
    const shopData=useContext(productContext)
    // console.log(shopData);
    const [carts,setCarts]=useContext(cartContext)
    const handleClick=(product)=>{
            let newCart=[]
            const exists=carts.find(existingProduct=>existingProduct.id===product.id)
            if(!exists){
                product.quantity=1
                newCart=[...carts,product]
            }else{
                const rest=carts.filter(existingProduct=>existingProduct!==product.id)
                exists.quantity=exists.quantity+1
                newCart=[...rest,exists]
                // console.log(newCart);
            }
            setCarts(newCart)
            addToShoppingCart(product.id)           
    }
    console.log(carts);
    return (
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-6' >
      {
        shopData.map(shopItem=><ShopCard key={shopItem.id}  handleClick={handleClick} data={shopItem}></ShopCard>)
      }
      </div>
    );
};

export default Shop;