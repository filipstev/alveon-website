/*
  File: pages/terms.tsx
*/
import Head from "next/head";
import React from "react";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | alveon.ai</title>
        <meta
          name="description"
          content="Terms of Service for alveon.ai AI automation services."
        />
      </Head>
      <div className="p-6 pt-24 bg-gray-50 w-full">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p>
            <strong>Effective Date:</strong> May 17, 2025
          </p>

          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using alveon.ai ("Site") and our AI Automation
            services ("Services"), you agree to these Terms. If you do not
            agree, do not use the Site or Services.
          </p>

          <h2 className="text-2xl font-semibold">2. Use of Services</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>You must be 18 or older to use the Services.</li>
            <li>You agree to provide and maintain accurate information.</li>
            <li>
              You may not misuse the Services or interfere with others’ use.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
          <p>
            All content, software, and technology on the Site are our property
            or licensed to us. You may not reproduce or create derivatives
            without consent.
          </p>

          <h2 className="text-2xl font-semibold">4. User Content</h2>
          <p>
            You retain ownership of content you submit. You grant us a
            worldwide, non-exclusive license to use it to provide Services.
          </p>

          <h2 className="text-2xl font-semibold">5. Fees & Payment</h2>
          <p>
            Some features may require payment. Fees are described on the Site
            and may change with notice. You agree to pay all applicable fees.
          </p>

          <h2 className="text-2xl font-semibold">6. Termination</h2>
          <p>
            We may suspend or terminate your access for violations of these
            Terms or at our discretion.
          </p>

          <h2 className="text-2xl font-semibold">
            7. Disclaimer of Warranties
          </h2>
          <p>
            The Services are provided "as is" and "as available" without any
            express or implied warranties.
          </p>

          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p>
            We are not liable for any indirect, incidental, special, or
            consequential damages arising from these Terms or Services.
          </p>

          <h2 className="text-2xl font-semibold">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Serbia, without regard to
            conflict-of-law principles.
          </p>

          <h2 className="text-2xl font-semibold">10. Changes to These Terms</h2>
          <p>
            We may modify these Terms, post updates on the Site, and update the
            Effective Date. Continued use constitutes acceptance.
          </p>

          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p>
            Questions? Email us at{" "}
            <a href="mailto:terms@alveon.ai" className="text-blue-600">
              terms@alveon.ai
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
