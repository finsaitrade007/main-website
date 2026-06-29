import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  OL,
  P,
  UL,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Complaints Management",
  description:
    "Finsai Trade Complaints Management Framework: how to submit a complaint, internal review, escalation timelines and reporting to authorities.",
};

export default function ComplaintsManagementPage() {
  return (
    <LegalLayout title="Complaints Management">
      <LegalSection title="1. Introduction">
        <P>
          Finsai Trade (Mauritius) Ltd (trading as FINSAI TRADE LTD) — a
          Financial Services Company authorized and regulated by the Financial
          Services Commission Mauritius with license number GB25204899 and
          company registration number C228371 —
          has implemented this Complaints Management Framework to devise
          and implement a complaint handling process.
        </P>
        <P>
          The Complaints Management Framework is a guiding principle on the
          handling, processing, and escalation of complaints to ensure fair
          outcomes, manage business risk and conform to regulatory
          obligations. The process seeks to align with the concept of
          treating customers fairly in support of the Financial Sector
          Conduct Authorities mandate.
        </P>
      </LegalSection>

      <LegalSection title="2. Definitions">
        <P>
          <strong>Client query</strong>{" "}
          means a request to the provider or{" "}
          the provider&apos;s service supplier by or on behalf of a client,
          for information regarding the provider&apos;s financial products,
          financial services or related processes, or to carry out a
          transaction or action in relation to any such product or service.
        </P>
        <P>
          <strong>Complainant</strong>{" "}
          means a person who submits a{" "}
          complaint and includes a client, a person nominated as the person
          in respect of whom a product supplier should meet financial
          product benefits or that person&apos;s successor in title, a
          person whose life is insured under a financial product that is an
          insurance policy, a person that pays a premium or an investment
          amount in respect of a financial product, a member, or a person
          whose dissatisfaction relates to the approach, solicitation,
          marketing or advertising material or an advertisement in respect
          of a financial product, financial service or related service of
          the provider.
        </P>
        <P>
          <strong>Complaint</strong> {" "} means an expression of dissatisfaction
          by a person to a provider or, to the knowledge of the provider, to
          the provider&apos;s service supplier relating to a financial
          product or financial service provided or offered by that provider
          which indicates or alleges that the provider or its service
          supplier has contravened or failed to comply with an agreement, a
          law, a rule, or a code of conduct; that the provider or its
          service supplier&apos;s maladministration or wilful or negligent
          action or failure to act has caused the person harm, prejudice,
          distress or substantial inconvenience; or that the provider or
          its service supplier has treated the person unfairly.
        </P>
        <P>
          <strong>Compensation payment</strong> {" "} means a payment, whether in
          monetary form or in the form of a benefit or service, by or on
          behalf of a provider to a complainant to compensate the
          complainant for a proven or estimated financial loss incurred as a
          result of the provider&apos;s contravention, non-compliance,
          action, failure to act, or unfair treatment forming the basis of
          the complaint.
        </P>
        <P>
          <strong>Goodwill Payment</strong> {" "} means a payment, whether in
          monetary form or in the form of a benefit or service, by or on
          behalf of a provider to a complainant as an expression of goodwill
          aimed at resolving a complaint, where the provider does not accept
          liability for any financial loss to the complainant as a result of
          the matter complained about.
        </P>
        <P>
          <strong>Rejected</strong> {" "}in relation to a complaint means that a
          complaint has not been upheld and the provider regards the
          complaint as finalised after advising the complainant that it does
          not intend to take any further action to resolve the complaint.
        </P>
        <P>
          <strong>Reportable Complaint</strong> {" "} means any complaint other
          than one that has been upheld immediately by the person who
          initially received the complaint; upheld within the provider&apos;s
          ordinary processes for handling client queries within five
          business days; or submitted in such a manner that the provider
          does not have a reasonable opportunity to record details.
        </P>
        <P>
          <strong>Upheld</strong> {" "} means that a complaint has been finalised
          wholly or partially in favour of the complainant.
        </P>
      </LegalSection>

      <LegalSection title="3. Purpose">
        <P>
          The objective of the complaints process is to uphold the
          principle of fairness, transparency and accountability when
          engaging with complainants and complaints. This will promote the
          integrity and good standing of the organisation and ensure fair
          outcomes to clients.
        </P>
        <UL
          items={[
            "Provide processes for redress where the provider or its service provider has contravened or failed to comply with an agreement, a law, a rule, or a code of conduct.",
            "Provide processes for accountability, responsibility and redress where the provider or its service supplier's maladministration or wilful or negligent action or failure to act has caused the person harm, prejudice, distress or substantial inconvenience.",
            "Embed a process that is appropriate and commensurate with the nature, scale and complexity of the business and its risk.",
            "Provide complainants with a simple and accessible complaints handling procedure.",
            "Ensure that all staff understand how and when to handle a complaint.",
            "Ensure that complaints are handled fairly, expeditiously, respectfully and with the required level of sensitivity.",
            "Ensure impartiality and objectivity in the handling of complaints.",
            "Ensure that the complaints process is clear, transparent, and properly documented.",
            "Ensure that complaints are monitored to improve service delivery and increase confidence in our business.",
            "Provide for a clear procedure detailing time frames, escalation processes, monitoring, review and oversight.",
            "Identify risks, trends and actions taken in response to complaints.",
            "Analyse and document the effectiveness and outcomes of the complaints management framework.",
          ]}
        />
        <P>
          The complaints framework will be updated according to any legal
          determinations, publications and guidance issued by the Ombudsman,
          as and when necessary, or at least annually.
        </P>
      </LegalSection>

      <LegalSection title="4. Our Policy">
        <P>
          Finsai Trade Ltd is committed to providing the highest standard of
          service to its clients and customers. All complaints are taken
          seriously and resolved as soon as reasonably practical and as
          closely as possible to the allocated time frames. The governing
          body / senior management is responsible for the establishment,
          maintenance, and operation of an adequate and effective complaints
          management framework that is commensurate with the scale and
          complexity of our business.
        </P>
        <UL
          items={[
            "Handle all complaints fairly and ensure that all complainants receive the assistance they require without unreasonable barriers to the complaints process.",
            "The complaints process is open to all clients who use our services, have complaints about representatives, products, or other related services.",
            "All complaints will be addressed according to the procedure detailed herein and given the level of confidentiality they deserve subject to any laws that may preclude such right.",
            "A register of complaints will be maintained and monitored.",
            "The complaints procedure will be monitored regularly to ensure that it is fair and non-discriminatory.",
            "All staff and management will familiarise themselves with the contents of this document and ensure compliance with the processes therein.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Responsibility">
        <P>
          The board of directors, the governing body, or the key individual
          of the provider, excluding a representative, is responsible for
          effective complaints management and must approve and oversee the
          effectiveness of the implementation of the provider&apos;s
          complaints management framework. Persons responsible for making
          decisions or recommendations in respect of complaints will be:
        </P>
        <UL
          items={[
            "Adequately trained;",
            "Have an appropriate mix of experience, knowledge and skills in complaints handling, fair treatment of customers, the subject matter of the complaints and relevant legal and regulatory matters;",
            "Not be subject to a conflict of interest; and",
            "Suitably empowered to make impartial decisions or recommendations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. The Complaints Process">
        <LegalSubsection title="6.1 Submission of complaints">
          <P>
            Complaints may be submitted to the product supplier or Finsai
            Trade Ltd according to the nature of the complaint. You have a
            right to lodge a complaint should you feel that any
            representative of Finsai Trade Ltd has contravened or failed to
            comply with a provision of this Act, and that as a result
            thereof you have suffered or are likely to suffer:
          </P>
          <UL
            items={[
              "Financial prejudice or damage;",
              "If any representative of Finsai Trade Ltd has willfully or negligently rendered a financial service to you which has, or is likely to cause prejudice or damage to you;",
              "Where you believe you have been treated unfairly.",
            ]}
          />
          <P>
            Your complaint must be lodged in writing with the internal
            compliance officer or compliance department of Finsai Trade Ltd
            or product supplier and follow the internal complaints and
            escalation processes. Complaints are handled by a suitably
            qualified person.
          </P>
          <P>
            The following information must be provided with the complaint:
            Name, Surname, Contact number, Details of the complaint or
            query, Reference number or policy number.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="7. Complaints Review and Escalation">
        <LegalSubsection title="7.1 Acknowledgement of receipt">
          <P>
            Finsai Trade Ltd will ensure that the complainant receives
            acknowledgement of the complaint using email communication
            within 48 hours of receipt of complaint. The email will indicate
            that a formal response will be provided within 7 days of the
            initial 48-hour communication. Depending on the complexity of
            the matter the response may extend to 14 days. Upon receipt of
            the response the complainant will have 7 days within which to
            respond. Finsai Trade Ltd will endeavour to resolve all
            complaints within 6 weeks, failure of which the complainant may
            approach the Ombudsman for determination. Complaints lodged
            with the Ombudsman must be submitted within 6 months from the
            date of the FSP&apos;s final response.
          </P>
        </LegalSubsection>

        <LegalSubsection title="7.2 Review and escalation">
          <UL
            items={[
              "All complaints received via any medium will be handled internally by a representative of the complaints department.",
              "Should the representative fail to resolve the complaint to the satisfaction of the complainant, the complaint will be escalated to the Complaints Manager.",
              "The Complaints Manager will exercise reasonable care and skill to ensure that the complaint is resolved amicably and within reasonable time.",
              "The complainant will be kept informed during the process.",
              "The Manager will ensure that the complaint is attended to and resolved within 6 weeks as per legislation.",
              "In the event there is a delay in the resolution feedback, this must be communicated to the complainant and managed within the correct time frame.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="7.3 Final Decision">
          <UL
            items={[
              "The final decision and outcome for the complaint will be officially communicated to the complainant.",
              "The details for all regulatory bodies' escalation channels will be provided to the complainant together with the outcome/resolution of the complaint.",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="8. Categorisation of Reportable Complaints">
        <P>
          The organisation will categorise its complaints according to the
          categories below and will in addition include any other relevant
          categories unique to its product offering, business and industry.
        </P>
        <UL
          items={[
            "Complaints relating to the design of a financial product, financial service or related service, including the fees, premiums or other charges related to that financial product or financial service.",
            "Complaints relating to information provided to clients.",
            "Complaints relating to financial product or financial service performance.",
            "Complaints relating to a service to clients, including complaints relating to premium or investment contribution collection or lapsing of a financial product.",
            "Complaints relating to financial product accessibility, changes or switches, including complaints relating to redemptions of investments.",
            "Complaints relating to complaints handling.",
            "Complaints relating to insurance risk claims, including non-payment of claims.",
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Record Keeping, monitoring and analysis of complaints">
        <LegalSubsection title="9.1 Record keeping and monitoring">
          <P>
            The categorisation of complaints will also determine the nature
            of the risk and risk exposure of the FSP and inform the
            processes of risk management on an ongoing basis. Information
            tracked includes:
          </P>
          <UL
            items={[
              "Number of complaints received.",
              "Number of complaints upheld.",
              "Number of rejected complaints and reasons for the rejection.",
              "Number of complaints escalated by complainants to the internal complaint's escalation process.",
              "Number of complaints referred to an ombud and their outcome.",
              "Number and amounts of compensation payments made.",
              "Number and amounts of goodwill payments made.",
              "Total number of complaints outstanding.",
              "Recordings for telephonic conversations, and emails confirming electronic communication.",
              "Where complaints were received in hard copy, such evidence must be scanned and saved to cloud.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="9.2 Analysis and tracking of complaints">
          <UL
            items={[
              "All complaints must be categorised correctly within the business, to allow for further analysis and decisions to eradicate certain complaints within the control of Finsai Trade Ltd.",
              "The report must differentiate the complaints resolved within timelines from those that exceeded the timeline.",
              "The Complaints management policy clearly depicts the procedures to be followed when handling complaints.",
              "The Complaints Manager is required to identify risks and place mitigating actions in place to reduce, manage, or avoid such risks.",
              "Any complaint lodged with Finsai Trade Ltd through a client, or the ombudsman must be tracked, documented, and stored for safe keeping in line with legislation.",
              "A Complaints Risk Tracker will track against possible risk, based on the current and foreseeable complaints to be dealt with in by the business.",
              "Risk tracking will allow for the executive management to continuously review the framework in its entirety.",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="10. Resourcing the Complaints' Function">
        <P>
          The Complaints Manager must be adequately resourced to be able to
          deal with the ombudsman without any delay in providing all
          information required for the complaint to be dealt with. Finsai
          Trade Ltd has processes in place that support the complaints
          manager to discharge this duty effectively.
        </P>
      </LegalSection>

      <LegalSection title="11. Obtaining information from external sources">
        <LegalSubsection title="11.1 Obtaining information">
          <P>
            Finsai Trade Ltd&apos;s complaints process provides mechanisms
            to assist the manager to obtain information required to resolve
            the complaint. This entails dealing with both internal and
            external stakeholders in obtaining information required, within
            timelines that do not exceed the legal time frame allocated for
            resolution.
          </P>
          <P>
            The referral process between product suppliers and Finsai Trade
            Ltd must clearly define the time for feedback between
            organisations to ensure that no timeline in the resolution
            process is affected. The standard process is that each
            organisation must provide the requested information within 48
            hours from receipt of such request.
          </P>
        </LegalSubsection>

        <LegalSubsection title="11.2 Reviewing the complaints policy and framework">
          <P>
            Finsai Trade Ltd must ensure that during any review of the
            Complaints Management Framework, all changes are tracked and
            documented during each update. There must be a high-level
            summary depicting the changes during the review and update of
            the policy.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="12. Decisions Relating to Complaints">
        <LegalSubsection title="12.1 Upholding complaints">
          <P>
            Where a complaint is upheld, any commitment by the provider to
            make a compensation payment, goodwill payment or to take any
            other action must be carried out without undue delay and within
            any agreed timeframes.
          </P>
        </LegalSubsection>

        <LegalSubsection title="12.2 Rejection of complaints">
          <P>
            Where a complaint is rejected, the complainant must be advised
            on further steps that they can take in the event they are
            dissatisfied with the outcome. The details for the ombudsman
            must be given to the complainant should they decide to pursue
            the complaint further.
          </P>
        </LegalSubsection>

        <LegalSubsection title="12.3 Obtaining information relating to a complaint">
          <P>
            Finsai Trade Ltd will ensure that the process of obtaining
            information relating to a complaint is efficient. The
            information will be scrutinised and analysed by a provider on an
            ongoing basis and utilised to manage conduct risks and effect
            improved outcomes and processes for its clients.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="13. Communication with Complainants">
        <P>
          The representative must ensure that the complainant is informed
          upon receipt of a complaint and ensure that the complainant
          understands the information required to assist with the
          resolution together with the process of supplying such
          information. Finsai Trade Ltd representatives must correspond
          with the complainant regarding the intended time or delays to
          resolve a complaint, and manage expectations with the
          complainant, until the complaint is finalised.
        </P>
        <P>
          <strong>Contact details for Complaints department of FINSAI TRADE LTD:</strong>
          <br />
          Registered address: 3 Emerald Park, Trianon, Quatre Bornes 72257,
          MAURITIUS
        </P>
      </LegalSection>

      <LegalSection title="14. Engagement and Reporting to Authorities">
        <P>
          A provider must have appropriate processes in place to ensure
          compliance with any prescribed requirements for reporting
          information relating to complaints to any relevant designated
          authority or to the public as may be required by the Registrar.
        </P>
        <UL
          items={[
            "All complaints lodged and resolved must be tracked using the Complaints tracker and readily accessible to the complaints manager for risk mitigation and analysis and reporting purposes to the authorities.",
            "All written communication during the complaint's resolution process must include the details for the financial services Ombudsman.",
            "The resource dealing with telephonic communication with a complainant must furnish the complainant with details of the financial services ombudsman during all calls.",
            "In the event the complaint has been attended to on behalf of a Product supplier, the relationship between Finsai Trade Ltd and the Product supplier must be shared with the complainant.",
            "The Complaints manager will adhere to honest and reasonable communication with the Ombudsman, ensure they cooperate with the Ombudsman, product supplier and client.",
            "The decisions of the Ombudsman are binding on Finsai Trade Ltd / product supplier but not the complainant.",
            "The Ombudsman decisions may be based on law or equity.",
            "The service of the Ombudsman is free to insured persons.",
            "The Ombudsman does not provide legal advice.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Annexure A — Categorisation of Complaints">
        <OL
          items={[
            "Complaints relating to the design of a financial product, financial service or related service, including the fees, premiums or other charges.",
            "Complaints relating to information provided to clients.",
            "Complaints relating to advice.",
            "Complaints relating to financial product or financial service performance.",
            "Complaints relating to a service to clients, including complaints relating to premium or investment contribution collection or lapsing of a financial product.",
            "Complaints relating to financial product accessibility, changes or switches, including complaints relating to redemptions of investments.",
            "Complaints relating to complaints handling.",
            "Complaints relating to insurance risk claims, including non-payment of claims.",
            "Any other complaints.",
          ]}
        />
      </LegalSection>
    </LegalLayout>
  );
}
