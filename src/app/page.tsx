'use client';

import { useState } from 'react';
import { Link, Rocket, Users, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-primary">
                ColorTV
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#features"
                className="text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                How it Works
              </a>
              <a
                href="#privacy"
                className="text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                Privacy
              </a>
              <a
                href="#"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-colors font-medium"
              >
                Login
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#1F2937] hover:text-primary-light transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E7EB]">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                How it Works
              </a>
              <a
                href="#privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-[#1F2937] hover:text-primary-light transition-colors font-medium"
              >
                Privacy
              </a>
              <a
                href="#"
                className="block px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] mb-6 leading-tight">
              Scale Your Brand with Automated Meta Ad Management.
            </h1>
            <p className="text-lg sm:text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed">
              Our platform empowers businesses to connect their Meta assets and manage ad campaigns through a unified, high-performance dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors font-medium text-lg"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors font-medium text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
              Powerful Features for Your Business
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Everything you need to manage Meta ad campaigns at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Link className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                Seamless Integration
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Connect your Meta Business Portfolio via secure OAuth.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                Campaign Automation
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Publish and optimize ads across Facebook and Instagram.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                Multi-Client Management
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Built for agencies and brands managing complex ad structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="relative">
            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Connecting line - hidden on mobile */}
              <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-[#E5E7EB] z-0" />
              
              {/* Step 1 */}
              <div className="relative text-center z-10">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  Connect
                </h3>
                <p className="text-[#6B7280]">
                  Connect your Business Account.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center z-10">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  Select
                </h3>
                <p className="text-[#6B7280]">
                  Select your Ad Assets.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center z-10">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  Launch
                </h3>
                <p className="text-[#6B7280]">
                  Launch and manage ads directly from our portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="privacy" className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1 - Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8 pb-8 border-b border-[#374151]">
            <a
              href="https://prod.colortv.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <span className="hidden sm:inline text-[#6B7280]">|</span>
            <a
              href="https://prod.colortv.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-white transition-colors font-medium"
            >
              Terms of Service
            </a>
          </div>

          {/* Row 2 - Business Info */}
          <div className="text-center space-y-2 text-[#9CA3AF]">
            <p className="font-semibold text-white">ContentCreator Ai, LLC</p>
            <p>
              <a
                href="mailto:support@colortv.com"
                className="hover:text-white transition-colors"
              >
                support@colortv.com
              </a>
            </p>
            <p>145 E Columbine Ave, Santa Ana, CA 92707</p>
            <p className="pt-4 text-sm">
              © {currentYear} ContentCreator Ai, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
