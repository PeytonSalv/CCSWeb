'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function RestaurantInventoryAICaseStudy() {
  return (
    <CaseStudyTemplate
      title="Restaurant Inventory AI"
      subtitle="Revolutionizing inventory management for a family restaurant through AI-powered predictions and automated ordering"
      techStack={[
        {
          category: "Frontend",
          items: ["React", "TypeScript", "Material-UI", "Chart.js"]
        },
        {
          category: "Backend",
          items: ["Python", "FastAPI", "PostgreSQL", "Redis"]
        },
        {
          category: "AI/ML",
          items: ["TensorFlow", "Time Series Forecasting", "Computer Vision", "Natural Language Processing"]
        },
        {
          category: "Infrastructure",
          items: ["Docker", "AWS EC2", "S3", "CloudWatch"]
        },
        {
          category: "Integration",
          items: ["Supplier APIs", "POS System Integration", "Email Automation"]
        }
      ]}
      implementation={[
        "System Analysis: We conducted a comprehensive analysis of the restaurant's current inventory management process, including manual counting procedures, supplier ordering patterns, and waste tracking. This helped us identify key pain points and opportunities for automation.",
        
        "AI Model Development: We developed custom machine learning models to predict ingredient usage based on historical sales data, seasonal trends, and upcoming reservations. The system also uses computer vision to help with inventory counting through mobile app photos.",
        
        "Platform Development: We built a web-based dashboard that provides real-time inventory insights, automated ordering suggestions, and waste tracking. The system integrates with the restaurant's existing POS and supplier systems.",
        
        "Mobile App Creation: We developed a mobile app for staff to quickly scan and count inventory, report issues, and receive alerts about low stock or expiring items. The app uses computer vision to verify counts and reduce human error.",
        
        "Training & Deployment: We provided comprehensive training for the restaurant staff and implemented the system in phases, starting with the most critical inventory items. We also set up automated reporting and alert systems for management."
      ]}
      results={[
        {
          metric: "30%",
          description: "Reduction in food costs through optimized inventory levels and reduced waste"
        },
        {
          metric: "15hrs",
          description: "Weekly time saved on inventory management and ordering"
        },
        {
          metric: "95%",
          description: "Accuracy in inventory predictions, reducing stockouts and overstock"
        },
        {
          metric: "45%",
          description: "Decrease in food waste through better tracking and prediction"
        }
      ]}
      liveUrl="https://restaurant-inventory-demo.example.com"
    />
  );
} 