import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah J., Lagos",
    text: "“It’s not just an app —it’s a community. I don’t feel alone in my financial struggles anymore.”",
    image:
      "https://storage.googleapis.com/a1aa/image/31c379a9-7d9b-4e4a-33ed-899531230e0d.jpg",
    stars: 5,
    bgColor: "#FFE6E6",
  },
  {
    name: "Tunde M., Ibadan",
    text: "I found alternative ways to manage my loans and stop the endless cycle. I’m finally breathing again.”",
    image:
      "https://storage.googleapis.com/a1aa/image/275b5637-8bfa-4631-b864-9e0b4d63e360.jpg",
    stars: 4,
    bgColor: "#D9F0FF",
  },
  {
    name: "Chuka A., Enugu",
    text: "I always thought being broke was my fault. This app helped me see the system was rigged—and gave me the tools to fight back.”",
    image:
      "https://storage.googleapis.com/a1aa/image/a7994c1a-ab61-462e-b92f-c8fed7aaa700.jpg",
    stars: 5,
    bgColor: "#D9F0FF",
  },
];

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  stars: number;
  bgColor: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, image, stars, bgColor }) => (
  <article className="relative bg-[#E9F1FF] rounded-2xl pt-16 pb-8 px-8 text-center flex-1 max-w-sm mx-auto">
    <div
      className="w-20 h-20 border-2 rounded-full absolute left-1/2 -top-10 -translate-x-1/2"
      style={{ backgroundColor: bgColor, borderColor: "#7DB0FF" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
    <h3 className="text-[#0B2E73] font-extrabold text-xl leading-tight mb-4">
      {name}
    </h3>
    <p className="text-[#0B2E73] text-base leading-relaxed font-medium max-w-xs mx-auto mb-6">
      {text}
    </p>
    <div className="flex justify-center space-x-2 text-yellow-400 text-lg">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i >= stars ? "text-gray-300" : "text-yellow-400"}
        />
      ))}
    </div>
  </article>
);

const TestimonialsSection = () => (
  <main className="bg-white font-sans  mx-auto px-4 py-16">
    <div className="flex items-center justify-center  md:p-4 ">
      <h1 className="text-[#0B2F60] font-extrabold  text-center text-xl md:text-[48px] md:leading-[56px] md:max-w-[600px]">
        What Our Happy Customers <br /> are Saying About Us
      </h1>
    </div>
    <section className="flex flex-col sm:flex-row justify-center gap-8 pt-20">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </section>
  </main>
);

export default TestimonialsSection;


