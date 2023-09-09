
import Image from 'next/image'
import React from 'react'
import ImageThumbnail from './ImageThumbnail'
import { AboutProps } from '@/types'


const About = ( props : AboutProps ) => {


   
   const  handleToggleImageModal = (photo : string) => {

      console.log('Modal opened', photo)

      let modalBox = document.getElementById('image-modal-box');

      modalBox?.classList.toggle('opacity-0')
      modalBox?.classList.toggle('pointer-events-none')

      let imageElement = document.getElementById('photo-modal');
      imageElement?.setAttribute('srcset', photo)
      console.log(imageElement)

  }


  return (
    <div className='px-4 bg-custom-gray pb-10'>

     
      {/* TOP BAR */}
      <div className='flex max-w-[1200px] mx-auto'>


         <div >
            <Image src={'/svg/top-corner.svg'} width={40} height={40} alt=''></Image>
         </div>
         <div className='bg-white w-full'>
         
         </div>
      </div>

      {/* OVERVIEW */}
      <div className='container flex justify-center'>


         <div className='bg-white pb-4 px-8 md:px-16 max-w-[1200px] '>

            <span className='text-2xl font-bold md:text-3xl'>Overview</span>

            <p className='pt-4 pb-8'>{ props.about }</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>

               {
                  props.photos.map( (photo) => (
                     <div key={photo} className='flex justify-center items-center drop-shadow-md'>
                        <ImageThumbnail imageUrl={photo} toggleImageModal={handleToggleImageModal}></ImageThumbnail>
                     </div>

                  ) )
               }

            </div>


         </div>


      </div>


      {/* BOTTOM BAR */}
      <div className='flex max-w-[1200px] mx-auto'>
         <div className='bg-white w-full'>
         </div>
         <div >
            <Image src={'/svg/bottom-corner.svg'} width={40} height={40} alt=''></Image>
         </div>
      </div>











      {/* Service details Modal box  */}
      <div id="image-modal-box" className="modal opacity-0 pointer-events-none fixed z-50 w-full h-full px-10 py-2 top-0 left-0 flex items-center justify-center">


            {/* Modal overlay */}
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-60"
               onClick={()=> handleToggleImageModal('')}
            ></div>


            <div className="modal-container bg-white w-11/12 h-full md:max-w-6xl mx-auto rounded shadow-lg z-50 ">


               {/* Modal close button */}
               <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
                  onClick={()=> handleToggleImageModal('') }
               >
                  <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 18 18">
                        <path
                           d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                  </svg>
                  <span className="text-sm"></span>
               </div>

               {/* Add margin if you want to see some of the overlay behind the modal */}
               <div className="modal-content py-4 px-4 flex items-center justify-center h-full w-full">

                  
                  {/* Body */}
                  <Image id='photo-modal' src={'/photos/lambo_01.jpg'} width={600} height={900} alt='' className='object-fill rounded-md md:w-9/12 2xl:w-10/12'></Image>

                      


                  

               </div>
            </div>

      </div>









    </div>
  )
}

export default About