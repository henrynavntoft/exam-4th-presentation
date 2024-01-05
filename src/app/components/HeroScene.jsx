import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";

export default function HeroScene() {
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
    "https://prod.spline.design/DL-gTRxHOR1Ww3hy/scene.splinecode"
  );

  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0;
    }
  });

  return (
    <>
      <color />
      <group {...props} dispose={null}>
        <scene>
          <group position={[0, 50, 0]}>
            <mesh
              ref={ref}
              name="Sphere  Working with light"
              geometry={nodes["Sphere  Working with light"].geometry}
              material={materials["Sphere  Working with light Material"]}
              castShadow
              receiveShadow
              position={[0, 0, -1000]}
            />
          </group>
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
