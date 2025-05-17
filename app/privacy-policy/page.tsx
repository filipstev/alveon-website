import Head from "next/head";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | alveon.ai</title>
        <meta
          name="description"
          content="Privacy Policy for alveon.ai AI automation services."
        />
      </Head>
      <div className="p-6 pt-24 bg-gray-50 w-full">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p>
            <strong>Last Updated:</strong> May 17, 2025
          </p>

          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to alveon.ai ("we," "our," or "us"). We provide AI-powered
            automation services designed to streamline business workflows (the
            "Services"). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your personal information when you visit our
            website alveon.ai (the "Site").
          </p>

          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Personal Data:</strong> Name, email, company name, job
              title, phone number when you sign up or contact us.
            </li>
            <li>
              <strong>Usage Data:</strong> IP address, browser type, OS,
              referring URLs, pages visited, and diagnostic data.
            </li>
            <li>
              <strong>Cookies & Tracking:</strong> We use cookies and similar
              technologies to track activity and store preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We use your data to:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Provide, operate, and maintain our Site and Services.</li>
            <li>
              Communicate with you, respond to inquiries, and send updates.
            </li>
            <li>Improve, personalize, and expand our Site and Services.</li>
            <li>
              Monitor usage and detect technical issues or security breaches.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">
            4. Disclosure of Your Information
          </h2>
          <p>We may share information with:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              <strong>Service Providers:</strong> Vendors who assist with
              hosting, analytics, email delivery, and operations.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law or to
              protect our rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger
              or asset sale.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">5. Security</h2>
          <p>
            We implement reasonable security measures. However, no internet
            transmission is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold">6. Your Choices</h2>
          <p>
            Opt out of marketing emails via "unsubscribe," or disable cookies
            via your browser (which may affect functionality).
          </p>

          <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
          <p>
            Our Site is not directed to individuals under 16; we do not
            knowingly collect data from minors.
          </p>

          <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
          <p>
            We may update this Policy and will post the revised date at the top.
          </p>

          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p>
            Questions? Email us at{" "}
            <a href="mailto:privacy@alveon.ai" className="text-blue-600">
              privacy@alveon.ai
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
