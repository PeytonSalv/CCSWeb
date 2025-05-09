'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ui } from '@/styles/uiPalette';
import { usePathname } from 'next/navigation';



/* — glow animation — */
const pulse = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
`;

/* — styled header — */
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(26, 29, 36, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${ui.border};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, #00ffe0, #7dd3fc, #00ffe0);
    background-size: 200% 100%;
    animation: ${pulse} 5s infinite linear;
    z-index: -1;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 1.2rem;
  color: ${ui.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 2rem;
  font-size: 0.95rem;
  align-items: center;

  a {
    position: relative;
    color: ${ui.text};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 2px;
      background: ${ui.accent};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 640px) {
    position: fixed;
    inset: 0 0 0 auto;
    flex-direction: column;
    background: ${ui.surface};
    padding: 5rem 2rem;
    width: 68vw;
    transform: translateX(${(p) => (p.open ? 0 : '100%')});
    transition: transform 0.3s ease;
  }
`;

const Toggle = styled.button<{ open: boolean }>`
  display: none;
  width: 26px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 640px) {
    display: block;
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: ${ui.text};
    margin: 4px 0;
    transition: 0.3s;
  }

  ${({ open }) =>
    open &&
    `
    span:nth-child(1){ transform: translateY(6px) rotate(45deg); }
    span:nth-child(2){ opacity: 0; }
    span:nth-child(3){ transform: translateY(-6px) rotate(-45deg); }
  `}
`;

//light up nav bar when user is currently on it. 
const isActive = (path: string) => {
  return usePathname() === path;
};

/* — component — */
export default function Header() {
  const [open, set] = useState(false);

  return (
    <Bar>
      <Brand href="/">
        <Image src="/logo.png" alt="logo" width={80} height={80} priority />
        Cascade&nbsp;Core&nbsp;Solutions
      </Brand>

      <Toggle open={open} onClick={() => set(!open)} aria-label="Menu">
        <span />
        <span />
        <span />
      </Toggle>

      <Nav open={open} onClick={() => set(false)}>
        <Link href="#about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="#contact">Contact</Link>
      </Nav>
    </Bar>
  );
}
