import { Html, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Controls from '../utils/Controls'
import gifImg from '/public/loading.gif'

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

interface ObjectPosition {
  position: {
    x: {
      multiply: number
      offset: number
    }
    y: {
      multiply: number
      offset: number
    }
    z: {
      multiply: number
      offset: number
    }
  }
}

export interface ThreeProps {
  pixels?: Pixel[]
  setting?: ObjectPosition
  gltfPath?: 'scene1-meshopt' | 'scene2-meshopt'
  isDownload?: boolean
  initialScene?: boolean
}

const Three: React.FC<ThreeProps> = (props) => {
  const Loader = () => {
    return (
      <Html center>
        <div style={{ width: 200, height: 250 }}>
          <Image src={gifImg} alt='loading' width={200} height={150} />
        </div>
      </Html>
    )
  }

  const [gltfPath, setGltfPath] = useState(props.gltfPath)

  useEffect(() => {
    setGltfPath(props.gltfPath)
  }, [props.gltfPath])

  const Model: React.FC = () => {
    const gltf = useGLTF(`/${gltfPath}.glb`)
    return <primitive object={gltf.scene} />
  }

  return (
    <div id={props.gltfPath} style={{ width: '100vw', height: '100vh' }} className={styles.whole}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='white' position={[0, 0, 1]} />
        {props.gltfPath && (
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
        )}
        <Controls />
      </Canvas>
    </div>
  )
}
export default Three
