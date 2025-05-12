'use client';

import React from 'react';
import ContentSectionLayout, { Paragraph } from './ContentSectionLayout';
import CtaButtonSecondary from './CtaButtonSecondary';

interface CoreValuesProps {
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
}

export default function CoreValues({ variants, initial, animate, custom }: CoreValuesProps) {
  const title = <>Our Core <span>Values</span></>;
  return (
    <ContentSectionLayout 
      title={title} 
      variants={variants} 
      initial={initial} 
      animate={animate} 
      custom={custom}
    >
      <Paragraph><strong>Innovation at Heart:</strong> We constantly explore emerging technologies, challenging the status quo to deliver groundbreaking solutions. Our curiosity fuels our creativity, leading to novel approaches that solve real-world problems.</Paragraph>
      <Paragraph><strong>Client-Centricity:</strong> Your success is our success. We listen intently, understand deeply, and collaborate closely to ensure our solutions are perfectly aligned with your strategic objectives and deliver tangible business impact.</Paragraph>
      <Paragraph><strong>Unwavering Integrity:</strong> Transparency, honesty, and ethical conduct are the cornerstones of all our interactions. We build trust through open communication and by consistently delivering on our promises.</Paragraph>
      <Paragraph><strong>Collaborative Spirit:</strong> We believe in the power of teamwork, both within our organization and with our clients. By fostering an environment of mutual respect and shared goals, we achieve outcomes that are greater than the sum of their parts.</Paragraph>
      <Paragraph><strong>Excellence in Execution:</strong> We are committed to the highest standards of quality in everything we do, from initial consultation to final deployment and ongoing support. Our meticulous attention to detail ensures robust, reliable, and scalable solutions.</Paragraph>
      <CtaButtonSecondary href="/contact#contact-form">
        Partner With Us
      </CtaButtonSecondary>
    </ContentSectionLayout>
  );
} 