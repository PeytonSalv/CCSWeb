'use client';

import React from 'react';
import ContentSectionLayout, { Paragraph } from './ContentSectionLayout';

interface OurApproachProps {
  variants?: any;
  initial?: string;
  animate?: string;
  custom?: number;
}

export default function OurApproach({ variants, initial, animate, custom }: OurApproachProps) {
  const title = <>Our Unique <span>Approach</span></>;
  return (
    <ContentSectionLayout 
      title={title} 
      variants={variants} 
      initial={initial} 
      animate={animate} 
      custom={custom}
    >
      <Paragraph>
        At Cascade Core Solutions, we differentiate ourselves through a deeply analytical yet agile methodology. We begin by immersing ourselves in your business landscape, understanding your unique challenges, operational workflows, and strategic aspirations. This holistic view allows us to architect solutions that are not just technologically sound but also strategically aligned with your long-term growth. Our process is iterative and collaborative, ensuring you are involved at every stage, from ideation and design through development, testing, and deployment. We leverage a powerful stack including AI, machine learning, advanced data engineering pipelines, and modern web technologies like React and Next.js to build solutions that are not only powerful today but also adaptable for tomorrow.
      </Paragraph>
      <Paragraph>
        We emphasize modular design and microservices architectures where appropriate, promoting scalability and maintainability. Our commitment to API-first development ensures seamless integration across your existing and future technology stack, breaking down data silos and fostering a connected enterprise. Security is paramount, embedded into our development lifecycle from the outset, not as an afterthought. Furthermore, our expertise in prompt engineering and AI model customization allows us to tailor artificial intelligence to your specific domain, unlocking insights and efficiencies that generic solutions simply cannot offer. We don't just build software; we engineer strategic assets.
      </Paragraph>
    </ContentSectionLayout>
  );
} 