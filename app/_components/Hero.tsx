'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ui } from '@/styles/uiPalette';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/* ─ Load the Three-JS canvas on the client only */
const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => null,
});

/* ─ Styled containers (unchanged except z-index order) */
const HeroSection = styled.section`
  position: relative;
  height: 90vh;
  overflow: hidden;
  color: ${ui.text};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(ellipse at 80% 120%, #0d1b2a 0%, #000 100%);
`;

const CanvasLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const Inner = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`;

/* …Title, Subtitle, CTA styled exactly as before … */

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <HeroSection>
      <CanvasLayer>{ready && <HeroCanvas />}</CanvasLayer>

      <Inner>
        {/* motion components exactly as you had them */}
        {/* … */}
      </Inner>
    </HeroSection>
  );
}
