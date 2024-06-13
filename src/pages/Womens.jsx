import React from 'react'
import '../components/Popular/Popular.css'
import data_products from '../components/assets/data'
import Item from '../components/Item/Item'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'





function Womens() {
  return (
    <>
    <Navbar />
    <div className='popular mt-5'>
        
<h1>POPULAR FOR WOMEN</h1>
<h4>RESULTS FOR WOMENS</h4>
<hr />
<div className="popular-item">
    {data_products.map((item,i)=>{
        return( 

          <div key={i}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
       
            </div>




            
        )

    })}
</div>

    </div>
    <Link to={'/'}>
    <p className='para'>CLICK HERE</p>
     </Link>

    </>
  )
}

export default Womens