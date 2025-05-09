'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiZap, FiCpu, FiGlobe, FiLayers, FiSettings, FiDatabase } from 'react-icons/fi';

const Section = styled.section`
  background: #0a0f1c;
  padding: 6rem 2rem;
  color: white;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Block = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    margin-top: 0.5rem;
    color: #c8cbd9;
  }

  svg {
    font-size: 2rem;
    color: #00ffe0;
  }
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

const services = [
  {
    icon: <FiZap />,
    title: 'Automation & Workflows',
    desc: 'Streamline operations with AI-driven automations that reduce manual work and boost consistency.',
  },
  {
    icon: <FiCpu />,
    title: 'AI & NLP Development',
    desc: 'Custom models, prompt engineering, and AI integrations tailored to your domain.',
  },
  {
    icon: <FiDatabase />,
    title: 'Data Engineering',
    desc: 'Migration, pipelines, and transformation logic using Snowflake, Supabase, and cloud platforms.',
  },
  {
    icon: <FiGlobe />,
    title: 'Web & App Development',
    desc: 'Fast, modern frontend + scalable backend using React, Next.js, TypeScript, and serverless.',
  },
  {
    icon: <FiLayers />,
    title: 'API Integrations',
    desc: 'Secure, fast, and well-documented APIs to connect your stack and eliminate silos.',
  },
  {
    icon: <FiSettings />,
    title: 'Client Portals & Internal Tools',
    desc: 'Custom dashboards and portals that match your brand and optimize your workflows.',
  },
];

export default function ServiceBlocks() {
  return (
    <Section>
      <Heading>Our Core Services</Heading>
      <Grid>
        {services.map((s, i) => (
          <Block
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {s.icon}
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Block>
        ))}
      </Grid>
      <CtaButton
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: services.length * 0.15 + 0.2, duration: 0.6 }}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Discuss Your Project
      </CtaButton>
    </Section>
  );
}
