/* Hero.tsx ----------------------------------------------------- */
'use client';

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { useEffect, useRef } from 'react';

/* --- Keyframes for Animations --- */
const subtlePulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.12;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.15;
  }
`;

/* ——— Container ——— */
const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #000;
  overflow: hidden;
  scroll-snap-align: start;
`;

/* ——— Gradient accents ——— */
const Accent = styled.div<{ $angle: number; $hue: string; $depth: number }>`
  position: absolute;
  width: 70vmax;
  height: 70vmax;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    hsl(${({ $hue }) => $hue} 95% 60%) 0%,
    transparent 70%
  );
  transform-origin: center center;
  animation: ${subtlePulse} 12s ease-in-out infinite;
  transform: 
    translate(
      calc(-50% + (var(--mouse-x, 0px) * ${({ $depth }) => $depth * 0.015})),
      calc(-50% + (var(--mouse-y, 0px) * ${({ $depth }) => $depth * 0.015}))
    )
    rotate(${({ $angle }) => $angle}deg);
  pointer-events: none;
  transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

/* ——— Content ——— */
const Title = styled.h1`
  font-size: clamp(2.6rem, 5vw + 1rem, 5rem);
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  max-width: 48rem;
  margin-top: 1rem;
  font-size: clamp(1.1rem, 1vw + 1rem, 1.4rem);
  text-align: center;
  color: #b3b3b3;
`;

const CTA = styled(Link)`
  display: inline-block;
  margin-top: 2.6rem;
  padding: 0.95rem 2.6rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  box-shadow: 0 0 24px rgba(0, 255, 255, 0.2);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 32px rgba(0, 255, 255, 0.35);
  }
`;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      currentHeroRef.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentHeroRef) {
        currentHeroRef.removeEventListener('mousemove', handleMouseMove);
        currentHeroRef.style.removeProperty('--mouse-x');
        currentHeroRef.style.removeProperty('--mouse-y');
      }
    };
  }, []);

  return (
    <HeroSection ref={heroRef}>
      {/* gradient orbs */}
      <Accent $angle={25} $hue="175" $depth={1} style={{ top: '10%', left: '15%' }} />
      <Accent $angle={-40} $hue="260" $depth={2} style={{ bottom: '0%', right: '-10%' }} />

      {/* copy */}
      <Title>Build&nbsp;Smarter.&nbsp;Launch&nbsp;Faster.</Title>
      <Subtitle>
        AI-powered development, automation, and seamless integration for forward-thinking
        companies.
      </Subtitle>
      <CTA href="/contact">Let's Work Together</CTA>
    </HeroSection>
  );
}
