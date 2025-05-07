import GbeseFeatures from '@/components/Home/Features'
import HeroSection from '@/components/Home/HeroSection';
import OpenAccount from '@/components/Home/OpenAccount';
import HomeTopNavbar from '@/components/layout/HomeTopNavbar'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <HomeTopNavbar />
      <HeroSection/>
      <GbeseFeatures />
      <OpenAccount/>
    </>
  );
}
