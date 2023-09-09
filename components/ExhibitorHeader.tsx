
import React from 'react'
import Image from 'next/image'
import { ExhibitorHeaderProps } from '@/types'

const ExhibitorHeader = (  props : ExhibitorHeaderProps ) => {
  return (
   <div className='text-white z-10 absolute  text-3xl italic font-bold w-full'>
   <div className='container p-4'>
     <div>
       <Image src={'/models/logos/' + props.manufacturerLogo } width={200} height={48} alt=''  ></Image>
     </div>
     <div className='ml-12 mt-3 text-2xl font-normal'>
       <Image src={'/models/logos/' + props.modelLogo } height={22} width={150} alt=''></Image>
     </div>
   </div>


 </div>
  )
}

export default ExhibitorHeader