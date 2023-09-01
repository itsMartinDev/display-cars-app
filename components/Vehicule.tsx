'use client'
import React from 'react'
import { useLayoutEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { useGLTF, Clone  } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Vehicule = () => {

   const { scene } = useGLTF('/models/lamborghini-urus-2018/scene.gltf')
   
  return (
    <Clone  object={scene} />
  )
}

export default Vehicule