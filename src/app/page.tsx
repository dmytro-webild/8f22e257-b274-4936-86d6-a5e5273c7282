"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Results", id: "metrics" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Investrust Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      logoText="Investrust Group"
      description="Strategic investment management tailored to your long-term goals. We combine data-driven insights with personalized wealth solutions."
      buttons={[
        { text: "Start Investing", href: "#contact" },
      ]}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/serious-businessman-sitting-office-reading-business-reports-there-are-people-background_637285-218.jpg"
      background={{ variant: "plain" }}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      tag="Legacy"
      title="A Legacy of Financial Excellence"
      description="With over 20 years in the industry, Investrust Group provides a sophisticated approach to asset management."
      subdescription="We prioritize transparency, risk-adjusted returns, and long-term client success."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/business-colleagues-working-together-office_9975-22648.jpg"
      videoSrc=""
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1", title: "Portfolio Optimization", author: "Expert Team", description: "Dynamic reallocation based on market conditions.", tags: ["Growth", "Stability"],
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904317.jpg"
        },
        {
          id: "s2", title: "Risk Management", author: "Analyst Panel", description: "Mitigating volatility through diversified asset classes.", tags: ["Protection", "Security"],
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637777.jpg"
        },
        {
          id: "s3", title: "Retirement Strategy", author: "Financial Planners", description: "Securing your future with long-term capital appreciation.", tags: ["Retirement", "Long-term"],
          imageSrc: "http://img.b2bpic.net/free-photo/professional-service-investment-retirement-financial-planning_53876-123853.jpg"
        },
      ]}
      title="Our Specialized Services"
      description="Comprehensive investment strategies designed to grow and protect your wealth."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTen
      animationType="slide-up"
      textboxLayout="spread"
      metrics={[
        { id: "m1", title: "Assets Under Management", subtitle: "Total managed capital", category: "Growth", value: "$5B+" },
        { id: "m2", title: "Average Annual Yield", subtitle: "Performance metric", category: "Yield", value: "12.4%" },
        { id: "m3", title: "Client Retention", subtitle: "Building relationships", category: "Loyalty", value: "98%" },
      ]}
      title="Measured by Results"
      description="Our performance speaks for itself, driving consistent value across all portfolios."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      gridVariant="timeline"
      animationType="slide-up"
      title="Client Success Stories"
      textboxLayout="split"
      useInvertedBackground={false}
      description="Read what our partners say."
      testimonials={[
        { id: "t1", name: "Robert Chen", role: "CEO", company: "TechCorp", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-13618.jpg" },
        { id: "t2", name: "Elena Martinez", role: "Founder", company: "Innovate", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-stylish-woman-coat-dreamily-looking-camera-outdoor_574295-2145.jpg" },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How do you mitigate market risk?", content: "We employ sophisticated hedging strategies and strict asset allocation protocols to minimize exposure." },
        { id: "f2", title: "Can I start with a small amount?", content: "Yes, we offer flexible entry options tailored to various portfolio sizes." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-businesswoman-analyzing-situation_1098-1307.jpg"
      title="Frequently Asked Questions"
      description="Clear answers to your investment queries."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      tag="Get Started"
      title="Ready to Grow Your Wealth?"
      description="Speak with our advisors to discuss your financial goals."
      buttons={[
        { text: "Contact Us", href: "#" },
      ]}
      background={{ variant: "plain" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/urban-skyline-with-cityscape_1359-258.jpg"
      columns={[
        { title: "Investrust", items: [{ label: "About", href: "#about" }, { label: "Careers", href: "#" }] },
        { title: "Resources", items: [{ label: "Market Insights", href: "#" }, { label: "FAQ", href: "#faq" }] },
      ]}
      logoText="Investrust Group"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
