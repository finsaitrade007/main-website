import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  OL,
  P,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Finsai Trade Refund Policy describing deposit, withdrawal, chargeback and cancellation procedures and the safeguarding of client funds.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy">
      <LegalSection title="Introduction">
        <P>
          FINSAI TRADE LTD. Island Ring Road, TB Office, NRU 68, Yeren,
          Mauritius, Republic of Mauritius, with company registration number
          003112024 and license number 052943-033 (hereinafter &ldquo;The
          Company&rdquo;) operating under the trading name Finsai Trade.
        </P>
      </LegalSection>

      <LegalSection title="Safeguarding of Clients Funds">
        <OL
          items={[
            "The Company endeavors to hold client funds on segregated accounts or in omnibus accounts with reliable financial institutions. Client money is not used for any operational expenses or similar purposes.",
            "The Company will not be liable for any failure or insolvency of any custodian, credit institution, bank or third-party holding Client Assets; however, applicable investor compensation or deposit protection schemes may protect a proportion of Client Funds that are held with a credit institution or bank or third party.",
            "All institutions with which the Company intends to hold Client funds are assessed prior to the establishment of the business relationship. During the assessment the Company takes into account the expertise and market reputation of such institutions, with the view to ensuring the protection of client's rights as well as any legal or regulatory requirements or market practices related to the holding of client funds that could adversely affect client's rights.",
            "We will not pay any interest on any Client Money held on your behalf, regardless of whether we receive interest on those deposits from the financial institution(s) with which we hold the Client Money or not.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Deposits and Withdrawals Procedures">
        <LegalSubsection title="A. General">
          <OL
            items={[
              "All payments to the Company under this Policy shall be made in the currency that The Company will specify and in accordance with the bank account details provided by The Company for such purposes.",
              "Any amounts corresponding to liabilities you have towards us, including liabilities, may be deducted directly from the balance of any of your Account(s) under your profile.",
              "Any monies you transfer to us for the purposes of funding your Account shall be deposited in your Account on the receival date, net of any transfer fees or other charges imposed by the financial institution(s), or any intermediary involved in the process of sending or receiving the funds. We may, at our sole discretion and under no obligation, credit funds which are still in transfer before the receival to your Account. In such instances, we may require you to sign additional agreements such as a Credit Agreement. We will try our best to ensure that any transfers are processed without any delay provided that this is within our reasonable control.",
              "We will deposit funds into your Account only after we are satisfied, amongst other criteria, that the funds are being sent by you or your Authorized Representative from an account in your name, and that the funds do not breach any term contained within the Client Agreement and/or the law.",
              "Any transfers shall only be effective after our systems have made the relevant credit or debit of the funds to the relevant Account(s), and whilst we will make all reasonable efforts to ensure any transfers are made effective in a timely manner, we cannot guarantee how long this process may take. It is your responsibility to provide us with complete and accurate information in a prompt manner to ensure that you do not experience any delays or other losses.",
              "In the event when the Company receives funds in any currency other than the one in which the Account is denominated in, such funds will be credited to the Account on the basis of an internal exchange rate adopted by the Company at the date of deposit.",
              "We reserve the right to request additional information and/or documentation, at any time, in order to be satisfied that your dealings with us, including, but not limited to deposits and withdrawals, are legitimate or for any other reason so as to fulfill and comply with our regulatory obligations. It is your responsibility to provide us with complete and accurate information and your failure to do so may result in delays with processing any requests, and/or any of your requests may be rejected.",
              "Further, if we are not satisfied as to the above and reject an incoming transaction, we reserve the right to return the funds to the sender, net of any transfer fees or charges which we may incur.",
              "The Company does not accept cash deposits.",
              "It is our policy to ensure that all withdrawals, either in part or in full of the funds you deposit with us, are sent to the same source where the funds came from. We will only deviate from this policy where we have been satisfied that this will not be contrary to any of our policies and applicable legislation.",
              "In order to withdraw funds Clients may request withdrawal through their Client Area.",
              "When withdrawing funds from the trading account, the Client is charged with all costs for funds transfer.",
              "When processing a withdrawal request, the Company shall use its internal currency rates at the date of withdrawal.",
              "The Company has the right to refuse the Client's request for withdrawal if the Client uses the same payment system for withdrawal and depositing, but with different bank details.",
              "The execution of withdrawal request by the Company from the Client's account is accomplished within the same day from the time a relevant application for the removal of such funds has been confirmed in the Client Area, if the application took place during working hours, or the following business day if the request was outside working hours.",
              "In case the payment system stops operating for some time, the Company has the right to postpone the date of withdrawal until the payment system resumes working.",
              "Where you receive money from us by mistake, you agree to hold such amount of money in trust for the benefit of the Company or the beneficial owner. In the event you use any funds sent to you by mistake, we will have a claim on those funds, together with any profit derived from the use of those funds, on behalf of the beneficial owner. In the same way, we shall not compensate you for any losses incurred by you as a result of you using the said funds. The claim for the full amount shall remain.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="B. Bank Wire (Deposits)">
          <OL
            items={[
              "The Company shall request/obtain documentation/information (i.e. bank statement or SWIFT confirmation) showing the bank account, the name of the client and the amount that was sent to Company designated bank account for clients' funds, in order to verify the depositor's details and identify the source of funds.",
              "We reserve the right to reject the incoming transaction(s) in case where the bank account from where the funds were sent is not matching the client's bank account as seen either on the statement, SWIFT or other similar reliable document/online banking interface, and return the funds to the remitter by the same method as they were received, in accordance with the provisions of Paragraph 10, Section A, of this Policy.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="C. Credit/Debit Card Payments">
          <OL
            items={[
              "The Company shall request/obtain copies of the card used for funding in order to match and verify the first and last 4 digits of the card, the expiry date and the name of the holder with the card number seen in the payment processor, to identify the real source of the funds.",
              "The Company reserves the right to request from the Client additional documents/information (e.g. bank/card statement showing inter alia depositor's name, account number and transaction done to the Company) in case where the copies of the card provided do not bear the necessary information as provided in Paragraph 1 of this Section for verifying the source of funds.",
              "If we are still not satisfied as to the above (i.e. could not identify the source of funds) then we shall reject the incoming transaction(s) and return the funds to the remitter by the same method as they were received, in accordance with the provisions of Paragraph 10, Section A of this Policy.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="D. Payment Service Providers (PSPs)/E-wallets — Payments">
          <OL
            items={[
              "The Company shall request/obtain documentation/information deemed necessary, in order to verify the depositor's details appearing in the payment service provider/e-wallet system match the details of the Client as appearing in the Company's system and trading platform.",
              "If we are not satisfied as to the above (i.e. could not verify depositor's details and identify the source of funds) then we shall reject the incoming transaction(s) and return the funds to the remitter by the same method as they were received in accordance with the provisions of Paragraph 10, Section A of this Policy.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="E. Withdrawals">
          <P>
            Upon receiving an instruction from the Client through their
            Client Area to withdraw funds from their Account, the Company
            shall process the withdrawal request on the same day that the
            request was made, or the next working day if the client&apos;s
            request is received outside of normal trading hours, only if the
            following requirements are met:
          </P>
          <P>(a) the withdrawal instruction includes all necessary information in the Client Area;</P>
          <P>
            (b) the instruction is to make a transfer to the originating
            account (whether that is a bank account, a payment system account
            etc.) from which the money was originally deposited in the
            Account or at the Client&apos;s request to a bank account
            belonging to the Client. In case of credit/debit card deposits,
            where the refundable amount exceeds the deposited amount (i.e.
            Client made profits), then the exceeding amount shall be sent by
            bank wire or another payment method except credit card assuring
            through supporting documents (i.e. account statement) that the
            bank account or funding method account to which the profits will
            be sent belongs to the Client.
          </P>
          <P>(c) the account where the transfer is to be made belongs to the Client;</P>
          <P>(d) at the moment of payment, the Client&apos;s Balance exceeds the amount specified in the withdrawal instruction including all payment charges;</P>
          <P>(e) there is no Force Majeure event which prohibits the Company from effecting the withdrawal; and</P>
          <P>(f) the Client must be fully verified according to Verification guidelines set forth in this Policy and the Client Agreement.</P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="Inactive and Dormant Accounts">
        <OL
          items={[
            "There will be no fees charged as a result of inactivity in the Trading Account. However, if there are no transactions (deposits, withdrawals or trading activity) on your Trading Account for a period of six (6) months, the Company reserves the right to close your Trading Account and render it dormant, after notifying you in writing in your last known contact details.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Third party or anonymous payments">
        <OL
          items={[
            "The Company reserves the right not to comply with any request by the Client to make a payment or a delivery to a third party or in case of anonymous accounts.",
            "If The Company becomes aware that funds have been paid or delivered to The Company by a third party, or in case of anonymous transactions, The Company reserves the right to refuse such payment or delivery and such payments will not be added in the Client's Trading Account or E-Wallet Account.",
            "In case the Company becomes aware that funds have been paid or delivered to the Company by a third party or in case of anonymous transactions, the transferred funds will be refunded back to the same payment details from where they have been paid. The Client will be charged with all costs for the refund transaction.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Chargebacks">
        <OL
          items={[
            "Upon receipt of a chargeback from any credit card issuer or with respect to any other payment method, for any reason, the Company has the right to cancel the Client's deposit(s) and withdrawals until the chargeback is resolved.",
            "We reserve the right to seek reimbursement from the Client, in case of receipt of a chargeback from any credit card issuer or with respect to any other payment method, for any reason. We may obtain such reimbursement by charging the Trading Account or E-Wallet Account, deducting amounts from future payments owed to the Client, charging the Client's credit/debit card or obtaining reimbursement from the Client by any other lawful means. All bank charges howsoever arising will be deducted from the Client's Trading Account or E-Wallet Account.",
            "We reserve the right and upon receipt of a chargeback, to immediately close any and all of Client's Open Positions whether at a loss or a profit without any prior notice. The exercise of our right to force close your Open Positions will not result in termination of your Trading Account or of this Agreement, unless we send the Client a notice of termination in accordance with the provisions of the Client Agreement.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Cancellation Policy">
        <OL
          items={[
            "The Company reserves the right to cancel and/or reject a Client's deposit or withdrawal request and/or terminate the Client's business relationship pursuant to the provisions set forth in this Policy and the Client Agreement.",
          ]}
        />
        <P>
          <em>
            The content of this document should be read together with the
            Client Agreement available on the Company&apos;s website at{" "}
            <a
              href="https://www.finsaitrade.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7DB9D6", textDecoration: "underline" }}
            >
              www.finsaitrade.com
            </a>
            .
          </em>
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
