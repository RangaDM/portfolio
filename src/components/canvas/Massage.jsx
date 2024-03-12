import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Mzg = () => {
    const Mzg = useGLTF('./emoji_heart_message/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.1} />
        <pointLight intensity={1} />
        <primitive object={Mzg.scene} scale={10} />
    </mesh>
  )
}

const MzgCanvas = () => {
    return (
        <Canvas frameloop='demand'
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={ {preserveDrawingBuffer : true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                enableZoom={false}
                maxAzimuthAngle={Math.PI/2}
                minAzimuthAngle={Math.PI/2}
                />
                <Mzg />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default MzgCanvas