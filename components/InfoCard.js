import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 pt-7 border-b cursor-pointer hover:opacity-80 
    hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image src={img} alt={title} layout="fill" objectFit="cover" className='rounded-2xl'/>
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="text-sm-text-gray-500 flex-grow pt-2">{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-500" />
            {star}
          </p>
          <div>
            <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
