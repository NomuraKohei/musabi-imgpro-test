import { Html, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'
import React, { Suspense, useEffect, useRef, useState } from 'react'
// import THREE, { Mesh } from 'three'
// import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter'
import Controls from '../utils/Controls'
import gifImg from '/public/loading.gif'

// const Thing: React.FC = () => {
//   const ref = useRef({} as Mesh)
//   useFrame(() => (ref.current.rotation.z += 0.01))
//   return (
//     <mesh
//       ref={ref}
//       onClick={(e) => console.log('click')}
//       onPointerOver={(e) => console.log('hover')}
//       onPointerOut={(e) => console.log('unhover')}
//     >
//       <planeBufferGeometry attach='geometry' args={[1, 1]} />
//       <meshBasicMaterial attach='material' color='hotpink' opacity={0.5} transparent />
//     </mesh>
//   )
// }

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
  gltfPath?: 'scene-meshopt' | 'scene2-meshopt'
  isDownload?: boolean
  initialScene?: boolean
}

const Three: React.FC<ThreeProps> = (props) => {
  const meshRef = useRef(null)
  // const [currentLink, setLink] = useState<HTMLAnchorElement | undefined>(undefined)

  // const save = useCallback(
  //   (blob: any, filename: any) => {
  //     if (!currentLink) {
  //       return
  //     }
  //     currentLink.href = URL.createObjectURL(blob)
  //     currentLink.download = filename
  //     currentLink.click()
  //   },
  //   [currentLink],
  // )

  // const saveArrayBuffer = useCallback(
  //   (buffer: any, filename: any) => {
  //     save(new Blob([buffer], { type: 'application/octet-stream' }), filename)
  //   },
  //   [save, meshRef, meshRef.current],
  // )

  // const saveString = useCallback(
  //   (text: any, filename: any) => {
  //     save(new Blob([text], { type: 'text/plain' }), filename)
  //   },
  //   [save, meshRef, meshRef.current],
  // )

  // useEffect(() => {
  //   if (!props.isDownload) {
  //     return
  //   }
  //   if (typeof window === 'object') {
  //     const link = document.createElement('a')
  //     document.body.appendChild(link) // Firefox workaround, see #6594
  //     setLink(link)
  //     console.log(link)
  //   }
  // }, [meshRef, meshRef.current])

  // useEffect(() => {
  //   if (!props.isDownload) {
  //     return
  //   }
  //   console.log(currentLink)
  //   const exporter = new GLTFExporter()
  //   const params = {
  //     trs: false,
  //     onlyVisible: true,
  //     binary: false,
  //     maxTextureSize: 4096,
  //   }
  //   const options = {
  //     trs: params.trs,
  //     onlyVisible: params.onlyVisible,
  //     binary: params.binary,
  //     maxTextureSize: params.maxTextureSize,
  //   }
  //   if (!meshRef.current) {
  //     return
  //   }
  //   exporter.parse(
  //     meshRef.current,
  //     function (gltf) {
  //       console.log(gltf)
  //       if (gltf instanceof ArrayBuffer) {
  //         saveArrayBuffer(gltf, 'scene.glb')
  //       } else {
  //         const output = JSON.stringify(gltf, null, 2)
  //         console.log(output)
  //         saveString(output, 'scene.gltf')
  //       }
  //     },
  //     function (error) {
  //       console.log('An error happened during parsing', error)
  //     },
  //     options,
  //   )
  // }, [meshRef, meshRef.current, saveArrayBuffer, saveString, currentLink])

  // const [gltfPath, setGltfPath] = useState(props.gltfPath)

  // useEffect(() => {
  //   setGltfPath(props.gltfPath)
  // }, [props.gltfPath])

  // const Model: React.FC = () => {
  //   const gltf = useGLTF(`/${gltfPath}.glb`)
  //   return <primitive object={gltf.scene} />
  // }

  function Loader() {
    return (
      <Html center>
        <div style={{ width: 200, height: 150 }}>
          <Image src={gifImg} alt='loading' width={200} height={150} />
        </div>
      </Html>
    )
  }

  // const [settings, setSettings] = useState(props.setting)

  // const Box: React.FC<Pixel> = (props) => {
  //   return (
  //     <mesh
  //       position={[
  //         settings
  //           ? props.position.x / settings.position.x.multiply + settings.position.x.offset
  //           : 0,
  //         settings
  //           ? props.position.y / settings.position.y.multiply + settings.position.y.offset
  //           : 0,
  //         settings
  //           ? props.position.z / settings.position.z.multiply + settings.position.z.offset
  //           : 0,
  //       ]}
  //     >
  //       <boxGeometry args={[0.01, 0.01, 0.01]} />
  //       <meshStandardMaterial color={`rgb(${props.color.r}, ${props.color.g}, ${props.color.b})`} />
  //     </mesh>
  //   )
  // }

  const ImageBox: React.FC = () => {
    const texture = useTexture('/24597263_s.jpg')
    return (
      <>
        <mesh position={[-1.05, 1.0, 1.05]}>
          <boxGeometry args={[0.1, 3, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[1.05, 1.0, 1.05]}>
          <boxGeometry args={[0.1, 3, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[0, -0.45, 1.05]}>
          <boxGeometry args={[2.2, 0.1, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[0, 2.45, 1.05]}>
          <boxGeometry args={[2.2, 0.1, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
      </>
    )
  }

  const ImageBox2: React.FC = () => {
    const texture = useTexture('/24597263_s.jpg')

    return (
      <>
        <mesh position={[-1.5, 0.33, 1.1]}>
          <boxGeometry args={[0.1, 2.25, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[1.5, 0.33, 1.1]}>
          <boxGeometry args={[0.1, 2.25, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[0, -0.75, 1.1]}>
          <boxGeometry args={[3.1, 0.1, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
        <mesh position={[0, 1.4, 1.1]}>
          <boxGeometry args={[3.1, 0.1, 0.1]} />
          <meshBasicMaterial attach='material' map={texture} />
        </mesh>
      </>
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.1} />
          <directionalLight color='white' position={[0, 0, 1]} />
          {props.pixels && props.setting && (
            <mesh ref={meshRef}>
              {props.pixels.map((item, index) => {
                if (item.position.x % 2 === 0 && item.position.y % 2 === 0) {
                  return (
                    <mesh
                      position={[
                        props.setting
                          ? item.position.x / props.setting.position.x.multiply +
                            props.setting.position.x.offset
                          : 0,
                        props.setting
                          ? item.position.y / props.setting.position.y.multiply +
                            props.setting.position.y.offset
                          : 0,
                        props.setting
                          ? item.position.z / props.setting.position.z.multiply +
                            props.setting.position.z.offset
                          : 0,
                      ]}
                      key={index}
                    >
                      <sphereGeometry args={[0.01, 0.01, 0.01]} />
                      <meshStandardMaterial
                        color={`rgb(${item.color.r}, ${item.color.g}, ${item.color.b})`}
                      />
                    </mesh>
                  )
                }
              })}
              {props.initialScene ? <ImageBox2 /> : <ImageBox />}
            </mesh>
          )}
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  )
}
export default Three
