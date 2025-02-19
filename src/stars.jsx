import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './starbackground.css';

const StarsBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.setZ(30);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add stars
        const addStars = () => {
            const geometry = new THREE.SphereGeometry(0.08, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x, y, z);
            scene.add(star);
        };
        Array(200).fill().forEach(addStars);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        // Handle window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize, false);

        // Scroll effect
        const onScroll = () => {
            const t = document.body.getBoundingClientRect().top;
            camera.position.z = 30 + t * -0.01;
            camera.position.y = t * -0.002;
        };
        document.body.onscroll = onScroll;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Clean up
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
            document.body.onscroll = null;
        };
    }, []);

    return <div className="stars-background" ref={mountRef} />;
};

export default StarsBackground;
