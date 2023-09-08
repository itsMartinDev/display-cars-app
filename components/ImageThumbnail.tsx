'use client'
import { ImageThumbnailProps } from '@/types'
import Image from 'next/image'
import React from 'react'



const ImageThumbnail = (props: ImageThumbnailProps) => {


   return (

      <div className='transition ease-in-out delay-75  hover:drop-shadow-2xl  hover:cursor-pointer'>

         <Image src={'/photos/' + props.imageUrl}
            width={900} height={600} alt=''
            className='clipped' onClick={() => props.toggleImageModal('/photos/' + props.imageUrl) }></Image>


      </div>

   )
}

export default ImageThumbnail