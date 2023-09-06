import Image from 'next/image'
import React from 'react'
import { models } from '@/constants/constants'

const ExhibitorFooter = () => {
   return (

      <div className=' text-white  mt-[-80px] z-50 relative'>

         <div className='container flex sm:justify-around py-4 '>

            <div className='flex items-center justify-center px-3  ' >

               <div className='flex items-center'>


                  <span className='italic'>
                     <span className='font-bold'>Max Speed</span>
                     <div>
                        {models[0].topSpeed + ' ' + models[0].topSpeedUnit}
                     </div>
                  </span>
               </div>

            </div>

            <div className='flex items-center justify-center px-3 ' >
               {/* <Image src={'/app/logos/lamborghini.png'} width={35} height={35} alt='logo' className='mr-8'></Image> */}
               <span className='italic'>
                  <span className='font-bold'>{models[0].accelerationRange}</span>
                  <div>
                     {models[0].acceletarionTime}
                  </div>
               </span>
            </div>

            <div className='flex items-center justify-center px-3 ' >
               {/* <span className='italic'>Assembly</span>
               <Image src={'/models/flags/it.png'} width={30} height={30} alt='logo' className='ml-8'></Image> */}
               <span className='italic'>
                  <span className='font-bold'>{models[0].powerLegend}</span>
                  <div>
                     {models[0].powerValue}
                  </div>
               </span>
            </div>


         </div>
      </div>
   )
}

export default ExhibitorFooter