//komponente u react-u mogu biti klasne i funkcionalne, sada se cesce koriste funkcionalne

import React from 'react'
import {BsCart2} from 'react-icons/bs'

function NavBar({cartNum}) {
  
  return (
    <div className='navBar'>
        <a>My Store</a>
        <div className='cart-items'>
            <BsCart2 />
            <p className='cart-num'>{cartNum}</p>
        </div>
    </div>
  )
}

export default NavBar;
