
import { models } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import ImageThumbnail from './ImageThumbnail'

const About = () => {
  return (
    <div className='px-4 bg-custom-gray pb-10'>

     

      <div className='flex max-w-[1200px] mx-auto'>


         <div >
            <Image src={'/svg/top-corner.svg'} width={40} height={40} alt=''></Image>
         </div>
         <div className='bg-white w-full'>
         
         </div>
      </div>


      <div className='container flex justify-center'>


         <div className='bg-white pb-4 px-8 md:px-16 max-w-[1200px] '>

            <span className='text-2xl font-bold md:text-3xl'>Overview</span>

            <p className='pt-4 pb-8'>{ models[0].about }</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>

               {
                  models[0].photos.map( (photo) => (
                     <div className='flex justify-center items-center drop-shadow-md'>
                        <ImageThumbnail imageUrl={photo} ></ImageThumbnail>
                     </div>

                  ) )
               }

            </div>


         </div>


      </div>



      <div className='flex max-w-[1200px] mx-auto'>
         <div className='bg-white w-full'>
         </div>
         <div >
            <Image src={'/svg/bottom-corner.svg'} width={40} height={40} alt=''></Image>
         </div>
      </div>




    </div>
  )
}

export default About