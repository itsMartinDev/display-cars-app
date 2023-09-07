'use client'
import Image from 'next/image'
import React from 'react'

const Paginator = () => {

  const handleNextClick = () => {
    console.log('next');
  }

  const handlePreviousClick = () => {
    console.log('previous');
  }



  return (
    <div>
      <Image src='/app/silver-horizontal-line.jpg' width={1930} height={8} className='object-fill w-full' alt=''></Image>

      <div className='bg__navbar' >
         
         <div className='container h-16 flex justify-center'>
            
            <div className='flex justify-around min-w-[375px] max-w-[450px]'>

              <div className='text-white flex justify-center items-center hover:cursor-pointer'>
                  <Image className='absolute z-10  object-cover ' src={'/svg/left-button.svg'} width={180} height={120} alt='previous'  onClick={handlePreviousClick} ></Image>
                  <div className='z-50 text-white'>
                    <Image src={'/svg/left-arrow.svg'} width={14} height={14} alt='Previous'></Image>
                  </div>
              </div>

              <div className='text-white flex justify-center items-center hover:cursor-pointer'>
                  <Image className='absolute z-10  object-cover' src={'/svg/right-button.svg'} width={180} height={120} alt='Next' onClick={handleNextClick}></Image>
                  <div className='z-50 text-white'>
                    <Image src={'/svg/right-arrow.svg'} width={14} height={14} alt='Previous'></Image>
                  </div>
              </div>

            </div>


         </div>
      </div>

      <Image src='/app/silver-horizontal-line.jpg' width={1930} height={8} className='object-fill w-full' alt=''></Image>

    </div>
  )
}

export default Paginator