import React from 'react'
import Navbar from './Navbar'
import Fotter from './Fotter'
import { Link } from 'react-router-dom'

export default function Cart() {

    
  return (
    <>
    <Navbar/>
    <div className='flex flex-col w-full min-h-screen p-5 bg-[#e3e6e6ff] '>

        <div className='flex bg-white m-5 p-5  gap-4 items-center max-sm:flex-col'>
            <img className='h-52' src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'/>
            <div className='flex flex-col'>
            <h1 className='font-bold text-lg max-sm:text-base max-sm:font-medium'>Your Amazon Cart is empty</h1>
            <div className='flex gap-5 mt-5 max-sm:flex-col '>
                <Link to={'/SignIn'}>
                <button className='bg-[#ffd814ff] rounded-md hover:bg-[#ffd814] p-2 w-fit  max-sm:w-full '> Sign in to your account </button>
 
                </Link>
            <button className='bg-white rounded-md hover:bg-[#ffffffb9] p-2 border border-black w-fit max-sm:w-full '> Sign up now </button>
            </div>
        </div>
            
        </div>

    </div>
<Fotter/>
    </>
  )
}
