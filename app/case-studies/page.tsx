'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import Header from '../_components/Header';

const PageContainer = styled.div`
  background: #0a0f1c;
  color: white;
  min-height: 100vh;
  padding-top: 80px;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ffe0, #4f46e5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  padding: 0 1rem;
  line-height: 1.2;
  word-wrap: break-word;
  max-width: 100%;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  color: #cbd5e1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  padding: 0 1rem;
  word-wrap: break-word;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 0.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    gap: 2rem;
    padding: 1rem;
    margin-top: 3rem;
  }
`;

const CaseStudyCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 255, 224, 0.1);
    border-color: rgba(0, 255, 224, 0.2);
  }
`;

const CardTitle = styled.h2`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #00ffe0;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ffe0;
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  padding: 0.75rem 0;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  
  &:hover {
    text-decoration: underline;
  }

  svg {
    transition: transform 0.2s ease;
    width: 1.1em;
    height: 1.1em;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

const ResultsPreview = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const ResultTag = styled.span`
  background: rgba(0, 255, 224, 0.1);
  color: #00ffe0;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  white-space: nowrap;
`;

const caseStudies = [
  {
    title: "Local Bakery Digital Transformation",
    description: "Modernized order management for a Savannah bakery with custom online ordering, inventory tracking, and automated confirmations, completed in under 2 weeks.",
    link: "/case-studies/bakery-digital-transformation",
    results: ["2 Week Delivery", "4x More Orders"]
  },
  {
    title: "Coffee Shop Loyalty App",
    description: "Built a custom mobile app for a local coffee chain that handles loyalty points, pre-orders, and personalized recommendations. Increased customer retention by 40% and reduced wait times by 25%.",
    link: "/case-studies/coffee-shop-loyalty",
    results: ["40% More Retention", "25% Faster Service"]
  },
  {
    title: "Restaurant Inventory AI",
    description: "Developed an AI-powered inventory management system for a family restaurant that predicts ingredient needs and reduces food waste. Cut costs by 30% and saved 15 hours weekly on inventory management.",
    link: "/case-studies/restaurant-inventory-ai",
    results: ["30% Cost Reduction", "15hrs Saved Weekly"]
  },
  {
    title: "Fitness Studio Booking System",
    description: "Created an automated booking and payment system for a boutique fitness studio, handling class schedules, waitlists, and membership management. Increased class bookings by 60% and reduced no-shows by 45%.",
    link: "/case-studies/fitness-studio-booking",
    results: ["60% More Bookings", "45% Fewer No-shows"]
  },
  {
    title: "Healthcare AI Assistant",
    description: "Revolutionizing patient triage and wait time management through AI-powered routing and analysis. Reduced wait times by 45% and improved patient satisfaction by 32%.",
    link: "/case-studies/healthcare-ai-assistant",
    results: ["45% Reduced Wait Times", "32% Better Satisfaction"]
  },
  {
    title: "Car Dealership Outreach Bot",
    description: "Automated personalized outreach system for a Tuscaloosa car dealership, resulting in 4x more pre-orders and 20 fewer hours spent on admin weekly.",
    link: "/case-studies/automotive-outreach",
    results: ["4x More Pre-orders", "20hrs Saved Weekly"]
  },
  {
    title: "Retail Analytics Dashboard",
    description: "Built a real-time analytics dashboard for a small retail chain that tracks inventory, sales trends, and customer behavior. Increased sales by 35% and optimized inventory turnover by 50%.",
    link: "/case-studies/retail-analytics",
    results: ["35% Sales Increase", "50% Better Turnover"]
  },
  {
    title: "Salon Appointment System",
    description: "Developed a streamlined booking system for a local salon that handles appointments, staff scheduling, and automated reminders. Reduced scheduling conflicts by 90% and increased client bookings by 55%.",
    link: "/case-studies/salon-booking",
    results: ["90% Fewer Conflicts", "55% More Bookings"]
  },
  {
    title: "Enterprise AI + API Integration",
    description: "Unified 12 siloed systems for a Fortune 500 logistics firm using serverless architecture and AI, processing 2M+ events daily and cutting decision time by 67%.",
    link: "/case-studies/logistics-ai-integration",
    results: ["2M+ Daily Events", "67% Faster Decisions"]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <PageContainer>
        <ContentWrapper>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Case Studies
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore how we've helped businesses transform their operations through innovative technology solutions
          </Subtitle>

          <Grid>
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
                <ResultsPreview>
                  {study.results.map((result) => (
                    <ResultTag key={result}>{result}</ResultTag>
                  ))}
                </ResultsPreview>
                <CardLink href={study.link}>
                  Learn More <FiArrowUpRight />
                </CardLink>
              </CaseStudyCard>
            ))}
          </Grid>
        </ContentWrapper>
      </PageContainer>
    </>
  );
} 