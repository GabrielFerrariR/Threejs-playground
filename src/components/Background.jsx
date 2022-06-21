import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import Terra from './Terra';
import React from 'react';

function Background() {
 return(
    <Canvas style={ { height: '100vh' }} className="background">
      <OrbitControls/>
      <ambientLight intensity={ 0.6 } />
      <spotLight position={ [-12 , 2 ,0.1] } angle={ 1 }/>
      <Stars/>
      <Terra position={ [9, 0, -10] }/>
    </Canvas>
  )
}

export default Background;