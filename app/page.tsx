import Exhibitor from '@/components/Exhibitor'
import ExhibitorFooter from '@/components/ExhibitorFooter'
import Navbar from '@/components/Navbar'
import Paginator from '@/components/Paginator'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      
      <Navbar></Navbar>

      <Exhibitor></Exhibitor>
      
      <div className='bg-gray-400 h-8'> 

      </div>

      <ExhibitorFooter></ExhibitorFooter>
      <Paginator></Paginator>

    </main>
  )
}
