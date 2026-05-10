"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Apex Consulting"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Excellence in Strategic Consulting"
      description="Apex Consulting provides world-class tax, audit, and advisory services tailored for industry leaders. Secure your future with expertise you can trust."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-his-tablet-outdoors_23-2148230207.jpg",
          imageAlt: "luxury office boardroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crystal-building-view_1112-416.jpg",
          imageAlt: "luxury office boardroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-office-buildings_1359-1038.jpg",
          imageAlt: "luxury office boardroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-shot-man-looking-away_23-2148230181.jpg",
          imageAlt: "luxury office boardroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-her-colleagues-documents_23-2149330964.jpg",
          imageAlt: "luxury office boardroom",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-boardroom-space-within-enterprise-designed-productivity_482257-114714.jpg",
          imageAlt: "financial documents gold pen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-phone-laptop_23-2148415761.jpg",
          imageAlt: "financial documents gold pen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-writing-letter_23-2148935044.jpg",
          imageAlt: "financial documents gold pen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-pen-ai-generated_23-2150695551.jpg",
          imageAlt: "financial documents gold pen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-elegant-desk-arrangement_23-2148975793.jpg",
          imageAlt: "financial documents gold pen",
        },
      ]}
      buttons={[
        {
          text: "Book Consultation",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-senior-woman-working-office_1262-5332.jpg",
          alt: "Portrait of happy senior woman working in office",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indecisive-asian-businesswoman-pucker-lips-looking-thoughtful-upper-left-corner-standing_1258-173689.jpg",
          alt: "Indecisive asian businesswoman pucker lips and looking thoughtful",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-senior-businesswoman-working-laptop_1262-5401.jpg",
          alt: "Positive senior businesswoman working on laptop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-beautiful-senior-woman-putting-glasses_1262-5752.jpg",
          alt: "Smiling beautiful senior woman putting glasses on",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confused-senior-businessman-wearing-suit_1262-3747.jpg",
          alt: "Confused senior businessman wearing suit",
        },
      ]}
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/hand-drawn-business-workshop-labels_23-2149422820.jpg",
          alt: "corporate brand logo gold",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/3d-travel-icon-with-compass_23-2151037326.jpg",
          alt: "professional firm logo navy blue",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=a8bp6b",
          alt: "luxury logo mark high end",
        },
        {
          type: "image",
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=813oaj",
          alt: "luxury logo mark high end",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/golden-lightning-bolt-icon-glowing-textured-brown-background_84443-91489.jpg",
          alt: "luxury logo mark high end",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "s1",
          title: "Tax Consulting",
          author: "Apex Consulting",
          description: "Navigating complex regulatory environments with precision and strategy.",
          tags: [
            "Tax",
            "Compliance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/modern-workspace-with-analytical-data-dashboards-displayed-devices_482257-126633.jpg",
        },
        {
          id: "s2",
          title: "Audit & Assurance",
          author: "Apex Consulting",
          description: "Ensuring financial transparency and stakeholder trust through rigorous auditing.",
          tags: [
            "Audit",
            "Transparency",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-organizing-documents_23-2149396652.jpg",
        },
        {
          id: "s3",
          title: "Real Estate Advisory",
          author: "Apex Consulting",
          description: "Strategic insights into real estate investment and development.",
          tags: [
            "Real Estate",
            "Advisory",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-buying-new-house-asian-woman-african-man-signing-documents-new-home_1157-47960.jpg",
        },
      ]}
      title="Our Expertise"
      description="Comprehensive solutions designed to elevate your financial and operational performance."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Delivering Exceptional Results for Over 20 Years"
      buttons={[
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "$50B+",
          title: "Assets Managed",
          description: "Capital effectively managed for our diverse client base.",
          imageSrc: "http://img.b2bpic.net/free-photo/rag-doll-teaching-bar-graph_1156-246.jpg",
        },
        {
          id: "m2",
          value: "1200+",
          title: "Clients Served",
          description: "Trusted by firms across every continent.",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-coffee-cup_1134-241.jpg",
        },
        {
          id: "m3",
          value: "98%",
          title: "Retention Rate",
          description: "Long-term partnership built on consistent delivery.",
          imageSrc: "http://img.b2bpic.net/free-photo/pie-chart-presentation-infographic-business-marketing-financial-analysis-concept-background-3d-illustration_56104-1696.jpg",
        },
      ]}
      title="Our Global Impact"
      description="Driving measurable success across diverse global industries."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          handle: "CEO",
          testimonial: "Apex Consulting transformed our financial strategy, delivering growth beyond expectations.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-concept-asian-mature-businesswoman-smiling-pleased-looking-thoughtful-having-idea-standi_1258-156963.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          handle: "CTO",
          testimonial: "Their audit services provided the clarity we needed for a successful IPO.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-sitting-couch_1098-2454.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          handle: "Director",
          testimonial: "Excellence and professionalism at every step of the real estate advisory project.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-office-by-window_1303-21128.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          handle: "Manager",
          testimonial: "The best advisory firm I've worked with in over two decades.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
        {
          id: "5",
          name: "Anna Petrova",
          handle: "Founder",
          testimonial: "A true partner in business growth. Highly recommend their strategic services.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-woman-startup-manager-office-posing-with-confidence-looking_1258-195341.jpg",
        },
      ]}
      title="Proven Success Stories"
      description="Hear what our global clients say about our impact."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Microsoft",
        "Google",
        "Amazon",
        "JPMorgan",
        "Deloitte",
        "Goldman Sachs",
        "McKinsey",
      ]}
      title="Trusted Partners"
      description="We are privileged to work with some of the world's most prestigious organizations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do we start?",
          content: "Simply fill out our consultation request form to schedule a discovery meeting.",
        },
        {
          id: "f2",
          title: "What is the fee structure?",
          content: "Our fee structure is transparent, custom-built for each client project.",
        },
        {
          id: "f3",
          title: "Are you global?",
          content: "We operate in over 40 countries, providing seamless global services.",
        },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Clear answers to help you understand our partnership model."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to discuss your business strategy? Book a complimentary discovery session with our senior partners today."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Apex Consulting"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
