'use client';

import React from 'react';
import ContentSectionLayout, { Paragraph } from './ContentSectionLayout';

interface MissionVisionProps {
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
}

export default function MissionVision({ variants, initial, animate, custom }: MissionVisionProps) {
  const title = <>Mission & <span>Vision</span></>;
  return (
    <ContentSectionLayout 
      title={title} 
      variants={variants} 
      initial={initial} 
      animate={animate} 
      custom={custom}
    >
      <Paragraph>
        <strong>Our Mission:</strong> To empower businesses with intelligent, scalable, and future-proof technology solutions that drive growth, efficiency, and market leadership. We strive to translate complex challenges into elegant digital experiences, fostering innovation at every touchpoint. We are committed to building long-term partnerships by delivering exceptional value and measurable results, ensuring our clients are not just prepared for the future, but are actively shaping it.
      </Paragraph>
      <Paragraph>
        <strong>Our Vision:</strong> To be the leading catalyst for digital transformation, recognized globally for our expertise in AI, automation, and integrated system development. We envision a world where technology seamlessly enhances human potential, creating smarter businesses and more connected communities. We aim to pioneer new approaches, cultivate a culture of continuous improvement, and inspire a new generation of tech-driven solutions that are both powerful and ethically sound.
      </Paragraph>
    </ContentSectionLayout>
  );
} 