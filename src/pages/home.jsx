/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import DialogCloseButton from '@/components/dialog-wrapper'
import Molecule from '@/models/molecule'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as React from 'react'
import Loader from '../components/loader'
import Tween from '../components/tween'
import Sky from '../models/sky'

const ATOMS_DESCRIPTION = {
  C: 'Carbon is a nonmetallic element that forms the basis of organic chemistry. It is the fourth most abundant element in the universe by mass and is found in all known life forms. Carbon atoms can bond with each other to form various structures, including chains, rings, and complex frameworks, making it incredibly versatile in forming compounds.',
  H: 'Hydrogen is the lightest and most abundant element in the universe, consisting of a single proton and one electron. It is highly reactive and plays a crucial role in the chemistry of life, water (H₂O), and many organic compounds. Hydrogen is also a primary fuel source in stars through nuclear fusion.',
  O: "Oxygen is a highly reactive nonmetal and a vital part of the Earth's atmosphere, essential for respiration in most living organisms. It is the third most abundant element in the universe by mass. Oxygen forms oxides with nearly all other elements and is a key component of water (H₂O) and many organic molecules.",
  N: "Nitrogen is a nonmetal that makes up about 78% of the Earth's atmosphere. It is essential for all living organisms, particularly in the form of amino acids, proteins, and nucleic acids. Nitrogen is relatively inert in its diatomic form (N₂), but it can form various important compounds, such as ammonia (NH₃) and nitrates.",
  S: 'Sulfur is a nonmetallic element known for its distinct yellow color and pungent odor when burned. It is essential for life, as it is a component of certain amino acids and vitamins. Sulfur is also used in industrial processes, such as the production of sulfuric acid, fertilizers, and in vulcanization of rubber.',
  ' ': 'On selection error',
}

const Home = () => {
  const refControlOrbitals = React.useRef()
  const [selectedAtom, setSelectedAtom] = React.useState(null)
  const [lightPosition, setLightPosition] = React.useState([0, 7, 0])
  return (
    <div className="absolute w-full h-full bg-slate-600 select-none">
      <DialogCloseButton
        title={selectedAtom?.split('_')[1] || ' '}
        content={ATOMS_DESCRIPTION[selectedAtom?.split('_')[1]] || ' '}
        open={selectedAtom !== null}
        onOpenChange={setSelectedAtom}
      />
      <section className="w-full h-screen relative">
        <Canvas
          camera={{
            near: 0.01,
            far: 1000,
            position: [1, 9.5, -0.2],
          }}
        >
          <React.Suspense fallback={<Loader />}>
            <directionalLight position={lightPosition} intensity={2} />
            <ambientLight intensity={0.2} />
            <hemisphereLight groundColor="#ff00ff" intensity={0} />
            <OrbitControls
              ref={refControlOrbitals}
              maxZoom={0}
              minZoom={1}
              maxDistance={15}
              minDistance={1}
              position={[0, 8, 0]}
              keys={{
                LEFT: 'ArrowLeft',
                RIGHT: 'ArrowRight',
                UP: 'ArrowUp',
                BOTTOM: 'ArrowDown',
              }}
            />
            <Sky />
            <Molecule
              controls={refControlOrbitals}
              selectedAtom={selectedAtom}
              setSelectedAtom={setSelectedAtom}
              setLightPosition={setLightPosition}
            />
            {/* <Stats /> */}
            <Tween />
          </React.Suspense>
        </Canvas>
      </section>
    </div>
  )
}

export default Home
