import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='bg__navbar' >

        <div className='h-12 text-white container bg-ray-500 flex items-center p-4'>
          <Image src='/logo.png' alt='logo' width={35} height={35} className='mr-4'></Image>
          <span className='font-bold'>Luxury Cars</span>
        </div>
      </div>

      <div className='bg-red-100'>
        <Image src='/app/silver-horizontal-line.jpg' width={1930} height={8} className='object-fill w-full' alt=''></Image>
      </div>


    </nav>
  )
}

export default Navbar