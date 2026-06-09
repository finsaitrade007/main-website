import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  P,
  UL,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Finsai Trade Privacy Policy describing how we collect, use, store and share your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <LegalSection title="1. Introduction">
        <P>
          FINSAI TRADE LTD. (hereafter &ldquo;the Company&rdquo;,
          &ldquo;We&rdquo;, &ldquo;Us&rdquo;) take your privacy very
          seriously. We understand the importance of maintaining the
          confidentiality and privacy of your personal data and information.
          By entrusting us with your personal data and information, we would
          like to assure you of our commitment to keep such information
          private. We have taken measurable steps to protect the
          confidentiality, security, and integrity of your personal data
          information.
        </P>
        <P>
          Please read this privacy policy carefully as it contains important
          information on who we are and how and why we collect, store, use
          and share your personal information. By providing us with your
          personal information and using our services, you are accepting and
          consenting to the practices described in this policy. It also
          explains your rights in relation to your personal information and
          how to contact us or the supervisory authority in the event you
          have a complaint.
        </P>
        <P>
          We collect, use and process certain personal information about
          you. When we do so we are subject to the Protection of Personal
          Information Act (hereafter &ldquo;POPIA&rdquo;) and we are
          responsible as &lsquo;Controller&rsquo; of that personal
          information for the purposes of the Regulation as well as
          Mauritius Law providing for the protection of natural persons
          with regard to the processing of personal data and for the free
          movement of such data.
        </P>
      </LegalSection>

      <LegalSection title="2. Definitions">
        <P>
          <strong>Data Protection Officer (&ldquo;DPO&rdquo;)</strong> &mdash;
          contact via the Company.
        </P>
        <P>
          <strong>Personal information</strong> &mdash; any information
          relating to an identified or identifiable individual.
        </P>
        <P>
          <strong>Special categories of personal information</strong> &mdash;
          personal information revealing racial or ethnic origin, political
          opinions, religious beliefs, philosophical beliefs, or trade union
          membership; genetic and biometric data; data concerning health,
          sex life or sexual orientation.
        </P>
      </LegalSection>

      <LegalSection title="3. Information we collect about you">
        <P>
          <strong>Information you give us:</strong> this is information about
          you that you give us by filling our client forms/agreements, or by
          corresponding with us by phone, e-mail, in person or otherwise. It
          includes information you provide when you choose to use our
          services and/or become an affiliate to our company, participate in
          any company event and when you send any information to us under
          any capacity. The information you give us may include your name,
          address, e-mail address and phone number, financial information
          etc. When you visit our website(s) we collect information about
          your visit, including the full Uniform Resource Locators (URL).
        </P>
        <P>
          <strong>Information we collect/receive from other sources:</strong>{" "}
          this is information we receive about you if you use any of the
          websites we operate or the services we provide and/or from other
          affiliates and/or professionals. We are working closely with third
          parties (including, for example, business partners, brokers,
          payment service providers, analytics providers, search information
          providers, credit reference agencies). We will notify you when we
          receive information about you from them and the purposes for
          which we intend to use that information.
        </P>
      </LegalSection>

      <LegalSection title="4. How we use your data">
        <P>
          To carry out our obligations arising from any agreements and/or
          contracts between you and us and to provide you with the
          information, products, and services that you request from us.
        </P>
        <P>
          For our legitimate interests or those of a third party, for
          example, to prevent and detect fraud/unauthorized access to our
          systems that can be damaging to us and you and/or to be as
          efficient as we can so we can deliver the best service to you at
          the best price and/or conducting credit reference checks via
          external credit reference agencies to ensure our customers are
          likely to be able to pay for our products and services.
        </P>
        <P>
          To comply with our legal and regulatory obligations, for example,
          conducting checks to identify our customers and verify their
          identity as required by the Convention for the Suppression of the
          Financing of Terrorism Act 1996 and supplemented by the Prevention
          of Organized Crime Act (no. 121 of 1998). The FIC Amendment Act
          (No. 11 of 2008) was issued in August 2008 which took effect in
          2010 and clarified the roles and responsibilities of supervisory
          bodies. The Money Laundering and Terrorist Financing Control
          regulations were published in 2002 and have since been amended on
          various occasions; they create a comprehensive legal framework for
          the combating of money laundering and terrorist financing.
        </P>
        <P>
          To provide you with information about other services we offer that
          are similar to those that you have already used or enquired about.
        </P>
        <P>To notify you about changes to our services.</P>
        <P>
          Client feedback is pivotal to our commitment to professional
          excellence. Therefore, we may request you to provide your feedback
          on any of our services or products you have received through
          reputable online customer review websites. Your feedback may be
          shared for promotional and marketing purposes.
        </P>
      </LegalSection>

      <LegalSection title="5. Disclosure of your information">
        <P>
          You agree that we have the right to share your information with:
        </P>
        <UL
          items={[
            "Any member of our group and its subsidiaries.",
            "Selected third parties we use to help deliver our products and/or services to you including: business partners, brokers, vendors, insurers, payment service providers for the performance of any contract we enter into with them or you.",
            "Analytics and search engine providers that assist us in the improvement and optimization of our site, credit reference agencies and/or banking and financial institutions and/or auditors for, among others, the purpose of assessing your credit score (where this is a condition of us entering into a contract with you).",
            "Any Mauritius law enforcement agencies and regulatory bodies for the purposes of complying with local and international regulations against money-laundering, fraud and the general prevention of crime and illegal activities.",
          ]}
        />
        <P>We will disclose your personal information to third parties:</P>
        <UL
          items={[
            "In the event that this is necessary for the delivery of our products and/or services to you;",
            "If Finsai Trade Ltd or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets;",
            "If we are under a duty to disclose or share your personal data to comply with any legal and/or regulatory obligation, or to enforce or apply our terms of use and other agreements, or to protect the rights, property, or safety of Finsai Trade Ltd, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection, anti-money laundering and credit risk reduction.",
          ]}
        />
        <P>
          We only allow the third parties we work with to process your
          personal information if we are satisfied they take appropriate
          technical and organizational measures to protect your personal
          information.
        </P>
        <P>
          We also impose contractual obligations on our selected third
          parties to ensure they can only use your personal information to
          provide services to us and to you.
        </P>
      </LegalSection>

      <LegalSection title="6. Where we store your personal data">
        <P>
          All information you provide to us is stored on secure servers.
          Where we may have given you (or where you have chosen) a password
          that enables you to access certain parts of our site and/or use
          any other of our services, you are responsible for keeping this
          password confidential. We ask you not to share your password with
          anyone.
        </P>
        <P>
          Unfortunately, the transmission of information via the internet is
          not completely secure. Although we will do our best to protect
          your personal data, we cannot guarantee the security of your data
          transmitted to us; any transmission is at your own risk. Once we
          have received your information, we will use strict procedures and
          security features to try to prevent unauthorized access.
        </P>
      </LegalSection>

      <LegalSection title="7. Duration that your personal information will be kept">
        <P>
          We will keep your personal information while you have an account
          with us or while we are providing services and/or products to you
          or while we are in a contractual relationship with you. Thereafter,
          we will keep your personal information for as long as is
          necessary:
        </P>
        <UL
          items={[
            "to respond to any questions, complaints or claims made by you or on your behalf;",
            "to show that we treated you fairly;",
            "to keep records required by law, regulations, and regulatory authorities.",
          ]}
        />
        <P>
          We will not retain your personal information for longer than
          necessary for the purposes set out in this policy. Different
          retention periods apply to different types of personal
          information. When it is no longer necessary to retain your
          personal information, we will delete or anonymize it.
        </P>
      </LegalSection>

      <LegalSection title="8. Your rights">
        <P>
          You have the following rights, which you can exercise:
        </P>
        <UL
          items={[
            "Access — the right to be provided with a copy of your personal information.",
            "Rectification — the right to require us to correct any mistakes in your personal information.",
            "To be forgotten — the right to require us to delete your personal information in certain situations.",
            "Restriction of processing — the right to require us to restrict processing of your personal information in certain circumstances, for example, if you contest the accuracy of the data.",
            "Data portability — the right to receive the personal information you provided to us, in a structured, commonly used and machine-readable format and/or transmit that data to a third party in certain situations.",
            "To object — the right to object: at any time to your personal information being processed and in certain other situations to our continued processing of your personal information, for example, processing carried out for the purpose of our legitimate interests.",
            "Not to be subject to automated individual decision-making — the right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you.",
          ]}
        />
        <P>
          Moreover, if the data subject has provided their consent to any of
          the processing of their personal data, they have the right to
          withdraw that consent at any time, where relevant. They must
          contact the DPO if they wish to do so.
        </P>
        <P>
          We aim to comply with requests of data subjects as quickly as
          possible and will ensure that we comply with legislation unless
          exceptions apply. In such cases, the reasons for any delay will be
          explained in writing to the data subject making the request.
        </P>
        <P>
          In processing a request, the identity of the data subject needs to
          be verified before information will be released. No personal data
          will be disclosed to a third party without the written consent of
          the data subject.
        </P>
        <P>We reserve the right to refuse repeated/vexatious requests.</P>
      </LegalSection>

      <LegalSection title="9. Keeping your personal information secure">
        <P>
          We have appropriate technical and organizational security measures
          to prevent personal information from being accidentally lost,
          used, or accessed unlawfully. We limit access to your personal
          information to those who have a genuine business need to access
          it. Those processing your information will do so only in an
          authorized manner and are subject to a duty of confidentiality.
        </P>
        <P>
          We also have procedures in place to deal with any suspected data
          security breaches. We will notify you and the relevant supervisory
          authority of a suspected data security breach when we are legally
          required to do so.
        </P>
      </LegalSection>

      <LegalSection title="10. How to complain">
        <P>
          We hope that we and our DPO can resolve any concern or complaint
          you may have about our use of your information.
        </P>
        <P>
          The POPIA also gives you the right to lodge a complaint with the
          Commissioner. The supervisory authority in Mauritius is the Data
          Protection Office.
        </P>
      </LegalSection>

      <LegalSection title="11. Changes to this privacy policy">
        <P>
          This privacy policy is subject to change without notice. For this
          reason, you are advised to look for updates from time to time.
        </P>
        <P>
          We are constantly reviewing how we process and protect data.
          Therefore, changes to our privacy policy may occur at any time. We
          will endeavor to publish any changes. You are advised to check our
          website{" "}
          <a
            href="https://www.finsaitrade.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
            www.finsaitrade.com
          </a>{" "}
          regularly for any amendments.
        </P>
      </LegalSection>

      <LegalSection title="12. How to contact us">
        <P>
          Please contact our DPO by post, email, or telephone if you have
          any questions about this privacy policy or the information we hold
          about you.
        </P>
        <P>
          <strong>Data Protection Officer</strong>
          <br />
          FINSAI TRADE LTD
          <br />
          3 Emerald Park, Trianon, Quatre Bornes 72257, MAURITIUS
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
