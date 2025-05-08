'use client';

import styled from 'styled-components';
import { ui } from '@/styles/uiPalette';

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${ui.surface};
  color: ${ui.text};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
`;

export default function OurProcess() {
  return (
    <Section>
      <Inner>
        <Title>Our Process</Title>
        <Description>
          We follow a systematic approach to deliver exceptional results. Our proven process ensures quality, efficiency, and client satisfaction at every step.
        </Description>
      </Inner>
    </Section>
  );
}
