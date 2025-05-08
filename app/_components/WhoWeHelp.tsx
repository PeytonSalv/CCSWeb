'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ui } from '@/styles/uiPalette';

const Section = styled.section`
  padding: 5rem 2rem;
  background: ${ui.surface};
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  color: ${ui.textSub};
  line-height: 1.7;
  max-width: 750px;
  margin: 0 auto;
`;

export default function WhoWeHelp() {
  return (
    <Section>
      <Wrapper>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Who We Help
        </Heading>
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We work with SaaS startups, growing agencies, and enterprise teams that need
          modern solutions to move faster. Whether you're launching a product or migrating
          legacy systems, we help you leverage web, API, and AI tools to scale efficiently.
        </Paragraph>
      </Wrapper>
    </Section>
  );
}
