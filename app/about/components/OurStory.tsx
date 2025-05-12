'use client';

import React from 'react';
import ContentSectionLayout, { Paragraph } from './ContentSectionLayout';

interface OurStoryProps {
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
}

export default function OurStory({ variants, initial, animate, custom }: OurStoryProps) {
  const title = <>Our <span>Genesis</span></>;
  return (
    <ContentSectionLayout 
      title={title} 
      variants={variants} 
      initial={initial} 
      animate={animate} 
      custom={custom}
    >
      <Paragraph>
        Founded in 2023 by a collective of visionary technologists and creative thinkers, Cascade Core Solutions was born from a shared ambition: to demystify complex technologies and make their power accessible to businesses of all sizes. We saw a gap where innovation felt out of reach for many, and we dedicated ourselves to bridging that divide. Our journey began with a focus on robust backend systems and quickly expanded as we recognized the interconnectedness of modern digital ecosystems. Today, we stand as a testament to relentless learning, adaptation, and an unwavering commitment to our clients' success, offering a comprehensive suite of services from AI integration to bespoke web and application development.
      </Paragraph>
      <Paragraph>
        We believe that technology should be an enabler, not a barrier. This core philosophy has driven us to explore the frontiers of artificial intelligence, master the intricacies of seamless API integrations, and champion the development of intuitive, high-performance client portals and internal tools. Our growth is a direct reflection of the trust our partners place in us, and we continue to evolve, driven by the challenges they bring and the successes we achieve together.
      </Paragraph>
    </ContentSectionLayout>
  );
} 