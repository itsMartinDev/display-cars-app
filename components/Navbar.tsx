import Image from 'next/image'
import React from 'react'
import { norican } from '@/app/fonts'



const Navbar = () => {
  return (
    <nav>
      <div className='bg__navbar' >

        <div className='h-12 text-white container bg-ray-500 flex items-center p-4'>
          <Image src='/app/garage-icon.png' alt='logo' width={22} height={22} className='mr-4'></Image>
          <span className={norican.className + ' text-xl'} >Virtual Garage</span>
        </div>
      </div>

      <div className='bg-red-100'>
        <Image src='/app/silver-horizontal-line.jpg' width={1930} height={8} className='object-fill w-full' alt=''></Image>
      </div>


    </nav>
  )
}

export default Navbar