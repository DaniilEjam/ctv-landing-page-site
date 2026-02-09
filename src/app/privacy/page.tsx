export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">Legal</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-white/70">
            Effective Date: January 13, 2026
          </p>
        </div>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">1. Who is the Data Controller?</h2>
            <p className="mt-3">
              The data controller is ContentCreator Ai, LLC, located at 145 E Columbine Ave, Santa
              Ana, CA 92707. For any privacy-related inquiries or data requests, contact
              support@colortv.com.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
            <p className="mt-3">
              We treat all personal information covered by this policy as pertaining to
              individuals acting as business representatives.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold text-white">A. Information You Provide</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Account details: full name, business email address, company name, and role.</li>
                  <li>Creative assets: images, videos, and copy uploaded for ad creation.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">B. Meta Platform Data (via Meta APIs)</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Ad management & publishing: account IDs and permissions required to create ads.</li>
                  <li>Performance metrics: spend, impressions, clicks, and conversion data.</li>
                  <li>Campaign metadata: headlines, targeting parameters, and structures.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">C. Automatic Data Collection</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Usage data: IP address, browser type, and platform interactions.</li>
                  <li>Cookies: used to maintain sessions and remember settings.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Publishing ads: export and publish campaigns directly to Meta Ads.</li>
              <li>Analytics: aggregate and visualize Meta Ad performance data.</li>
              <li>Service delivery: operate and maintain platform functionality.</li>
              <li>Optimization: analyze creative performance and suggest strategies.</li>
              <li>Compliance: align platform activity with Meta policies.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">4. Meta Data Protection & Compliance</h2>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Explicit publishing: we never publish without direct action.</li>
              <li>No selling data: we do not sell, license, or purchase Meta API data.</li>
              <li>No AI training: private data is not used to train generalized models.</li>
              <li>Data integrity: Meta Platform Data is used only for requested services.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">5. How We Share Information</h2>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Service providers: trusted vendors like Google Cloud Platform (GCP).</li>
              <li>Legal authorities: when required by law or to protect rights and safety.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">6. Data Deletion Instructions</h2>
            <p className="mt-3">
              To delete your data or remove ColorTV access:
            </p>
            <ol className="mt-2 list-decimal list-inside space-y-1">
              <li>Disconnect the app in Facebook Settings &gt; Apps and Websites.</li>
              <li>Email support@colortv.com with the subject “Data Deletion Request.”</li>
            </ol>
            <p className="mt-3">
              We acknowledge requests within 2 business days and permanently purge data within
              30 days, including cached Meta API data.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">7. Your Rights & Data Retention</h2>
            <ul className="mt-3 list-disc list-inside space-y-1">
              <li>Access & portability: request a copy of stored data.</li>
              <li>Meta API cache retained for 30 days for platform speed.</li>
              <li>Account deletion purges Meta data within 30 days.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">8. Data Security</h2>
            <p className="mt-3">
              We use industry-standard safeguards, including SSL/TLS encryption in transit and
              encryption at rest on Google Cloud Platform, to protect your business information.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">9. Contact Us</h2>
            <p className="mt-3">
              ContentCreator Ai, LLC<br />
              145 E Columbine Ave<br />
              Santa Ana, CA 92707<br />
              Email:{' '}
              <a
                href="mailto:support@colortv.com"
                className="text-white hover:text-white/80 underline underline-offset-4"
              >
                support@colortv.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
