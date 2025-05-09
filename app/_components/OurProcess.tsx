'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSearch, FiCode, FiZap, FiCheckCircle, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { ui } from '@/styles/uiPalette';

const Section = styled.section`
  background: radial-gradient(ellipse at center, #0a0f1c 0%, #000 100%);
  color: white;
  padding: 8rem 2rem;
  scroll-snap-align: start;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.15rem;
  max-width: 650px;
  margin: 0 auto 4rem auto;
  color: #c7c9d9;
`;

const Timeline = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #00ffe0, #4f46e5);
    opacity: 0.08;
    z-index: 0;
    transform: translateY(-50%);
  }
`;

const Step = styled(motion.div)`
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(8px);
  position: relative;
  z-index: 1;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.12);
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-size: 0.95rem;
    color: #c4c4c4;
    margin-top: 0.5rem;
  }

  svg {
    color: #00ffe0;
    font-size: 2.5rem;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.15);
    filter: drop-shadow(0 0 6px #00ffe0aa);
  }
`;

const steps = [
  {
    icon: <FiSearch />,
    title: 'Discovery',
    desc: 'We explore your goals, needs, and constraints to shape a focused plan.',
  },
  {
    icon: <FiUsers />,
    title: 'Collaboration',
    desc: 'Stakeholders, engineers, and designers align on timelines and impact.',
  },
  {
    icon: <FiCode />,
    title: 'Design & Build',
    desc: 'Our team builds performant, scalable software with design precision.',
  },
  {
    icon: <FiZap />,
    title: 'Test & Launch',
    desc: 'We run QA, security, and performance tests before your big launch.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Optimize',
    desc: 'Track usage, improve performance, and optimize for growth post-launch.',
  },
  {
    icon: <FiCheckCircle />,
    title: 'Support & Scale',
    desc: 'Stay ahead with ongoing support, maintenance, and scaling strategies.',
  },
];

export default function OurProcess() {
  return (
    <Section>
      <Inner>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Process
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We guide every project through a proven 6-step flow—ensuring results that scale.
        </Description>

        <Timeline>
          {steps.map((step, i) => (
            <Step
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Step>
          ))}
        </Timeline>
      </Inner>
    </Section>
  );
}
