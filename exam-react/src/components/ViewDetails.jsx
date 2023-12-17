import React from 'react'
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Fotter from './Fotter';


export default function ViewDetails() {

    const {id}=useParams();

    
    const [productDetails, setProudactDetails] = useState([])

    useEffect(() => {
      getData()
    }, [])
    
    function getData() {

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setProudactDetails(response.data);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
    }

  return (
    <>
        <Navbar/>

    <div className='flex flex-col w-full justify-center items-center min-h-screen overflow-y-scroll bg-[#e3e6e6ff] '>

        
        <div className=' flex gap-5 w-[80%] max-sm:flex-col  '>
        <img className='h-80 w-80 p-5 bg-white max-sm:h-48 max-sm:w-48 max-sm:mt-5' src={productDetails.image} alt='product-image'/>

        <div className='flex flex-col w-[50%] max-sm:w-full'>
        <h1 className='font-medium text-2xl max-sm:text-xl'>{productDetails.title}</h1>
          <h1 className='font-medium text-lg max-sm:text-base'>{productDetails.description}</h1>
          <h1 className='font-medium text-[#b02604ff] text-lg mt-2'>${productDetails.price}</h1>

          <div className='flex flex-col'>

          <Link className='bg-[#fffae0ff] rounded-md w-60 flex justify-center border border-[#ffed94ff] py-1 mt-5 hover:bg-[#ffed94ff] font-semibold max-sm:w-full'>
          <button>Add To Cart</button>
          </Link>

          <Link className='bg-[#00453ec0] rounded-md w-60 flex justify-center border border-[#00453eff] py-1 mt-5 hover:bg-[#00453eff] font-semibold  max-sm:w-full max-sm:mb-5 ' to={'/'}>
          <button>Back</button>
          </Link>

          </div> 
        </div>

        </div>

       

    </div>
    <Fotter/>

    </>

  )
}
// flex flex-col w-60 h-80 min-h-fit p-2 justify-center items-center  bg-white'