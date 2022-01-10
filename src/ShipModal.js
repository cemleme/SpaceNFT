import { Suspense, useRef, useState } from "react";
import "./App.css";
import { Html, useProgress } from '@react-three/drei'
import {
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend,
} from "@react-three/fiber";
import { CubeTextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Ship(props) {

  const [url, set] = useState(`/models/${props.shipName}.gltf`);
  const { scene } = useLoader(GLTFLoader, url);

  useThree(({ camera }) => {
    camera.rotation.set(0, deg2rad(30), 0);
    camera.position.set(0, 0, -10);
  });

  return <primitive object={scene} />;
}
const deg2rad = (degrees) => degrees * (Math.PI / 180);

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  // enableZoom={false}
  // maxAzimuthAngle={Math.PI / 4}
  // maxPolarAngle={Math.PI}
  // minAzimuthAngle={-Math.PI / 4}
  // minPolarAngle={0}
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/skybox/galacticgreen_left.jpg",
    "/skybox/galacticgreen_right.jpg",
    "/skybox/galacticgreen_up.jpg",
    "/skybox/galacticgreen_down.jpg",
    "/skybox/galacticgreen_front.jpg",
    "/skybox/galacticgreen_back.jpg",
  ]);
  scene.background = texture;
  return null;
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{parseInt(progress)}%</Html>
}

function ShipModal(props) {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[0 - 10, -10]} />

      <Suspense fallback={<Loader />}>
        <Ship shipName={props.shipName} />
      </Suspense>

      <SkyBox />
    </Canvas>
  );
}

export default ShipModal;
