import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Bird = () => {
    const bird = useGLTF('./phoenix_bird/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.7} />
        <pointLight intensity={1} />
        <primitive object={bird.scene} scale={0.005} />
    </mesh>
  )
}

const BirdCanvas = () => {
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
                <Bird />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BirdCanvas