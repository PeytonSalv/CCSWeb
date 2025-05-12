'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

export const StyledContentSection = styled(motion.section)`
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto 4rem auto;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  scroll-snap-align: start; // For page-like scrolling
  position: relative; // Ensure it respects z-index if PageContainer has pseudo-elements
  z-index: 1; // Above general PageContainer background effects
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #e0e0e0;
  margin-bottom: 2rem;
  text-align: center; 
  span {
    background: linear-gradient(135deg, #00ffe0, #4f46e5);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const Paragraph = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.75;
  color: #b0b8c9;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

interface ContentSectionLayoutProps {
  title: React.ReactNode; // Allow string or JSX for title (e.g., with span for gradient)
  children: React.ReactNode;
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number; 
}

export default function ContentSectionLayout({
  title,
  children,
  variants,
  initial = "hidden",
  animate = "visible",
  custom
}: ContentSectionLayoutProps) {
  return (
    <StyledContentSection
      initial={initial}
      animate={animate}
      variants={variants}
      custom={custom}
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledContentSection>
  );
} 