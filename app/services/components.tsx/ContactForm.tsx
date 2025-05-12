'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: #0a0f1c; // Consistent with page background
  padding: 4rem 2rem 6rem; // Adjusted padding
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start; // If part of a scrolling page
  min-height: 100vh;
  justify-content: center;
`;

const FormWrapper = styled(motion.div)`
  max-width: 650px;
  width: 100%;
  background: rgba(10, 15, 28, 0.8); // Slightly darker, more opaque background
  padding: 2.5rem 3rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(6px);
  animation: ${fadeIn} 0.8s ease-out;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #c0c6d6;
`;

const inputStyles = `
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;

  &:focus {
    border-color: #00ffe0;
    box-shadow: 0 0 15px rgba(0, 255, 224, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const StyledInput = styled.input`${inputStyles}`;
const StyledTextarea = styled.textarea`
  ${inputStyles}
  min-height: 120px;
  resize: vertical;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  color: white;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-top: 1rem; // Added some margin for spacing

  &:hover {
    background: linear-gradient(135deg, #00fff0, #5f56f5);
    box-shadow: 0 6px 20px rgba(0, 255, 224, 0.4), 0 0 30px rgba(79, 70, 229, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Replace with your actual form submission logic (e.g., API call)
    console.log('Form data:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', message: '' }); // Reset form
    // Add user feedback (e.g., toast notification)
  };

  return (
    <Section>
      <FormWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Heading>Get in Touch</Heading>
        <StyledForm onSubmit={handleSubmit}>
          <FormGroup>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="email">Email Address</StyledLabel>
            <StyledInput type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="company">Company (Optional)</StyledLabel>
            <StyledInput type="text" name="company" id="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledTextarea name="message" id="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" required />
          </FormGroup>
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </StyledForm>
      </FormWrapper>
    </Section>
  );
} 