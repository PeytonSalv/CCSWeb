'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Component Imports
import Header from '../_components/Header'; // Assuming path from app/_components
import Footer from '../_components/Footer'; // Assuming path from app/_components
import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import OurApproach from './components/OurApproach';
import AboutContact from './components/AboutContact';

const subtleGradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const PageContainer = styled.div`
  background: linear-gradient(270deg, #0a0f1c, #0d1b2a, #0a0f1c);
  background-size: 600% 600%;
  animation: ${subtleGradientShift} 30s ease infinite;
  color: white;
  overflow-x: hidden;
  height: 100vh; // For full-page scroll snapping container
  overflow-y: scroll; // Enable scrolling for snap container
  scroll-snap-type: y mandatory; // Enable vertical scroll snapping
`;

const FooterWrapper = styled.footer`
  scroll-snap-align: start;
  padding: 2rem 0 0;
  background: #0a0f1c;
  position: relative;
  z-index: 1;
`;

// Animation Variants for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' }
  })
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

export default function AboutPage() {
  return (
    <PageContainer>
      <Header />
      
      <AboutHero variants={fadeInUp} custom={0} />
      <OurStory variants={slideInFromLeft} custom={0.1} />
      <MissionVision variants={slideInFromRight} custom={0.1} />
      <CoreValues variants={scaleUp} custom={0.1} />
      <OurApproach variants={fadeInUp} custom={0.1} /> 
      <AboutContact /> {/* ContactForm has its own entrance animation */}

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainer>
  );
}
