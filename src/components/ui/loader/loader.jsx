import './styles.css'
import { Html } from '@react-three/drei'

const Loader = () => (
  <Html>
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-full">
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <div
          className="material"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformStyle: 'preserve-3d',
            transform: 'rotateZ(-20deg)',
          }}
        >
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
          <div className="dna"></div>
        </div>
      </div>
    </div>
  </Html>
)

export default Loader
