'use client';

import CaseStudyTemplate from '@/app/_components/CaseStudyTemplate';

export default function CoffeeShopLoyaltyCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Coffee Shop Loyalty App"
      subtitle="Transforming customer engagement and operational efficiency for a local coffee chain through a custom mobile app"
      techStack={[
        {
          category: "Frontend",
          items: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "MongoDB", "Redis"]
        },
        {
          category: "AI/ML",
          items: ["TensorFlow", "Recommendation Engine", "Customer Behavior Analysis"]
        },
        {
          category: "Infrastructure",
          items: ["AWS Amplify", "CloudFront", "S3", "Lambda"]
        },
        {
          category: "Payment",
          items: ["Stripe", "Apple Pay", "Google Pay"]
        }
      ]}
      implementation={[
        "Discovery & Planning: We began with a two-week analysis of the coffee chain's operations, customer behavior, and pain points. This included shadowing baristas during peak hours, analyzing sales data, and conducting customer interviews to understand their needs and preferences.",
        
        "App Development: We built a cross-platform mobile app using React Native that included features like digital loyalty cards, pre-ordering, personalized recommendations, and real-time menu updates. The app was designed to be intuitive for both customers and staff.",
        
        "AI Integration: We implemented a recommendation engine that analyzes purchase history and time patterns to suggest drinks and promotions. The system also helps predict peak hours and staffing needs based on historical data.",
        
        "Payment & Integration: We integrated multiple payment options and connected the app with the coffee shop's existing POS system. This included setting up secure payment processing and real-time inventory updates.",
        
        "Launch & Training: We conducted staff training sessions and launched the app with a soft opening period. During this time, we monitored usage patterns and made adjustments based on real-world feedback."
      ]}
      results={[
        {
          metric: "40%",
          description: "Increase in customer retention through personalized rewards and recommendations"
        },
        {
          metric: "25%",
          description: "Reduction in wait times during peak hours through pre-ordering"
        },
        {
          metric: "3.5x",
          description: "Growth in mobile orders within the first quarter"
        },
        {
          metric: "85%",
          description: "Of customers prefer the app over traditional loyalty cards"
        }
      ]}
      liveUrl="https://coffee-loyalty-demo.example.com"
    />
  );
} 