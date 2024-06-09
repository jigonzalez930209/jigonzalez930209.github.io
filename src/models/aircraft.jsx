/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import aircraft from '../assets/3d/aircraft.glb'

const Aircraft = ({ isRotating, rotatingVelocity, ...props }) => {
  const { scene, animations } = useGLTF(aircraft)
  const { ref, actions, names } = useAnimations(animations)

  useEffect(() => {
    if (isRotating) {
      actions[names[0]].play().setDuration(0.3)
    } else {
      actions[names[0]].play().setDuration(0.5)
    }
  }, [actions, isRotating, names])
  return (
    <group {...props} ref={ref}>
      <primitive object={scene} />
    </group>
  )
}

export default Aircraft
