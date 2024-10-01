import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';


const Passageway = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create the Passageway (Walls and Floor)
    const textureLoader = new THREE.TextureLoader();
    const wallMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load('../../assets/walltexture.jpg') });
    const floorMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load('../../assets/floortexture.webp') });

    const wallGeometry = new THREE.PlaneGeometry(10, 5);
    const floorGeometry = new THREE.PlaneGeometry(10, 10);

    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);

    // Position walls and floor
    leftWall.position.set(-5, 2.5, 0);
    rightWall.position.set(5, 2.5, 0);
    rightWall.rotation.y = Math.PI;

    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;

    scene.add(leftWall, rightWall, floor);

    // Add Paintings (Images on Walls)
    const paintingMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load('path/to/painting1.jpg') });
    const paintingGeometry = new THREE.PlaneGeometry(2, 2);

    const painting1 = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting1.position.set(-5, 2.5, -2);

    const painting2 = new THREE.Mesh(paintingGeometry, paintingMaterial);
    painting2.position.set(5, 2.5, -2);
    painting2.rotation.y = Math.PI;

    scene.add(painting1, painting2);

    // Add Text for Each Painting
    const fontLoader = new FontLoader();
    fontLoader.load('../../assets/painting.json', (font) => {
      const textGeometry = new TextGeometry('Painting 1', {
        font: font,
        size: 0.5,
        height: 0.1,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.set(-5, 1, -2);
      scene.add(textMesh);
    });

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Passageway;
