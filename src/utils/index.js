import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as THREE from 'three'

export const cn = (...args) => {
  return twMerge(clsx(...args))
}

export const findOptimalPoint = (target, radius, atoms) => {
  const pointsOnSphere = 50
  const newAtoms = atoms.reduce(
    (acc, atom) => [
      ...acc,
      {
        ...atom,
        position: new THREE.Vector3(
          atom.position.x,
          atom.position.y - 2,
          atom.position.z
        ),
      },
    ],
    [...atoms]
  )
  let maxMinDistance = -Infinity
  let optimalPoint = null

  for (let i = 0; i < pointsOnSphere; i++) {
    const point = generatePointOnSphere(target, radius)

    let minDistance = Infinity
    newAtoms.forEach((atom) => {
      const distance = point.distanceTo(atom.position)
      if (distance < minDistance) {
        minDistance = distance
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
