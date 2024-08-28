/* eslint-disable react/prop-types */
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { Vector3 } from 'three'

const CameraWrapper = ({ cameraPosition, target }) => {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(...cameraPosition)
    camera.lookAt(new Vector3(...target))
  }, [camera, cameraPosition, target])
  return null
}
export default CameraWrapper
