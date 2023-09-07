
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


            <div className='md:flex md:justify-center'>



               <div className='md:mr-[-60px]'>

                  {/* PANEL  \ | / */}
                  <div className='flex justify-center w-full bg- blue-100 px-2'>


                     <div className='panel panel-col panel-01 min-w-[115px] mr-[-20px]  h-24'>

                        <div className='pr-4'>
                           <Image src={'/app/width.png'}  width={40} height={20} alt='width'></Image>
                        </div>
                        <div className='font-bold italic  py-1'>
                           Width
                        </div>
                        <div className='pl-9'> {models[0].width}</div>

                     </div>


                     <div className='panel panel-col panel-02  min-w-[168px]'>
                        
                        <div>
                           <Image src={'/app/length.png'}  width={40} height={20} alt='length'></Image>
                        </div>
                        <div className='font-bold italic  py-1'>
                           Length
                        </div>
                        <div>{models[0].length}</div>

                     </div>


                     <div className='panel panel-col panel-03 min-w-[115px] ml-[-20px]'>

                        <div className='pl-4'>
                           <Image src={'/app/height.png'}  width={40} height={20} alt='height'></Image>
                        </div>
                        <div className='font-bold italic  py-1'>
                           Height
                        </div>
                        <div className='pr-7'> {models[0].height}</div>

                     </div>


                  </div>


                  {/* PANEL --Weight-- */}
                  <div className='flex justify-center w-full bg- blue-200 px-2 mt-[1px]  h-12'>
                     <div className='panel panel-04 panel-row w-full max-w-[290px]'>
                        <div className='pr-3'>
                           <Image src={'/app/weight.png'} width={15} height={15} alt='Weight'></Image>
                        </div>
                        <div>
                           <span className='font-bold italic pr-2'>Weight </span>
                           { models[0].weight }
                        </div>
                     </div>
                  </div>

               </div>



               <div>

                  {/* PANEL 0C */}
                  <div className='flex justify-center w-full bg- blue-300 px-2   h-24'>
                     <div className='panel panel-col panel-05  w-full max-w-[320px]'>
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
                  <div className='px-2 pt-1 flex justify-center  w-full h-12 ml-[-5px] min-w-[375px]'>
                     
                     <div className='panel  panel-06 w-[184px] mr-[-24px] panel-row ' >
                        <Image src={'/app/fuel.png'} width={15} height={15} alt='Fuel'></Image>
                        <div className='ml-4'>70 L</div>
                     </div>

                     <div className='panel panel-07 w-[258px] ml-[-36px] panel-row '>
                        <div className='italic mr-4'>Assembly</div>
                        <Image src={'/flags/it.png'} width={25} height={20} alt='Fuel'></Image>

                     </div>
                  </div>

               </div>


            </div>


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