import Image from 'next/image'
import React from 'react'

function TrailItem({trail}) {
  return (
    <div className="w-[180px] flex-shrink-0 p-2
     rounded-lg shadow-md mb-1
     bg-white hover:scale-110 transition-all cursor-pointer">
      <Image src='/placeholder.jpeg' 
        alt={trail.title} 
        width={200}
        height={150} 
        className='rounded-t-lg object-cover'>
      </Image>
      
        <h2 className="text-lg font-bold mt-1">{trail.title}</h2>
        {/*<p className="text-sm">{trail.description}</p>*/}
        {/*<p className="text-sm">Category: {trail.category}</p>*/}
        {/*<p className="text-sm">Price: {trail.price}</p>*/}
        <p className="text-sm">Trail Class: {trail.trailClass}</p>
        <p className="text-sm">Difficulty Level: {trail.difficultyLevel}</p>
        <p className="text-sm">Elevation: {trail.elevation}</p>
      
    </div>
  )
}

export default TrailItem