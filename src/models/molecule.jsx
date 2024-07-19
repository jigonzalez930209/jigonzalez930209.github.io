/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import TWEEN from '@tweenjs/tween.js'
import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

import islandScene from '../assets/3d/luciferin_animated.glb'
import { findOptimalPoint } from '../utils'

const Molecule = ({ ...props }) => {
  const { selectedAtom, setSelectedAtom, setLightPosition } = props

  const all = useThree()
  const moleculeRef = useRef()
  const { animations, scene } = useGLTF(islandScene)
  const { names, actions, ref } = useAnimations(animations)
  const [preselectedAtom, setPreselectedAtom] = React.useState(null)

  const staticAtoms = useMemo(
    () => {
      return scene.children.reduce((acc, child, index) => {
        return {
          ...acc,
          [child.uuid]: {
            ...child.position,
            material: child.material.clone(),
            name: child.name,
            count: index,
            isAtom: child.name.includes('Atom'),
          },
        }
      }, {})
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    names.forEach((name) => {
      actions[name].play().setDuration(4)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createRepeatingTextTexture = (
    text,
    backgroundColor = new THREE.Color(0x000000),
    width = 512,
    height = 512,
    repeatX = 2,
    repeatY = 2
  ) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')

    backgroundColor.offsetHSL(0, 0, 0.12).clone()
    const hexColor = `#${backgroundColor.getHexString()}`

    context.fillStyle = hexColor
    context.fillRect(0, 0, width, height)

    context.font = 'Bold 100px Arial'

    context.fillStyle = `black`
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    for (let i = 0; i <= repeatX; i++) {
      for (let j = 0; j <= repeatY; j++) {
        context.save()

        const x = (i + 0.5) * (width / repeatX)
        const y = (j + 0.5) * (height / repeatY)

        context.translate(x, y)

        const angle = Math.random() * 2 * Math.PI
        context.rotate(angle)

        context.fillText(text, 0, 0)

        context.restore()
      }
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.MirroredRepeatWrapping
    texture.wrapT = THREE.MirroredRepeatWrapping
    texture.repeat.set(repeatX, repeatY)
    return texture
  }

  const handleClick = (event) => {
    event.stopPropagation()
    const clickedObject = event.object

    if (clickedObject.name.includes('Atom')) {
      if (preselectedAtom?.name === clickedObject?.name) {
        setPreselectedAtom(null)
        setSelectedAtom(clickedObject.name)
        return
      }
      setPreselectedAtom(clickedObject)
      scene.children.forEach((child) => {
        if (child.name.includes('Atom') && child.name !== clickedObject.name) {
          const materialCopy = staticAtoms[child.uuid].material.clone()
          child.material = materialCopy
        }
      })

      const name = clickedObject.name.split('_')[1]
      if (staticAtoms[clickedObject.uuid]?.newTexture) {
        clickedObject.material.map =
          staticAtoms[clickedObject.uuid].newTexture.clone()
        clickedObject.material.needsUpdate = true
      } else {
        const newTexture = createRepeatingTextTexture(
          name,
          clickedObject.material.color
        )
        staticAtoms[clickedObject.uuid].newTexture = newTexture
        clickedObject.material.map = newTexture
        clickedObject.material.needsUpdate = true
      }

      const optimalCameraPosition = findOptimalPoint(
        {
          x: staticAtoms[clickedObject.uuid].x,
          y: staticAtoms[clickedObject.uuid].y,
          z: staticAtoms[clickedObject.uuid].z,
        },
        4,
        scene.children
      )
      setLightPosition(optimalCameraPosition)
      new TWEEN.Tween(all.camera.position)
        .to(optimalCameraPosition, 700)
        .easing(TWEEN.Easing.Cubic.Out)
        .start()

      const targetPosition = {
        x: clickedObject.position.x,
        y: clickedObject.position.y,
        z: clickedObject.position.z,
      }

      new TWEEN.Tween(props.controls.current.target)
        .to(targetPosition, 700)
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
    }
  }

  const handlePointerEnter = (event) => {
    event.stopPropagation()

    // const { object } = event
    // if (staticAtoms[object.uuid]?.isAtom === false) {
    //   return
    // }

    // const name = object.name.split('_')[1]
    // if (staticAtoms[object.uuid]?.newTexture) {
    //   object.material.map = staticAtoms[object.uuid].newTexture.clone()
    //   object.material.needsUpdate = true
    //   return
    // }
    // const newTexture = createRepeatingTextTexture(name, object.material.color)
    // staticAtoms[object.uuid].newTexture = newTexture
    // object.material.map = newTexture
    // object.material.needsUpdate = true
  }

  const handlePointerLeave = (event) => {
    event.stopPropagation()
    // const { object } = event

    // if (staticAtoms[object.uuid]?.isAtom === false) return

    // const materialCopy = staticAtoms[object.uuid].material.clone()
    // object.material = materialCopy
    // object.material.needsUpdate = true
  }

  useFrame(({ clock }) => {
    // const elapsedTime = clock.getElapsedTime()
    // const interval = 0.5
    // const toggle = Math.floor(elapsedTime / interval) % 2 === 0
    // if (!preselectedAtom) {
    //   return
    // }
    // if (toggle) {
    //   scene.children[staticAtoms[preselectedAtom.uuid].count].material =
    //     staticAtoms[preselectedAtom.uuid].material.clone()
    //   scene.children[
    //     staticAtoms[preselectedAtom.uuid].count
    //   ].material.needsUpdate = true
    // } else {
    //   scene.children[staticAtoms[preselectedAtom.uuid].count].material.map =
    //     staticAtoms[preselectedAtom.uuid].newTexture.clone()
    //   scene.children[
    //     staticAtoms[preselectedAtom.uuid].count
    //   ].material.needsUpdate = true
    // }
  })

  useEffect(() => {
    if (!selectedAtom) {
      scene.children.forEach((child) => {
        if (
          child.name.includes('Atom') &&
          child.uuid !== preselectedAtom?.uuid
        ) {
          const materialCopy = staticAtoms[child.uuid].material.clone()
          child.material = materialCopy
          child.material.needsUpdate = true
        }
      })
    }
  }, [selectedAtom, scene.children, staticAtoms, preselectedAtom])

  return (
    <mesh
      ref={ref}
      {...props}
      style={{ cursor: 'move' }}
      onPointerDown={!selectedAtom && handleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <primitive
        style={{ cursor: 'inherit' }}
        ref={moleculeRef}
        object={scene}
        rotateX={1}
      />
    </mesh>
  )
}
export default Molecule
