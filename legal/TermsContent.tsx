import React from "react";

const TermsContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed text-neutral-300">
      <p className="text-neutral-500">
        <strong>Terms and Conditions</strong><br />
        January, 2026
      </p>

      <p>
        Welcome to <strong>SEQUOIA WORKS</strong>. These Terms and Conditions
        govern your access to and use of our website and services. By accessing
        this website or engaging our services, you agree to be legally bound by
        these Terms. If you do not agree, please do not use our website or
        services.
      </p>

      <section>
        <h4 className="font-bold text-white">1. About Us</h4>
        <p>
          SEQUOIA WORKS is a freelancing platform that provides custom software
          development services including websites, web applications, mobile
          applications, system software, maintenance, and technical consulting.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">2. Eligibility</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>You are at least 18 years old</li>
          <li>You have the legal capacity to enter into a binding agreement</li>
          <li>You are using the services for lawful purposes only</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">3. Services</h4>
        <p>
          We offer customized software development services on a project or
          contract basis.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Website development</li>
          <li>Software and application development</li>
          <li>UI / UX design</li>
          <li>Maintenance and technical support</li>
          <li>Consulting and troubleshooting</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">4. Project Scope</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Project requirements must be clearly provided</li>
          <li>Scope, timeline, and cost are finalized before work begins</li>
          <li>Changes may incur additional charges</li>
          <li>Delays may occur due to missing client inputs</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">5. Payment Terms</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Payment terms are agreed before project start</li>
          <li>Payments must be made on time</li>
          <li>Late payments may suspend services</li>
          <li>Payments are non-refundable once work begins</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">6. Intellectual Property</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Ownership transfers after full payment</li>
          <li>Rights remain with us until payment completion</li>
          <li>Third-party tools follow their licenses</li>
          <li>Projects may be showcased unless confidentiality is requested</li>
        </ul>
      </section>

      <section>
        <h4 className="font-bold text-white">7. Limitation of Liability</h4>
        <p>
          We are not liable for indirect damages, data loss, or third-party
          service failures to the maximum extent permitted by law.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">8. Termination</h4>
        <p>
          We reserve the right to terminate services due to violations, payment
          failures, or unlawful behavior.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">9. Governing Law</h4>
        <p>
          These Terms are governed by the laws of India, and disputes fall under
          Indian jurisdiction.
        </p>
      </section>

      <section>
        <h4 className="font-bold text-white">10. Contact</h4>
        <p>📧 sequoiaworks14@gmail.com</p>
      </section>
    </div>
  );
};

export default TermsContent;
