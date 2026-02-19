'use client';

import { useState } from 'react';
import { Link, Rocket, Users, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F17]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="text-white text-xl font-semibold tracking-tight">
              Created.ai
            </a>

            <div className="hidden md:flex md:items-center md:gap-8 text-sm font-medium text-white/80">
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How it Works
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a
                href="https://created.ai/login"
                className="bg-white text-[#0B0F17] px-5 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                Login
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0B0F17]">
            <div className="px-4 py-4 space-y-2 text-sm font-medium">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                How it Works
              </a>
              <a
                href="/privacy"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                Terms
              </a>
              <a
                href="https://created.ai/login"
                className="block px-3 py-2 bg-white text-[#0B0F17] rounded-full text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(74,144,217,0.35),_rgba(11,15,23,0))]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Meta Ads Management Platform
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Scale Your Brand with Automated Meta Ad Management.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              A one-stop platform for businesses and agencies: go from idea to AI-generated assets to
              launching high-performing Meta ads with unified execution and optimization.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-white text-[#0B0F17] px-7 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="border border-white/30 px-7 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">99.9%</p>
                <p className="mt-1">Uptime for critical campaign workflows</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">50+</p>
                <p className="mt-1">Assets connected per portfolio</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p className="mt-1">Monitoring and compliance coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 sm:py-24 bg-[#0F1523]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Capabilities</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
                A modern control center for Meta campaigns
              </h2>
            </div>
            <p className="max-w-xl text-white/65">
              Designed for B2B teams that need AI-powered creative generation, governance, automation,
              and transparent performance across multiple accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-5">
                <Link className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Seamless Integration</h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Connect your Meta Business Portfolio via secure OAuth with full audit visibility.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-5">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Campaign Automation</h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Launch, optimize, and scale Meta campaigns across Facebook and Instagram.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-5">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Multi-Client Management</h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                Built for agencies and brands managing complex ad structures at scale.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">AI Creative Studio</p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
                  From idea to assets in one workspace
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
                  Turn briefs into ready-to-launch creative with AI-generated copy and visuals, then
                  refine, approve, and publish without leaving Created.ai.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70 w-full lg:w-auto">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Idea</p>
                  <p className="mt-2">Briefs, prompts, and brand inputs.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Generate</p>
                  <p className="mt-2">AI drafts for images, video, and copy.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-semibold">Launch</p>
                  <p className="mt-2">Approve and publish to Meta in minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-24 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Process</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">How It Works</h2>
            <p className="mt-4 text-white/65">
              Secure onboarding that keeps your assets governed and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-white">01</span>
                <span className="h-px flex-1 mx-4 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Idea</h3>
              <p className="mt-3 text-white/65">
                Capture campaign intent, objectives, and brand inputs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-white">02</span>
                <span className="h-px flex-1 mx-4 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Generate</h3>
              <p className="mt-3 text-white/65">
                Produce AI-generated copy and visual assets in minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold text-white">03</span>
                <span className="h-px flex-1 mx-4 bg-gradient-to-r from-white/40 to-transparent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Refine & Launch</h3>
              <p className="mt-3 text-white/65">
                Tweak creatives, approve, and launch campaigns with full governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="privacy" className="bg-[#0F1523] text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <div className="text-white text-xl font-semibold tracking-tight">Created.ai</div>
              <p className="mt-4 text-white/60 max-w-md">
                Built for businesses, agencies, and brands operating complex Meta ad ecosystems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-white/70">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/60 space-y-2">
            <p className="text-white font-semibold">ContentCreator Ai, LLC</p>
            <p>
              <a href="mailto:support@created.ai" className="hover:text-white transition-colors">
                support@created.ai
              </a>
            </p>
            <p>145 E Columbine Ave, Santa Ana, CA 92707</p>
            <p className="pt-2">© {currentYear} ContentCreator Ai, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
