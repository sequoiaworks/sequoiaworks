import React from "react";

const PrivacyContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed text-neutral-300">
      <p className="text-neutral-500">
        <strong>Privacy Policy</strong><br />
        January, 2026
      </p>

      <p>
        At <strong>SEQUOIA WORKS</strong>, we are committed to protecting your
        privacy. This policy explains how we collect, use, store, and protect
        your personal data.
      </p>

      <section>
        <h4 className="font-bold text-white">1. Information We Collect</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal details (name, email, phone)</li>
          <li>Project and technical information</li>
          <li>Usage and device data</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">2. How We Use Information</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide and manage services</li>
          <li>Process payments</li>
          <li>Improve website performance</li>
          <li>Ensure security and legal compliance</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">3. Data Sharing</h4>
        <p>
          We do not sell your data. Information is shared only with trusted
          service providers or legal authorities when required.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">4. Data Security</h4>
        <p>
          We implement reasonable safeguards, but no online system is 100%
          secure.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">5. Your Rights</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Access your data</li>
          <li>Request corrections or deletion</li>
          <li>Withdraw consent</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">6. Cookies</h4>
        <p>
          Cookies improve performance and analytics. You can disable them in
          browser settings.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">7. Contact</h4>
        <p>📧 sequoiaworks14@gmail.com</p>
      </section>
    </div>
  );
};

export default PrivacyContent;
