"use client";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { ui } from "@/styles/uiPalette";
import Link from "next/link";





/* ─────────────────────────  ANIMATED BG  */
const drift = keyframes`
  0%   { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const Section = styled.section`
  position: relative;
  height: 100vh;                    /* full viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  overflow: hidden;
  color: #fff;
  scroll-snap-align: start;
  /* vibrant radial + angled gradients */
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
`;

/* ─────────────────────────  CONTENT  */
const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 4vw + 1rem, 4.4rem);
  font-weight: 800;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.article)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem 1.6rem;
  border-radius: 1.2rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  transition: box-shadow 0.35s ease, transform 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px -8px rgba(79, 70, 229, 0.4);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
    color: #fff;
  }
  p {
    font-size: 0.95rem;
    color: #d1d1d1;
  }
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
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 28px rgba(0, 255, 255, 0.35);
  }
`;

/* ─────────────────────────  DATA  */
const services = [
  { title: 'Web Design', desc: 'Fast, responsive websites that reflect your brand and drive results.' },
  { title: 'Data Migration', desc: 'Securely transfer data across systems with zero downtime.' },
  { title: 'API Integrations', desc: 'Connect tools and automate processes with robust APIs.' },
  { title: 'AI & Automation', desc: 'Leverage machine learning and AI workflows to streamline operations.' },
];

/* ─────────────────────────  COMPONENT  */
export default function WhatWeDo() {
  return (
    <Section>
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
        Let’s Work Together
      </CTA>
    </Section>
  );
}
