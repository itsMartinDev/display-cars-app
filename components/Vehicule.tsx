'use client'
import React from 'react'
import {  Clone } from '@react-three/drei'
import * as THREE from 'three'

import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'


const Vehicule = () => {

  const { scene } = useGLTF('/models/binary/lamborghini_countach_lpi_800-4.glb');

  return (
    <group castShadow>

      <Clone object={scene} rotation={new THREE.Euler( 0, Math.PI , 0 ) } />

      
    </group>
  )
}

export default Vehicule