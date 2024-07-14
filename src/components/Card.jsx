import React from 'react'

function Card({values}) {
   
   const {name,email,image,desc} = values ;
    return (
        <div className='layout w-44 bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
        <div className='image w-20 h-20 overflow-hidden bg-zinc-200 rounded-full flex items-center justify-center'>
            <img className='w-full h-full object-center object-cover' src={image} alt="" />
        </div>
        <h2 className='text-xl font-semibold mt-1'>{name}</h2>
        <h3 className='opacity-60 font-semibold text-xs'>{email}</h3>
        <h4 className='text-xs font-semibold text-center mt-1'>{desc}</h4>

    </div>
        
    )
}

export default Card