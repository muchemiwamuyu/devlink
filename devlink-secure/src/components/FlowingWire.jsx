// FlowingWire.jsx
import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export default function FlowingWire() {
  const meshRef = useRef()

  // Curve points
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5, 0, 0),
      new THREE.Vector3(-2, 2, 1),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(2, -2, 1),
      new THREE.Vector3(5, 0, 0),
    ])
  }, [])

  // Tube geometry from curve
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, 0.05, 8, false)
  }, [curve])

  // Animate material over time
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.color.setHSL((clock.getElapsedTime() * 0.1) % 1, 1, 0.6)
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        emissive={'aqua'}
        emissiveIntensity={2}
        toneMapped={false}
        color={'aqua'}
      />
    </mesh>
  )
}
