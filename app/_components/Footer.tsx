'use client';

import styled from 'styled-components';
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';


const SnapSection = styled.section`
  scroll-snap-align: start;
  min-height: auto;
  padding-bottom: 4rem;
  background: #060b13;
`;


const FooterWrapper = styled.footer`
  background: #060b13;
  padding: 4rem 2rem 2rem;
  color: #d1d5db;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;

    &:hover {
      color: #00ffe0;
    }
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: #9ca3af;
    font-size: 1.2rem;

    &:hover {
      color: #00ffe0;
    }
  }
`;

const Bottom = styled.div`
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.6;
  margin-top: 2rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Column>
          <h4>Cascade Core Solutions</h4>
          <a href="mailto:hello@cascadetech.com">
            <FiMail style={{ marginRight: '0.4rem' }} />
            hello@cascadetech.com
          </a>
          <Social>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
          </Social>
        </Column>

        <Column>
          <h4>Pages</h4>
          <a href="/">Home</a>
          <a href="/#what-we-do">What We Do</a>
          <a href="/#who-we-help">Who We Help</a>
          <a href="/#our-process">Our Process</a>
          <a href="/contact">Contact</a>
        </Column>

        <Column>
          <h4>Technologies</h4>
          <a href="#">React & Next.js</a>
          <a href="#">Supabase</a>
          <a href="#">OpenAI</a>
          <a href="#">AWS / GCP</a>
        </Column>
      </Container>

      <Bottom>
        © {new Date().getFullYear()} Cascade Core Solutions. All rights reserved.
      </Bottom>
    </FooterWrapper>
  );
}
