import React from 'react'
import '../components/Popular/Popular.css'
import kids_product from '../components/assets/Kids'
import Item from '../components/Item/Item'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'





function Kids() {
  return (
    <>
    <Navbar />
    <div className='popular mt-5'>
        
<h1>POPULAR FOR KIDS</h1>
<h4>RESULTS FOR KIDS</h4>
<hr />
<div className="popular-item">
    {kids_product.map((item,i)=>{
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

export default Kids