'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function LogisticsAICaseStudy() {
  return (
    <CaseStudyTemplate
      title="Enterprise AI + API Integration"
      subtitle="Unifying 12 siloed systems into a real-time, AI-powered logistics dashboard for a Fortune 500 company"
      techStack={[
        {
          category: "Frontend",
          items: ["React", "TypeScript", "D3.js", "WebSocket"]
        },
        {
          category: "Backend",
          items: ["AWS Lambda", "Node.js", "GraphQL", "Redis"]
        },
        {
          category: "AI/ML",
          items: ["OpenAI GPT-4", "TensorFlow", "Apache Spark", "MLflow"]
        },
        {
          category: "Infrastructure",
          items: ["AWS ECS", "Kubernetes", "Terraform", "CloudWatch"]
        },
        {
          category: "Data",
          items: ["PostgreSQL", "MongoDB", "Apache Kafka", "Elasticsearch"]
        }
      ]}
      implementation={[
        "System Analysis & Architecture: We began by conducting a comprehensive analysis of all 12 existing systems (ERP, CRM, fleet tracking, warehouse management) and designed a distributed event-driven architecture that could handle real-time data processing at scale.",
        
        "API Development & Integration: We built a unified API layer using GraphQL that abstracted the complexity of the underlying systems. Each legacy system was integrated through custom adapters, ensuring zero downtime during the transition.",
        
        "AI Model Development: We developed custom machine learning models for predictive analytics and route optimization. The models were trained on historical data and continuously improved through real-time feedback loops.",
        
        "Real-time Dashboard: We created an interactive dashboard that provided real-time insights across all systems. The dashboard included predictive analytics, anomaly detection, and automated alerting systems.",
        
        "Deployment & Scaling: We implemented a gradual rollout strategy, starting with non-critical systems and gradually expanding to core operations. The system was designed to scale horizontally, handling over 2M events daily."
      ]}
      results={[
        {
          metric: "67%",
          description: "Reduction in decision-making time through real-time insights"
        },
        {
          metric: "2M+",
          description: "Events processed daily across all systems"
        },
        {
          metric: "99.99%",
          description: "System uptime with zero data loss"
        },
        {
          metric: "45%",
          description: "Cost reduction in IT operations"
        }
      ]}
      liveUrl="https://logistics-ai-demo.example.com"
    />
  );
} 