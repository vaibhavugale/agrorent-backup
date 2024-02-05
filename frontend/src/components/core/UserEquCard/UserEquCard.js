import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
const UserEquCard = () => {
    const { location, img, user } = useOutletContext();
  return (
   <section className='  w-full bg-slate-200'>
     <p className=" p-5 tracking-widest">{location?.pathname}</p>
     <div className=' w-full h-min grid  grid-cols-3  gap-5  p-5'>

        {
          user?.equipments.map((cardData,index)=>  <ProductCard key={index} cardData={ cardData} />)
        }
     
      
        
    </div>
   </section>
  )
}

export default UserEquCard