/* eslint-disable react/prop-types */
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

const OrbitControlsWrapper = ({ target }) => {
  const controlsRef = useRef()
  const { camera, gl } = useThree()

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(...target)
      controlsRef.current.update()
    }
  }, [target])

  return (
    <OrbitControls
      ref={controlsRef}
      maxDistance={15}
      minDistance={3}
      args={[camera, gl.domElement]}
    />
  )
}
export default OrbitControlsWrapper
