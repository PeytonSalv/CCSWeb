'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function HealthcareAICaseStudy() {
  return (
    <CaseStudyTemplate
      title="Healthcare AI Assistant"
      subtitle="Revolutionizing patient triage and wait time management through AI-powered routing and analysis"
      techStack={[
        {
          category: "Frontend",
          items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          category: "Backend",
          items: ["Python", "FastAPI", "PostgreSQL", "Redis"]
        },
        {
          category: "AI/ML",
          items: ["TensorFlow", "OpenAI GPT-4", "scikit-learn", "PyTorch"]
        },
        {
          category: "Infrastructure",
          items: ["AWS", "Docker", "Kubernetes", "Terraform"]
        }
      ]}
      implementation={[
        "Initial Assessment & Data Integration: We began by analyzing the hospital's existing patient flow data and integrating with their EHR system. This phase included setting up secure data pipelines and implementing HIPAA-compliant data handling protocols.",
        
        "AI Model Development: Our team developed custom machine learning models to predict patient wait times and optimize routing. We trained the models on historical data while ensuring they could adapt to real-time changes in hospital capacity and staffing.",
        
        "System Architecture: We built a scalable microservices architecture that could handle real-time updates from multiple hospital departments. The system included a real-time dashboard for staff and a patient-facing mobile interface.",
        
        "Integration & Testing: We conducted extensive testing with hospital staff, including stress testing under peak load conditions and security audits. The system was gradually rolled out across departments to ensure smooth adoption."
      ]}
      results={[
        {
          metric: "45%",
          description: "Reduction in average patient wait times through optimized routing"
        },
        {
          metric: "32%",
          description: "Improvement in patient satisfaction scores"
        },
        {
          metric: "67%",
          description: "Decrease in staff time spent on manual triage"
        },
        {
          metric: "99.9%",
          description: "System uptime during the first year of operation"
        }
      ]}
      githubUrl="https://github.com/your-org/healthcare-ai-assistant"
      liveUrl="https://healthcare-ai-demo.example.com"
    />
  );
} 