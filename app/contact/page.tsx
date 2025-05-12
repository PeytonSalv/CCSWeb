// ContactPage.tsx
"use client";

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Header from '../_components/Header';
import Footer from '../_components/Footer';
import ContactForm from '../services/components.tsx/ContactForm';

const animateWaves = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const PageContainer = styled.div`
  background: linear-gradient(270deg, #0f172a, #1e293b, #0f172a);
  background-size: 600% 600%;
  animation: ${animateWaves} 40s ease infinite;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 2rem 2rem;
`;

const Heading = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Subheading = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 640px;
  margin: 0 auto;
  color: #cbd5e1;
`;

const InfoSection = styled.section`
  max-width: 840px;
  margin: 3rem auto 0;
  padding: 0 2rem;
  text-align: center;
`;

const InfoParagraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #aebbcf;
  margin-bottom: 1.6rem;
`;

const FormSection = styled.section`
  margin: 4rem auto;
  width: 100%;
  max-width: 900px;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  box-shadow: 0 12px 60px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
`;

const Blurb = styled(motion.p)`
  font-size: 1rem;
  color: #94a3b8;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 2rem;
`;

const StyledDatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;

  .react-datepicker-wrapper {
    width: 100%;
    max-width: 320px;
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    outline: none;
    transition: all 0.3s ease;
    &:focus {
      border-color: #00ffe0;
      box-shadow: 0 0 10px rgba(0, 255, 224, 0.2);
    }
  }

  .react-datepicker {
    font-family: inherit;
    background-color: #0d1b2a;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    color: #cbd5e1;
    padding: 10px;
  }

  .react-datepicker__header {
    background-color: #1e293b;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-read-view--down-arrow,
  .react-datepicker-month-read-view--down-arrow,
  .react-datepicker-month-year-read-view--down-arrow {
    color: #e0e0e0;
    font-weight: 600;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #cbd5e1;
    display: inline-block;
    width: 2rem;
    line-height: 2rem;
    text-align: center;
    margin: 0.2rem;
    border-radius: 4px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .react-datepicker__day:hover {
    background-color: rgba(0, 255, 224, 0.1);
    color: #00ffe0;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: #00ffe0;
    color: #0a0f1c;
    font-weight: bold;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover {
    background-color: #00d6c4;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #00bfae;
    color: #0a0f1c;
  }

  .react-datepicker__day--disabled {
    color: #4a5568;
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .react-datepicker__day--outside-month {
    opacity: 0.4;
  }

  .react-datepicker__navigation {
    top: 17px;
  }
  .react-datepicker__navigation--previous {
    border-right-color: #cbd5e1;
  }
  .react-datepicker__navigation--next {
    border-left-color: #cbd5e1;
  }
  .react-datepicker__navigation:hover *::before {
    border-color: #00ffe0;
  }

  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom'] .react-datepicker__triangle::after {
    border-bottom-color: #0d1b2a;
  }
`;

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <PageContainer>
      <Header />

      <HeroSection>
        <Heading
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Let's Build Something Together
        </Heading>

        <Subheading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          We're all about collaboration. Drop your project goals, and we'll get back to you within 24 hours.
        </Subheading>
      </HeroSection>

      <InfoSection>
        <InfoParagraph>
          Whether you're launching a new product, automating internal workflows, redesigning your site,
          or integrating cutting-edge AI tools—we're ready to guide the way. Our team blends technical
          expertise with a passion for solving real-world problems.
        </InfoParagraph>
        <InfoParagraph>
          This page acts as the central hub for all inbound inquiries. If you clicked through from
          a service page, we already have a good idea of what you're looking for. Now let's bring it to life.
        </InfoParagraph>
      </InfoSection>

      <FormSection>
        <Blurb
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          Prefer a quick chat instead? Email us or schedule a call — we're flexible.
        </Blurb>

        <StyledDatePickerWrapper>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select your preferred date"
            dateFormat="MMMM d, yyyy"
            popperPlacement="bottom"
            showPopperArrow={false}
          />
        </StyledDatePickerWrapper>

        <ContactForm />
      </FormSection>

      <Footer />
    </PageContainer>
  );
}
