const addToShoppingCart=(id)=>{
    let shoppingCart={}

    //get item from local storage
    const storedCart=localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }

    // add quantity
    const quantity=shoppingCart[id];
    if(quantity){
        const newQuantity=quantity+1
        shoppingCart[id]=newQuantity

    }else{
        shoppingCart[id]=1
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const getStoredCart=()=>{
    let shoppingCart={}
    // get shopping cart from local storage
    const storedCart=localStorage.getItem('shopping-cart')
    // console.log(storedCart);
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
        // console.log(shoppingCart);
    }
return shoppingCart
}
const removeFormDb=(id)=>{
    const storedCart=localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
    }
}
const deleteShoppingCart=()=>{
    localStorage.removeItem('shopping-cart')
}

export { addToShoppingCart, getStoredCart, removeFormDb, deleteShoppingCart };

