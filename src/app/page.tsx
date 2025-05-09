import AboutUs from '@/components/Home/AboutUs';
import GbeseFeatures from '@/components/Home/Features'
import HeroSection from '@/components/Home/HeroSection';
import OpenAccount from '@/components/Home/OpenAccount';
import HomeTopNavbar from '@/components/layout/HomeTopNavbar'
import React from 'react'

export default function HomePage() {
  return (
    <section className='max-w-[100%] overflow-hidden bg-[#F5F8FF] min-h-screen'>
      <HomeTopNavbar />
      <HeroSection />
      <GbeseFeatures />
      <OpenAccount />
      <AboutUs />
    </section>
  );
}
