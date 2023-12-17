import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className='bg-[#00453eff] w-full p-5 flex justify-between  items-center gap-5 max-sm:py-2 max-sm:text-sm'>
       <Link to={'/'}>
       <img className='h-9 max-sm:h-3' src='https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/1280px-Amazon-logo-white.svg.png'></img>
       </Link>

            <ul className='max-sm:hidden'>
                <li className='text-[#ffffffbf]'>Deliver to</li>
                <li className='flex gap-1 justify-center items-center'>
                    <img className='h-4' src='https://cdn-icons-png.flaticon.com/128/346/346059.png?ga=GA1.1.1157155612.1701539888&semt=ais'/>
                    <h1 className='font-bold text-white'>Saudi Arabia</h1>
                </li>
            </ul>

            <div  className=' flex h-5 w-[40%]  '>
            <input className='w-full h-9 px-3 rounded-l-md max-sm:h-5' type='search' placeholder='Search Amazon'>
            </input>
            <img className='h-9 p-1 bg-[#ffded6ff] rounded-r-md  max-sm:h-5' src='https://cdn-icons-png.flaticon.com/128/4687/4687318.png?ga=GA1.1.1157155612.1701539888&semt=ais'/>

            </div>

            <div className='flex justify-center items-center mt-4 h-full max-sm:hidden'>
                <img className='h-5 w-5' src='https://cdn-icons-png.flaticon.com/128/6211/6211682.png?ga=GA1.1.1157155612.1701539888&semt=ais'/>
                <h1 className='text-white font-semibold '> EN</h1>
            </div>


            <ul>
                <Link to={'/SignIn'}>
                <li className='text-white max-sm:text-xs'> Hello,signIn </li>
                <li className='flex gap-1 justify-center items-center'>
                    <h1 className='font-bold text-white max-sm:hidden'>Account& Lists</h1>
                </li>
                </Link>
               
            </ul>

            <ul className='max-sm:hidden'>
                <li className='text-white '> Returns </li>
                <li className='flex gap-1 justify-center items-center'>
                    <h1 className='font-bold text-white'>& Orders</h1>
                </li>
            </ul>


            <div  className='flex  justify-center items-center'>
            <Link to={'/Cart'}  className='flex  justify-center items-center' >
                    <img className='h-11 max-sm:h-6' src='https://cdn-icons-png.flaticon.com/128/3515/3515327.png?ga=GA1.1.1157155612.1701539888&semt=ais'/>
                    <h1 className='font-bold text-white max-sm:text-xs'> Cart</h1>
                    </Link>
            </div>



          
        

    </div>
    <div  className='bg-[#195952ff] w-full p-5 flex max-sm:p-2' >
        <ul className='flex text-white font-medium  justify-center items-center gap-3 max-sm:text-xs max-sm:gap21 max-sm:font-normal '>
            <li> All</li>
            <li>Today's Deals</li>
            <li>Registry</li>
            <li>Customer Service</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>

    </div>
    </>
  )
}


