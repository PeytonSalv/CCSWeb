'use client';

import styled from 'styled-components';
import {
  SiReact,
  SiNextdotjs,
  SiSupabase,
  SiOpenai,
  SiGooglecloud,
  SiTailwindcss,
  SiStripe,
  SiPython,
  SiSnowflake,
  SiAirbyte,
  SiLangchain,
  SiSharp,
  SiCplusplus,
  SiC,
  SiNette,
  SiSalesforce,
  SiHubspot,
  SiZendesk
} from 'react-icons/si';
import { FaAws, FaLink, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #0a0f1c;
  padding: 6rem 2rem;
  color: white;
  height: 100vh;
  scroll-snap-align: start;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  text-align: center;
`;

const Block = styled(motion.div)`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.8rem;
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 40px;
    margin-bottom: 0.6rem;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  span {
    display: block;
    color: #cbd5e1;
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      opacity: 1;
      color: #00ffe0;
      transform: scale(1.1);
    }
    span {
      color: white;
    }
  }
`;

const icons = {
  SiLangchain: SiLangchain || FaLink,
  SiC: SiC || FaCode,
  SiSharp: SiSharp,
  SiNette: SiNette
};

const tech = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'AWS', icon: FaAws },
  { name: 'GCP', icon: SiGooglecloud },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Stripe', icon: SiStripe },
  { name: 'Python', icon: SiPython },
  { name: 'Snowflake', icon: SiSnowflake },
  { name: 'Airbyte', icon: SiAirbyte },
  { name: 'LangChain', icon: icons.SiLangchain },
  { name: 'C#', icon: icons.SiSharp },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: icons.SiC },
  { name: 'NetSuite', icon: icons.SiNette },
  { name: 'Salesforce', icon: SiSalesforce },
  { name: 'Hubspot', icon: SiHubspot },
  { name: 'Zendesk', icon: SiZendesk },
];

export default function TechStack() {
  return (
    <Section>
      <Wrapper>
        <Heading>Our Tech Stack</Heading>
        <Grid>
          {tech.map((item) => (
            <Block
              key={item.name}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: { duration: 0.2 }
              }}
              onHoverStart={(e) => {
                const currentTarget = e.currentTarget as HTMLElement | null;
                if (!currentTarget) {
                  return;
                }
                const parent = currentTarget.parentElement;
                if (parent) {
                  const siblings = parent.children;
                  Array.from(siblings).forEach((sibling) => {
                    if (sibling instanceof HTMLElement && sibling !== currentTarget) {
                      sibling.style.transform = 'scale(0.98)';
                    }
                  });
                }
              }}
              onHoverEnd={(e) => {
                const currentTarget = e.currentTarget as HTMLElement | null;
                if (!currentTarget) {
                  return;
                }
                const parent = currentTarget.parentElement;
                if (parent) {
                  const siblings = parent.children;
                  Array.from(siblings).forEach((sibling) => {
                    if (sibling instanceof HTMLElement && sibling !== currentTarget) {
                      sibling.style.transform = 'scale(1)';
                    }
                  });
                }
              }}
            >
              <item.icon />
              <span>{item.name.trim()}</span>
            </Block>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
