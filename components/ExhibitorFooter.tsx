import React from 'react'
import { ExhibitorFooterProps } from '@/types'


const ExhibitorFooter = ( props : ExhibitorFooterProps ) => {
   return (

      <div className=' text-white  mt-[-80px] z-50 relative'>

         <div className='container flex sm:justify-around py-4 '>

            <div className='flex items-center justify-center px-3  ' >

               <div className='flex items-center'>


                  <span className='italic'>
                     <span className='font-bold'>Max Speed</span>
                     <div>
                        {props.maxSpeed + ' ' + props.maxSpeedUnit}
                     </div>
                  </span>
               </div>

            </div>

            <div className='flex items-center justify-center px-3 ' >
               
               <span className='italic'>
                  <span className='font-bold'>{props.accelerationRange}</span>
                  <div>
                     {props.acceletarionTime}
                  </div>
               </span>
            </div>

            <div className='flex items-center justify-center px-3 ' >

               <span className='italic'>
                  <span className='font-bold'>{props.powerLegend}</span>
                  <div>
                     {props.powerValue}
                  </div>
               </span>
            </div>


         </div>
      </div>
   )
}

export default ExhibitorFooter