
import { models } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import ImageThumbnail from './ImageThumbnail'

const About = () => {
  return (
    <div className=' bg-custom-gray'>
      
      <div className='container px-4 pb-32'>



         <div className='relative fle x jus tify-center'>


            {/* Rounded Corner */}
            {/* <Image src={'/svg/top-about.svg'} width={1200} height={1500} alt='' className='absolute w-full '></Image> */}
            <div className='flex h-24 w-full '>
               <div className='absolute  top-about-clip bg-white w-full h-24 top-0 max-w-[1200px]'>
               </div>
            </div>

            {/* Dinamic backgroun card */}
            <div className='absolute top-0 bottom-0 bg-white mt-12 md:mt-20   w-full  max-w-[1200px]'></div>
            {/* Content */}
            <div className='flex'>
               
               {/* ref */}
               <div className='relative px-4 pb-4 mx-4 sm:mx-8 sm:pt-2 md:mx-16 md:pt-8 z-10'>

                  <span className='text-2xl font-bold md:text-3xl'>Overview</span>

                  <p className='pt-4 pb-8'>{ models[0].about }</p>

                  <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>

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


            {/* <Image src={'/svg/bottom-about.svg'} width={1200} height={600} alt='' className='absolute bottom-0 mb-[-60px] md:mb-[-80px]'></Image> */}
            <div className='relative flex h-24 w-full bottom-[0px] md:bottom-[-75px]'>
               <div className='relative  bottom-about-clip bg-white w-full h-24  max-w-[1200px]'>
               </div>
            </div>


         </div>

         
            
         

      </div>



    </div>
  )
}

export default About