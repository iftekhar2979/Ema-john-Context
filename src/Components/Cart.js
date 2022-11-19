import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFormDb } from '../utilites/fakeDb';
import CartItem from './CartItem';
import { cartContext } from './Root';

const Cart = () => {
  // const [carts,setCarts]=useState(intialCart)
  const [carts, setCarts] = useContext(cartContext);
  const handleChange = (product) => {
    const restProduct = carts.filter((rest) => rest.id !== product.id);
    setCarts(restProduct);
    removeFormDb(product.id);
  };
  // console.log(carts);
  const handleDelete = () => {
    setCarts([]);
    deleteShoppingCart();
  };
  let sum = 0;
  const handleGrandTotal = () => {
    for (let i = 0; i < carts.length; i++) {
      sum = sum + carts[i].price * carts[i].quantity;
    }
    return sum;
  };

  return (
    <div>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100'>
        <h2 className='text-xl font-semibold'>Your cart</h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
          {carts.map((item) => (
            <CartItem
              data={item}
              key={item.id}
              handleChange={handleChange}
            ></CartItem>
          ))}
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount:
            <span className='font-semibold'>{handleGrandTotal()}</span>
          </p>
          <p className='text-sm dark:text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            className='px-6 py-2 border rounded-md dark:border-violet-400'
          >
            Back
            <Link to='/shop'>
              <span className='sr-only sm:not-sr-only'>to shop</span>
            </Link>
          </button>
          <button
            type='button'
            className='px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400'
            onClick={() => handleDelete()}
          >
            <span className='sr-only sm:not-sr-only'>Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
