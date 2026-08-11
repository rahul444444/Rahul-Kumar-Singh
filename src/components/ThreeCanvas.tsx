import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  interactive?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0d14, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x0284c7, 3, 50); // Flutter Cyan
    pointLight1.position.set(12, 12, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf97316, 3, 50); // Laravel Orange
    pointLight2.position.set(-12, -10, 8);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x10b981, 2, 50); // Emerald Emerald
    pointLight3.position.set(0, 15, -10);
    scene.add(pointLight3);

    // 1. Particle Cloud (Starfield)
    const particleCount = 700;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0xf97316), // Orange
      new THREE.Color(0x34d399), // Emerald
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xf43f5e)  // Rose
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = randomColor.r;
      colors[i * 3 + 1] = randomColor.g;
      colors[i * 3 + 2] = randomColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 2. Central Floating 3D Nodes
    // Flutter Ring Node
    const torusGeo = new THREE.TorusGeometry(3.5, 0.25, 16, 100);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(10, 4, -5);
    mainGroup.add(torusMesh);

    // Laravel Hexagon Core
    const icoGeo = new THREE.IcosahedronGeometry(2.5, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.7
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-11, -3, -2);
    mainGroup.add(icoMesh);

    // Firebase Wireframe Octahedron
    const octaGeo = new THREE.OctahedronGeometry(2.2, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(5, -9, 0);
    mainGroup.add(octaMesh);

    // Floating Tech Sphere Node
    const sphereGeo = new THREE.SphereGeometry(1.8, 24, 24);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(-6, 9, -4);
    mainGroup.add(sphereMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      mouseX = (event.clientX - width / 2) * 0.0005;
      mouseY = (event.clientY - height / 2) * 0.0005;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.04 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 + targetY;

      // Rotate individual geometries
      torusMesh.rotation.x = elapsedTime * 0.3;
      torusMesh.rotation.y = elapsedTime * 0.5;

      icoMesh.rotation.x = elapsedTime * -0.4;
      icoMesh.rotation.z = elapsedTime * 0.2;

      octaMesh.rotation.y = elapsedTime * 0.6;
      octaMesh.rotation.x = elapsedTime * 0.3;

      sphereMesh.rotation.y = elapsedTime * -0.2;

      // Slight floating motion
      torusMesh.position.y = 4 + Math.sin(elapsedTime * 1.5) * 0.8;
      icoMesh.position.y = -3 + Math.cos(elapsedTime * 1.2) * 0.7;
      octaMesh.position.y = -9 + Math.sin(elapsedTime * 1.8) * 0.6;
      sphereMesh.position.y = 9 + Math.cos(elapsedTime * 1.1) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up Three.js objects
      particleGeometry.dispose();
      particleMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0d14]"
      aria-hidden="true"
    />
  );
};
