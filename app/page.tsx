import Exhibitor from '@/components/Exhibitor'
import ExhibitorFooter from '@/components/ExhibitorFooter'
import Navbar from '@/components/Navbar'
import Paginator from '@/components/Paginator'
import Image from 'next/image'
import { models } from '@/constants/constants'
import Characteristics from '@/components/Characteristics'
import About from '@/components/About'

export default function Home() {
  return (
    <main>

      <Navbar></Navbar>

      <div className='text-white z-10 absolute  text-3xl italic font-bold w-full'>
        <div className='container p-4'>
          <div>
            <Image src={'/models/logos/lamborghini-text.png'} width={200} height={48} alt={ models[0].manufacturer }  ></Image>
          </div>
          <div className='ml-12 mt-3 text-2xl font-normal'>
            <Image src={'/models/logos/countach.png'} height={22} width={150} alt={ models[0].model }></Image>
          </div>
        </div>


      </div>

      <Exhibitor></Exhibitor>

      {/* <div className='bg-gray-400 h-32'> </div> */}

      <ExhibitorFooter></ExhibitorFooter>
      <Paginator></Paginator>
      <Characteristics></Characteristics>

      <About></About>

      



    </main>
  )
}
