/* eslint-disable react/prop-types */
import { a, useSpring } from '@react-spring/three'
import { easings } from '@react-spring/web'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import CameraWrapper from './camera'
import OrbitControlsWrapper from './orbitals-control'

const AnimateEyeToTarget = ({ position, target }) => {
  const { camera, controls } = useThree()

  const s = useSpring({
    from: {
      position: camera.position.toArray(),
      target: controls?.target.toArray() || [0, 0, 0],
    },
    to: {
      position: position,
      target: target,
    },
    config: {
      easing: easings.easeInCubic(5),
    },

    onStart: () => {
      if (controls) controls.enabled = false
    },
    onRest: () => {
      if (controls) controls.enabled = true
    },
  })

  const AnimatedCameraWrapper = useMemo(() => a(CameraWrapper), [])
  const AnimatedControlsWrapper = useMemo(() => a(OrbitControlsWrapper), [])

  return (
    <>
      <AnimatedCameraWrapper cameraPosition={s.position} target={s.target} />
      <AnimatedControlsWrapper target={s.target} />
    </>
  )
}

const EyeAnimation = ({ newPosition, target }) => {
  return (
    <AnimateEyeToTarget
      position={newPosition.toArray()}
      target={target.toArray()}
    />
  )
}

export { AnimateEyeToTarget, EyeAnimation }
