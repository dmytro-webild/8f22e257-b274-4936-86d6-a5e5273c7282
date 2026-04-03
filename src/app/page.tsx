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
import { Target } from "lucide-react";

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
        { name: "Performance", id: "metrics" },
        { name: "Contact", id: "contact" }
      ]}
      brandName="Investrust Group"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      logoText="Investrust Group"
      description="Strategic wealth management for the modern investor. We combine institutional-grade insights with bespoke advisory services."
      buttons={[{ text: "Explore Services", href: "#features" }, { text: "Get Started", href: "#contact" }]}
      background={{ variant: "gradient-bars" }}
      imageSrc="http://img.b2bpic.net/free-photo/financial-graph-with-data-charts-digital-screen_23-2149162464.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      tag="Our Commitment"
      title="Architects of Your Financial Future"
      description="Investrust Group simplifies complexity. We offer a clear, transparent view into your portfolio, ensuring every decision aligns with your long-term success."
      subdescription="With two decades of experience, we manage capital with precision and integrity."
      icon={Target}
      imageSrc="http://img.b2bpic.net/free-photo/business-colleagues-working-together-office_9975-22648.jpg"
      useInvertedBackground={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Strategic Investment Services"
      description="Customized solutions built for the modern economy."
      features={[
        { id: "s1", title: "Portfolio Management", author: "Investrust Team", description: "High-conviction strategies built on data.", tags: ["Growth", "Diversification"], imageSrc: "http://img.b2bpic.net/free-photo/dynamic-data-visualization-3d_23-2151904317.jpg" },
        { id: "s2", title: "Risk Management", author: "Analysts", description: "Defensive protocols for market volatility.", tags: ["Stability", "Security"], imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637777.jpg" }
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTen
      animationType="slide-up"
      title="Proven Results"
      description="Key indicators of our financial advisory efficacy."
      metrics={[
        { id: "m1", title: "Assets Under Management", subtitle: "Total Capital", category: "Scale", value: "$5.2B+" },
        { id: "m2", title: "Avg. Annual Yield", subtitle: "Benchmark Return", category: "Performance", value: "12.8%" },
        { id: "m3", title: "Client Retention", subtitle: "Long-term Loyalty", category: "Relationship", value: "99%" }
      ]}
      textboxLayout="centered"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      gridVariant="three-columns-all-equal-width"
      animationType="slide-up"
      title="Trusted by Industry Leaders"
      description="Hear why executives and family offices choose Investrust Group."
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Alex Rivers", role: "CEO", company: "Rivers Tech", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-13618.jpg" },
        { id: "t2", name: "Jordan Hayes", role: "Director", company: "Hayes Group", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-pretty-stylish-woman-coat-dreamily-looking-camera-outdoor_574295-2145.jpg" },
        { id: "t3", name: "Marcus Thorne", role: "Principal", company: "Thorne Capital", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-with-fingers-intertwined-leaning-his-chin_1187-3066.jpg" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      faqs={[
        { id: "f1", title: "What is your investment philosophy?", content: "We focus on long-term capital preservation and consistent growth through diversification." },
        { id: "f2", title: "How is your advisory fee structured?", content: "We offer transparent, flat-fee advisory structures with no hidden incentives." },
        { id: "f3", title: "Can I track my portfolio real-time?", content: "Our encrypted client portal provides real-time access to your assets." }
      ]}
      title="Investment Questions"
      description="Frequently asked questions about our services."
      faqsAnimation="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Contact Us"
      title="Begin Your Journey Today"
      description="Ready to discuss your wealth management goals? Our experts are available for an initial consultation."
      buttons={[{ text: "Schedule a Call", href: "#" }]}
      background={{ variant: "sparkles-gradient" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/urban-skyline-with-cityscape_1359-258.jpg"
      columns={[
        { title: "Investrust", items: [{ label: "About", href: "#about" }, { label: "Careers", href: "#" }] },
        { title: "Performance", items: [{ label: "Market Reports", href: "#" }, { label: "FAQ", href: "#faq" }] }
      ]}
      logoText="Investrust Group"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
