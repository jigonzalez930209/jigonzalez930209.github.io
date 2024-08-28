/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import {
  ContactShadows,
  Float,
  useAnimations,
  useGLTF,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

import { findOptimalPoint } from '@/utils'

import { useTour } from '@/components/tour-provider'
import islandScene from '../assets/3d/luciferin_animated.glb'

const AnimatedMolecule = ({
  setCameraPosition,
  setPreSelectedAtom,
  preSelectedAtom,
  setSelectedAtom,
  selectedAtom,
}) => {
  const { animations, scene } = useGLTF(islandScene)
  const { names, actions, ref } = useAnimations(animations)
  const [font, setFont] = useState(null)
  const loader = new FontLoader()
  const { increaseStep, tourActive } = useTour()

  const [hovered, setHovered] = useState(false)

  const staticAtoms = useMemo(() => {
    return [
      ...scene.children
        .filter((child) => child.name.includes('Atom'))
        // Duplicate the atoms to create a always over ground effect
        .reduce(
          (acc, currentAtom) => [
            ...acc,
            ...[
              { ...currentAtom, position: { ...currentAtom.position } },
              {
                ...currentAtom,
                position: new THREE.Vector3(
                  currentAtom.position.x,
                  currentAtom.position.y - 2,
                  currentAtom.position.z
                ),
              },
            ],
          ],
          []
        ),
    ]

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const staticElements = useMemo(() => {
    return scene.children.reduce((acc, child, index) => {
      // Change the geometry of the bond
      if (child.name.includes('Bond')) {
        child.geometry = new THREE.CylinderGeometry(
          0.4,
          0.4,
          1,
          64,
          64,
          false,
          0,
          Math.PI * 2
        )
      }

      // Change the geometry of the atom
      if (child.name.includes('Atom')) {
        const geometry = new THREE.SphereGeometry(
          child.geometry.boundingSphere.radius - 0.29,
          56,
          32,
          0,
          Math.PI * 2,
          0,
          Math.PI
        )
        geometry.boundingSphere = child.geometry.boundingSphere
        child.geometry = geometry
      }

      return {
        ...acc,
        [child.uuid]: {
          ...child.position,
          geometry: child.geometry.clone(),
          material: child.material.clone(),
          object: child.clone(),
          name: child.name,
          count: index,
          isAtom: child.name.includes('Atom'),
        },
      }
    }, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const geometryText = async (name) => {
    if (font) {
      const geometry = new TextGeometry(name, {
        font,
        size: 1,
        height: 0.25,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.125,
        bevelSize: 0.025,
        bevelOffset: 0,
        bevelSegments: 4,
      })
      await geometry.center()
      return await geometry
    }
    return null
  }

  const onPointerUp = async (event) => {
    event.stopPropagation()
    const { object } = event
    const { position } = object
    const clickedObject = event.object

    if (!clickedObject.name.includes('Atom')) return

    const name = clickedObject.name.split('_')[1]
    if (preSelectedAtom?.object.uuid !== clickedObject.uuid) {
      setPreSelectedAtom({
        position,
        name,
        object: clickedObject,
        color: clickedObject.material.color,
      })

      object.geometry = await geometryText(name)
      object.material.color.set(
        `#${staticElements[object.uuid].material.color.getHexString()}`
      )
      setHovered(false)
      increaseStep()
    } else {
      setSelectedAtom(name)
    }

    scene.children.forEach((child) => {
      if (child.uuid !== object.uuid && child.name.includes('Atom')) {
        child.geometry = staticElements[child.uuid].geometry.clone()
        child.geometry.needUpdate = true
      }
    })

    const newCameraPosition = findOptimalPoint(position, 5, staticAtoms)
    setCameraPosition(newCameraPosition)
  }

  const onPointerEnter = (event) => {
    event.stopPropagation()
    const { object } = event
    if (object.name.includes('Atom')) {
      setHovered(true)

      object.material.color.set(0x00ff00)
    }
  }

  const onPointerLeave = (event) => {
    event.stopPropagation()
    const { object } = event
    if (object.name.includes('Atom')) {
      setHovered(false)
      object.material.color.set(
        `#${staticElements[object.uuid].material.color.getHexString()}`
      )
    }
  }

  useEffect(() => {
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
      setFont
    )
    names.forEach((name) => {
      actions[name].play().setDuration(4)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!selectedAtom && preSelectedAtom?.object) {
      preSelectedAtom.object.geometry =
        staticElements[preSelectedAtom.object.uuid].geometry.clone()
      setPreSelectedAtom(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAtom])

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    if (preSelectedAtom?.object) {
      preSelectedAtom.object.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <>
      <Float
        position={[0, 0, 0]}
        speed={1}
        rotationIntensity={1}
        floatIntensity={5}
      >
        <mesh
          ref={ref}
          onPointerUp={onPointerUp}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <primitive object={scene} />
        </mesh>
      </Float>
      <ContactShadows
        position={[0, -3.5, 0]}
        scale={50}
        blur={0.7}
        opacity={0.9}
        far={10}
      />
    </>
  )
}
export default AnimatedMolecule
