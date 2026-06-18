import type { CSSProperties } from "react";
import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  OL,
  P,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Upfront Disclosure",
  description:
    "Mauritius Upfront Disclosure Document for Finsai Trade Ltd, including legal status, key individuals, complaints handling and authorized financial products.",
};

const TABLE_BORDER = "1px solid rgba(255,255,255,0.16)";

const TABLE_STYLE: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "var(--font-inter, Inter)",
  fontSize: "15px",
  lineHeight: "24px",
  color: "rgba(255,255,255,0.85)",
};

const TH_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "12px 16px",
  background: "rgba(255,255,255,0.08)",
  color: "#FFFFFF",
  fontWeight: 600,
  textAlign: "center",
};

const TD_SNO_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "10px 16px",
  textAlign: "center",
  width: "200px",
  whiteSpace: "nowrap",
};

const TD_PRODUCT_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "10px 20px",
  textAlign: "left",
};

const TD_LABEL_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "12px 16px",
  background: "rgba(255,255,255,0.06)",
  color: "#FFFFFF",
  fontWeight: 600,
  textAlign: "left",
  width: "280px",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  fontSize: "14px",
  whiteSpace: "nowrap",
};

const TD_VALUE_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "12px 20px",
  textAlign: "left",
};

type InfoRow = { label: string; value: React.ReactNode };

function InfoTable({ rows }: { rows: InfoRow[] }) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={TABLE_STYLE}>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td style={TD_LABEL_STYLE}>{row.label}</td>
              <td style={TD_VALUE_STYLE}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TH_LEFT_STYLE: CSSProperties = {
  ...{
    border: TABLE_BORDER,
    padding: "12px 16px",
    background: "rgba(255,255,255,0.08)",
    color: "#FFFFFF",
    fontWeight: 600,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
};

const TD_NAME_EMPTY_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "12px 16px",
  width: "260px",
};

const TD_AUTH_PRODUCT_STYLE: CSSProperties = {
  border: TABLE_BORDER,
  padding: "12px 20px",
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
};

function KeyIndividualsTable({ products }: { products: string[] }) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={TABLE_STYLE}>
        <thead>
          <tr>
            <th style={{ ...TH_LEFT_STYLE, width: "260px" }}>Name:</th>
            <th style={TH_LEFT_STYLE}>Authorised Products</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product}>
              <td style={TD_NAME_EMPTY_STYLE}>&nbsp;</td>
              <td style={TD_AUTH_PRODUCT_STYLE}>{product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SignatureBlock({ fields }: { fields: string[] }) {
  return (
    <div
      style={{
        marginTop: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {fields.map((label) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "24px",
          }}
        >
          <div
            style={{
              minWidth: "200px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "28px",
              color: "rgba(255,255,255,0.85)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
          <div
            style={{
              flex: 1,
              borderBottom: "1px solid rgba(255,255,255,0.5)",
              height: "28px",
            }}
          />
        </div>
      ))}
    </div>
  );
}

function RegionContactTable({
  regionLabel,
  rows,
}: {
  regionLabel: string;
  rows: InfoRow[];
}) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={TABLE_STYLE}>
        <thead>
          <tr>
            <th style={{ ...TH_LEFT_STYLE, width: "280px" }}>&nbsp;</th>
            <th style={TH_LEFT_STYLE}>{regionLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td style={TD_LABEL_STYLE}>{row.label}</td>
              <td style={TD_VALUE_STYLE}>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProductsTable({ items }: { items: string[] }) {
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <table style={TABLE_STYLE}>
        <thead>
          <tr>
            <th style={TH_STYLE}>S. No</th>
            <th style={TH_STYLE}>Financial Products</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product, i) => (
            <tr
              key={product}
              style={{
                background:
                  i % 2 === 0
                    ? "transparent"
                    : "rgba(255,255,255,0.04)",
              }}
            >
              <td style={TD_SNO_STYLE}>{i + 1}</td>
              <td style={TD_PRODUCT_STYLE}>{product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const PRODUCTS = [
  "Savings Accounts",
  "Current Accounts",
  "Fixed Deposits",
  "Certificates of Deposit (CDs)",
  "Personal Loans",
  "Business Loans",
  "Mortgage Loans",
  "Credit Cards",
  "Debit Cards",
  "Investment Funds",
  "Equity Investments",
  "Bond Investments",
  "Money Market Instruments",
  "Mutual Funds",
  "Cryptocurrency Trading",
  "Foreign Exchange (Forex) Trading",
  "Commodities Trading",
  "Insurance Products (Life, Health, etc.)",
  "Pension Plans",
  "Money Transfer Services",
  "Payment Processing Services",
  "Remittance Services",
  "Foreign Currency Exchange Services",
  "Wealth Management Services",
  "Financial Advisory Services",
  "Retirement Planning Services",
  "Estate Planning Services",
  "Tax Planning and Consulting Services",
  "Corporate Banking Solutions",
  "Trade Finance Services",
];

export default function UpfrontDisclosurePage() {
  return (
    <LegalLayout title="Mauritius Upfront Disclosure Document">
      <LegalSection>
        <InfoTable
          rows={[
            { label: "Name", value: "FINSAI TRADE LTD" },
            {
              label: "Physical Address",
              value:
                "3rd Floor, Manor House, 30 St Georges Street, Port Louis, Mauritius",
            },
            {
              label: "Website",
              value: (
                <a
                  href="https://www.finsaitrade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#7DB9D6", textDecoration: "underline" }}
                >
                  www.finsaitrade.com
                </a>
              ),
            },
            {
              label: "Email Address",
              value: (
                <a
                  href="mailto:contact@finsaitrade.com"
                  style={{ color: "#7DB9D6", textDecoration: "underline" }}
                >
                  contact@finsaitrade.com
                </a>
              ),
            },
            { label: "Telephone Number", value: " " },
            { label: "Fax Number", value: "043510078" },
          ]}
        />
      </LegalSection>

      <LegalSection title="1. Company's Legal Status">
        <P>
          Finsai Trade (the &ldquo;FSP&rdquo; hereafter) is a Private Company
          regulated by the Financial Services Commission Mauritius with
          License no: GB25204899, Registered in Mauritius under company
          number C228371. As a licensed Financial Services Provider in terms
          of Mauritius, the FSP accepts responsibility for the actions of
          its representatives, acting within their mandates, in the
          rendering of financial services as defined by the International
          Services Authority of Mauritius. Our representatives either meet the
          fit and proper requirements as prescribed by the International
          Services Authority of Mauritius or operate under appropriate
          supervision in accordance with the International Services
          Authority of Mauritius, and are qualified to assist you in a
          professional manner with your financial requirements.
        </P>
        <P>
          The FSP avails a copy of the Bank of Mauritius licence for
          inspection by the client at its place of business. The FSP
          acknowledges that it does not hold directly or indirectly more
          than 10% of the shares issued by the product supplier or an
          equivalent financial interest.
        </P>
      </LegalSection>

      <LegalSection title="2. Details of Key Individuals and Representatives">
        <LegalSubsection title="Key Individuals">
          <KeyIndividualsTable
            products={[
              "Forex and CFD broking and clearing",
              "Crypto Exchange",
              "Investment Fund",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="3. Legal Status of Key Individuals and Representatives">
        <P>
          The FSP confirms that its key individual(s) and representative(s)
          are mandated and entitled to render financial intermediary services
          to you in terms of Mauritius. The Key Individuals and
          Representatives are full-time employees of the FSP. Our
          Representatives do not, but may from time to time, receive cash or
          non-cash incentives from product suppliers in line with our
          conflicts of interest policy; a list of such details is recorded
          in a register and available at our offices for your perusal.
        </P>
      </LegalSection>

      <LegalSection title="4. Complaint Handling and Compliance Queries">
        <LegalSubsection title="Compliance Officer">
          <P>
            If you have a complaint or a compliance related query, please
            do not hesitate to contact our Compliance Officer:
          </P>
          <InfoTable
            rows={[
              { label: "Name", value: "\u00A0" },
              { label: "Company", value: "FINSAI TRADE LTD." },
              {
                label: "Physical Address",
                value:
                  "3rd Floor, Manor House, 30 St Georges Street, Port Louis, Mauritius.",
              },
              { label: "Telephone Number", value: " " },
              {
                label: "Email Address",
                value: (
                  <a
                    href="mailto:contact@finsaitrade.com"
                    style={{ color: "#7DB9D6", textDecoration: "underline" }}
                  >
                    contact@finsaitrade.com
                  </a>
                ),
              },
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Mauritius">
          <P>
            Should a complaint not be resolved to your satisfaction, you may
            forward such complaint to the Office of the Mauritius for
            Financial Services Providers:
          </P>
          <RegionContactTable
            regionLabel="Mauritius"
            rows={[
              {
                label: "Physical Address",
                value:
                  "3rd Floor, Manor House, 30 St Georges Street, Port Louis, Mauritius.",
              },
              {
                label: "Email",
                value: (
                  <a
                    href="mailto:contact@finsaitrade.com"
                    style={{ color: "#7DB9D6", textDecoration: "underline" }}
                  >
                    contact@finsaitrade.com
                  </a>
                ),
              },
            ]}
          />
          <P>
            Please note that, if you wish to lodge a complaint with the
            Mauritius against the FSP or our representatives, you will need
            to show that you have already attempted to resolve the matter
            directly with the FSP first.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="5. Other Matters of Importance">
        <P>
          (a) In terms of the Financial Intelligence Centre Act, 2001 the
          FSP is obliged to report any suspicious and unusual transactions
          that may facilitate money laundering.
        </P>
        <P>
          (b) It is important that you are absolutely sure that the product
          and transactions meet your needs and that you feel you have all
          the information you need before making a decision.
        </P>
        <P>
          (c) The FSP has a suitable Professional Indemnity (and Fidelity
          Insurance Cover) in place in accordance with Mauritius.
        </P>
        <P>
          (d) <strong>Waiver of rights:</strong> You are hereby advised that
          no representatives of the provider or any other person may ask
          you, or offer any inducement to you, to waive any right or
          benefit conferred on you by or in terms of any provision of the
          Mauritius Act. Note further that no representative has a right to
          enter into any contractual obligation on the client&apos;s behalf,
          or to restructure portfolios without the client&apos;s prior
          written consent.
        </P>
        <P>
          (e) The client authorizes the FSP to access any relevant
          information required pertaining to the client to enable the FSP
          to adequately provide the necessary financial service or advice.
          Any client information obtained by our representatives shall
          remain confidential and shall not be disclosed to third parties
          unless otherwise required by a legal obligation or with your
          prior consent.
        </P>
      </LegalSection>

      <LegalSection title="6. Financial Services and Products">
        <P>
          Our Representatives are only authorized to provide services and
          advice in the product categories mentioned below only. Should the
          client require services outside of our licence approval, they may
          approach other licenced third parties authorized to render
          services in the desired product categories.
        </P>
        <P>
          As an Authorized Financial Services Provider, the FSP has a
          Category I and II license issued by the Financial Services Board
          in terms of Mauritius, to provide advisory and/or intermediary services
          in respect of the following financial products:
        </P>
        <ProductsTable items={PRODUCTS} />
      </LegalSection>

      <LegalSection title="7. Conflicts of Interest">
        <P>
          In accordance with the FSP&apos;s Conflicts of Interest Management
          Policy, the FSP places a high priority on its clients&apos;
          interests. As conflicts of interest could undermine the integrity
          and professionalism of the FSP and its employees, any potential or
          recognized instance must be identified as early as possible.
          Potential conflicts of interest are inherent in any business and
          therefore it is not the aim of the FSP to avoid all conflicts. If
          conflict situations cannot be avoided, the FSP will manage equitably
          and in the client&apos;s interest as an integral part of the
          FSP&apos;s duties and obligations. The FSP maintains an active
          Conflicts of Interest Management Policy, which is available on
          request.
        </P>
      </LegalSection>

      <LegalSection title="8. Client Understanding & Confirmation">
        <OL
          items={[
            "The client agrees to provide the FSP with the necessary information and written consent required to affect the client's mandate.",
            "The client consents to provide the FSP with any information relating to the client's change in financial circumstance to enable the FSP to make the necessary adjustments to the financial plan.",
            "The client understands that they have an obligation to provide the FSP with accurate information, material facts, or statements relating to the completion of any transaction and that they assume the sole responsibility for any damage incurred as a result of their failure to accurately disclose information.",
            "It shall be the sole responsibility of the client to decide whether a product or financial decision is appropriate for their needs, objectives and circumstances, should the client elect to pursue a transaction contrary to the recommendation of the FSP.",
            "I confirm I have read this document and have received a copy of this notice.",
          ]}
        />

        <SignatureBlock
          fields={[
            "Company (Client) name:",
            "Signature:",
            "Title / Name:",
            "Date:",
          ]}
        />
      </LegalSection>
    </LegalLayout>
  );
}
