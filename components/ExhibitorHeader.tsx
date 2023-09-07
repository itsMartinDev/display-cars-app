
import React from 'react'
import Image from 'next/image'
import { models } from '@/constants/constants'

const ExhibitorHeader = () => {
  return (
   <div className='text-white z-10 absolute  text-3xl italic font-bold w-full'>
   <div className='container p-4'>
     <div>
       <Image src={'/models/logos/' + models[0].files.manufacturerLogo } width={200} height={48} alt={ models[0].manufacturer }  ></Image>
     </div>
     <div className='ml-12 mt-3 text-2xl font-normal'>
       <Image src={'/models/logos/' + models[0].files.modelLogo } height={22} width={150} alt={ models[0].model }></Image>
     </div>
   </div>


 </div>
  )
}

export default ExhibitorHeader