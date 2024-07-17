import { useFrame } from '@react-three/fiber'
import TWEEN from '@tweenjs/tween.js'

const Tween = () => {
  useFrame(() => {
    TWEEN.update()
  })
}

export default Tween
