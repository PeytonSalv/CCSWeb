'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function SalonBookingCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Salon Appointment System"
      subtitle="Modernizing appointment management for a local salon with an intelligent booking platform and staff scheduling system"
      techStack={[
        {
          category: "Frontend",
          items: ["Next.js", "TypeScript", "Tailwind CSS", "React Calendar"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "Redis"]
        },
        {
          category: "Payment",
          items: ["Stripe", "Square", "Automated Deposits"]
        },
        {
          category: "Infrastructure",
          items: ["Vercel", "AWS S3", "SendGrid", "Twilio"]
        },
        {
          category: "Integration",
          items: ["Google Calendar", "SMS Notifications", "Client Database"]
        }
      ]}
      implementation={[
        "Business Analysis: We conducted a thorough analysis of the salon's current booking process, staff scheduling needs, and client management system. This included understanding service durations, staff specialties, and peak booking times.",
        
        "Platform Development: We built a comprehensive booking system that handles client appointments, staff scheduling, and service management. The system includes features like automated waitlists, service bundling, and client history tracking.",
        
        "Staff Portal: We created a dedicated staff portal for managing schedules, viewing client history, and tracking service performance. The system includes mobile access for on-the-go management.",
        
        "Client Experience: We developed a user-friendly client portal for online booking, service selection, and appointment management. The system includes automated reminders, service recommendations, and loyalty tracking.",
        
        "Launch & Training: We provided extensive training for salon staff and implemented the system with a soft launch period. We also set up a feedback system to continuously improve the platform based on user experience."
      ]}
      results={[
        {
          metric: "90%",
          description: "Reduction in scheduling conflicts through automated conflict detection"
        },
        {
          metric: "55%",
          description: "Increase in client bookings through 24/7 online scheduling"
        },
        {
          metric: "40%",
          description: "Time saved on administrative tasks for salon staff"
        },
        {
          metric: "85%",
          description: "Of clients prefer online booking over phone calls"
        }
      ]}
      liveUrl="https://salon-booking-demo.example.com"
    />
  );
} 