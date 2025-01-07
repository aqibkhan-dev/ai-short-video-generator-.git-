import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle ({onUserSelect}) {
  const styleOption = [
    {
      name: 'Realistic',
      image: '/realistic.webp'
    },
    {
      name: 'Cartoon',
      image: '/cartoon.jpeg'
    },
    {
      name: 'Comic',
      image: '/comic.jpeg'
    },
    {
      name: 'WaterColor',
      image: '/Watercolor.jpeg'
    },
    {
      name: 'GTA',
      image: '/gta.jpeg'
    }
  ]
  const [selectedOption, setSelectedOption] =useState();
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-xl text-primary'>Style</h2>
      <p className='text-gray-500'>Select your video style</p>
      <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-4'>
        {styleOption.map((item, index) => (
          <div key={index} className={`relative hover:scale-105 transition-all rounded-xl ${selectedOption==item.name&&'border-4 border-primary'}`}>
            <Image src={item.image} width={100} height={100} 
            className='h-48 object-cover rounded-lg w-full cursor-pointer'
            alt={item.name}
            onClick={()=>{
              setSelectedOption(item.name)
              onUserSelect('imageStyle',item.name)
            }}
            />
            <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectStyle
