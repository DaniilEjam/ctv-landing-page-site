'use client';

import { useState } from 'react';
import { Link, Rocket, Users, Menu, X } from 'lucide-react';

const LogoMark = () => (
  <svg
    width="93"
    height="27"
    viewBox="0 0 93 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="h-6 w-auto"
  >
    <g clipPath="url(#clip0_7351_74352)">
      <path
        d="M1.92407 14.2753V6.39316C1.92407 6.05039 2.20194 5.77252 2.54471 5.77252H2.79296C3.13573 5.77252 3.4136 5.49466 3.4136 5.15189V5.06534C3.4136 4.9599 3.44481 4.85682 3.5033 4.76908C3.60236 4.6205 3.76912 4.53125 3.94769 4.53125H11.8543C12.197 4.53125 12.4749 4.80912 12.4749 5.15189C12.4749 5.49466 12.7528 5.77252 13.0955 5.77252H13.4059C13.7486 5.77252 14.0265 6.05039 14.0265 6.39316V8.06888C14.0265 8.41165 13.7486 8.68952 13.4059 8.68952H11.5439C11.2012 8.68952 10.9233 8.41165 10.9233 8.06888V7.57237C10.9233 7.2296 10.6454 6.95173 10.3027 6.95173H6.20647C5.8637 6.95173 5.58583 7.2296 5.58583 7.57237V8.34073C5.58583 8.55732 5.69875 8.75825 5.88377 8.87087L6.71536 9.37706C6.90038 9.48968 7.0133 9.69061 7.0133 9.9072V13.4684C7.0133 13.8112 7.29117 14.0891 7.63393 14.0891H10.3027C10.6454 14.0891 10.9233 13.8112 10.9233 13.4684V12.6616C10.9233 12.3188 11.2012 12.041 11.5439 12.041H13.4059C13.7486 12.041 14.0265 12.3188 14.0265 12.6616V14.2753C14.0265 14.618 13.7486 14.8959 13.4059 14.8959H13.0955C12.7528 14.8959 12.4749 15.1738 12.4749 15.5165V15.8268C12.4749 16.1696 12.197 16.4475 11.8543 16.4475H4.03424C3.69147 16.4475 3.4136 16.1696 3.4136 15.8268V15.5165C3.4136 15.1738 3.13573 14.8959 2.79296 14.8959H2.54471C2.20194 14.8959 1.92407 14.618 1.92407 14.2753Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.633 14.8959C16.2902 14.8959 16.0123 14.618 16.0123 14.2753V6.39316C16.0123 6.05039 16.2902 5.77252 16.633 5.77252H16.8812C17.224 5.77252 17.5019 5.49466 17.5019 5.15189V5.06534C17.5019 4.9599 17.5331 4.85682 17.5916 4.76908C17.6906 4.6205 17.8574 4.53125 18.036 4.53125H25.9425C26.2853 4.53125 26.5632 4.80912 26.5632 5.15189C26.5632 5.49466 26.841 5.77252 27.1838 5.77252H27.4941C27.8369 5.77252 28.1148 6.05039 28.1148 6.39316V14.2753C28.1148 14.618 27.8369 14.8959 27.4941 14.8959H27.1838C26.841 14.8959 26.5632 15.1738 26.5632 15.5165V15.8268C26.5632 16.1696 26.2853 16.4475 25.9425 16.4475H18.1225C17.7797 16.4475 17.5019 16.1696 17.5019 15.8268V15.5165C17.5019 15.1738 17.224 14.8959 16.8812 14.8959H16.633ZM25.0116 13.4684C25.0116 13.8112 24.7337 14.0891 24.3909 14.0891H21.7222C21.3794 14.0891 21.1016 13.8112 21.1016 13.4684V9.9072C21.1016 9.69061 20.9886 9.48968 20.8036 9.37706L19.972 8.87087C19.787 8.75825 19.6741 8.55732 19.6741 8.34073V7.57237C19.6741 7.2296 19.952 6.95173 20.2947 6.95173H24.3909C24.7337 6.95173 25.0116 7.2296 25.0116 7.57237V13.4684Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        d="M30.163 1.17923V15.8263C30.163 16.169 30.4408 16.4469 30.7836 16.4469H34.6936C35.0364 16.4469 35.3143 16.169 35.3143 15.8263V9.77634C35.3143 9.56309 35.2048 9.36477 35.0243 9.25114L33.9285 8.56118C33.748 8.44756 33.6385 8.24924 33.6385 8.03598V1.17923C33.6385 0.836463 33.3607 0.558594 33.0179 0.558594H30.7836C30.4408 0.558594 30.163 0.836462 30.163 1.17923Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        d="M66.7804 16.4467H70.6905C71.0332 16.4467 71.3111 16.1689 71.3111 15.8261V14.745C71.3111 14.4166 71.0449 14.1504 70.7165 14.1504C70.5793 14.1504 70.4462 14.1029 70.34 14.016L70.0492 13.778C69.9051 13.6602 69.8216 13.4838 69.8216 13.2977V9.8012C69.8216 9.60851 69.7321 9.42675 69.5793 9.30927L68.4501 8.44066C68.2974 8.32317 68.2079 8.14141 68.2079 7.94872V7.57163C68.2079 7.22886 68.4858 6.95099 68.8285 6.95099H70.6284C70.9712 6.95099 71.249 6.67312 71.249 6.33035V5.2132C71.249 4.87044 70.9712 4.59257 70.6284 4.59257H68.9615C68.7969 4.59257 68.639 4.52718 68.5226 4.41079L68.3897 4.27784C68.2733 4.16145 68.2079 4.00358 68.2079 3.83898V2.54447C68.2079 2.2017 67.93 1.92383 67.5873 1.92383H65.6012C65.2585 1.92383 64.9806 2.2017 64.9806 2.54447V3.90987C64.9806 4.25264 64.7027 4.5305 64.36 4.5305H63.9876C63.6448 4.5305 63.3669 4.80837 63.3669 5.15114V6.33035C63.3669 6.67312 63.6448 6.95099 63.9876 6.95099H64.1738C64.5165 6.95099 64.7944 7.22886 64.7944 7.57163V14.1501C64.7944 14.4111 64.9577 14.6442 65.2029 14.7334L65.7513 14.9328C65.9965 15.022 66.1598 15.2551 66.1598 15.516V15.8261C66.1598 16.1689 66.4377 16.4467 66.7804 16.4467Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        d="M51.5128 6.39282V15.8266C51.5128 16.1693 51.7907 16.4472 52.1335 16.4472H56.0435C56.3862 16.4472 56.6641 16.1693 56.6641 15.8266V9.77467C56.6641 9.56249 56.5557 9.36502 56.3767 9.25109L55.5861 8.74787C55.4071 8.63394 55.2987 8.43647 55.2987 8.22429V7.49121C55.2987 7.34305 55.3517 7.19979 55.4481 7.0873L55.4853 7.0439C55.6032 6.90634 55.7754 6.82717 55.9565 6.82717H57.9795C58.168 6.82717 58.3463 6.91287 58.4641 7.0601L58.6383 7.27781C58.7263 7.38785 58.7743 7.52459 58.7743 7.66552V7.94432C58.7743 8.28709 59.0521 8.56495 59.3949 8.56495H61.0706C61.4134 8.56495 61.6913 8.28709 61.6913 7.94432V5.08939C61.6913 4.74662 61.4134 4.46875 61.0706 4.46875H53.6647C53.3559 4.46875 53.094 4.69586 53.0504 5.00162L53.0164 5.23928C52.9727 5.54501 52.7109 5.77211 52.4021 5.77215L52.1334 5.77218C51.7906 5.77222 51.5128 6.05008 51.5128 6.39282Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        d="M77.7603 16.4471H80.5129C80.699 16.4471 80.8754 16.3635 80.9932 16.2194L85.1353 11.1568C85.226 11.0459 85.2756 10.9071 85.2756 10.7638V5.21341C85.2756 4.87064 84.9977 4.59277 84.655 4.59277H82.731C82.3882 4.59277 82.1103 4.87064 82.1103 5.21341V10.2831C82.1103 10.4167 82.0673 10.5467 81.9875 10.6538L80.0892 13.2029C79.9941 13.3306 79.8443 13.4058 79.6851 13.4058C79.5313 13.4058 79.3859 13.3356 79.2903 13.215L78.1485 11.7754C78.0615 11.6657 78.0141 11.5298 78.0141 11.3897V5.21341C78.0141 4.87064 77.7363 4.59277 77.3935 4.59277H73.8559C73.5131 4.59277 73.2352 4.87064 73.2352 5.21341V10.7735C73.2352 10.9108 73.2808 11.0443 73.3648 11.153L77.2692 16.2059C77.3867 16.358 77.5681 16.4471 77.7603 16.4471Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9829 14.8959C37.6402 14.8959 37.3623 14.618 37.3623 14.2753V6.39316C37.3623 6.05039 37.6402 5.77252 37.9829 5.77252H38.2312C38.574 5.77252 38.8518 5.49466 38.8518 5.15189V5.06534C38.8518 4.9599 38.883 4.85682 38.9415 4.76908C39.0406 4.6205 39.2074 4.53125 39.3859 4.53125H47.2925C47.6353 4.53125 47.9131 4.80912 47.9131 5.15189C47.9131 5.49466 48.191 5.77252 48.5338 5.77252H48.8441C49.1869 5.77252 49.4647 6.05039 49.4647 6.39316V14.2753C49.4647 14.618 49.1869 14.8959 48.8441 14.8959H48.5338C48.191 14.8959 47.9131 15.1738 47.9131 15.5165V15.8268C47.9131 16.1696 47.6353 16.4475 47.2925 16.4475H39.4725C39.1297 16.4475 38.8518 16.1696 38.8518 15.8268V15.5165C38.8518 15.1738 38.574 14.8959 38.2312 14.8959H37.9829ZM46.3615 13.4684C46.3615 13.8112 46.0837 14.0891 45.7409 14.0891H43.0722C42.7294 14.0891 42.4515 13.8112 42.4515 13.4684V9.9072C42.4515 9.69061 42.3386 9.48968 42.1536 9.37706L41.322 8.87087C41.137 8.75825 41.0241 8.55732 41.0241 8.34073V7.57237C41.0241 7.2296 41.3019 6.95173 41.6447 6.95173H45.7409C46.0837 6.95173 46.3615 7.2296 46.3615 7.57237V13.4684Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <rect
        x="86.517"
        y="11.916"
        width="4.59271"
        height="4.59271"
        rx="0.620637"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.124127"
      />
      <path d="M0.868896 19.9844H8.44067V24.0806L8.4573 26.5631L4.59272 26.5676V24.0806H0.868896V19.9844Z" fill="#ED5842" />
      <path d="M46.2996 19.9844H53.8713V24.0806L53.888 26.5631L50.0234 26.5676V24.0806H46.2996V19.9844Z" fill="#5EC18B" />
      <path d="M53.8712 19.9847L61.4596 19.9844V24.0975V26.5634L57.595 26.5679V24.0809H53.8712V19.9847Z" fill="#58B6B5" />
      <path d="M69.0305 19.9844H61.4432V24.0975V26.5634L65.3078 26.5679V24.0809H69.0316L69.0305 19.9844Z" fill="#588ED1" />
      <path d="M91.7456 19.9844H84.1583V24.0975V26.5634L88.0229 26.5679V24.0809H91.7467L91.7456 19.9844Z" fill="#9D42CD" />
      <rect x="8.4408" y="19.9844" width="7.57177" height="6.57875" fill="#F38C3F" />
      <rect x="16.0123" y="19.9844" width="7.57177" height="4.0962" fill="#EFB240" />
      <rect x="23.5842" y="19.9844" width="7.57177" height="6.57875" fill="#F5DD3B" />
      <rect x="31.1561" y="19.9844" width="7.57177" height="4.0962" fill="#ADDC52" />
      <rect x="38.7275" y="19.9844" width="7.57177" height="6.57875" fill="#8DD952" />
      <rect x="76.5865" y="19.9844" width="7.57177" height="6.57875" fill="#784FD1" />
      <rect x="69.015" y="19.9844" width="7.57177" height="4.0962" fill="#6A6CD0" />
    </g>
    <defs>
      <clipPath id="clip0_7351_74352">
        <rect width="93" height="27" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F17]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3 text-white">
              <span className="text-white">
                <LogoMark />
              </span>
              <span className="text-lg font-semibold tracking-tight">ColorTV</span>
            </a>

            <div className="hidden md:flex md:items-center md:gap-8 text-sm font-medium text-white/80">
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a
                href="https://prod.colortv.com/login"
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
                href="#privacy"
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
                href="https://prod.colortv.com/login"
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
                  refine, approve, and publish without leaving ColorTV.
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
              <div className="flex items-center gap-3">
                <LogoMark />
                <span className="text-lg font-semibold">ColorTV</span>
              </div>
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
              <a href="mailto:support@colortv.com" className="hover:text-white transition-colors">
                support@colortv.com
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
