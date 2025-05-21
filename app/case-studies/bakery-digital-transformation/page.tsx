'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function BakeryDigitalCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Local Bakery Digital Transformation"
      subtitle="Modernizing a family-owned bakery's operations with a custom digital ordering system and inventory management"
      techStack={[
        {
          category: "Frontend",
          items: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "Redis"]
        },
        {
          category: "Payment",
          items: ["Stripe", "PayPal", "Square Integration"]
        },
        {
          category: "Infrastructure",
          items: ["Vercel", "AWS S3", "Cloudflare", "SendGrid"]
        }
      ]}
      implementation={[
        "Requirements & Planning: We started with a two-day workshop with the bakery owners to understand their workflow, pain points, and goals. This helped us design a system that would truly serve their needs while being easy to adopt.",
        
        "System Development: We built a custom online ordering system with real-time inventory tracking. The system included features like custom order forms, automated email confirmations, and a simple admin dashboard for the bakery staff.",
        
        "Payment Integration: We integrated multiple payment options (Stripe, PayPal, Square) to ensure customers could pay however they preferred. The system automatically reconciled payments with orders and inventory.",
        
        "Staff Training & Launch: We provided hands-on training for the bakery staff and created simple documentation. The system was launched with a soft opening period where we monitored and adjusted based on real usage."
      ]}
      results={[
        {
          metric: "4x",
          description: "Increase in pre-orders through online system"
        },
        {
          metric: "20hrs",
          description: "Weekly time saved on admin tasks"
        },
        {
          metric: "2 weeks",
          description: "Total project delivery time"
        },
        {
          metric: "95%",
          description: "Customer satisfaction with new ordering system"
        }
      ]}
      liveUrl="https://bakery-ordering-demo.example.com"
    />
  );
} 