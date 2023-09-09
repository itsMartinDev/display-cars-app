'use client'
import React from 'react'
import {  Clone } from '@react-three/drei'
import * as THREE from 'three'

import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'


interface VehiculeProps {
  model : string
}

const Vehicule = ( props : VehiculeProps) => {

  const { scene } = useGLTF('/models/binary/' + props.model);

  return (
    <group castShadow>

      <Clone object={scene} rotation={new THREE.Euler( 0, Math.PI , 0 ) } />

      
    </group>
  )
}

export default Vehicule