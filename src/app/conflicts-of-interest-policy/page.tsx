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
  title: "Conflicts of Interest Policy",
  description:
    "Finsai Trade Conflicts of Interest Policy outlining identification, management and mitigation of conflicts of interest.",
};

export default function ConflictsOfInterestPolicyPage() {
  return (
    <LegalLayout title="Conflicts of Interest Policy">
      <LegalSection title="1) Purpose and Scope">
        <P>
          The purpose of this Conflicts of Interest Policy is to outline a
          suitable approach and response to the identification and
          management of conflicts of interest. Finsai Trade is an authorized
          Financial Services Provider and thus governed by the International
          Services Authority of Mauritius.
        </P>
      </LegalSection>

      <LegalSection title="2) Definitions">
        <P>
          <strong>&ldquo;Conflicts of Interest&rdquo;</strong> Any
          circumstance described in &ldquo;Explaining Conflicts of
          Interest&rdquo; below.
        </P>
        <P>
          <strong>&ldquo;FSP&rdquo; or &ldquo;Name of Company&rdquo;</strong>{" "}
          FINSAI TRADE LTD. is a Financial Services Provider authorized in
          terms of the International Services Authority of Nauru.
        </P>
        <P>
          <strong>&ldquo;Responsible Person&rdquo;</strong> A key individual,
          representative or employee of a Product Supplier or FSP.
        </P>
        <P>
          <strong>&ldquo;Financial Interest&rdquo;</strong> A financial
          interest includes cash, cash equivalent, voucher, gift, services,
          advantage, benefit, discount, domestic or foreign travel,
          hospitality, accommodation, sponsorship, or other incentive, or
          valuable consideration other than (a) an ownership interest; (b)
          training by a product supplier on products, general industry
          information and technical systems, that is not exclusively
          available to a selected group of providers or representatives
          except for travel and accommodation associated with that training.
        </P>
        <P>
          <strong>&ldquo;Ownership Interest&rdquo;</strong> (a) an equity
          ownership interest, for which fair value was paid by the owner,
          other than equity or ownership interest held by an approved nominee
          on behalf of another person; and (b) includes any dividend, profit
          share or similar benefit derived from that equity or ownership
          interest.
        </P>
        <P>
          <strong>&ldquo;Immaterial Financial Interest&rdquo;</strong> Any
          financial interest with a determinable monetary value, the
          aggregate of which does not exceed KMF 1000 in any calendar year
          from the same third party in that calendar year received by a
          provider, who for its benefit or that or some or all of its
          representatives, aggregates the immaterial financial interest paid
          to its representatives.
        </P>
        <P>
          <strong>&ldquo;Third Party&rdquo;</strong> (a) a product supplier;
          (b) another FSP; (c) an associate of a product supplier or a FSP;
          (d) a distribution channel; (e) any person who in terms of an
          agreement or arrangement with a person referred to in paragraphs
          (a) to (d) above provides a financial interest to a provider or its
          representatives.
        </P>
        <P>
          <strong>&ldquo;Distribution Channel&rdquo;</strong> (a) any
          arrangement between a product supplier or any of its associates and
          one or more providers or any of its associates in terms of which
          arrangement, any support or service is provided to the provider or
          providers in rendering a financial service to a client; (b) any
          arrangement between two or more providers or any of their
          associates, which arrangement facilitates, supports or enhances a
          relationship between the provider or providers and a product
          supplier; (c) any arrangement between two or more product
          suppliers or any of their associates, which arrangement
          facilitates, supports or enhances a relationship between a
          provider or providers and a product supplier.
        </P>
      </LegalSection>

      <LegalSection title="Explaining Conflicts of Interest">
        <P>
          A &ldquo;conflict of interest&rdquo; involves the actual, apparent
          or potential abuse of the trust that people have in professionals.
          The simplest working definition states: a conflict of interest is
          a situation in which financial or other personal considerations
          have the potential to compromise or bias professional judgment and
          objectivity. An apparent conflict of interest is one in which a
          reasonable person would think that the professional&apos;s
          judgment is likely to be compromised. A potential conflict of
          interest involves a situation that may develop into an actual
          conflict of interest. It is important to note that a conflict of
          interest exists whether or not decisions are affected by a
          personal interest. A conflict of interest implies only the
          potential for bias, not the likelihood.
        </P>
        <P>
          Conflicts of interest can be described as circumstances where some
          or all of the interests of clients to whom a financial services
          provider or product supplier provides financial services or
          products, are inconsistent with, or diverge from, some or all of
          the interests of the FSP, its representatives or the product
          supplier.
        </P>
        <P>
          It should be understood that the conflicting interest referred to
          throughout this policy may be direct or indirect (the interest
          might be that of the Responsible Person, that of another person
          such as a relative or friend of the Responsible Person, or that of
          an organization in which the Responsible Person or such other
          person has an interest).
        </P>
        <P>
          It is not possible to list all situations which could constitute a
          conflict. The facts of each situation will determine whether the
          interest in question is such as to bring it within the area of
          potential conflict.
        </P>
      </LegalSection>

      <LegalSection title="3) Procedures for management of conflicts of interest">
        <P>
          To adequately manage conflicts of interest, Finsai Trade shall
          identify all relevant conflicts timeously. Finsai Trade will employ
          two different mechanisms to ensure that all conflicts are
          identified:
        </P>
        <P>
          Finsai Trade shall maintain a register of identified conflicts of
          interest. The register will be compiled in conjunction with the
          board of Finsai Trade and updated with all new conflicts as soon
          as they are identified. The register is reviewed on an annual
          basis for completeness. The register identifies the conflict, the
          severity of the conflict and documented controls to mitigate the
          conflict.
        </P>
        <P>
          All employees, including compliance officers and management, are
          responsible for identifying specific instances of conflict and are
          required to notify their business unit manager or compliance
          officer of any conflicts they become aware of. The business unit
          manager will escalate the conflict to the compliance officer, who
          will assess the implications of the conflict and how the conflict
          should be managed in conjunction with the board.
        </P>

        <LegalSubsection title="3.1 Managing Conflicts of Interest">
          <P>
            Once a conflict has been identified it needs to be appropriately
            and adequately managed. Management and compliance assesses each
            conflict and whether the conflict is actual or perceived and
            what the value of the conflict or exposure is and the potential
            reputational risk. Compliance and management shall decide
            whether it is viable to go ahead with the transaction or if the
            conflict is too severe, decline to act. If Compliance and
            management decide that the particular conflict can be mitigated,
            they need to agree on the controls that should be put in place
            to manage the conflict. The controls have to be documented in
            the Conflicts of Interest Register.
          </P>
        </LegalSubsection>

        <LegalSubsection title="3.2 Specific Confirmations">
          <P>
            We confirm that we will ONLY receive financial interest from a
            third party in the form of:
          </P>
          <OL
            items={[
              "Fees for rendering a financial service in respect of which no commission or fees are paid, if those fees are specifically agreed to by the client;",
              "Fees or remuneration for the rendering of a service to a third party, which fees are reasonably commensurate to the service being rendered;",
              "Subject to any other law, an immaterial financial interest.",
            ]}
          />
          <P>
            We confirm we will not offer any financial interest to a
            Responsible Person for:
          </P>
          <UL
            items={[
              "Giving preference to the quantity of business secured, to the exclusion of the quality of service rendered to clients; or",
              "Giving preference to a specific product supplier, where a representative may recommend more than one product supplier to a client; or",
              "Giving preference to a specific product of a product supplier, where a representative may recommend more than one product of that product supplier to a client.",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="4) Mitigating Controls">
        <P>
          Finsai Trade has various internal policies and controls in place
          to manage and mitigate possible conflicts of interest, including
          that a Provider or a Representative will, in writing, at the
          earliest reasonable opportunity disclose to a client any
          conflicts of interest in respect of that client.
        </P>
        <P>The disclosure must include:</P>
        <UL
          items={[
            "Measures taken, in accordance with the conflicts of interest management policy, to avoid or mitigate the conflict;",
            "Any ownership interest or financial interest, other than an immaterial financial interest, that the provider or the representative may become eligible for;",
            "An explanation of the nature of any relationship or arrangement with a third party that gives rise to a conflict of interest, in sufficient detail to enable a client to understand the exact nature of the relationship or arrangement and the conflicts of interest.",
          ]}
        />
        <P>And:</P>
        <OL
          items={[
            "A Provider or Representative must inform a client of the conflicts of interest management policy and how it may be accessed.",
            "Register of \u201CAssociates\u201D of Finsai Trade as defined in Definitions (Appendix A).",
            "Register of Conflicts of Interest open for viewing on request. The register identifies all conflicts as well as the mitigation controls put in place to manage the conflict. The register is updated when a conflict becomes apparent but reviewed at least on an annual basis (Appendix B).",
            "Register of Personal Interest, documenting the business interests of a Responsible Person to the extent that such business interest might cause an actual or perceived conflict of interest (Appendix C).",
            "Register of Gifts Received, documenting all financial interests and immaterial financial interests offered to or received by a Responsible Person (Appendix D).",
            "Comprehensive Training on the Conflicts of Interest Policy must be provided to Key Individuals and Representatives.",
            "All employees and representatives are required to read this policy and sign a statement to the effect that they have read and fully understand the provisions of the document and the application thereof.",
            "Internal compliance will on an ad-hoc basis check on financial records to ensure the policy is being complied with, specifically checking the accuracy of the Gift Register.",
            "Non-compliance will be subject to disciplinary procedures in terms of FAIS and employment conditions and can ultimately result in debarment or dismissal as applicable.",
            "Avoidance, limitation or circumvention of this policy will be deemed non-compliance.",
            "The external compliance officer will include monitoring of the Conflicts of Interest Policy as part of the general monitoring duties and will report thereon in the annual compliance report to the FSB.",
          ]}
        />
      </LegalSection>
    </LegalLayout>
  );
}
