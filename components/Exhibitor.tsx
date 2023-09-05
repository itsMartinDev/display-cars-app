'use client'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Vehicule from './Vehicule'
import { useLayoutEffect, useRef, useState } from 'react'
import { applyProps, useFrame } from '@react-three/fiber'

import { Stats, OrbitControls, ContactShadows } from '@react-three/drei'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
import { LayerMaterial, Color, Depth } from 'lamina'
import { group } from 'console'

const Exhibitor = () => {
   const [degraded, degrade] = useState(false)


   return (

      <div className='w-full ' style={{ height: 'calc(100vh - 48px)' }}>
         {/* red, green, blue */}

         <Canvas shadows camera={{ position: [-5, 3, 10], fov: 30 }}>
            <color attach="background" args={['#171717']} />

            <Vehicule ></Vehicule>
            
            <ContactShadows opacity={.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />

            <Environment frames={Infinity} resolution={256} blur={.5} files="/models/bg/dark-background.hdr" background  >
               <Lightformers />
            </Environment>

            <CameraRig />

            {/* <axesHelper args={[500]} /> */}

         </Canvas>

      </div>
   )
}

export default Exhibitor

// Makes the camera go into a smooth movement
function CameraRig({ v = new THREE.Vector3() }) {
   return useFrame((state) => {

      const t = state.clock.elapsedTime

      // Makes the effect of moving camera
      state.camera.position.lerp(v.set(Math.sin(t / 5) - 5, 2.5, 10.5 + Math.cos(t / 5) / 2), 0.05)

      // Sets the focus of the camera
      state.camera.lookAt(1.3, .3, 0)

   })
}

// Illumination
function Lightformers() {

   const lamp1: any = useRef()
   const lamp2: any = useRef()


   const [t, setT] = useState(0)


   useFrame((state, delta) => {

      setT(t + 0.01)

      lamp1.current!.position!.z = 10 * Math.sin(t) + 0;
      lamp1.current!.position!.x = 10 * Math.cos(t) + 0;

      lamp2.current!.position!.z = 10 * Math.sin(t + Math.PI) + 0;
      lamp2.current!.position!.x = 10 * Math.cos(t + Math.PI) + 0;

   })

   return (
      <group>

         {/* Ceiling illumination */}
         <Float speed={5}>
            <Lightformer
               form="circle" // circle | ring | rect (optional, default = rect)
               intensity={3} // power level (optional = 1)
               color="white" // (optional = white)
               target={[0, 0, 0]} // Target position (optional = undefined)
               position={[0, 8, 0]}
               scale={[5, 5, 1]} // Scale it any way you prefer (optional = [1, 1])
            />
         </Float>

         {/* Spining lights */}
         <Lightformer ref={lamp1}
            form="circle"
            intensity={2}
            color="white"
            target={[0, 0, 0]}
            position={[-10, 6, 0]}
            scale={[1, 1, 1]}
         />


         <Lightformer ref={lamp2}
            form="circle"
            intensity={2}
            color="white"
            target={[0, 0, 0]}
            position={[-10, 3, 0]}
            scale={[1, 1, 1]}
         />

         {/* Side light */}
         <Lightformer 
            form="circle"
            intensity={40}
            color="white"
            target={[0, 0, 0]}
            position={[-10, 5, 0]}
            scale={[1, 1, 1]}
         />

      </group>
   )
}


