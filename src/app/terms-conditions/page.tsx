import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  P,
  UL,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Finsai Trade Terms & Conditions covering Welcome Bonus eligibility, usage, expiry and Trading Competition rules.",
};

export default function TermsConditionsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <LegalSection title="Section 1: Welcome Bonus Terms and Conditions">
        <LegalSubsection title="Eligibility">
          <P>
            The welcome bonus is available to all new registered clients of
            Finsai. Existing clients or clients who have previously closed an
            account and are opening a new one are not eligible for this bonus.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Bonus Amount">
          <P>
            Eligible clients will receive a one-time welcome bonus of $50
            credited to their trading account.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Usage of Bonus">
          <UL
            items={[
              "The welcome bonus can only be used for trading purposes on Finsai.",
              "The bonus amount cannot be withdrawn, transferred to another account, or exchanged for other offers.",
              "Any trades or orders that are opened using the bonus amount are deemed to be \u201cbonus trades\u201d.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Profits from Bonus">
          <UL
            items={[
              "Profits earned from trading with the bonus amount can be withdrawn without any restrictions.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Losses and Margin Calls">
          <P>
            In the event of losses, the bonus amount will act as a buffer. If
            the account balance drops to the bonus amount or below, a margin
            call may be triggered. The bonus cannot be used to save a trade
            from a margin call beyond the bonus amount.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Bonus Expiry">
          <P>
            The welcome bonus will expire 60 days after it has been credited
            to the client&rsquo;s account. Post expiration, the bonus amount
            will be removed from the account, but any profits earned from it
            will remain.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Account Verification">
          <P>
            Clients are required to verify their account by providing the
            necessary identification documents before they can withdraw
            profits earned from the bonus.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Abuse and Fraud">
          <P>
            Any indication or suspicion of fraud, manipulation, cash-back
            arbitrage, or other forms of deceitful or fraudulent activity
            related to the welcome bonus will result in the immediate
            termination of the bonus and may also lead to account
            termination.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Amendments">
          <P>
            Finsai reserves the right to update or modify these terms and
            conditions without prior notice. It is the responsibility of the
            client to regularly check for any updates.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Acceptance of Terms">
          <P>
            By accepting the welcome bonus, clients also accept the terms and
            conditions associated with it. It is recommended for clients to
            read and understand these terms thoroughly before opting for the
            bonus.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="Section 2: Trading Competition">
        <LegalSubsection title="Eligibility">
          <UL
            items={[
              "The competition is open to all verified clients of Finsai.",
              "Participants must have made a minimum deposit of $500 and achieved a trading volume of at least $100,000 (equivalent to 1 Lot) since the time of their account verification to be eligible for the competition.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Competition Duration">
          <UL
            items={[
              "The competition will run on a weekly basis.",
              "Winners for each week will be declared on Wednesday of the following week.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Ranking and Prizes">
          <UL
            items={[
              "Prizes will be awarded to the top 3 rank holders (Rank 1, Rank 2, and Rank 3) based on their trading performance during the competition week.",
              "Prizes can be in the form of trading bonuses, direct cash transfers, gift vouchers, or other promotional items as determined by Finsai.",
              "Specific details about the prizes for each rank will be announced before the start of each competition week.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Usage of Bonus Prize">
          <UL
            items={[
              "If the prize is awarded in the form of a trading bonus, this bonus amount can only be used for trading purposes on Finsai.",
              "The bonus amount cannot be withdrawn, transferred to another account, or exchanged for other offers.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Determination of Winners">
          <P>
            Winners will be determined based on the highest profit generated
            during the competition week.
          </P>
          <P>
            In the event of a tie, where multiple traders achieve the same
            profit, the winner will be decided by the number of profitable
            trades executed. A trader with more consistent profitable trades
            will be ranked higher.
          </P>
          <P>
            <strong>For example:</strong> If Trader A and Trader B both
            generate a profit of $100, but Trader A achieves this with 2
            profitable trades of $50 each, while Trader B takes 3 trades with
            2 profitable trades of $60 each and a loss of $20 in one trade,
            Trader A will be considered the winner due to consistent
            profitability.
          </P>
        </LegalSubsection>

        <LegalSubsection title="Account Verification">
          <UL
            items={[
              "Only verified clients are eligible for the competition. Clients are required to verify their accounts by providing the necessary identification documents before participating.",
              "Profits or prizes earned from the competition can only be withdrawn or redeemed by verified clients.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Abuse and Fraud">
          <UL
            items={[
              "Any indication or suspicion of fraud, manipulation, or other forms of deceitful or fraudulent activity related to the competition will result in immediate disqualification from the competition and may also lead to account termination.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Amendments">
          <UL
            items={[
              "Finsai reserves the right to update or modify these terms and conditions without prior notice. It is the responsibility of the participants to regularly check for any updates.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Acceptance of Terms">
          <UL
            items={[
              "By participating in the competition, clients also accept the terms and conditions associated with it. Clients are advised to read and understand these terms thoroughly before participating.",
            ]}
          />
        </LegalSubsection>
      </LegalSection>
    </LegalLayout>
  );
}
