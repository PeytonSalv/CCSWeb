'use client';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ui } from '@/styles/uiPalette';

/* 3D Canvas Component (loaded client-side only) */
const BackgroundCanvas = dynamic(() => import('./CanvasWaves'), { ssr: false });

const float = keyframes`
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 8rem 2rem;
  min-height: 100vh;
  background: #0a0f1c;
  scroll-snap-align: start;
  color: white;
`;

const CanvasLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: auto;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1.2rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 4vw + 1rem, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.15rem;
  color: #c7c9d9;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 2rem auto;
`;

const CTA = styled(motion(Link))`
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1rem 2.4rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.22);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 28px rgba(0, 255, 255, 0.35);
  }
`;

const Logos = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  opacity: 0.8;
`;

const Logo = styled.img`
  height: 40px;
  filter: grayscale(100%) brightness(1.2);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%) brightness(1.4);
  }
`;

export default function WhoWeHelp() {
  return (
    <Section>
      <CanvasLayer>
        <BackgroundCanvas />
      </CanvasLayer>

      <Wrapper>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Who We Help
        </Heading>

        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We partner with SaaS disruptors, digital agencies, enterprise teams, and ambitious local
          businesses to launch faster and operate smarter. Whether you're building from scratch or
          modernizing legacy systems, our AI, API, and automation stack unlocks your next phase.
        </Paragraph>

        <CTA
          href="/contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Let’s Work Together
        </CTA>

        <Logos>
          <Logo src="/logos/logo1.png" alt="SaaS" />
          <Logo src="/logos/logo2.png" alt="Agency" />
          <Logo src="/logos/logo3.png" alt="Local Biz" />
          <Logo src="/logos/logo4.png" alt="Enterprise" />
          <Logo src="/logos/logo5.png" alt="Local Biz" />
          <Logo src="/logos/logo6.png" alt="Enterprise" />
          <Logo src="/logos/logo7.svg" alt="Local Biz" />
        </Logos>
      </Wrapper>
    </Section>
  );
}
