export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">Legal</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Terms & Conditions</h1>
          <p className="mt-4 text-white/70">
            These Terms & Conditions govern the use of ColorTV and the services provided by
            ContentCreator Ai, LLC. By accessing or using our platform, you agree to these terms.
          </p>
        </div>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">1. Service Overview</h2>
            <p className="mt-3">
              ColorTV provides businesses and agencies with tools to connect Meta assets, manage ad
              campaigns, and access reporting through a unified dashboard. Services may change,
              evolve, or be enhanced over time.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">2. Access & Compliance</h2>
            <p className="mt-3">
              You are responsible for ensuring that your use of ColorTV complies with Meta
              policies, applicable laws, and internal governance requirements. Any credentials or
              access tokens you provide must be authorized for the intended assets.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">3. Data & Security</h2>
            <p className="mt-3">
              We implement reasonable safeguards to protect platform data. You remain responsible
              for the accuracy of inputs and for protecting access to your business accounts. We do
              not assume liability for unauthorized access resulting from compromised credentials.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">4. Limitations of Liability</h2>
            <p className="mt-3">
              ColorTV is provided on an "as is" and "as available" basis. ContentCreator Ai, LLC
              will not be liable for indirect, incidental, or consequential damages arising from
              use of the platform, including campaign performance outcomes.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">5. Contact</h2>
            <p className="mt-3">
              For questions regarding these terms, contact us at{' '}
              <a
                href="mailto:support@colortv.com"
                className="text-white hover:text-white/80 underline underline-offset-4"
              >
                support@colortv.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
