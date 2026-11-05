'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { shouldShowIntro, markIntroSeen } from '../../lib/introSession';

/**
 * THE KSR ARCHIVE — CINEMATIC 3D INTRO ANIMATION & LUXURY HOMEPAGE TRANSITION
 *
 * Exact 5.0-Second Timeline:
 * - 0.0s – 3.0s: Original 3D emblem emergence, rotation, typography reveal & emblem sweep flare.
 * - 3.0s – 3.5s: Final Logo Hold (0.5s crystal-clear hold of the complete KSR brand composition).
 * - 3.5s – 4.0s: Cinematic Logo Exit (golden sweep flare dissolves emblem & typography gracefully).
 * - 4.0s – 4.4s: Phase A — Directional mask begins revealing existing homepage background & ambient canvas.
 * - 4.4s – 4.8s: Phase B — Golden light sweep sweeps across hero section, revealing headline, narrative & actions.
 * - 4.8s – 5.0s: Phase C — Golden light diffuses completely, scroll restored, overlay cleanly unmounted at 5.0s.
 */
export const IntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [phase, setPhase] = useState<number>(0); 
  // 0: Dark emergence (0-0.5s)
  // 1: 3D dolly & rotation (0.5-1.6s)
  // 2: Editorial typography unfolds (1.6-2.4s)
  // 3: Golden sweep flare across emblem (2.4-3.0s)
  // 4: Final logo hold (3.0-3.5s)
  // 5: Cinematic logo exit (3.5-4.0s)
  // 6: Directional mask homepage reveal (4.0-4.8s)
  // 7: Completion & diffusion (4.8-5.0s)

  const [isDismissing, setIsDismissing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const curtainRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const sweepBeamRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const cleanupDoneRef = useRef<boolean>(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  // 1. Session Storage & Reduced Motion Verification
  useEffect(() => {
    // Respect user's motion preference: immediate reveal without delay
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        markIntroSeen();
        setIsCompleted(true);
        return;
      }
    }

    if (!shouldShowIntro()) {
      setIsCompleted(true);
      return;
    }

    setVisible(true);

    // Lock scrolling while intro is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // 2. Immediate Dismissal Handler (Skip Button or ESC key)
  const handleDismiss = useCallback(() => {
    if (isDismissing || isCompleted) return;
    setIsDismissing(true);
    markIntroSeen();

    timersRef.current.forEach(clearTimeout);

    setTimeout(() => {
      setIsCompleted(true);
      document.body.style.overflow = '';
    }, 260);
  }, [isDismissing, isCompleted]);

  // 3. Keyboard Shortcut Listener (ESC key)
  useEffect(() => {
    if (!visible || isCompleted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, isCompleted, handleDismiss]);

  // 4. Master 5-Second Choreographed Timing Sequence
  useEffect(() => {
    if (!visible || isCompleted) return;

    // 0.5s: 3D camera dolly and rotation reveal
    const t1 = setTimeout(() => {
      setPhase(1);
    }, 500);

    // 1.6s: Editorial typography unfolds
    const t2 = setTimeout(() => {
      setPhase(2);
    }, 1600);

    // 2.4s: Golden light sweep flare across emblem & hairline
    const t3 = setTimeout(() => {
      setPhase(3);
    }, 2400);

    // 3.0s: Final Logo Hold (0.5s hold of complete composition)
    const t4 = setTimeout(() => {
      setPhase(4);
    }, 3000);

    // 3.5s: Cinematic Logo Exit (golden sweep dissolves logo & title)
    const t5 = setTimeout(() => {
      setPhase(5);
    }, 3500);

    // 4.0s: Phase A & B — Directional mask reveals homepage background & hero
    const t6 = setTimeout(() => {
      setPhase(6);
    }, 4000);

    // 4.8s: Phase C — Reveal completes, golden beam diffuses, scroll unlocked
    const t7 = setTimeout(() => {
      setPhase(7);
      document.body.style.overflow = '';
    }, 4800);

    // 5.0s: Exactly 5 seconds — mark complete and unmount overlay cleanly
    const t8 = setTimeout(() => {
      markIntroSeen();
      setIsCompleted(true);
    }, 5000);

    timersRef.current = [t1, t2, t3, t4, t5, t6, t7, t8];

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, [visible, isCompleted]);

  // 5. Three.js 3D Emblem Scene & Animation Loop
  useEffect(() => {
    if (!visible || isCompleted || !canvasMountRef.current) return;

    const mount = canvasMountRef.current;
    let width = Math.max(mount.clientWidth || 480, 320);
    let height = Math.max(mount.clientHeight || 240, 200);

    // WebGL Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    mount.appendChild(renderer.domElement);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // Scene & Camera
    const scene = new THREE.Scene();
    const isMobile = window.innerWidth < 640;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(-0.55, 0.35, isMobile ? 6.2 : 4.8);

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const colorTexture = textureLoader.load('/ksr-emblem-gold.png');
    const normalTexture = textureLoader.load('/ksr-emblem-normal.png');

    colorTexture.generateMipmaps = true;
    colorTexture.minFilter = THREE.LinearMipmapLinearFilter;
    colorTexture.anisotropy = maxAnisotropy;

    normalTexture.generateMipmaps = true;
    normalTexture.minFilter = THREE.LinearMipmapLinearFilter;
    normalTexture.anisotropy = maxAnisotropy;

    const texturesToDispose: THREE.Texture[] = [colorTexture, normalTexture];
    const geometriesToDispose: THREE.BufferGeometry[] = [];
    const materialsToDispose: THREE.Material[] = [];
    const depthMaterials: THREE.MeshPhysicalMaterial[] = [];

    // Studio Environment Map for Realistic Gold Shading
    let studioEnvMap: THREE.Texture | null = null;
    let envRenderTarget: THREE.WebGLRenderTarget | null = null;
    try {
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      pmremGenerator.compileEquirectangularShader();
      const envScene = new THREE.Scene();
      envScene.background = new THREE.Color(0x050505);

      const keyBox = new THREE.Mesh(
        new THREE.PlaneGeometry(16, 8),
        new THREE.MeshBasicMaterial({ color: 0xfff3db })
      );
      keyBox.position.set(-2, 8, -2);
      keyBox.rotation.x = Math.PI / 3;
      envScene.add(keyBox);

      const goldBox = new THREE.Mesh(
        new THREE.PlaneGeometry(12, 12),
        new THREE.MeshBasicMaterial({ color: 0xfabb02 })
      );
      goldBox.position.set(-8, 3, 3);
      goldBox.rotation.y = Math.PI / 3;
      envScene.add(goldBox);

      const rimBox = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 14),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      rimBox.position.set(8, -2, -3);
      rimBox.rotation.y = -Math.PI / 3;
      envScene.add(rimBox);

      envRenderTarget = pmremGenerator.fromScene(envScene);
      studioEnvMap = envRenderTarget.texture;
      texturesToDispose.push(studioEnvMap);

      keyBox.geometry.dispose();
      (keyBox.material as THREE.Material).dispose();
      goldBox.geometry.dispose();
      (goldBox.material as THREE.Material).dispose();
      rimBox.geometry.dispose();
      (rimBox.material as THREE.Material).dispose();
      pmremGenerator.dispose();
    } catch {
      studioEnvMap = null;
    }

    // 3D Metallic Emblem Assembly
    const emblemGroup = new THREE.Group();
    const emblemWidth = 5.4;
    const emblemHeight = 1.8;

    // Front Face
    const frontGeom = new THREE.PlaneGeometry(emblemWidth, emblemHeight, 96, 32);
    geometriesToDispose.push(frontGeom);

    const frontMaterial = new THREE.MeshPhysicalMaterial({
      map: colorTexture,
      normalMap: normalTexture,
      normalScale: new THREE.Vector2(2.8, 2.8),
      roughness: 0.22,
      metalness: 0.96,
      clearcoat: 0.65,
      clearcoatRoughness: 0.12,
      reflectivity: 1.0,
      envMap: studioEnvMap || undefined,
      envMapIntensity: 2.6,
      transparent: true,
      alphaTest: 0.05,
      opacity: 1.0,
    });
    materialsToDispose.push(frontMaterial);

    const frontMesh = new THREE.Mesh(frontGeom, frontMaterial);
    frontMesh.position.z = 0.08;
    emblemGroup.add(frontMesh);

    // Bevel & Depth Layers
    const depthLayers = 4;
    const depthStep = 0.035;
    for (let i = 1; i <= depthLayers; i++) {
      const zOffset = 0.08 - i * depthStep;
      const layerGeom = new THREE.PlaneGeometry(emblemWidth, emblemHeight, 32, 12);
      geometriesToDispose.push(layerGeom);

      const darkenFactor = 1.0 - (i / depthLayers) * 0.45;
      const depthMaterial = new THREE.MeshPhysicalMaterial({
        map: colorTexture,
        normalMap: normalTexture,
        normalScale: new THREE.Vector2(1.5, 1.5),
        color: new THREE.Color(darkenFactor, darkenFactor * 0.95, darkenFactor * 0.8),
        roughness: 0.35,
        metalness: 0.92,
        clearcoat: 0.3,
        transparent: true,
        alphaTest: 0.08,
        envMap: studioEnvMap || undefined,
        envMapIntensity: 1.8 * darkenFactor,
        opacity: 1.0,
      });
      materialsToDispose.push(depthMaterial);
      depthMaterials.push(depthMaterial);

      const layerMesh = new THREE.Mesh(layerGeom, depthMaterial);
      layerMesh.position.z = zOffset;
      const bevelScale = 1.0 - i * 0.006;
      layerMesh.scale.set(bevelScale, bevelScale, 1.0);
      emblemGroup.add(layerMesh);
    }

    // Shadow Plane
    const shadowGeom = new THREE.PlaneGeometry(emblemWidth * 1.05, emblemHeight * 1.15);
    geometriesToDispose.push(shadowGeom);
    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: colorTexture,
      color: 0x000000,
      transparent: true,
      opacity: 0.5,
      alphaTest: 0.05,
    });
    materialsToDispose.push(shadowMaterial);
    const shadowMesh = new THREE.Mesh(shadowGeom, shadowMaterial);
    shadowMesh.position.z = -0.12;
    emblemGroup.add(shadowMesh);

    // Ambient Golden Particles
    const particleCount = 42;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3 + 0] = (Math.random() - 0.5) * 8.0;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 4.0;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.5;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    geometriesToDispose.push(particleGeom);

    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    const pctx = particleCanvas.getContext('2d');
    if (pctx) {
      const gradient = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 235, 170, 0.9)');
      gradient.addColorStop(0.3, 'rgba(250, 187, 2, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pctx.fillStyle = gradient;
      pctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);
    texturesToDispose.push(particleTexture);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.09,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.6,
    });
    materialsToDispose.push(particleMaterial);

    const particles = new THREE.Points(particleGeom, particleMaterial);
    scene.add(particles);

    // Pivot Group
    const pivot = new THREE.Group();
    pivot.add(emblemGroup);
    pivot.rotation.set(0.08, -0.32, 0.02);
    pivot.scale.setScalar(0.92);
    scene.add(pivot);

    // Automotive Studio Lighting
    const keySpot = new THREE.SpotLight(0xffeed0, 0.2, 22, Math.PI / 4, 0.35);
    keySpot.position.set(-3.2, 3.6, 4.5);
    keySpot.target = pivot;
    scene.add(keySpot);

    const rimPoint = new THREE.PointLight(0xfff8e8, 3.8, 16);
    rimPoint.position.set(3.8, 2.0, -2.4);
    scene.add(rimPoint);

    const fillPoint = new THREE.PointLight(0xfabb02, 1.8, 12);
    fillPoint.position.set(-3.5, -2.2, 2.4);
    scene.add(fillPoint);

    const sweepLight = new THREE.PointLight(0xfffae6, 0, 12);
    sweepLight.position.set(-6, 0, 2.2);
    scene.add(sweepLight);

    const ambientLight = new THREE.AmbientLight(0x281c06, 0.95);
    scene.add(ambientLight);

    // Responsive Resizing
    const handleResize = () => {
      if (!mount) return;
      width = Math.max(mount.clientWidth, 320);
      height = Math.max(mount.clientHeight, 200);
      camera.aspect = width / height;
      const mobile = window.innerWidth < 640;
      camera.position.z = mobile ? 6.2 : 4.8;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // High Precision 60fps Animation Loop
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      if (cleanupDoneRef.current) return;

      const elapsed = (currentTime - startTime) / 1000;

      // Particle Drift
      const positions = particleGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(elapsed * 0.8 + i) * 0.0015;
        positions[i * 3 + 0] += Math.cos(elapsed * 0.5 + i) * 0.001;
      }
      particleGeom.attributes.position.needsUpdate = true;

      // =========================================================================
      // 0.0s – 3.0s: ORIGINAL 3D ANIMATION (PRESERVED 100% UNCHANGED)
      // =========================================================================

      // 0.0s – 0.5s: Dark Emergence
      if (elapsed < 0.5) {
        const p = Math.min(1, elapsed / 0.5);
        const ease = 1 - Math.pow(1 - p, 3);
        keySpot.intensity = ease * 5.0;
        pivot.scale.setScalar(0.90 + ease * 0.10);
        camera.position.x = -0.55 * (1 - ease * 0.3);
        camera.position.y = 0.35 * (1 - ease * 0.3);
      }
      // 0.5s – 1.6s: Cinematic Camera Dolly & 3D Rotation
      else if (elapsed < 1.6) {
        const p = (elapsed - 0.5) / 1.1;
        const ease = 1 - Math.pow(1 - p, 3);
        keySpot.intensity = 5.0;
        pivot.scale.setScalar(1.0);

        pivot.rotation.y = -0.32 * (1 - ease);
        pivot.rotation.x = 0.08 * (1 - ease);

        camera.position.x = -0.385 * (1 - ease);
        camera.position.y = 0.245 * (1 - ease);
        camera.position.z = (isMobile ? 6.2 : 4.8) + (1 - ease) * 0.3;

        keySpot.position.x = -3.2 + ease * 4.5;
      }
      // 1.6s – 2.4s: Majestic Front Hero Suspension & Subtle Micro-Float
      else if (elapsed < 2.4) {
        const floatY = Math.sin((elapsed - 1.6) * 2.2) * 0.012;
        const floatX = Math.cos((elapsed - 1.6) * 1.8) * 0.006;
        pivot.rotation.y = floatX;
        pivot.rotation.x = floatY;
        pivot.position.y = floatY * 0.5;
      }
      // 2.4s – 3.0s: Golden Light Sweep Flare Across the Emblem
      else if (elapsed < 3.0) {
        const sweepProgress = (elapsed - 2.4) / 0.6;
        sweepLight.position.x = -5.5 + sweepProgress * 11.0;
        sweepLight.intensity = Math.sin(sweepProgress * Math.PI) * 7.5;
        pivot.rotation.set(0, 0, 0);
        pivot.position.set(0, 0, 0);
        pivot.scale.setScalar(1.0);
      }

      // =========================================================================
      // 3.0s – 3.5s: FINAL LOGO HOLD (0.5s Stable Recognition Hold)
      // =========================================================================
      else if (elapsed < 3.5) {
        pivot.rotation.set(0, 0, 0);
        pivot.position.set(0, 0, 0);
        pivot.scale.setScalar(1.0);
        keySpot.intensity = 5.0;
        rimPoint.intensity = 3.8;
        fillPoint.intensity = 1.8;
        sweepLight.intensity = 0;
      }

      // =========================================================================
      // 3.5s – 4.0s: CINEMATIC LOGO EXIT (Golden Light Sweep Dissolves Emblem)
      // =========================================================================
      else if (elapsed < 4.0) {
        const exitProgress = (elapsed - 3.5) / 0.5;
        sweepLight.position.x = -6.0 + exitProgress * 12.0;
        sweepLight.intensity = Math.sin(exitProgress * Math.PI) * 8.5;

        // Subtle forward cinematic dolly
        pivot.scale.setScalar(1.0 + exitProgress * 0.035);

        // Fade materials smoothly
        const emblemAlpha = Math.max(0, 1.0 - exitProgress);
        frontMaterial.opacity = emblemAlpha;
        depthMaterials.forEach((m) => {
          m.opacity = emblemAlpha;
        });
        shadowMaterial.opacity = emblemAlpha * 0.5;
        particleMaterial.opacity = emblemAlpha * 0.6;

        // Fade out DOM content container in parallel
        if (contentContainerRef.current) {
          contentContainerRef.current.style.opacity = `${emblemAlpha}`;
          contentContainerRef.current.style.transform = `translateY(${-(exitProgress * 12)}px) scale(${1 - exitProgress * 0.02})`;
        }
      }

      // =========================================================================
      // 4.0s – 5.0s: DIRECTIONAL MASK & GOLDEN BEAM HOMEPAGE REVEAL
      // =========================================================================
      if (elapsed >= 4.0 && elapsed < 4.8) {
        // Phase A (4.0–4.4s) & Phase B (4.4–4.8s)
        const progress = (elapsed - 4.0) / 0.8;
        // Luxury cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const leftEdge = -14 + ease * 142; // sweeps from -14% to 128%

        if (curtainRef.current) {
          // Directional slanted mask (top leads, bottom follows by 16%)
          const topX = leftEdge;
          const bottomX = leftEdge - 16;
          curtainRef.current.style.clipPath = `polygon(${topX}% 0%, 100% 0%, 100% 100%, ${bottomX}% 100%)`;
          (curtainRef.current.style as any).webkitClipPath = `polygon(${topX}% 0%, 100% 0%, 100% 100%, ${bottomX}% 100%)`;
        }

        if (sweepBeamRef.current) {
          sweepBeamRef.current.style.opacity = '1';
          sweepBeamRef.current.style.left = `${leftEdge - 6}%`;
        }
      } else if (elapsed >= 4.8 && elapsed <= 5.0) {
        // Phase C: Completion & diffusion
        const fadeProgress = (elapsed - 4.8) / 0.2;
        if (curtainRef.current) {
          curtainRef.current.style.clipPath = `polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)`;
          (curtainRef.current.style as any).webkitClipPath = `polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)`;
        }
        if (sweepBeamRef.current) {
          sweepBeamRef.current.style.opacity = `${Math.max(0, 1 - fadeProgress)}`;
        }
      }

      // Render WebGL while emblem is in view
      if (elapsed < 4.05) {
        renderer.render(scene, camera);
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    // Thorough Memory Cleanup on Unmount
    return () => {
      cleanupDoneRef.current = true;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('resize', handleResize);

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      texturesToDispose.forEach((t) => t.dispose());
      if (envRenderTarget) envRenderTarget.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [visible, isCompleted]);

  if (!visible || isCompleted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="The KSR Archive Intro"
      className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-300 ${
        isDismissing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* 
        The Masked Obsidian Curtain:
        Clipped dynamically from 4.0s to 4.8s to reveal the underlying actual homepage 
      */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-[#000000] pointer-events-auto overflow-hidden flex flex-col items-center justify-center select-none"
        onClick={handleDismiss}
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      >
        {/* Deep Atmospheric Studio Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,187,2,0.06)_0%,transparent_65%)] pointer-events-none" />

        {/* Skip Button (Active during 0s–3.5s) */}
        {phase < 5 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono tracking-widest text-[#a6a6a6] hover:text-[#fabb02] hover:border-[#fabb02]/40 transition-colors uppercase cursor-pointer backdrop-blur-sm pointer-events-auto"
            aria-label="Skip Intro Animation"
          >
            SKIP [ESC]
          </button>
        )}

        {/* Content Container (Emblem + Typography) */}
        <div
          ref={contentContainerRef}
          className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Custom 3D Metallic Emblem Viewport */}
          <div
            ref={canvasMountRef}
            className="relative w-full max-w-[540px] sm:max-w-[680px] md:max-w-[760px] aspect-[2.6/1] flex items-center justify-center"
            style={{ minHeight: '220px' }}
          />

          {/* Brand Editorial Typography Reveal */}
          <div className="flex flex-col items-center text-center px-4 max-w-xl -mt-2 sm:-mt-4 relative z-10">
            {/* Brand Name: THE KSR ARCHIVE */}
            <h1
              className={`font-editorial text-2xl sm:text-3xl md:text-4xl font-medium tracking-[0.28em] sm:tracking-[0.32em] text-[#f5f5f0] uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                phase >= 2
                  ? 'opacity-100 translate-y-0 filter-none'
                  : 'opacity-0 translate-y-4 blur-[3px]'
              }`}
              style={{
                textShadow: '0 0 35px rgba(250, 187, 2, 0.3)',
              }}
            >
              THE KSR ARCHIVE
            </h1>

            {/* Subtitle: A DIGITAL SPACE BY KEVIN SIV RAJ */}
            <p
              className={`font-mono text-[10px] sm:text-xs text-[#a6a6a6] tracking-[0.28em] sm:tracking-[0.34em] uppercase mt-3 sm:mt-3.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
                phase >= 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              A DIGITAL SPACE BY KEVIN SIV RAJ
            </p>

            {/* Tagline: BUILD · LEARN · ITERATE */}
            <div
              className={`flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono font-medium tracking-[0.34em] sm:tracking-[0.40em] text-[#fabb02] uppercase mt-4 sm:mt-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
                phase >= 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              <span>BUILD</span>
              <span className="w-1 h-1 rounded-full bg-[#fabb02]/60" />
              <span>LEARN</span>
              <span className="w-1 h-1 rounded-full bg-[#fabb02]/60" />
              <span>ITERATE</span>
            </div>

            {/* Subtle Golden Hairline Divider with Light Sweep */}
            <div
              className={`relative h-[1px] bg-gradient-to-r from-transparent via-[#fabb02]/45 to-transparent w-44 sm:w-64 mt-6 transition-all duration-700 ease-out overflow-hidden ${
                phase >= 2 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
              }`}
            >
              {phase >= 3 && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[ksrSweep_0.6s_ease-out_forwards]" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 
        Cinematic Golden Light Sweep Beam:
        Travels directly along the leading edge of the directional reveal mask (4.0s–4.8s),
        providing the luxurious visual bridge into the existing homepage.
      */}
      <div
        ref={sweepBeamRef}
        className="pointer-events-none absolute top-[-30%] bottom-[-30%] w-[160px] sm:w-[260px] z-30"
        style={{
          opacity: 0,
          left: '-20%',
          transform: 'rotate(-8.5deg)',
          background:
            'linear-gradient(90deg, rgba(250, 187, 2, 0) 0%, rgba(250, 187, 2, 0.22) 30%, rgba(255, 248, 225, 0.95) 50%, rgba(250, 187, 2, 0.45) 70%, rgba(250, 187, 2, 0) 100%)',
          boxShadow:
            '0 0 60px rgba(250, 187, 2, 0.7), 0 0 120px rgba(250, 187, 2, 0.35)',
          filter: 'blur(3px)',
        }}
      />
    </div>
  );
};
