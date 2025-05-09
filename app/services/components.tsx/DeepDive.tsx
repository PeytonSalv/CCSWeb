'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #0b101b;
  padding: 6rem 2rem;
  color: white;
  height: 100vh;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 0.95rem;
    color: #c0c4d1;
  }
`;

const services = [
  {
    title: 'Web & App Development',
    desc: 'Custom websites and apps using React, Next.js, and Tailwind. Fully responsive, optimized for performance and accessibility.',
  },
  {
    title: 'API Integrations',
    desc: 'We integrate with Stripe, HubSpot, OpenAI, and more. From REST to GraphQL to Webhooks — we make your tools talk.',
  },
  {
    title: 'AI & Automation',
    desc: 'We build intelligent workflows using OpenAI, LangChain, Supabase edge functions, and serverless logic.',
  },
  {
    title: 'Data Migration & Engineering',
    desc: 'Move and transform data across legacy and cloud systems using Snowflake, Supabase, Airbyte, and Python-based ETL tools.',
  },
];

export default function DeepDive() {
  return (
    <Section>
      <Wrapper>
        <Heading>Deep Dive into Our Services</Heading>
        <Grid>
          {services.map((s, i) => (
            <Card
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
