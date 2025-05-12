'use client';

import React from 'react';
import styled from 'styled-components';
import ContactForm from '../../services/components.tsx/ContactForm'; // Adjusted path

// This wrapper ensures the ContactForm section can also be a scroll-snap target if needed
// and provides a consistent top/bottom padding for this section of the page.
const ContactSectionWrapper = styled.section`
  padding-top: 2rem; // Give some space if previous section had small bottom margin
  padding-bottom: 4rem;
  scroll-snap-align: start;
  position: relative; // For z-index context if any global background effects exist
  z-index: 1;
`;

interface AboutContactProps {
  // We might not need animation props here if ContactForm handles its own entrance
}

export default function AboutContact(props: AboutContactProps) {
  return (
    <ContactSectionWrapper>
      <ContactForm />
    </ContactSectionWrapper>
  );
} 