'use client'
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly is Gbese?",
      answer:
        "Gbese is a platform focused on helping users understand and manage their debt through educational resources, strategies, and support.",
    },
    {
      question: "Do you really clear debt?",
      answer:
        "We help you develop a plan and guide you through realistic steps to reduce or clear your debt. We don’t pay it off for you, but we empower you to do it.",
    },
    {
      question: "Is it free to subscribe?",
      answer:
        "Yes, subscribing to Gbese is free. However, some premium resources or 1-on-1 support may come with optional fees.",
    },
    {
      question: "Is Gbese a loan app?",
      answer:
        "No. Gbese doesn’t lend money or trap you in more debt. Instead, we empower you with knowledge, resources, and real strategies to manage debt and reclaim your financial freedom.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left bg-[#E6F0FF] text-[#0B2E6E] font-semibold rounded-lg px-6 py-4 flex justify-between items-center"
          >
            <span className="text-base">{faq.question}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openIndex === index && (
            <div className="bg-[#B9D0F5] text-[#0B2E6E] font-normal rounded-b-lg px-6 py-4 text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FaqAccordion;
