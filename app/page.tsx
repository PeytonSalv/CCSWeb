'use client';

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import WhatWeDo from "./_components/WhatWeDo";
import WhoWeHelp from "./_components/WhoWeHelp";
import OurProcess from "./_components/OurProcess";
import CaseStudies from "./_components/CaseStudies";
import ContactForm from "./_components/ContactForm";



import styled from "styled-components";



const SnapSection = styled.section`
  scroll-snap-align: start;
  min-height: auto;
  padding-bottom: 4rem;
  background: #060b13;
`;


const SnapWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`; 



export default function Home() {
  return (
    <SnapWrapper>
      <Header />
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
      <OurProcess />
      <CaseStudies />
      <ContactForm />
      <SnapSection>
        <Footer />
      </SnapSection>
    </SnapWrapper>
  );
}
