import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillAmazonSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2024 PetCo All rights reserved</p>
      <p className='icons'>
        <AiFillAmazonSquare/>
        <AiFillInstagram/>
        <AiFillLinkedin/>
      </p>
    </div>
  )
}

export default Footer
