import React from 'react'
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Fotter from '../components/Fotter';


export default function Home() {

    const [search, setSearch] = useState('')
    const [product, setProudact] = useState([])

    useEffect(() => {
      getData()
    }, [])
    
    function getData() {

        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setProudact(response.data);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
    }

    // const filterSearch = product.filter((item)=>(
    //     item.title.toLowerCase().includes(search.toLowerCase)
    // )   
    // //  handeledClick =()=>(

    // // )
        
      
    //     )
   


  return (
    <>
        <Navbar/>
    <div className='flex flex-col w-full min-h-screen bg-[#e3e6e6ff]'>
        {/* <div className='bg-[#00453eff] w-full p-5 flex justify-between'>
           
                <img className='h-9' src='https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/1280px-Amazon-logo-white.svg.png'></img>

                <input type='search' className='w-80 px-3 py-1 border border-black rounded-md' placeholder='Search  '>
                </input>
            

        </div> */}

        <div  className='w-full h-96 bg-cover bg-no-repeat  bg-[url("https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Q+c4-cnjL._SX3000_.jpg")] max-sm:bg-contain max-sm:h-44' >
        </div>

        <div className='grid grid-cols-4 gap-3 w-full justify-center items-center px-11 py-5 max-sm:grid-cols-1'>
            {product.map((item) =>(
                
           <div key={item.id} className='flex flex-col w-80 h-80 min-h-fit p-2 justify-center items-center  bg-white max-sm:w-full'>
         <Link to={`/ViewDetails/${item.id}`} className='flex flex-col justify-center items-center text-center'>
          <img className='h-36 w-36 ' src={item.image} alt='product-image'/>
          <h1 className='pt-3 '>{item.title}</h1>
          <h1 className='font-medium text-[#b02604ff]'>${item.price}</h1>
          <button className=' w-fit pt-3 text-[#007185ff]'> view details </button>
          </Link>


           </div>
            ))} 
          
        </div>

    </div>
    <Fotter/>
    </>

  )
}
