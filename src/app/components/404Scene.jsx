import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene404() {
  return (
    <div className="w-screen h-screen absolute">
      <Canvas>
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/qN6SN1yGkPQ2tDN6/scene.splinecode"
  );

  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <color />
      <group {...props} dispose={null}>
        <scene name="404">
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-2726.1585}
            shadow-camera-right={2726.1585}
            shadow-camera-top={2726.1585}
            shadow-camera-bottom={-2726.1585}
            color="#000000"
            position={[0, 0, 0]}
            rotation={[100, 100, 100]}
          />
          <mesh
            ref={ref}
            name="Sphere no light"
            geometry={nodes["Sphere no light"].geometry}
            material={materials["Sphere no light Material"]}
            castShadow
            receiveShadow
            position={[0, 100, 0]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={10}
            castShadow
            color="#FEF7F6"
            rotation={[200, 100, 200]}
          />
        </scene>
      </group>
    </>
  );
}
