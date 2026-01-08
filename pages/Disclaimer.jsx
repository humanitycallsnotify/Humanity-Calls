import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Disclaimer = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <SEO
        title="Disclaimer"
        description="Disclaimer for Humanity Calls NGO."
      />
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Home Button - Top */}
        <Link
          to="/"
          className="inline-block mb-8 px-6 py-2 bg-[#B71C1C] text-white rounded-lg hover:bg-red-800 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <div className="prose prose-red max-w-none">
          <p className="text-sm text-gray-600 mb-8">
            <strong>Last updated:</strong> 9th Jan 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            General Information Disclaimer
          </h2>
          <p>
            The information provided by Humanity Calls ("Company", "we", "our",
            "us") on https://www.humanitycalls.org/ (the "Site") is for general
            informational purposes only. All information on the Site is provided
            in good faith, however we make no representation or warranty of any
            kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any
            information on the Site.
          </p>
          <p>
            under no circumstance shall we have any liability to you for any
            loss or damage of any kind incurred as a result of the use of the
            site or reliance on any information provided on the site. your use
            of the site and your reliance on any information on the site is
            solely at your own risk.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            External Links Disclaimer
          </h2>
          <p>
            The Site may contain (or you may be sent through the Site) links to
            other websites or content belonging to or originating from third
            parties or links to websites and features. Such external links are
            not investigated, monitored, or checked for accuracy, adequacy,
            validity, reliability, availability or completeness by us.
          </p>
          <p>
            we do not warrant, endorse, guarantee, or assume responsibility for
            the accuracy or reliability of any information offered by
            third-party websites linked through the site or any website or
            feature linked in any banner or other advertising. we will not be a
            party to or in any way be responsible for monitoring any transaction
            between you and third-party providers of products or services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Professional Disclaimer
          </h2>
          <p>
            The Site can not and does not contain medical advice. The
            information is provided for general informational and educational
            purposes only and is not a substitute for professional medical
            advice. Accordingly, before taking any actions based upon such
            information, we encourage you to consult with the appropriate
            professionals. We do not provide any kind of medical advice.
          </p>
          <p>
            Content published on https://www.humanitycalls.org/ is intended to
            be used and must be used for informational purposes only. It is very
            important to do your own analysis before making any decision based
            on your own personal circumstances. You should take independent
            medical advice from a professional or independently research and
            verify any information that you find on our Website and wish to rely
            upon.
          </p>
          <p>
            the use or reliance of any information contained on this site is
            solely at your own risk.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Affiliates Disclaimer
          </h2>
          <p>
            The Site may contain links to affiliate websites, and we may receive
            an affiliate commission for any purchases or actions made by you on
            the affiliate websites using such links.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Testimonials Disclaimer
          </h2>
          <p>
            The Site may contain testimonials by users of our products and/or
            services. These testimonials reflect the real-life experiences and
            opinions of such users. However, the experiences are personal to
            those particular users, and may not necessarily be representative of
            all users of our products and/or services. We do not claim, and you
            should not assume that all users will have the same experiences.
          </p>
          <p className="font-semibold">YOUR INDIVIDUAL RESULTS MAY VARY.</p>
          <p>
            The testimonials on the Site are submitted in various forms such as
            text, audio and/or video, and are reviewed by us before being
            posted. They appear on the Site verbatim as given by the users,
            except for the correction of grammar or typing errors. Some
            testimonials may have been shortened for the sake of brevity, where
            the full testimonial contained extraneous information not relevant
            to the general public.
          </p>
          <p>
            The views and opinions contained in the testimonials belong solely
            to the individual user and do not reflect our views and opinions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Errors and Omissions Disclaimer
          </h2>
          <p>
            While we have made every attempt to ensure that the information
            contained in this site has been obtained from reliable sources,
            Humanity Calls is not responsible for any errors or omissions or for
            the results obtained from the use of this information. All
            information in this site is provided "as is", with no guarantee of
            completeness, accuracy, timeliness or of the results obtained from
            the use of this information, and without warranty of any kind,
            express or implied, including, but not limited to warranties of
            performance, merchantability, and fitness for a particular purpose.
          </p>
          <p>
            In no event will Humanity Calls, its related partnerships or
            corporations, or the partners, agents or employees thereof be liable
            to you or anyone else for any decision made or action taken in
            reliance on the information in this Site or for any consequential,
            special or similar damages, even if advised of the possibility of
            such damages.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Guest Contributors Disclaimer
          </h2>
          <p>
            This Site may include content from guest contributors and any views
            or opinions expressed in such posts are personal and do not
            represent those of Humanity Calls or any of its staff or affiliates
            unless explicitly stated.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Logos and Trademarks Disclaimer
          </h2>
          <p>
            All logos and trademarks of third parties referenced on
            https://www.humanitycalls.org/ are the trademarks and logos of their
            respective owners. Any inclusion of such trademarks or logos does
            not imply or constitute any approval, endorsement or sponsorship of
            Humanity Calls by such owners.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            Should you have any feedback, comments, requests for technical
            support or other inquiries, please contact us by email:{" "}
            <strong>humanitycalls20@gmail.com</strong>
          </p>
        </div>

        {/* Back to Home Button - Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-[#B71C1C] text-white rounded-lg hover:bg-red-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
