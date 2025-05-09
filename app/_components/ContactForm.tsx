'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Section = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1c;
  color: white;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 1rem;
  padding: 3rem;
  backdrop-filter: blur(12px);
`;

const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #b0b3c4;
  }

  input,
  textarea,
  select {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.5rem;
    padding: 0.85rem 1rem;
    color: white;
    font-size: 1rem;
    outline: none;
    resize: none;
    transition: border 0.2s ease;

    &:focus {
      border-color: #00ffe0;
    }
  }
`;

const Submit = styled.button`
  margin-top: 1.5rem;
  padding: 1rem 2.4rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  color: #000;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.22);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 28px rgba(0, 255, 255, 0.35);
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    date: '',
    description: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Hook this into an email service or backend API
  }

  return (
    <Section>
      <Wrapper>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Let's Talk
        </Heading>
        <Form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
          </Field>

          <Field>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </Field>

          <Field>
            <label htmlFor="business">Business Name</label>
            <input type="text" id="business" name="business" onChange={handleChange} />
          </Field>

          <Field>
            <label htmlFor="website">Business Website (optional)</label>
            <input type="url" id="website" name="website" onChange={handleChange} />
          </Field>

          <Field>
            <label htmlFor="date">Preferred Call Date</label>
            <input type="date" id="date" name="date" onChange={handleChange} />
          </Field>

          <Field>
            <label htmlFor="description">Tell us what you’re looking for</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              onChange={handleChange}
            />
          </Field>

          <Submit type="submit">Send Message</Submit>
        </Form>
      </Wrapper>
    </Section>
  );
}
