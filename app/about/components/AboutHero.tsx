'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSectionAbout = styled(motion.section)`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem 4rem;
  background: transparent;
  position: relative;
  scroll-snap-align: start; // For page-like scrolling
`;

export const MainHeading = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

export const SubHeading = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #c0c6d6;
  max-width: 700px;
  margin-bottom: 2.5rem;
`;

export const CtaButtonPrimary = styled(motion(Link))`
  display: inline-block;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  color: #0a0f1c; 
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 224, 0.2);
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #00fff0, #5f56f5);
    box-shadow: 0 6px 20px rgba(0, 255, 224, 0.4);
    transform: translateY(-2px);
  }
`;

interface AboutHeroProps {
  variants?: any; // For framer-motion variants
  initial?: string;
  animate?: string;
  custom?: number;
}

export default function AboutHero({ variants, initial = "hidden", animate = "visible", custom }: AboutHeroProps) {
  return (
    <HeroSectionAbout
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
    >
      <MainHeading>Innovate. Integrate. Inspire.</MainHeading>
      <SubHeading>
        Discover the story behind Cascade Core Solutions, where cutting-edge technology meets a passion for transformative solutions. We're not just developers; we're your strategic partners in navigating the future of digital excellence.
      </SubHeading>
      <CtaButtonPrimary 
        href="/services"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Services
      </CtaButtonPrimary>
    </HeroSectionAbout>
  );
} 