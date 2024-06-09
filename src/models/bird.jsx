import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import planeScene from '../assets/3d/bird.glb'

const Bird = ({ ...props }) => {
  const { scene, animations } = useGLTF(planeScene)
  const { ref, actions, names } = useAnimations(animations)
  let isRotating = false
  useEffect(() => {
    if (isRotating) {
      actions[names[0]].play().setDuration(0.3)
    } else {
      actions[names[0]].play().setDuration(5)
    }
  }, [actions, isRotating, names])

  return (
    <mesh
      position={[-2, 2, -1]}
      scale={[1, 1, 1]}
      ref={ref}
      rotation={[0, -10.1, 0]}
      {...props}
    >
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
