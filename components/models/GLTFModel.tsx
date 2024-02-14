// GLTFModel.tsx
import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three';

interface GLTFModelProps {
  url: string;
  onLoaded?: () => void;
  scale?: number;
}

const GLTFModel: React.FC<GLTFModelProps> = ({ url, onLoaded, scale = 1.5 }) => {
  const modelRef = useRef<Object3D>(null);
  const gltf = useLoader(GLTFLoader, url);

  // Animation logic
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  // Notify when the model is loaded
  useEffect(() => {
    if (onLoaded && gltf) {
      onLoaded();
    }
  }, [gltf, onLoaded]);

  return <primitive object={gltf.scene} ref={modelRef} scale={scale} />;
};

export default GLTFModel;
