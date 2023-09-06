
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


            {/* PANEL 0A */}
            <div className='flex justify-center w-full bg- blue-100 px-2'>


               <div className='panel panel-01 min-w-[115px] mr-[-20px]  h-24'>

                  <div className='pr-4'>
                     <Image src={'/app/width.png'}  width={40} height={20} alt='width'></Image>
                  </div>
                  <div className='font-bold italic  py-1'>
                     Width
                  </div>
                  <div className='pl-9'> {models[0].width}</div>

               </div>


               <div className='panel panel-02  min-w-[168px]'>
                  
                  <div>
                     <Image src={'/app/length.png'}  width={40} height={20} alt='length'></Image>
                  </div>
                  <div className='font-bold italic  py-1'>
                     Length
                  </div>
                  <div>{models[0].length}</div>

               </div>



               <div className='panel panel-03 min-w-[115px] ml-[-20px]'>

                  <div className='pl-4'>
                     <Image src={'/app/height.png'}  width={40} height={20} alt='height'></Image>
                  </div>
                  <div className='font-bold italic  py-1'>
                     Height
                  </div>
                  <div className='pr-7'> {models[0].height}</div>

               </div>




            </div>




            {/* PANEL 0B */}

            
            <div className='flex justify-center w-full bg- blue-200 px-2   h-12'>
               <div className='panel-04 flex justify-center items-center w-full max-w-[290px]'>
                  <div className='pr-3'>
                     <Image src={'/app/weight.png'} width={15} height={15} alt='Weight'></Image>
                  </div>
                  <div>
                     <span className='font-bold italic pr-2'>Weight </span>
                     { models[0].weight }
                  </div>
               </div>
            </div>
          

            {/* PANEL 0C */}


            <div className='flex justify-center w-full bg- blue-300 px-2   h-24'>
               <div className='panel-05 flex  flex-col justify-center items-center w-full max-w-[320px]'>
                  <Image src={'/app/engine.png'} width={20} height={20} alt='Engine'></Image>
                  <div className='font-bold italic my-1'>
                     { models[0].engine.type }
                  </div>
                  <div>
                     { models[0].engine.power }
                  </div>
               </div>
            </div>

            {/* PANEL 0D */}

            <div className='bg- blue-400 px-2 pt-1 flex justify-center  w-full h-12 ml-[-5px] min-w-[375px]'>
               
               <div className='panel-06 w-[184px] mr-[-24px] flex justify-center items-center ' >
                  <Image src={'/app/fuel.png'} width={20} height={20} alt='Fuel'></Image>
                  <div className='ml-4'>70 L</div>
               </div>

               <div className='panel-07 w-[258px] ml-[-36px] flex justify-center items-center '>
                  <div className='italic mr-4'>Assembly</div>
                  <Image src={'/flags/it.png'} width={25} height={20} alt='Fuel'></Image>

               </div>
            </div>








{/* 

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-1/2'>


               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center '>
                  <Image src={'/app/width.png'} width={60} height={400} alt='width'></Image>
                  <div className='font-bold italic'>
                     Width
                  </div>
                  <div>30 in</div>
               </div>

               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center'>
                  <Image src={'/app/length.png'} width={60} height={400} alt='length'></Image>
                  <div className='font-bold italic'>
                     Length
                  </div>
                  <div>300 in</div>


               </div>

               <div className='bg-gray-900 rounded-md p-4 flex flex-col justify-center items-center'>
                  <Image src={'/app/height.png'} width={60} height={400} alt='height'></Image>
                  <div className='font-bold italic'>
                     Height
                  </div>
                  <div>300 in</div>


               </div>

            </div> */}


         </div>
{/* 
         <div className='relative text-white flex justify-center items-center'>
            <Image className='absolute z-10 h-22 w-32 object-cover' src={'/svg/panel-02.svg'} width={100} height={100} alt='xd'></Image>
            <div className='z-50 text-white'>
               abc
            </div>
         </div> */}
      </div>
   )
}

export default Characteristics