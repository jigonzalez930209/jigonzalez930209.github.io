import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as THREE from 'three'

export const cn = (...args) => {
  return twMerge(clsx(...args))
}

export const findOptimalPoint = (target, radius, atoms) => {
  const pointsOnSphere = 100
  let maxMinDistance = -Infinity
  let optimalPoint = null

  for (let i = 0; i < pointsOnSphere; i++) {
    const point = generatePointOnSphere(target, radius)

    let minDistance = Infinity
    atoms.forEach((atom) => {
      if (atom.name.includes('Atom') && atom.name !== target.name) {
        const distance = point.distanceTo(atom.position)
        if (distance < minDistance) {
          minDistance = distance
        }
      }
    })

    if (minDistance > maxMinDistance) {
      maxMinDistance = minDistance
      optimalPoint = point
    }
  }
  return optimalPoint
}

export const generatePointOnSphere = (center, radius) => {
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  const x = center.x + radius * Math.sin(phi) * Math.cos(theta)
  const y = center.y + radius * Math.sin(phi) * Math.sin(theta)
  const z = center.z + radius * Math.cos(phi)
  return new THREE.Vector3(x, y, z)
}

export const createRepeatingTextTexture = (
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
