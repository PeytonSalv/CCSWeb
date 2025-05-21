'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function FitnessStudioBookingCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Fitness Studio Booking System"
      subtitle="Streamlining operations for a boutique fitness studio with an integrated booking, payment, and membership management platform"
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
          items: ["Stripe", "Subscription Billing", "Automated Invoicing"]
        },
        {
          category: "Infrastructure",
          items: ["Vercel", "AWS S3", "SendGrid", "Twilio"]
        },
        {
          category: "Integration",
          items: ["Calendar APIs", "SMS Notifications", "Email Marketing"]
        }
      ]}
      implementation={[
        "Requirements Gathering: We worked closely with the studio owners to understand their unique scheduling needs, class types, instructor management, and membership tiers. This included analyzing peak hours, class capacity, and customer booking patterns.",
        
        "System Development: We built a comprehensive booking platform that handles class scheduling, instructor management, membership subscriptions, and automated waitlists. The system includes a customer portal for easy booking and account management.",
        
        "Payment Integration: We implemented a flexible payment system that handles different membership tiers, drop-in rates, and package purchases. The system includes automated billing, refund processing, and financial reporting.",
        
        "Communication System: We developed an automated notification system that sends SMS and email reminders, handles waitlist management, and provides real-time updates about class changes or cancellations.",
        
        "Launch & Support: We provided staff training and launched the system with a phased rollout. We also implemented a feedback system to continuously improve the platform based on user experience."
      ]}
      results={[
        {
          metric: "60%",
          description: "Increase in class bookings through easy online scheduling"
        },
        {
          metric: "45%",
          description: "Reduction in no-shows through automated reminders"
        },
        {
          metric: "3x",
          description: "Faster check-in process for members and staff"
        },
        {
          metric: "90%",
          description: "Of members prefer online booking over phone calls"
        }
      ]}
      liveUrl="https://fitness-booking-demo.example.com"
    />
  );
} 