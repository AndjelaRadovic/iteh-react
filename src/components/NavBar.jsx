//komponente u react-u mogu biti klasne i funkcionalne, sada se cesce koriste funkcionalne

import React from 'react'
import {BsCart2} from 'react-icons/bs'
import {Link}  from "react-router-dom";


function NavBar({cartNum}) {
  
  return (
    <div className='navBar'>
        <Link to="/">My Store</Link>
        <Link to='/cart' className='cart-items'>
            <BsCart2 />
            <p className='cart-num'>{cartNum}</p>
        </Link>
    </div>
  )
}

export default NavBar;
