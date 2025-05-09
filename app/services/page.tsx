'use client';
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";
import TechStack from "./components.tsx/TechStack";
import DeepDive from "./components.tsx/DeepDive";

import ServicesHero from "./components.tsx/ServicesHero";
import ServiceBlocks from "./components.tsx/ServicesBlocks";

import styled from "styled-components";


const SnapWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`;

const SnapSection = styled.section`
  scroll-snap-align: start;
  min-height: auto;
  padding-bottom: 4rem;
  background: #060b13;
`;


export default function ServicesPage() {
  return (
    <SnapWrapper>
      <Header />
      <ServicesHero />
      <ServiceBlocks />
      <DeepDive />
      <TechStack />
      <ContactForm />
      <SnapSection>
        <Footer />
      </SnapSection>
    </SnapWrapper>
  );
}
