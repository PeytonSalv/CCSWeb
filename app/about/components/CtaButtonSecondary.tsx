'use client';

import styled from 'styled-components';
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import Link from 'next/link';

export const StyledCtaButtonSecondary = styled(motion(Link))`
  display: inline-block;
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
  text-decoration: none;
  margin-top: 1.5rem; 

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit;
    padding: 2px; 
    background: linear-gradient(135deg, #00ffe0, #4f46e5);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
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

interface CtaButtonSecondaryProps {
  href: string;
  children: React.ReactNode;
  whileHover?: any;
  whileTap?: any;
}

const defaultHover: TargetAndTransition = { y: -2, scale: 1.02 };
const defaultTap: TargetAndTransition = { scale: 0.95 };

export default function CtaButtonSecondary({
  href,
  children,
  whileHover = defaultHover,
  whileTap = defaultTap
}: CtaButtonSecondaryProps) {
  return (
    <StyledCtaButtonSecondary
      href={href}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </StyledCtaButtonSecondary>
  );
} 