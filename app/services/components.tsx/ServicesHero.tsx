'use client';

import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animation for the techy background effect
const animatedTechBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 100px 100px; } // Adjust values for speed/scale of movement
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  padding: 0 2rem;
  // Adjusted gradient for more depth and a slightly different color stop
  background: radial-gradient(ellipse at bottom, #0a192f 0%, #000000 70%); 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  scroll-snap-align: start;

  // Techy background effect using a pseudo-element
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 255, 224, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 224, 0.03) 1px, transparent 1px);
    background-size: 20px 20px; // Size of the grid cells
    opacity: 0.5; // Adjust for subtlety
    animation: ${animatedTechBackground} 10s linear infinite; // Apply animation
    z-index: 0;
  }

  @media (max-width: 767px) {
    height: auto;
    min-height: 70vh;
    padding-top: 90px;
    padding-bottom: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Content = styled.div`
  z-index: 1; // Ensure content is above the ::before pseudo-element
  max-width: 800px;
  position: relative; // Needed for z-index to work correctly against pseudo-elements
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: clamp(1.5rem, 7vw, 2.6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 0 0.5rem;
`;

const Subtitle = styled(motion.p)`
  margin-top: 1.2rem;
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  color: #c0c6d6;
  margin-bottom: 2.5rem; // Added margin to make space for CTA
  padding: 0 0.5rem;
`;

const CtaButton = styled(motion.button)`
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  color: #E0E0E0;
  transition: all 0.3s ease;
  margin-top: 3rem;
  align-self: center;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(135deg, #00ffe0, #4f46e5);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(0, 255, 224, 0.05), rgba(79, 70, 229, 0.1));
    color: white;
    box-shadow: 0 0 15px rgba(0, 255, 224, 0.3);

    &::before {
      background: linear-gradient(135deg, #00fff0, #5f56f5);
    }
  }
`;

export default function ServicesHero() {
  return (
    <HeroSection>
      <Content>
        <Title
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Services for Modern Teams
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Whether you're a startup or scaling enterprise, we build solutions that work—and last.
        </Subtitle>
        <CtaButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.03, y: -2 }} // Aligned with potential CSS effects
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </CtaButton>
      </Content>
    </HeroSection>
  );
}
