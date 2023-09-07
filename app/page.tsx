import Exhibitor from '@/components/Exhibitor'
import ExhibitorFooter from '@/components/ExhibitorFooter'
import Navbar from '@/components/Navbar'
import Paginator from '@/components/Paginator'
import Image from 'next/image'
import { models } from '@/constants/constants'
import Characteristics from '@/components/Characteristics'
import About from '@/components/About'
import ExhibitorHeader from '@/components/ExhibitorHeader'

export default function Home() {

  const showVehicle = true;

  return (
    <main>

      <Navbar></Navbar>


      <ExhibitorHeader></ExhibitorHeader>

      {
        showVehicle &&
        <Exhibitor></Exhibitor>
      }

      {
        ! showVehicle &&
        <div className='bg-custom-gray h-64'> </div>
      }
      {/*  */}

      <ExhibitorFooter></ExhibitorFooter>
      <Paginator></Paginator>
      <Characteristics></Characteristics>

      <About></About>

      



    </main>
  )
}
