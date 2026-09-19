/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyBKGrid } from './components/WhyBKGrid';
import { PackagesGrid } from './components/PackagesGrid';
import { PricingCalculator } from './components/PricingCalculator';
import { ServiceTerritoryValidator } from './components/ServiceTerritoryValidator';
import { FounderStory } from './components/FounderStory';
import { BookingForm } from './components/BookingForm';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { VehicleSizeId } from './types';
import { PACKAGES } from './data/detailingData';

export default function App() {
  const [selectedSize, setSelectedSize] = useState<VehicleSizeId>('suv');
  const [selectedPackageId, setSelectedPackageId] = useState<string>(PACKAGES[2].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['engine-bay']);

  const handleToggleAddOn = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackageFromGrid = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    scrollToSection('configurator');
  };

  const handleProceedToBooking = () => {
    scrollToSection('book');
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-200 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Editorial Navbar */}
      <Navbar onOpenBooking={() => scrollToSection('book')} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBrowsePackages={() => scrollToSection('packages')}
          onOpenBooking={() => scrollToSection('book')}
        />

        {/* 2. The "Why BK" Methodology & Autonomy Grid */}
        <WhyBKGrid />

        {/* 3. Interactive Tiered Pricing & Services Grid */}
        <PackagesGrid
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          onSelectPackage={handleSelectPackageFromGrid}
        />

        {/* 4. Dynamic Pricing Calculator */}
        <PricingCalculator
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          selectedPackageId={selectedPackageId}
          onSelectPackage={setSelectedPackageId}
          selectedAddOns={selectedAddOns}
          onToggleAddOn={handleToggleAddOn}
          onProceedToBooking={handleProceedToBooking}
        />

        {/* 5. Service Territory Validator */}
        <ServiceTerritoryValidator />

        {/* 6. Founder & Story: Brady Knaple */}
        <FounderStory />

        {/* 7. Conversion-Focused Booking Inquiry Form */}
        <BookingForm
          selectedSize={selectedSize}
          selectedPackageId={selectedPackageId}
          selectedAddOns={selectedAddOns}
        />

        {/* 8. Verified Local Testimonials & Objection Handling FAQ */}
        <TestimonialsFAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onOpenBooking={() => scrollToSection('book')} />
    </div>
  );
}
