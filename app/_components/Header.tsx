// Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ui } from '@/styles/uiPalette';
import { usePathname } from 'next/navigation';

/* — glow animation — */
const pulse = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
`;

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.9rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(26, 29, 36, 0.98);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${ui.border};

  @media (min-width: 768px) {
    position: sticky;
    padding: 0.9rem 2rem;
  }

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
  font-size: 1.1rem;
  color: ${ui.text};
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 40px;
    height: 40px;
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`;

const MenuOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 98;
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
    padding: 0.5rem 0;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
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

    &.active {
      color: ${ui.accent};
      font-weight: 700;

      &::after {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #1a1d24;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    transform: translateX(${({ open }) => (open ? '0' : '100%')});
    transition: transform 0.2s ease;
    z-index: 99;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.2);

    a {
      font-size: 1.3rem;
      width: 100%;
      padding: 1.2rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      text-align: center;
      background: none;
      margin: 0;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;

const MenuButton = styled.button<{ open: boolean }>`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 101;
  position: relative;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 32px;
    height: 32px;
    align-items: center;
    background: #23262f;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }

  span {
    display: block;
    width: 22px;
    height: 2.5px;
    background: ${ui.text};
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  ${({ open }) =>
    open &&
    css`
      span:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    `}
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCaseStudyPage = pathname?.startsWith('/case-studies');

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <Bar>
        <Brand href="/">
          <Image src="/logo.png" alt="logo" width={80} height={80} priority />
          <span>Cascade Core Solutions</span>
        </Brand>

        <MenuButton
          open={open}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </MenuButton>

        <MenuOverlay open={open} onClick={() => setOpen(false)} />
        <Nav open={open}>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
            Services
          </Link>
          <Link href="/case-studies" className={isCaseStudyPage ? 'active' : ''}>
            Case Studies
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </Nav>
      </Bar>
    </>
  );
}