
import Image from 'next/image'
import React from 'react'

const Characteristics = () => {
   return (
      <div className='bg-black text-white'>

         <div className='container pb-8'>


            <div className='title py-8'>
               General Characteristics
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-1/2'>


               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center '>
                  <Image src={'/app/width.png'} width={100} height={400} alt='width'></Image>
                  <div className='font-bold italic'>
                     Width
                  </div>
                  <div>30 in</div>
               </div>

               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center'>
                  <Image src={'/app/length.png'} width={100} height={400} alt='width'></Image>
                  <div className='font-bold italic'>
                     Length
                  </div>
                  <div>300 in</div>


               </div>

               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center'>
                  <Image src={'/app/length.png'} width={100} height={400} alt='width'></Image>
                  <div className='font-bold italic'>
                     Height
                  </div>
                  <div>300 in</div>


               </div>

            </div>


         </div>
      </div>
   )
}

export default Characteristics