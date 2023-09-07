'use client'
import { ImageThumbnailProps } from '@/types'
import Image from 'next/image'
import React from 'react'



const ImageThumbnail = (props: ImageThumbnailProps) => {

   const handleImageClick = () => {
      console.log('clicked')
   }

   return (


      <div className=''>

         <Image src={'/photos/' + props.imageUrl} 
            width={900} height={600} alt='' 
            className='clipped' onClick={handleImageClick}></Image>


      </div>

   )
}

export default ImageThumbnail