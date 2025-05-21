// WhatWeDo.tsx
"use client";

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLaptopCode, FaExchangeAlt, FaPlug, FaRobot } from "react-icons/fa";
import { useEffect, useRef } from "react";

/* ─────────────────────────  ANIMATED BG  */
const drift = keyframes`
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const Section = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  overflow: hidden;
  color: #fff;
  scroll-snap-align: start;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 140vmax;
    height: 140vmax;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(120px);
    opacity: 0.12;
    animation: ${drift} 50s linear infinite;
  }
  &::before {
    background: radial-gradient(circle at center, #00ffe0 0%, transparent 70%);
  }
  &::after {
    background: radial-gradient(circle at center, #4f46e5 0%, transparent 70%);
    animation-direction: reverse;
  }

  @media (max-width: 767px) {
    height: auto;
    min-height: 70vh;
    padding-top: 2.5rem;
    margin-top: 0;
  }
`;

const CursorSpotlight = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle 350px at var(--mouse-x, -9999px) var(--mouse-y, -9999px),
    hsla(175, 70%, 60%, 0.07) 0%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
  transition: background 50ms linear;
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 4vw + 1rem, 4.4rem);
  font-weight: 800;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #00ffe0, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Card = styled(motion.article)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem 1.6rem;
  border-radius: 1.2rem;
  backdrop-filter: blur(8px);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
  text-align: center;

  &:hover {
    transform: perspective(1000px) translateY(-6px) rotateX(2deg) rotateY(2deg);
    box-shadow: 0 12px 32px -8px rgba(79, 70, 229, 0.4);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    color: #fff;
  }

  p {
    font-size: 0.95rem;
    color: #d1d1d1;
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: #00ffe0;
  margin-bottom: 0.5rem;
`;

const CTA = styled(motion(Link))`
  display: inline-block;
  margin-top: 3.2rem;
  align-self: center;
  padding: 1rem 2.6rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.22);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 28px rgba(0, 255, 255, 0.35);
  }
`;

const services = [
  { title: 'Web Design', desc: 'Fast, responsive websites that reflect your brand and drive results.', icon: <FaLaptopCode /> },
  { title: 'Data Migration', desc: 'Securely transfer data across systems with zero downtime.', icon: <FaExchangeAlt /> },
  { title: 'API Integrations', desc: 'Connect tools and automate processes with robust APIs.', icon: <FaPlug /> },
  { title: 'AI & Automation', desc: 'Leverage machine learning and AI workflows to streamline operations.', icon: <FaRobot /> },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
        sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      currentSectionRef.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentSectionRef) {
        currentSectionRef.removeEventListener('mousemove', handleMouseMove);
        currentSectionRef.style.removeProperty('--mouse-x');
        currentSectionRef.style.removeProperty('--mouse-y');
      }
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <CursorSpotlight />
      <Heading
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        What&nbsp;We&nbsp;Do
      </Heading>

      <Grid>
        {services.map((s, i) => (
          <Card
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
          >
            <CardIcon>{s.icon}</CardIcon>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Card>
        ))}
      </Grid>

      <CTA
        href="/contact"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        aria-label="Contact us"
      >
        Let's Work Together
      </CTA>
    </Section>
  );
}
