
import { models } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const Characteristics = () => {
   return (
      <div className='bg-custom-gray text-white'>

         <div className='container pb-8'>


            <div className='title py-8 px-4 text-center'>
               General Characteristics
            </div>


            <div className='px-4 lg:flex lg:justify-center'>

               <div className='lg:mr-[-30px]'>


                  {/* PANEL ENGINE */}
                  <div className='panel panel-col panel-01 h-24 pt-2 sm:h-[128px]'>
                     <Image src={'/svg/engine-icon.svg'} width={25} height={25} alt='Engine'></Image>
                     <div className='font-bold italic my-1 pt-2'>
                        { models[0].engine.type }
                     </div>
                     <div>
                        { models[0].engine.power }
                     </div>
                  </div>

                  {/* PANEL GAS AND ENSAMBLE */}
                  <div className='flex justify-center bg- gray-100  h-16 sm:h-24'>


                     <div className='panel panel-row panel-02 w-48 sm:w-64 mr-[-5px] sm:mr-[-3px] my-2'>
                        <Image src={'/svg/gas-icon.svg'} width={20} height={20} alt='Gas'></Image>
                        <div className='ml-4'> { models[0].fuelTankCapacity}</div>
                     </div>


                     <div className='panel panel-row panel-03 w-48 sm:w-64 ml-[-5px] sm:ml-[-3px] my-2  '>
                        <div className='italic mr-4'>Assembly</div>
                        <Image src={'/flags/' + models[0].assemblyFlag } width={25} height={20} alt='Flag'></Image>

                     </div>

                  </div>


               </div>

               <div className='lg:ml-[-30px]'>



                  {/* PANEL \ | / */}
                  <div className='flex justify-center bg-gr ay-300'>

                     <div className='panel panel-col panel-04 w-36 sm:w-[200px]'>
                        
                        <Image src={'/svg/width.svg'}  width={40} height={20} alt='width' className='mr-6'></Image>
                        <div className='font-bold italic py-1'>
                           Width
                        </div>
                        <div className='ml-6'> {models[0].width}</div>

                     </div>

                     <div className='panel panel-col panel-05 w-44 h-24 mx-[-10px]    sm:w-64 sm:h-32 sm:mx-[-52px] '>
                        <Image src={'/svg/length.svg'}  width={40} height={20} alt='length'></Image>
                        <div className='font-bold italic py-1'>
                        Length
                        </div>
                        <div className=''> {models[0].length}</div>
                     </div>

                     <div className='panel  panel-col panel-06 w-36 sm:w-[200px] '>
                        <Image src={'/svg/height.svg'}  width={40} height={20} alt='height' className='ml-6'></Image>
                        <div className='font-bold italic py-1'>
                        Height
                        </div>
                        <div className='mr-6'> {models[0].height}</div>
                     </div>

                  </div>

                  {/* PANEL WEIGHT */}
                  <div className='flex justify-center bg-gr ay-500 pt-2 mt-1'>
                     <div className='panel panel-row panel-07 w-full h-14 sm:h-[74px]'>
                        <Image src={'/svg/weight-icon.svg'} width={15} height={15} alt='Weight'></Image>
                        <div className='mx-4'>{ models[0].weight }</div>
                     </div>
                  </div>


               </div>



            </div>



         </div>



      </div>
   )
}

export default Characteristics