"use client"; // Ensure it's treated as a Client Component


import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <>
      {/* Add 'data-aos' attributes to sections for scroll animation */}
      <section data-aos="fade-up">
        <Hero />
      </section>
   
      {/* Add Footer component here if it's being used */}
    </>  );
}
