/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import Loader from '../components/loader'
import Aircraft from '../models/aircraft'
import Bird from '../models/bird'
import Island from '../models/island'
import Sky from '../models/sky'
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
Test
</div> */
}
const Home = () => {
  const [isRotating, setIsRotating] = React.useState(false)
  const [currentStage, setCurrentStage] = React.useState(1)
  const [normalizedRotation, setNormalizedRotation] = React.useState(0)

  const adjustIslandToScreenSize = () => {
    return {
      screenScale:
        4.12 <= normalizedRotation <= 5.2 ? [1, 1, 1] : [0.6, 0.6, 0.6],
      screenPosition: [0, -6.5, -34],
      rotation: [0.4, 2, 0],
    }
  }

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [0.2, 0.2, 0.2]
      screenPosition = [0, -1, 0]
    } else {
      screenScale = [0.2, 0.2, 0.2]
      screenPosition = [0, -2, -2]
    }

    return [screenScale, screenPosition]
  }

  const { screenPosition, rotation } = adjustIslandToScreenSize()
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize()
  return (
    <section className="w-full h-screen relative ">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <React.Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={4} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor="#000000" intensity={1} />
          <Sky />
          <Bird />
          <Island
            position={screenPosition}
            scale={[0.6, 0.6, 0.6]}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setNormalizedRotation={setNormalizedRotation}
          />
          <Aircraft
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
          <Bird />
        </React.Suspense>
      </Canvas>
    </section>
  )
}

export default Home
