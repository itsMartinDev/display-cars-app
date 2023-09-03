'use client'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Vehicule from './Vehicule'

import { Stats, OrbitControls, Environment } from '@react-three/drei'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const Exhibitor = () => {

   const gltf = useLoader(GLTFLoader, '/models/binary/lambo.glb')

   return (


      <div className='w-full ' style={{ height: 'calc(100vh - 48px)' }}>

         <Canvas shadows camera={{ position: [-8, 5, -10], fov: 30 }}>
            <color attach='background' args={['white']} ></color>

            <ambientLight intensity={0.5} />
            <Environment files="./models/venice_sunset_1k.hdr" background blur={0.5} />
            {/* <Vehicule></Vehicule> */}
            <primitive
               object={gltf.scene}
               position={[0, 0, 0]}
               children-0-castShadow
            />
            <axesHelper args={[500]} />
            <OrbitControls />

         </Canvas>

      </div>
   )
}

export default Exhibitor