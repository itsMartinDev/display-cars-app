'use client'
import React, { useEffect, useState } from 'react'
import Exhibitor from '@/components/Exhibitor'
import ExhibitorFooter from '@/components/ExhibitorFooter'

import Paginator from '@/components/Paginator'

import Characteristics from '@/components/Characteristics'
import About from '@/components/About'
import ExhibitorHeader from '@/components/ExhibitorHeader'
import { models } from '@/constants/constants'


const Slot = () => {

   const showVehicle = true;

   const [index, setIndex] = useState(0);
   const [vehicle, setVehicle] = useState(models[0]);

   useEffect( ()=>{
      setVehicle(models[index])
   }, [ index ])


   const loadNextVehicle = () => {
      
      if( index + 1 < models.length ){
         setIndex( index + 1)
      } 
   }

   
   const loadPreviousVehicle = () => {

      if( index - 1 != -1 ){
         setIndex( index - 1)
      }

   }


   return (
      <div>


         <ExhibitorHeader manufacturerLogo={ vehicle.files.manufacturerLogo } modelLogo={ vehicle.files.modelLogo }></ExhibitorHeader>


         {
            showVehicle &&
            <Exhibitor model={ vehicle.files.binaryFile }></Exhibitor>
         }

         {
            !showVehicle &&
            <div className='bg-custom-gray h-64'> </div>
         }
         {/*  */}

         <ExhibitorFooter
            maxSpeed={ vehicle.maxSpeed }
            maxSpeedUnit={ vehicle.maxSpeedUnit }
            accelerationRange={ vehicle.accelerationRange }
            acceletarionTime={ vehicle.acceletarionTime }
            powerLegend={ vehicle.powerLegend }
            powerValue={ vehicle.powerValue }
         ></ExhibitorFooter>

         <Paginator onPreviousClick={loadPreviousVehicle} onNextClick={loadNextVehicle}></Paginator>
         <Characteristics
            engineType={ vehicle.engine.type }
            enginePower={ vehicle.engine.power }
            fuelTankCapacity={ vehicle.fuelTankCapacity }
            assemblyFlag={ vehicle.assemblyFlag }
            width={ vehicle.width }
            length={ vehicle.length }
            height={ vehicle.height }
            weight={ vehicle.weight }
         ></Characteristics>

         <About
            about={ vehicle.about }
            photos={ vehicle.photos }
            modelLink={ vehicle.model3d.url}
            modelAuthor={ vehicle.model3d.author}
         ></About>


      </div>
   )
}

export default Slot