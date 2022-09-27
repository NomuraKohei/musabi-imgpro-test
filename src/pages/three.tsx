import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import THREE, { Mesh, Vector3 } from 'three'
import Controls from '../utils/Controls'

const Thing: React.FC = () => {
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.rotation.z += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}
    >
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent />
    </mesh>
  )
}

interface RGBColor {
  r: number
  g: number
  b: number
}

interface Pixel {
  position: {
    x: number
    y: number
    z: number
  }
  color: RGBColor
}

interface Props {
  pixels: Pixel[]
}

const Three: React.FC<Props> = (props) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Thing />
        // <Controls />
        <gridHelper /> */}
        <gridHelper />
        <ambientLight intensity={0.1} />
        <directionalLight color='white' position={[0, 0, 1]} />
        {props.pixels.map((item, index) => {
          return (
            <mesh position={[item.position.x, item.position.y, item.position.z]} key={index}>
              <boxGeometry args={[0.1, 0.1, 0.1]} />
              <meshStandardMaterial
                color={`rgb(${item.color.r}, ${item.color.g}, ${item.color.b})`}
              />
            </mesh>
          )
        })}
        <Controls />
      </Canvas>
    </div>
  )
}
export default Three
