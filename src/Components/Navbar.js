import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-sky-400'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>Ema John</Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
             <Link to='/'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='shop'>Shop</Link>
            </li>
            <li>
              <Link to='cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
