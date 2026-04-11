import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('/policy.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="text-3xl md:text-5xl text-white uppercase z-10">
          Privacy Policy
        </h1>
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 space-y-8 ">
        
        <section>
          <h2 className="text-3xl  mb-2">1. Introduction</h2>
          <p>
            Imara Kileleni Safaris respects your privacy and is committed to
            protecting the personal information that you share with us. This
            Privacy Policy explains how we collect, use, store, and safeguard
            your information when you book a safari, contact us, or visit our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Identification Information:</strong> name, email
              address, phone number, nationality, passport details (for booking
              and permit purposes).
            </li>
            <li>
              <strong>Booking & Payment Information:</strong> billing address,
              payment details, and transaction history.
            </li>
            <li>
              <strong>Travel Preferences:</strong> accommodation type, dietary
              restrictions, special requests, or travel interests.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              device, and usage data collected automatically when using our
              website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process bookings, payments, and reservations.</li>
            <li>Communicate itinerary updates, confirmations, and changes.</li>
            <li>Improve our services, website, and customer experience.</li>
            <li>Comply with legal obligations and tourism regulations.</li>
            <li>Send marketing or promotional content (only with your consent).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">4. Information Sharing</h2>
          <p className="mb-2">
            We never sell or rent your personal information.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Partner lodges, airlines, or tour operators for bookings.</li>
            <li>Payment providers (e.g., CRDB Bank) for secure transactions.</li>
            <li>
              Government authorities (e.g., Tanzania National Parks, immigration)
              when legally required.
            </li>
          </ul>
          <p className="mt-2">
            All partners are required to respect data confidentiality and use it
            only for the agreed purpose.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">5. Data Security</h2>
          <p>
            We take appropriate measures to protect your data against
            unauthorized access, loss, or misuse. Our website uses SSL
            encryption, and all payments are processed through secure,
            PCI-compliant platforms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">6. Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access, correction, or deletion of your personal data.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Ask how your data is processed and stored.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:info@imarakilelenisafaris.com"
              className="text-primary font-medium"
            >
              info@imarakilelenisafaris.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">7. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary to fulfill booking
            requirements, comply with legal obligations, and ensure smooth
            communication for future safaris.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">8. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience and
            analyze site traffic. You may disable cookies in your browser
            settings, but some features may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">9. Third-Party Links</h2>
          <p>
            Our website or emails may contain links to third-party sites. We are
            not responsible for their privacy practices or content.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  mb-2">10. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date.
          </p>
        </section>

      </div>
    </>
  );
};

export default PrivacyPolicy;
