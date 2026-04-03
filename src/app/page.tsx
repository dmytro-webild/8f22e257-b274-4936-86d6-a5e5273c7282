"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Shield, TrendingUp, Users } from "lucide-react";

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
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Results",
          id: "metrics",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Investrust Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Securing Your Future with Investrust"
      description="Strategic investment management tailored to your long-term goals. We combine data-driven insights with personalized wealth solutions."
      buttons={[
        {
          text: "Start Investing",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/serious-businessman-sitting-office-reading-business-reports-there-are-people-background_637285-218.jpg"
      imageAlt="Financial consulting hero"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="A Legacy of Financial Excellence"
      description="With over 20 years in the industry, Investrust Group provides a sophisticated approach to asset management. We prioritize transparency, risk-adjusted returns, and long-term client success."
      imageSrc="http://img.b2bpic.net/free-photo/business-colleagues-working-together-office_9975-22648.jpg"
      imageAlt="Our team at work"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Portfolio Optimization",
          author: "Expert Team",
          description: "Dynamic reallocation based on market conditions.",
          tags: [
            "Growth",
            "Stability",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904317.jpg",
        },
        {
          id: "s2",
          title: "Risk Management",
          author: "Analyst Panel",
          description: "Mitigating volatility through diversified asset classes.",
          tags: [
            "Protection",
            "Security",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637777.jpg",
        },
        {
          id: "s3",
          title: "Retirement Strategy",
          author: "Financial Planners",
          description: "Securing your future with long-term capital appreciation.",
          tags: [
            "Retirement",
            "Long-term",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/professional-service-investment-retirement-financial-planning_53876-123853.jpg",
        },
      ]}
      title="Our Specialized Services"
      description="Comprehensive investment strategies designed to grow and protect your wealth."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "$5B+",
          title: "Assets Under Management",
          description: "Total managed capital globally.",
          icon: Shield,
        },
        {
          id: "m2",
          value: "12.4%",
          title: "Average Annual Yield",
          description: "Consistent growth benchmarks.",
          icon: TrendingUp,
        },
        {
          id: "m3",
          value: "98%",
          title: "Client Retention",
          description: "Building lasting relationships.",
          icon: Users,
        },
      ]}
      title="Measured by Results"
      description="Our performance speaks for itself, driving consistent value across all portfolios."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Robert Chen",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-13618.jpg",
        },
        {
          id: "t2",
          name: "Elena Martinez",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-stylish-woman-coat-dreamily-looking-camera-outdoor_574295-2145.jpg",
        },
        {
          id: "t3",
          name: "James O'Connor",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-handsome-caucasian-man-posing-looking-camera-isolated-dark-background_613910-15062.jpg",
        },
        {
          id: "t4",
          name: "Sarah Jenkins",
          imageSrc: "http://img.b2bpic.net/free-photo/skeptical-senior-businesswoman-looking-camera_1262-5592.jpg",
        },
        {
          id: "t5",
          name: "Marcus Thorne",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-fingers-intertwined-leaning-his-chin_1187-3066.jpg",
        },
      ]}
      cardTitle="Client Success Stories"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do you mitigate market risk?",
          content: "We employ sophisticated hedging strategies and strict asset allocation protocols to minimize exposure.",
        },
        {
          id: "f2",
          title: "Can I start with a small amount?",
          content: "Yes, we offer flexible entry options tailored to various portfolio sizes.",
        },
        {
          id: "f3",
          title: "How often are reports issued?",
          content: "Clients receive detailed quarterly reports, with real-time access to our secure client portal.",
        },
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
      background={{
        variant: "radial-gradient",
      }}
      tag="Get Started"
      title="Ready to Grow Your Wealth?"
      description="Speak with our advisors to discuss your financial goals."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/urban-skyline-with-cityscape_1359-258.jpg"
      columns={[
        {
          title: "Investrust",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Market Insights",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      logoText="Investrust Group"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
