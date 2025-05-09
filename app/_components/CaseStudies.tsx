'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

/* ——— Container ——— */
const Section = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1c;
  color: white;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

/* ——— Grid ——— */
const Grid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/* ——— Card ——— */
const CaseCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(8px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 255, 255, 0.1);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 0.95rem;
    color: #c5c8d3;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  a {
    font-size: 0.95rem;
    display: inline-flex;
    align-items: center;
    color: #00ffe0;
    text-decoration: none;
    gap: 0.3rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ——— Fake Case Study Data ——— */
const studies = [
  {
    title: 'Car Dealership Outreach Bot',
    description:
      'A car dealership in the greater Tuscaloosa area needed to automate their outreach process to potential customers. We built a bot that sends personalized text messages to leads, followed up with them, and scheduled test drives. The result? 4x more pre-orders and 20 fewer hours per week spent on admin.',
    link: '#',
  },
  {
    title: 'Enterprise AI + API Integration',
    description:
      'A Fortune 500 logistics firm needed to unify 12 siloed systems (ERP, CRM, fleet tracking, warehouse management) into a real-time dashboard. We built a distributed event-driven architecture using serverless AWS Lambdas, OpenAI for routing insights, and custom APIs that processed 2M+ events per day. The final product cut decision-making time by 67%.',
    link: '#',
  },
  {
    title: 'Local Bakery, Big Win',
    description:
      'A family-owned bakery in Savannah was overwhelmed managing orders via phone and paper. We delivered a custom online order form, basic inventory tracker, and automatic email confirmations in under 2 weeks using low-code tools and Stripe. The result? 4x more pre-orders and 20 fewer hours per week spent on admin.',
    link: '#',
  },
];

export default function CaseStudies() {
  return (
    <Section>
      <Wrapper>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Case Studies
        </Heading>

        <Grid>
          {studies.map((cs, i) => (
            <CaseCard
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div>
                <h3>{cs.title}</h3>
                <p>{cs.description}</p>
              </div>
              <a href={cs.link}>
                View Details <FiArrowUpRight />
              </a>
            </CaseCard>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
