import Image from 'next/image'
import React from 'react'

const ExhibitorFooter = () => {
  return (
    <div className='bg-black text-white'>

      <div className='container flex justify-around py-4'>
         
         <div className='flex items-center justify-center w-1/2' >

            <Image src={'/app/speedmeter.png'} width={40} height={40} alt='speedmeter' className='mr-4'></Image>
            <div className='text-3xl'>
               300 km/hr
            </div>
         </div>

         <div className='bg-white h-[60px] w-1'></div>

         <div className='flex items-center justify-center w-1/2' >
            <Image src={'/app/logos/lamborghini.png'} width={60} height={60} alt='logo' className='mr-8'></Image>
            <div className='text-3xl'>2018</div>
         </div>


      </div>
    </div>
  )
}

export default ExhibitorFooter