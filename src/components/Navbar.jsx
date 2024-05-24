import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href="/">PetCo</Link>
        </p>
        <button type="button" className='cart-icon' >
        <span className='cart-item-qty'></span>
            <AiOutlineShopping />          
        </button>
    </div>
  )
}

export default Navbar