'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function AutomotiveOutreachCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Car Dealership Outreach Bot"
      subtitle="Transforming customer engagement through AI-powered personalized outreach and automated follow-ups"
      techStack={[
        {
          category: "Frontend",
          items: ["React", "TypeScript", "Material-UI", "Redux Toolkit"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "MongoDB", "Redis"]
        },
        {
          category: "AI/ML",
          items: ["OpenAI GPT-4", "Natural Language Processing", "Sentiment Analysis"]
        },
        {
          category: "Infrastructure",
          items: ["AWS Lambda", "S3", "CloudFront", "Route 53"]
        }
      ]}
      implementation={[
        "Customer Journey Analysis: We began by mapping the dealership's existing customer journey and identifying key touchpoints where automated outreach could add value. This included analyzing historical sales data and customer interaction patterns.",
        
        "AI Model Training: We developed a custom AI model trained on successful sales conversations and customer interactions. The model was designed to understand customer intent and generate personalized responses while maintaining the dealership's brand voice.",
        
        "System Development: We built a robust backend system that integrated with the dealership's CRM and inventory management system. The platform included automated scheduling, follow-up reminders, and real-time analytics dashboard.",
        
        "Integration & Launch: We conducted extensive testing with the sales team and implemented a phased rollout. The system was integrated with existing workflows, and staff were trained on using the analytics dashboard to monitor and optimize performance."
      ]}
      results={[
        {
          metric: "4x",
          description: "Increase in pre-orders through personalized automated outreach"
        },
        {
          metric: "20hrs",
          description: "Weekly time saved on administrative tasks"
        },
        {
          metric: "85%",
          description: "Response rate to automated messages"
        },
        {
          metric: "3.2x",
          description: "ROI within the first quarter"
        }
      ]}
      liveUrl="https://automotive-outreach-demo.example.com"
    />
  );
} 