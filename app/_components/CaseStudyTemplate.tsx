'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import Header from './Header';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #0a0f1c;
  color: white;
  padding-top: 80px;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ffe0;
  text-decoration: none;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  
  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 1.1em;
    height: 1.1em;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 100%;
`;

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  color: #cbd5e1;
  margin-bottom: 3rem;
  line-height: 1.6;
  word-wrap: break-word;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #00ffe0;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const TechItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  
  h3 {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #00ffe0;
  }
  
  p {
    font-size: clamp(0.85rem, 1.5vw, 0.9rem);
    color: #cbd5e1;
    line-height: 1.5;
    word-wrap: break-word;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

const ResultCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  border-radius: 0.5rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
  
  h3 {
    font-size: clamp(1.75rem, 3vw, 2rem);
    font-weight: 700;
    color: #00ffe0;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    color: #cbd5e1;
    line-height: 1.5;
  }
`;

const ImplementationSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  h3 {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 600;
    margin-bottom: 1rem;
    color: #00ffe0;
  }
  
  p {
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    line-height: 1.7;
    color: #cbd5e1;
    margin-bottom: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 255, 224, 0.1);
  color: #00ffe0;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: all 0.3s ease;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  
  &:hover {
    background: rgba(0, 255, 224, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 1.1em;
    height: 1.1em;
  }
`;

interface CaseStudyTemplateProps {
  title: string;
  subtitle: string;
  techStack: Array<{
    category: string;
    items: string[];
  }>;
  implementation: string[];
  results: Array<{
    metric: string;
    description: string;
  }>;
  githubUrl?: string;
  liveUrl?: string;
}

export default function CaseStudyTemplate({
  title,
  subtitle,
  techStack,
  implementation,
  results,
  githubUrl,
  liveUrl,
}: CaseStudyTemplateProps) {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentWrapper>
          <BackButton href="/case-studies">
            <FiArrowLeft /> Back to Case Studies
          </BackButton>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </Title>

          <Subtitle>{subtitle}</Subtitle>

          <Section>
            <SectionTitle>Tech Stack</SectionTitle>
            <TechStackGrid>
              {techStack.map((tech) => (
                <TechItem key={tech.category}>
                  <h3>{tech.category}</h3>
                  <p>{tech.items.join(', ')}</p>
                </TechItem>
              ))}
            </TechStackGrid>
          </Section>

          <Section>
            <SectionTitle>Implementation</SectionTitle>
            {implementation.map((step, index) => (
              <ImplementationSection key={index}>
                <h3>Phase {index + 1}</h3>
                <p>{step}</p>
              </ImplementationSection>
            ))}
          </Section>

          <Section>
            <SectionTitle>Results</SectionTitle>
            <ResultsGrid>
              {results.map((result, index) => (
                <ResultCard key={index}>
                  <h3>{result.metric}</h3>
                  <p>{result.description}</p>
                </ResultCard>
              ))}
            </ResultsGrid>
          </Section>

          {(githubUrl || liveUrl) && (
            <LinksContainer>
              {githubUrl && (
                <ExternalLink href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> View on GitHub
                </ExternalLink>
              )}
              {liveUrl && (
                <ExternalLink href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> View Live Project
                </ExternalLink>
              )}
            </LinksContainer>
          )}
        </ContentWrapper>
      </PageContainer>
    </>
  );
} 