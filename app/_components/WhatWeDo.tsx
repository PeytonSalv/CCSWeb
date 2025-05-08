'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ui } from '@/styles/uiPalette';

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Card = styled(motion.div)`
  background: ${ui.surface};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${ui.shadow};
  border: 1px solid ${ui.border};

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${ui.text};
  }

  p {
    font-size: 0.95rem;
    color: ${ui.textSub};
  }
`;

export default function WhatWeDo() {
  const services = [
    {
      title: 'Web Design',
      desc: 'Fast, responsive websites that reflect your brand and drive results.',
    },
    {
      title: 'Data Migration',
      desc: 'Securely transfer data across systems with zero downtime.',
    },
    {
      title: 'API Integrations',
      desc: 'Connect tools and automate processes with robust APIs.',
    },
    {
      title: 'AI & Automation',
      desc: 'Leverage machine learning and AI workflows to streamline operations.',
    },
  ];

  return (
    <Section>
      <Heading
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        What We Do
      </Heading>
      <Grid>
        {services.map((item, i) => (
          <Card
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
