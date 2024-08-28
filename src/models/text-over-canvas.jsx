/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Color, Mesh, MeshBasicMaterial, Vector3 } from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

const TextOverCanvas = ({ offset = 4, text, size = 0.1 }) => {
  const meshRef = useRef()

  useEffect(() => {
    const loader = new FontLoader()
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const geometry = new TextGeometry(text, {
          font,
          size,
          height: size * 0.25,
          curveSegments: 64,
          bevelEnabled: false,
          bevelThickness: size * 0.125,
          bevelSize: size * 0.025,
          bevelOffset: 1,
          bevelSegments: 4,
        })
        geometry.center()

        const material = new MeshBasicMaterial({ color: 'gray' })
        const textMesh = new Mesh(geometry, material)

        meshRef.current.add(textMesh)
      }
    )
  }, [text, size])

  useFrame(({ camera, clock }) => {
    if (meshRef.current) {
      const cameraDirection = new Vector3(0, 0.3, -1.1).applyQuaternion(
        camera.quaternion
      )
      const position = new Vector3()
        .copy(camera.position)
        .add(cameraDirection.multiplyScalar(offset))

      meshRef.current.position.copy(position)
      meshRef.current.quaternion.copy(camera.quaternion)
      const elapsedTime = clock.getElapsedTime()
      const colorOffset = Math.sin(elapsedTime * 2) * 0.5 + 0.5
      const startColor = new Color(0xff0000)
      const endColor = new Color(0x0000ff)
      const currentColor = startColor.lerp(endColor, colorOffset)
      meshRef.current.children.forEach((child) => {
        if (child.material) {
          child.material.color.copy(currentColor)
        }
      })
    }
  })

  return <group ref={meshRef} />
}
export default TextOverCanvas
