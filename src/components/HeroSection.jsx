import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-dashboard.svg";
import Meta from "../assets/images/meta.svg";
import cocaCola from "../assets/images/coca-cola.svg";
import Google from "../assets/images/google.svg";
import Amazon from "../assets/images/amazon.svg";
import Microsoft from "../assets/images/microsoft.svg";
import Nestle from "../assets/images/nestle.svg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showParagraph, setShowParagraph] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const fullText = "The";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);

        
        setTimeout(() => setShowParagraph(true), 500);

       
        setTimeout(() => setShowLogos(true), 1200);
      }
    }, 250);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="container_padded text-center text-[#1E254E] py-32 transition-all duration-500">
      <h1 className="text-4xl md:text-5xl text-gray-800 font-bold h-20">
        {typedText}
        <span className="animate-pulse">|</span>
      </h1>

      {showParagraph && (
        <>
          <p className="mt-6 text-[#616878] max-w-2xl mx-auto text-lg animate-fade-in">
            Personalized, evidence-backed roadmaps that turn uncertainty into measurable progress — clear steps, confidence scores, and one place to track your applications and wins.
          </p>

          <Link
            to="/waitlist"
            className="mt-8 inline-block px-6 py-3 bg-[#576ADF] text-white rounded hover:bg-blue-700 transition animate-fade-in"
          >
            Start Your Journey
          </Link>
        </>
      )}

      {showLogos && (
        <div className="mt-16 w-full px-4 text-center animate-fade-in-slow">
          <div className="p-10">
  <h1 className="font-clash text-4xl text-black">This should be Clash Display</h1>
  <p className="font-lato text-gray-600 mt-2">This should be Lato Regular</p>
</div>
          <p className="font-lato text-base sm:text-lg text-[#1E254E] mb-6">
            Job opportunities from top companies and more
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 sm:gap-12 my-8">
            {[Meta, Nestle, Google, Amazon, Microsoft, cocaCola].map(
              (logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-10 sm:h-12 object-contain transition-transform hover:scale-105"
                />
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
