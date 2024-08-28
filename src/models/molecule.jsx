/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Vector3 } from 'three'

import { Loader } from '@/components'

import { useTour } from '@/components/tour-provider'
import AnimatedMolecule from './animated-molecule'
import { EyeAnimation } from './controls/animate-eye'
import TextOverCanvas from './text-over-canvas'

const Molecule = ({ selectedAtom, setSelectedAtom }) => {
  const { tourActive } = useTour()

  const [cameraPosition, setCameraPosition] = useState(
    new Vector3(1, 9.5, -0.2)
  )
  const [target, setTarget] = useState(new Vector3(0, 1, 0))
  const [preSelectedAtom, setPreSelectedAtom] = useState(null)

  useEffect(() => {
    if (preSelectedAtom?.position) {
      setTarget(preSelectedAtom.position)
    }
    if (!preSelectedAtom) {
      setTarget(new Vector3(0, 0, 0))
      setCameraPosition(new Vector3(1, 10, -0.3))
    }
  }, [preSelectedAtom])

  return (
    <Canvas
      camera={{
        near: 0.01,
        far: 1000,
        position: [1, 9.5, -0.2],
        zoom: 1,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Environment preset="sunset" />
        <AnimatedMolecule
          setCameraPosition={setCameraPosition}
          setTarget={setTarget}
          setPreSelectedAtom={setPreSelectedAtom}
          setSelectedAtom={setSelectedAtom}
          selectedAtom={selectedAtom}
          preSelectedAtom={preSelectedAtom}
        />
        <EyeAnimation newPosition={cameraPosition} target={target} />
        {/* <Stats />
        <axesHelper args={[5]} /> */}
        {tourActive && (
          <TextOverCanvas offset={4} text="click any atom " size={0.5} />
        )}
      </Suspense>
    </Canvas>
  )
}

export default Molecule
