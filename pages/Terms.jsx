import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Terms = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen py-24">
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for using Humanity Calls NGO website."
      />
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Home Button - Top */}
        <Link
          to="/"
          className="inline-block mb-8 px-6 py-2 bg-[#B71C1C] text-white rounded-lg hover:bg-red-800 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-red max-w-none">
          <p className="text-sm text-gray-600 mb-8 lowercase">
            last updated: 9th jan 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="lowercase">
            welcome to humanity calls ("company", "we", "our", "us")!
          </p>
          <p className="lowercase">
            these terms of service ("terms", "terms of service") govern your use
            of our website located at https://www.humanitycalls.org/ (together
            or individually "service") operated by humanity calls.
          </p>
          <p className="lowercase">
            our privacy policy also governs your use of our service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </p>
          <p className="lowercase">
            your agreement with us includes these terms and our privacy policy
            ("agreements"). you acknowledge that you have read and understood
            agreements, and agree to be bound of them.
          </p>
          <p className="lowercase">
            if you do not agree with (or cannot comply with) agreements, then
            you may not use the service, but please let us know by emailing at
            humanitycalls20@gmail.com so we can try to find a solution. these
            terms apply to all visitors, users and others who wish to access or
            use service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Communications</h2>
          <p className="lowercase">
            by using our service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. however, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at humanitycalls20@gmail.com.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. Contests, Sweepstakes and Promotions
          </h2>
          <p className="lowercase">
            any contests, sweepstakes or other promotions (collectively,
            "promotions") made available through service may be governed by
            rules that are separate from these terms of service. if you
            participate in any promotions, please review the applicable rules as
            well as our privacy policy. if the rules for a promotion conflict
            with these terms of service, promotion rules will apply.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Content</h2>
          <p className="lowercase">
            our service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material ("content"). you are responsible for content that you post
            on or through service, including its legality, reliability, and
            appropriateness.
          </p>
          <p className="lowercase">
            by posting content on or through service, you represent and warrant
            that: (i) content is yours (you own it) and/or you have the right to
            use it and the right to grant us the rights and license as provided
            in these terms, and (ii) that the posting of your content on or
            through service does not violate the privacy rights, publicity
            rights, copyrights, contract rights or any other rights of any
            person or entity. we reserve the right to terminate the account of
            anyone found to be infringing on a copyright.
          </p>
          <p className="lowercase">
            you retain any and all of your rights to any content you submit,
            post or display on or through service and you are responsible for
            protecting those rights. we take no responsibility and assume no
            liability for content you or any third party posts on or through
            service. however, by posting content using service you grant us the
            right and license to use, modify, publicly perform, publicly
            display, reproduce, and distribute such content on and through
            service. you agree that this license includes the right for us to
            make your content available to other users of service, who may also
            use your content subject to these terms.
          </p>
          <p className="lowercase">
            humanity calls has the right but not the obligation to monitor and
            edit all content provided by users.
          </p>
          <p className="lowercase">
            in addition, content found on or through this service are the
            property of humanity calls or used with permission. you may not
            distribute, modify, transmit, reuse, download, repost, copy, or use
            said content, whether in whole or in part, for commercial purposes
            or for personal gain, without express advance written permission
            from us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Prohibited Uses</h2>
          <p className="lowercase">
            you may use service only for lawful purposes and in accordance with
            terms. you agree not to use service:
          </p>
          <ul className="ml-6 lowercase">
            <li>
              in any way that violates any applicable national or international
              law or regulation.
            </li>
            <li>
              for the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content or otherwise.
            </li>
            <li>
              to transmit, or procure the sending of, any advertising or
              promotional material, including any "junk mail", "chain letter,"
              "spam," or any other similar solicitation.
            </li>
            <li>
              to impersonate or attempt to impersonate company, a company
              employee, another user, or any other person or entity.
            </li>
            <li>
              in any way that infringes upon the rights of others, or in any way
              is illegal, threatening, fraudulent, or harmful, or in connection
              with any unlawful, illegal, fraudulent, or harmful purpose or
              activity.
            </li>
            <li>
              to engage in any other conduct that restricts or inhibits anyone's
              use or enjoyment of service, or which, as determined by us, may
              harm or offend company or users of service or expose them to
              liability.
            </li>
          </ul>
          <p className="mt-4 lowercase">additionally, you agree not to:</p>
          <ul className="ml-6 lowercase">
            <li>
              use service in any manner that could disable, overburden, damage,
              or impair service or interfere with any other party's use of
              service, including their ability to engage in real time activities
              through service.
            </li>
            <li>
              use any robot, spider, or other automatic device, process, or
              means to access service for any purpose, including monitoring or
              copying any of the material on service.
            </li>
            <li>
              use any manual process to monitor or copy any of the material on
              service or for any other unauthorized purpose without our prior
              written consent.
            </li>
            <li>
              use any device, software, or routine that interferes with the
              proper working of service.
            </li>
            <li>
              introduce any viruses, trojan horses, worms, logic bombs, or other
              material which is malicious or technologically harmful.
            </li>
            <li>
              attempt to gain unauthorized access to, interfere with, damage, or
              disrupt any parts of service, the server on which service is
              stored, or any server, computer, or database connected to service.
            </li>
            <li>
              attack service via a denial-of-service attack or a distributed
              denial-of-service attack.
            </li>
            <li>take any action that may damage or falsify company rating.</li>
            <li>
              otherwise attempt to interfere with the proper working of service.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Analytics</h2>
          <p className="lowercase">
            we may use third-party service providers to monitor and analyze the
            use of our service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. No Use By Minors</h2>
          <p className="lowercase">
            service is intended only for access and use by individuals at least
            eighteen (18) years old. by accessing or using service, you warrant
            and represent that you are at least eighteen (18) years of age and
            with the full authority, right, and capacity to enter into this
            agreement and abide by all of the terms and conditions of terms. if
            you are not at least eighteen (18) years old, you are prohibited
            from both the access and usage of service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Accounts</h2>
          <p className="lowercase">
            when you create an account with us, you guarantee that you are above
            the age of 18, and that the information you provide us is accurate,
            complete, and current at all times. inaccurate, incomplete, or
            obsolete information may result in the immediate termination of your
            account on service.
          </p>
          <p className="lowercase">
            you are responsible for maintaining the confidentiality of your
            account and password, including but not limited to the restriction
            of access to your computer and/or account. you agree to accept
            responsibility for any and all activities or actions that occur
            under your account and/or password, whether your password is with
            our service or a third-party service. you must notify us immediately
            upon becoming aware of any breach of security or unauthorized use of
            your account.
          </p>
          <p className="lowercase">
            you may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you,
            without appropriate authorization. you may not use as a username any
            name that is offensive, vulgar or obscene.
          </p>
          <p className="lowercase">
            we reserve the right to refuse service, terminate accounts, remove
            or edit content, or cancel orders in our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            9. Intellectual Property
          </h2>
          <p className="lowercase">
            service and its original content (excluding content provided by
            users), features and functionality are and will remain the exclusive
            property of humanity calls and its licensors. service is protected
            by copyright, trademark, and other laws of and foreign countries.
            our trademarks may not be used in connection with any product or
            service without the prior written consent of humanity calls.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Copyright Policy</h2>
          <p className="lowercase">
            we respect the intellectual property rights of others. it is our
            policy to respond to any claim that content posted on service
            infringes on the copyright or other intellectual property rights
            ("infringement") of any person or entity.
          </p>
          <p className="lowercase">
            if you are a copyright owner, or authorized on behalf of one, and
            you believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement, please submit your claim via
            email to humanitycalls20@gmail.com, with the subject line:
            "copyright infringement" and include in your claim a detailed
            description of the alleged infringement as detailed below, under
            "dmca notice and procedure for copyright infringement claims"
          </p>
          <p className="lowercase">
            you may be held accountable for damages (including costs and
            attorneys' fees) for misrepresentation or bad-faith claims on the
            infringement of any content found on and/or through service on your
            copyright.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            11. DMCA Notice and Procedure for Copyright Infringement Claims
          </h2>
          <p className="lowercase">
            you may submit a notification pursuant to the digital millennium
            copyright act (dmca) by providing our copyright agent with the
            following information in writing (see 17 u.s.c 512(c)(3) for further
            detail):
          </p>
          <ul className="ml-6 lowercase">
            <li>
              an electronic or physical signature of the person authorized to
              act on behalf of the owner of the copyright's interest;
            </li>
            <li>
              a description of the copyrighted work that you claim has been
              infringed, including the url (i.e., web page address) of the
              location where the copyrighted work exists or a copy of the
              copyrighted work;
            </li>
            <li>
              identification of the url or other specific location on service
              where the material that you claim is infringing is located;
            </li>
            <li>your address, telephone number, and email address;</li>
            <li>
              a statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law;
            </li>
            <li>
              a statement by you, made under penalty of perjury, that the above
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf.
            </li>
          </ul>
          <p className="mt-4 lowercase">
            you can contact our copyright agent via email at
            humanitycalls20@gmail.com.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            12. Error Reporting and Feedback
          </h2>
          <p className="lowercase">
            you may provide us either directly at humanitycalls20@gmail.com or
            via third party sites and tools with information and feedback
            concerning errors, suggestions for improvements, ideas, problems,
            complaints, and other matters related to our service ("feedback").
            you acknowledge and agree that: (i) you shall not retain, acquire or
            assert any intellectual property right or other right, title or
            interest in or to the feedback; (ii) company may have development
            ideas similar to the feedback; (iii) feedback does not contain
            confidential information or proprietary information from you or any
            third party; and (iv) company is not under any obligation of
            confidentiality with respect to the feedback. in the event the
            transfer of the ownership to the feedback is not possible due to
            applicable mandatory laws, you grant company and its affiliates an
            exclusive, transferable, irrevocable, free-of-charge,
            sub-licensable, unlimited and perpetual right to use (including
            copy, modify, create derivative works, publish, distribute and
            commercialize) feedback in any manner and for any purpose.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            13. Links To Other Web Sites
          </h2>
          <p className="lowercase">
            our service may contain links to third party web sites or services
            that are not owned or controlled by humanity calls.
          </p>
          <p className="lowercase">
            humanity calls has no control over, and assumes no responsibility
            for the content, privacy policies, or practices of any third party
            web sites or services. we do not warrant the offerings of any of
            these entities/individuals or their websites.
          </p>
          <p className="lowercase">
            you acknowledge and agree that company shall not be responsible or
            liable, directly or indirectly, for any damage or loss caused or
            alleged to be caused by or in connection with use of or reliance on
            any such content, goods or services available on or through any such
            third party web sites or services.
          </p>
          <p className="lowercase">
            we strongly advise you to read the terms of service and privacy
            policies of any third party web sites or services that you visit.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            14. Disclaimer Of Warranty
          </h2>
          <p className="lowercase">
            these services are provided by company on an "as is" and "as
            available" basis. company makes no representations or warranties of
            any kind, express or implied, as to the operation of their services,
            or the information, content or materials included therein. you
            expressly agree that your use of these services, their content, and
            any services or items obtained from us is at your sole risk.
          </p>
          <p className="lowercase">
            neither company nor any person associated with company makes any
            warranty or representation with respect to the completeness,
            security, reliability, quality, accuracy, or availability of the
            services. without limiting the foregoing, neither company nor anyone
            associated with company represents or warrants that the services,
            their content, or any services or items obtained through the
            services will be accurate, reliable, error-free, or uninterrupted,
            that defects will be corrected, that the services or the server that
            makes it available are free of viruses or other harmful components
            or that the services or any services or items obtained through the
            services will otherwise meet your needs or expectations.
          </p>

          <p className="lowercase">
            company hereby disclaims all warranties of any kind, whether express
            or implied, statutory, or otherwise, including but not limited to
            any warranties of merchantability, non-infringement, and fitness for
            particular purpose.
          </p>
          <p className="lowercase">
            the foregoing does not affect any warranties which cannot be
            excluded or limited under applicable law.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            15. Limitation Of Liability
          </h2>
          <p className="lowercase">
            except as prohibited by law, you will hold us and our officers,
            directors, employees, and agents harmless for any indirect,
            punitive, special, incidental, or consequential damage, however it
            arises (including attorneys' fees and all related costs and expenses
            of litigation and arbitration, or at trial or on appeal, if any,
            whether or not litigation or arbitration is instituted), whether in
            an action of contract, negligence, or other tortious action, or
            arising out of or in connection with this agreement, including
            without limitation any claim for personal injury or property damage,
            arising from this agreement and any violation by you of any federal,
            state, or local laws, statutes, rules, or regulations, even if
            company has been previously advised of the possibility of such
            damage. except as prohibited by law, if there is liability found on
            the part of company, it will be limited to the amount paid for the
            products and/or services, and under no circumstances will there be
            consequential or punitive damages. some states do not allow the
            exclusion or limitation of punitive, incidental or consequential
            damages, so the prior limitation or exclusion may not apply to you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">16. Termination</h2>
          <p className="lowercase">
            we may terminate or suspend your account and bar access to service
            immediately, without prior notice or liability, under our sole
            discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of terms.
          </p>
          <p className="lowercase">
            if you wish to terminate your account, you may simply discontinue
            using service.
          </p>
          <p className="lowercase">
            all provisions of terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">17. Governing Law</h2>
          <p className="lowercase">
            these terms shall be governed and construed in accordance with the
            laws of india, which governing law applies to agreement without
            regard to its conflict of law provisions.
          </p>
          <p className="lowercase">
            our failure to enforce any right or provision of these terms will
            not be considered a waiver of those rights. if any provision of
            these terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these terms will remain in effect. these
            terms constitute the entire agreement between us regarding our
            service and supersede and replace any prior agreements we might have
            had between us regarding service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            18. Changes To Service
          </h2>
          <p className="lowercase">
            we reserve the right to withdraw or amend our service, and any
            service or material we provide via service, in our sole discretion
            without notice. we will not be liable if for any reason all or any
            part of service is unavailable at any time or for any period. from
            time to time, we may restrict access to some parts of service, or
            the entire service, to users, including registered users.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            19. Amendments To Terms
          </h2>
          <p className="lowercase">
            we may amend terms at any time by posting the amended terms on this
            site. it is your responsibility to review these terms periodically.
          </p>
          <p className="lowercase">
            your continued use of the platform following the posting of revised
            terms means that you accept and agree to the changes. you are
            expected to check this page frequently so you are aware of any
            changes, as they are binding on you.
          </p>
          <p className="lowercase">
            by continuing to access or use our service after any revisions
            become effective, you agree to be bound by the revised terms. if you
            do not agree to the new terms, you are no longer authorized to use
            service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            20. Waiver And Severability
          </h2>
          <p className="lowercase">
            no waiver by company of any term or condition set forth in terms
            shall be deemed a further or continuing waiver of such term or
            condition or a waiver of any other term or condition, and any
            failure of company to assert a right or provision under terms shall
            not constitute a waiver of such right or provision.
          </p>
          <p className="lowercase">
            if any provision of terms is held by a court or other tribunal of
            competent jurisdiction to be invalid, illegal or unenforceable for
            any reason, such provision shall be eliminated or limited to the
            minimum extent such that the remaining provisions of terms will
            continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">21. Acknowledgement</h2>
          <p className="lowercase">
            by using service or other services provided by us, you acknowledge
            that you have read these terms of service and agree to be bound by
            them.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">22. Contact Us</h2>
          <p className="lowercase">
            please send your feedback, comments, requests for technical support
            by email: humanitycalls20@gmail.com
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

export default Terms;
