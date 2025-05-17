import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutUsPage() {
    const teamMembers = [
    {
      name: "Dorothy U.",
      title: "CEO GBESE",
      image: "/dorothy.jpeg",
    },
    {
      name: "Amarachi N.",
      title: "Product Manager",
      image: "/amarachi.jpeg",
    },
    {
      name: "Kenechukwu E.",
      title: "Development Manager",
      image: "/kenechukwu.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Our Story Section */}
      <section className="bg-gradient-to-r from-[#0B2E6D] to-[#004AAD] text-white px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              At Gbese, we’re reimagining credit and debt through the lens of trust, transparency, and technology.
              Born from the frustrations of traditional credit systems that exclude millions, Gbese was created to give power back to the people—through a peer-to-peer debt transfer platform that’s frictionless, ethical, and Web3-enabled.
              We believe debt shouldn't be a trap. It should be negotiable, transparent, and even transferable—with the full consent of all parties. With Gbese, individuals can shift debt obligations within trusted networks, opening up new ways to manage financial pressure, reduce bad debt, and redistribute burdens fairly.
            </p>
            <p className="mb-4">
              We’re not just building a platform. We’re building a movement—toward financial collaboration, democratized access to credit, and a culture of consent-based lending.
              Join us in creating a world where debt is no longer a dead end—but a dynamic tool for growth, empathy, and shared responsibility.
            </p>
            <button className="bg-white text-[#004AAD] font-semibold py-2 px-6 rounded-md mt-4 hover:bg-gray-100">
              Learn More
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/about-team.png"
              alt="Team brainstorming"
              width={400}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="px-6 md:px-12 py-16 bg-white text-black">
       <div className="max-w-7xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
           {teamMembers.map((member, index) => (
             <div key={index} className="text-center">
               <Image
                 src={member.image}
                 alt={member.name}
                 width={300}
                 height={300}
                 className="rounded-xl mx-auto mb-4 object-cover"
               />
               <h3 className="font-semibold text-lg">{member.name}</h3>
               <p className="text-gray-600 text-sm mb-2">{member.title}</p>
               <div className="flex justify-center gap-4 text-gray-500 text-xl">
                  <i className="fab fa-facebook" />
                  <i className="fab fa-instagram" />
                <i className="fab fa-linkedin" />
               </div>
             </div>
           ))}
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reach out to us Today</h2>
          <p className="text-gray-600 mb-10">
            If you need support or any form of enquiry, we are here for you.
          </p>
        </div>
        </section>
      {/* Contact Info */}
      <section className="md:max-w-5xl w-full  md:mx-auto  px-2 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
                <FaEnvelope className="text-[#0B2E6E] text-sm" />
            </div>
            <div className="text-xs text-[#0B2E6E]">
                <p className="font-semibold">Email</p>
                <p className="font-normal">prosperobodo@gmail.com</p>
            </div>
        </div>
          
        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
                <FaPhoneAlt className="text-[#0B2E6E] text-sm" />
            </div>
            <div className="text-xs text-[#0B2E6E]">
                <p className="font-semibold">Phone</p>
                <p className="font-normal">+234 70 876 78904</p>
            </div>
        </div>
          
        <div className="bg-[#F9FAFB] rounded-lg flex items-center space-x-4 px-4 mx-2 py-4 md:max-w-xs md:mx-auto sm:mx-0">
            <div className="bg-[#B9D0F5] w-10 h-10 rounded-md flex items-center justify-center">
                <FaMapMarkerAlt className="text-[#0B2E6E] text-sm" />
            </div>
            <div className="text-xs text-[#0B2E6E]">
                <p className="font-semibold">Address</p>
                <p className="font-normal">Independence Layout Enugu</p>
            </div>
        </div>
      </section>
    </div>
  );
}
