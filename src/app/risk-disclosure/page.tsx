import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  P,
  UL,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Risk Disclosure and Warnings Notice",
  description:
    "Finsai Trade Risk Disclosure and Warnings Notice describing the risks associated with trading CFDs, foreign exchange, cryptocurrencies and other financial instruments.",
};

export default function RiskDisclosurePage() {
  return (
    <LegalLayout title="Risk Disclosure and Warnings Notice">
      <LegalSection title="Part A — Risks Associated With All Financial Instruments">
        <P>&nbsp;</P>
      </LegalSection>

      <LegalSection title="1. Introduction">
        <P>
          1.1 This Risk Disclosure and Warning Notice
          (&ldquo;Notice&rdquo;) is provided to you (our Client and
          prospective Client) by Finsai Trade (Mauritius) Ltd (trading as
          FINSAI TRADE LTD), a private company limited by shares incorporated
          and validly existing under the laws of Mauritius, regulated by the
          Financial Services Commission Mauritius with license number GB25204899
          and registered under company number C228371 (&ldquo;the
          Company&rdquo;, &ldquo;we&rdquo;).
        </P>
        <P>
          1.2 All Clients and prospective Clients should read carefully the
          following risk disclosures and warnings contained in this Notice,
          before applying to the Company for a Trading Account and before
          they begin to accept any services from the Company. However, it
          is noted that this document cannot and does not disclose or
          explain all of the risks and other significant aspects involved
          in dealing in the Financial Instruments offered by the Company.
          This notice was designed to explain in general terms the nature
          of the risks involved when dealing in Financial Instruments on a
          fair and non-misleading basis.
        </P>
        <P>
          1.3 The Company executes Client Orders in relation to Contracts
          for Differences (&ldquo;CFDs&rdquo;) in stocks, commodities,
          indices and currency pairs (FX), cryptocurrencies, etc. The above
          products and services are intended for the Client target market
          of small to large scale investors with knowledge and experience
          of the industry who feel comfortable trading complex financial
          markets and who want to trade with money they can afford to lose
          and have high risk tolerance. Prospective Clients will understand
          the impact of, and risks associated with margin trading, its key
          concepts along with leverage and the potential to bear losses of
          the entire invested capital.
        </P>

        <LegalSubsection title="1.4 CFDs on Cryptocurrencies — Specific Risk Disclosure">
          <P>
            In addition to the general risks associated with trading
            Contracts for Difference (CFDs), trading CFDs on
            cryptocurrencies presents a number of unique and elevated
            risks:
          </P>
          <UL
            items={[
              <>
                <strong>High Volatility:</strong> Cryptocurrency prices may
                fluctuate dramatically within short periods of time due to
                speculation, news, regulatory changes, and market
                sentiment.
              </>,
              <>
                <strong>Leverage Risk:</strong> Trading crypto CFDs on
                leverage may increase potential profits, but it equally
                increases the potential for rapid and significant losses.
              </>,
              <>
                <strong>Market Liquidity Risk:</strong> During volatile
                periods, liquidity may sharply decline, resulting in wider
                spreads, execution delays, or inability to close positions.
              </>,
              <>
                <strong>Cybersecurity &amp; Operational Risk:</strong>{" "}
                Crypto assets may be affected by cyberattacks, blockchain
                bugs, wallet failures, or infrastructure outages, which can
                impact CFD valuations.
              </>,
              <>
                <strong>Regulatory and Legal Risk:</strong> The legal
                status of cryptocurrencies varies widely by jurisdiction
                and is subject to frequent changes, which may impact the
                availability or legality of crypto CFD trading.
              </>,
            ]}
          />
          <P>
            Crypto CFD products are complex, speculative, and may not be
            appropriate for all investors. They are not suitable for
            individuals who do not fully understand the associated risks
            or who lack the financial resilience to absorb significant
            losses.
          </P>
          <P>
            <strong>You must never trade with capital you cannot afford to lose.</strong>
          </P>
          <P>
            By engaging in crypto CFD trading with Finsai Trade Ltd, you
            confirm that you have reviewed and accepted these risk
            disclosures, and that such transactions are suitable for your
            investment profile.
          </P>
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="2. Charges and Taxes">
        <LegalSubsection title="CFDs on Cryptocurrencies — Additional Risk Disclosure">
          <P>
            Trading Contracts for Difference (&ldquo;CFDs&rdquo;) on
            cryptocurrencies involves significant risk and is not suitable
            for all investors. These digital assets are highly speculative
            and subject to extreme volatility, limited regulation,
            potential technological failures, and security vulnerabilities.
          </P>
          <P>
            By trading CFDs on cryptocurrencies with Finsai Trade Ltd, you
            acknowledge and accept the following:
          </P>
          <UL
            items={[
              "You are not purchasing the underlying cryptocurrency but are instead speculating on its price movements via leveraged instruments.",
              "Leverage can magnify your losses, and in some cases, you may lose more than your invested capital.",
              "Market events such as forks, exchange outages, or cybersecurity breaches can materially affect the valuation and execution of crypto CFD trades.",
              "Liquidity in cryptocurrency markets may decline sharply during periods of high volatility, resulting in delayed executions or wider spreads.",
              "You must assess whether such trading is appropriate for you based on your financial condition, investment objectives, experience level, and risk appetite.",
              "You must not trade with money you cannot afford to lose.",
            ]}
          />
          <P>
            By opening a trading account and initiating any CFD trades on
            cryptocurrencies with Finsai Trade Ltd, you confirm that you
            have read, understood, and agreed to the risks outlined in
            this agreement and assume full responsibility for all related
            trading outcomes.
          </P>
        </LegalSubsection>

        <P>
          2.1 The Provision of Services by the Company to the Client may be
          subject to fees, available on the Company&apos;s website{" "}
          <a
            href="https://www.finsaitrade.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
            www.finsaitrade.com
          </a>{" "}
          (&ldquo;the Website&rdquo;). Before the Client begins to trade,
          he/she should obtain details of all fees, commissions, and
          charges for which the Client may be liable. It is the
          Client&apos;s responsibility to check for any changes in the
          charges.
        </P>
        <P>
          2.2 If any charges are not expressed in monetary terms (but, for
          example, as a percentage or formula), the Client should ensure
          that he/she understands what such charges are likely to amount
          to.
        </P>
        <P>
          2.3 The Company may change its costs and associated charges at
          any time, according to the provisions of the Client Agreement
          found on the Company&apos;s Website.
        </P>
        <P>
          2.4 There is a risk that the Client&apos;s trades in any
          financial instruments may be or become subject to tax and/or any
          other duty for example because of changes in legislation or
          his/her personal circumstances. The Company does not warrant that
          no tax and/or any other stamp duty will be payable. The Company
          does not offer tax advice and recommends that the Client seek
          advice from a competent tax professional if the Client has any
          questions.
        </P>
        <P>
          2.5 The Client is responsible for any taxes and/or any other duty
          which may accrue in respect of his/her trades.
        </P>
        <P>2.6 It is noted that taxes are subject to change without notice.</P>
        <P>
          2.7 If required by applicable law, the Company shall deduct at
          source from any payments due to the Client such amounts as are
          required by the tax authorities to be deducted in accordance
          with applicable law.
        </P>
        <P>
          2.8 It is possible that other costs, including taxes, relating to
          Transactions carried out on the Trading Platform may arise for
          which the Client is liable, and which are neither paid via us
          nor imposed by the Company. Although it is the Client&apos;s
          sole and entire responsibility to account for tax due and without
          derogating from this, the Client agrees that the Company may
          deduct tax, as may be required by the applicable law, with
          respect to his trading activity on the Trading Platform. The
          Client is aware that the Company has a right of set-off against
          any amounts in the Client&apos;s Trading Account with respect to
          such tax deductions.
        </P>
        <P>
          2.9 It is noted that the Company&apos;s prices in relation to
          CFDs trading are set/quoted in accordance with the Company&apos;s
          internal policy. It is noted that Company&apos;s prices may be
          different from prices reported elsewhere. The prices displayed
          on the Company&apos;s Trading Platform reflect the last known
          available price at the moment prior to placing any Order;
          however, the actual execution price of the Order may differ, in
          accordance with the Company&apos;s internal policy and Client
          Agreement. As such, the price that the Client receives when
          he/she opens or closes a position may not directly correspond to
          real time market levels at the point in time at which the sale
          of the CFD occurs.
        </P>
      </LegalSection>

      <LegalSection title="3. Third Party Risks">
        <P>
          3.1 The Company may pass money received from the Client to a
          third party (e.g. an intermediate broker, a bank, a market, a
          settlement agent, a clearing house or OTC counterparty) to hold
          or control in order to affect a Transaction through or with that
          person or to satisfy the Client&apos;s obligation to provide
          collateral (e.g. initial margin requirement) in respect of a
          Transaction. The Company has no responsibility for any acts or
          omissions of any third party to whom it will pass money received
          from the Client.
        </P>
        <P>
          3.2 The financial institution to whom the Company will pass
          Client money may hold it in an omnibus account. In the event of
          the insolvency or any other analogous proceedings in relation to
          that financial institution, the Company may only have an
          unsecured claim against the financial institution on behalf of
          the Client, and the Client will be exposed to the risk that the
          money received by the Company from the financial institution is
          insufficient to satisfy the claims of the Client with claims in
          respect of the relevant account. The Company does not accept any
          liability or responsibility for any resulting losses. In general,
          accounts held with institutions, including omnibus account(s),
          face various risks, including the potential risk of being treated
          as one (1) account in case the financial institution in which
          the funds are held defaults.
        </P>
        <P>
          3.3 The Company may deposit Client money with a depository who
          may have a security interest, lien, or right of set-off in
          relation to that money.
        </P>
        <P>
          3.4 A bank or broker through whom the Company deals with could
          have interests contrary to the Client&apos;s interests.
        </P>
      </LegalSection>

      <LegalSection title="4. Insolvency">
        <P>
          4.1 The Company&apos;s insolvency or default or the insolvency
          or default of any parties involved in Transactions undertaken by
          the Company on the Client&apos;s behalf (including without
          limitation brokers, execution venues and liquidity providers),
          may lead to positions being liquidated or closed out without the
          Client&apos;s consent and as result the Client may suffer
          losses.
        </P>
      </LegalSection>

      <LegalSection title="5. Technical Risks">
        <P>
          5.1 The Client and not the Company shall be responsible for the
          risks of financial losses caused by failure, malfunction,
          interruption, disconnection, or malicious actions of information,
          communication, electricity, electronic or other systems, which
          are not the result of gross negligence or willful default of the
          Company.
        </P>
        <P>
          5.2 If the Client undertakes transactions on an electronic
          system, he/she will be exposed to risks associated with the
          system including the failure of hardware, software, servers,
          communication lines and internet failure. The result of any such
          failure may be that his Order is either not executed according
          to Client&apos;s instructions or it is not executed at all. The
          Company does not accept any liability in the case of such a
          failure.
        </P>
        <P>
          5.3 The Client acknowledges that the unencrypted information
          transmitted by e-mail is not protected from any unauthorized
          access.
        </P>
        <P>
          5.4 At times of excessive deal flow the Client may have some
          difficulties to be connected over the phone or the Company&apos;s
          Platform(s)/system(s), especially in fast market (for example,
          when key macroeconomic indicators or news are released).
        </P>
        <P>
          5.5 The Client acknowledges that the internet may be subject to
          events which may affect his access to the Company&apos;s Website
          and/or the Company&apos;s Trading Platform(s)/system(s),
          including but not limited to interruptions or transmission
          blackouts, software and hardware failure, internet
          disconnection, public electricity network failures or hacker
          attacks. The Company is not responsible for any damages or
          losses resulting from such events which are beyond its
          reasonable control or for any other losses, costs, liabilities,
          or expenses (including, without limitation, loss of profit) which
          may result from the Client&apos;s inability to access the
          Company&apos;s Website and/or Trading System or delay or failure
          in sending orders or Transactions.
        </P>
        <P>
          5.6 In connection with the use of computer equipment and data
          and voice communication networks, the Client bears the
          following risks amongst other risks in which cases the Company
          has no liability of any resulting loss:
        </P>
        <UL
          items={[
            "(a) Power cut of the equipment on the side of the Client or the provider, or communication operator (including voice communication) that serves the Client.",
            "(b) Physical damage (or destruction) of the communication channels used to link the Client and provider (communication operator), provider, and the trading or information server of the Client.",
            "(c) Outage (unacceptably low quality) of communication via the channels used by the Client, or the channels used by the provider, or communication operator (including voice communication) that are used by the Client or the Company.",
            "(d) Wrong or inconsistent with requirements settings of the Client Terminal.",
            "(e) Untimely update of the Client Terminal.",
            "(f) When carrying out transactions via the telephone (land or cell phone lines) voice communication, the Client runs the risk of problematic dialing, when trying to reach an employee of the Company due to communication quality issues and communication channel loads.",
            "(g) The use of communication channels, hardware and software, generates the risk of non-reception of a message (including text messages) by the Client from the Company.",
            "(h) Trading over the phone might be impeded by overload of connection.",
            "(i) Malfunction or non-operability of the Trading Platform, which also includes the Client Terminal.",
          ]}
        />
        <P>
          5.7 The Client may suffer financial losses caused by the
          materialization of the above risks; the Company accepts no
          responsibility or liability in the case of such a risk
          materializing and the Client shall be responsible for all
          related losses he may suffer.
        </P>
      </LegalSection>

      <LegalSection title="6. Trading Platform">
        <P>
          6.1 The Client is warned that when trading in an electronic
          Trading Platform he/she assumes risk of financial loss which may
          be a consequence of amongst other things:
        </P>
        <UL
          items={[
            "(a) Failure of Client's devices, software and poor quality of connection.",
            "(b) The Company's or Client's hardware or software failure, malfunction or misuse.",
            "(c) Improper work of Client's equipment.",
            "(d) Wrong setting of Client's Terminal.",
            "(e) Delayed updates of Client's Terminal.",
          ]}
        />
        <P>
          6.2 The Client acknowledges that only one Instruction is allowed
          to be in the queue at one time. Once the Client has sent an
          Instruction, a new Instruction can be given to the Company.
        </P>
        <P>
          6.3 The Client acknowledges that the only reliable source of
          Quotes Flow information is that of the live Server&apos;s Quotes
          Base. Quotes Base in the Client Terminal is not a reliable
          source of Quotes Flow information because the connection between
          the Client Terminal and the Server may be disrupted at some
          point and some of the Quotes simply may not reach the Client
          Terminal.
        </P>
        <P>
          6.4 The Client acknowledges that when the Client closes the
          order placing/deleting window or the position opening/closing
          window, an Instruction which has been sent to the Server shall
          not be cancelled.
        </P>
        <P>
          6.5 Orders may be executed one at a time while being in the
          queue. Multiple orders from the same Trading Account at the same
          time may not be executed.
        </P>
        <P>
          6.6 The Client acknowledges that when the Client closes the
          Order, it shall not be cancelled.
        </P>
        <P>
          6.7 In case the Client has not received as a result of Force
          Majeure Events the execution of the previously sent Order but
          decides to repeat the Order, the Client shall accept the risk of
          making two Transactions instead of one.
        </P>
        <P>
          6.8 The Client acknowledges that if a Pending Order in a CFD has
          already been executed but the Client sends an instruction to
          modify its level, the only instruction that will be executed is
          the instruction to modify Stop Loss and/or Take Profit levels on
          the position opened when the Pending Order triggered.
        </P>
      </LegalSection>

      <LegalSection title="7. Force Majeure Events">
        <P>
          7.1 In case of a Force Majeure Event the Company may not be in a
          position to arrange for the execution of Client Orders or fulfil
          its obligations under the Client Agreement with the Client found
          on the Company&apos;s Website. As a result, the Client may
          suffer financial loss.
        </P>
        <P>
          7.2 The Company will not be liable or have any responsibility
          for any type of loss or damage arising out of any failure,
          interruption, or delay in performing its obligations under the
          Client Agreement where such failure, interruption or delay is
          due to a Force Majeure Event.
        </P>
      </LegalSection>

      <LegalSection title="8. Communication between the Client and the Company">
        <P>
          8.1 The Client shall accept the risk of any financial losses
          caused by the fact that the Client has received with delay or
          has not received at all any notice from the Company.
        </P>
        <P>
          8.2 The Client acknowledges that the unencrypted information
          transmitted by e-mail is not protected from any unauthorized
          access.
        </P>
        <P>
          8.3 The Company has no responsibility if unauthorized third
          persons obtain illegal access to information, including
          electronic addresses, electronic communication and personal
          data, access data when the above are transmitted between the
          Company and the Client or when using the internet or other
          network communication facilities, telephone, or any other
          electronic means.
        </P>
        <P>
          8.4 The Client is fully responsible for the risks in respect of
          undelivered Company Online Trading System internal mail messages
          sent to the Client by the Company.
        </P>
      </LegalSection>

      <LegalSection title="9. Abnormal Market Conditions">
        <P>
          9.1 The Client acknowledges that under Abnormal Market
          Conditions the period during which the Orders are executed may
          be extended or it may be impossible for Orders to be executed at
          declared prices or may not be executed at all.
        </P>
        <P>
          9.2 Abnormal Market Conditions include but are not limited to
          times of rapid price fluctuations of the price, rises or falls
          in one trading session to such an extent that, under the rules
          of the relevant exchange, trading is suspended or restricted, or
          there is a lack of liquidity, or this may occur at the opening
          of trading sessions.
        </P>
      </LegalSection>

      <LegalSection title="10. Foreign Currency">
        <P>
          10.1 When a Financial Instrument is traded in a currency other
          than the currency of the Client&apos;s country of residence
          and/or Trading Account, any changes in the exchange rates may
          have a negative effect on its value, price and performance and
          may lead to losses for the Client.
        </P>
      </LegalSection>

      <LegalSection title="11. Regulatory and Legal Risk">
        <P>
          11.1 A change in laws and regulations may materially impact a
          Financial Instrument and investments in a sector or market. A
          change in laws or regulations made by a government or a
          regulatory body or a decision reached by a judicial body can
          increase business operational costs, lessen investment
          attractiveness, change the competitive landscape and as such
          alter the profit possibilities of an investment. This risk is
          unpredictable and may vary from market to market.
        </P>
      </LegalSection>

      <LegalSection title="Part B — General Information on Risks Associated With Specific Financial Instruments">
        <P>&nbsp;</P>
      </LegalSection>

      <LegalSection title="12. Introduction">
        <P>
          Trading CFDs can put the Client&apos;s capital at risk,
          especially if used in a speculative manner. CFDs are categorized
          as high-risk complex Financial Instruments and Clients may lose
          the amount invested. The investment decisions made by the
          Clients are subject to various markets, currency, economic,
          political, business risks etc., and will not necessarily be
          profitable. The Client acknowledges and without any reservation
          accepts that, notwithstanding any general information which may
          have been given by the Company, the value of any investment in
          Financial Instruments may fluctuate either upwards or downwards.
        </P>
        <P>
          The Client acknowledges and without any reservation accepts the
          existence of a substantial risk of incurring losses and damages
          as a result of buying or selling any Financial Instrument and
          acknowledges his willingness to take such risk. Set out below is
          an outline of the major risks and other significant aspects of
          CFDs trading.
        </P>
      </LegalSection>

      <LegalSection title="13. Risk over trading in CFDs">
        <P>
          13.1 Trading in CFDs is{" "}
          <strong>VERY SPECULATIVE AND HIGHLY RISKY</strong> and is not
          suitable for all members of the general public but only for
          those investors who:
        </P>
        <UL
          items={[
            "(a) understand and are willing to assume the economic, legal and other risks involved.",
            "(b) taking into account their personal financial circumstances, financial resources, lifestyle and obligations are financially able to assume the loss of their entire investment.",
            "(c) have the knowledge to understand CFDs trading and the Underlying assets and Markets.",
          ]}
        />
        <P>
          13.2 The Company will not provide the Client with any advice
          relating to CFDs, the Underlying Assets and Markets or make
          investment recommendations including occasions where the Client
          shall request such advice and/or recommendation. However, the
          Company may provide the Client with information and tools
          produced by third parties on an &ldquo;as is&rdquo; basis (i.e.
          the Company does not approve, or endorse, or affect the said
          information and or tools), which may be indicative of trading
          trends or trading opportunities. The Client accepts and
          understands that taking any actions based on the information
          and/or tools provided by third parties may result in losses
          and/or general reduction of the value of the Client&apos;s
          assets. The Company does not accept liability for any such
          losses resulting from actions taken by the Client on the basis
          of information and/or tools produced by third parties, including
          but not limited to introducing brokers, consultants, advisors,
          and MT expert advisors.
        </P>
        <P>
          13.3 CFDs are derivative financial instruments deriving their
          value from the prices of the underlying assets/markets in which
          they refer to (for example currency, equity indices, stocks,
          metals, indices futures, forwards etc.). It is important,
          therefore, that the Client understands the risks associated with
          trading in the relevant underlying asset/market because
          fluctuations in the price of the underlying asset/market will
          affect the profitability of his trade.
        </P>
        <P>
          13.4 Information on the previous performance of CFDs, the
          Underlying Assets and Markets does not guarantee its current
          and/or future performance. The use of historical data does not
          constitute a binding or safe forecast as to the corresponding
          future performance of the CFDs to which the said information
          refers.
        </P>
      </LegalSection>

      <LegalSection title="14. Leverage and Gearing">
        <P>
          14.1 Transactions in foreign exchange and derivative Financial
          Instruments carry a high degree of risk. The amount of initial
          margin may be small relative to the value of the foreign exchange
          or derivatives contract so that transactions are
          &ldquo;leveraged&rdquo; or &ldquo;geared&rdquo;. The Leverage
          with the Company conducting the brokerage activities can often
          be as high as 1:500, and thus there is a high risk of losing
          money rapidly due to leverage.
        </P>
        <P>
          14.2 A relatively small market movement will have a
          proportionately larger impact on the funds the Client has
          deposited or will have to deposit; this may work against the
          Client as well as for the Client. The Client may sustain a total
          loss of initial Margin funds and any additional funds deposited
          with the Company to maintain his/her position. If the market
          moves against the Client&apos;s position and/or Margin
          requirements are increased, the Client may be called upon to
          deposit additional funds on short notice to maintain his
          position. Failing to comply with a request for a deposit of
          additional funds may result in closure of his/her position(s) by
          the Company on his/her behalf and he will be liable for any
          resulting loss or deficit. It is the Client&apos;s
          responsibility to monitor his trading activity and identify
          whether he should deposit additional funds to maintain any open
          positions.
        </P>
      </LegalSection>

      <LegalSection title="15. Risk-reducing Orders or Strategies">
        <P>
          15.1 The placing of certain Orders (e.g. &ldquo;Stop Loss&rdquo;
          orders, where permitted under local law, or &ldquo;Stop
          Limit&rdquo; Orders), which are intended to limit losses to
          certain amounts, may not be adequate given that market
          conditions make it impossible to execute such Orders, e.g. due
          to illiquidity in the market. Strategies using combinations of
          positions, such as &ldquo;spread&rdquo; and &ldquo;straddle&rdquo;
          positions may be as risky as taking simple &ldquo;long&rdquo; or
          &ldquo;short&rdquo; positions. Therefore, Stop Limit and Stop
          Loss Orders cannot guarantee the limit of loss.
        </P>
        <P>15.2 Trailing Stops and Expert Advisors cannot guarantee the limit of loss.</P>
      </LegalSection>

      <LegalSection title="16. Volatility">
        <P>
          16.1 Some Financial Instruments trade within wide intraday ranges
          with volatile price movements. Therefore, the Client must
          carefully consider that there is a high risk of losses. The
          price of a Financial Instrument is derived from the price of the
          Underlying Asset in which the Financial Instruments refers to.
          Financial Instruments and related Underlying Markets can be
          highly volatile. The prices of Financial Instruments and the
          Underlying Asset may fluctuate rapidly and over wide ranges and
          may reflect unforeseeable events or changes in conditions, none
          of which can be controlled by the Client or the Company. Under
          certain market conditions, it may be impossible for a Client
          Order to be executed at declared prices leading to losses. The
          prices of Financial Instruments and the Underlying Assets will
          be influenced by, amongst other things, changing supply and
          demand relationships, governmental, agricultural, commercial and
          trade programs and policies, national and international
          political and economic events and the prevailing psychological
          characteristics of the relevant marketplace.
        </P>
      </LegalSection>

      <LegalSection title="17. Margin">
        <P>
          17.1 The Client acknowledges and accepts that, regardless of any
          information which may be offered by the Company, the value of
          Derivative Financial Instruments may fluctuate downwards or
          upwards and it is even probable that the investment may become
          of no value. This is owed to the margining system applicable to
          such trades, which generally involves a comparatively modest
          deposit or margin in terms of the overall contract value, so
          that a relatively small movement in the Underlying Market can
          have a disproportionately dramatic effect on the Client&apos;s
          trade. If the Underlying Market movement is in the
          Client&apos;s favour, the Client may achieve a good profit, but
          an equally small adverse market movement can not only quickly
          result in the loss of the Client&apos;s entire deposit but may
          also expose the Client to a large additional loss.
        </P>
      </LegalSection>

      <LegalSection title="18. Liquidity">
        <P>
          18.1 Some of the Underlying Assets may not become immediately
          liquid as a result of reduced demand for the Underlying Asset,
          and the Client may not be able to obtain information on the
          value of these or the extent of the associated risks.
        </P>
      </LegalSection>

      <LegalSection title="19. Contracts for Differences">
        <P>
          19.1 The CFDs available for trading with the Company are
          non-deliverable spot transactions giving an opportunity to make
          profit on changes in the Underlying Asset (cash indices, index
          futures, commodity futures, spot crude oil, spot gold, spot
          silver, single stocks, currencies or any other asset according
          to the Company&apos;s discretion from time to time). Subject to
          the negative balance protection provisions of the Client
          Agreement as per clause 17.3 of the same, if the Underlying
          Asset movement is in the Client&apos;s favour, the Client may
          achieve a good profit, but unequally small adverse market
          movement can not only quickly result in the loss of the
          Client&apos;s entire deposit but also any additional commissions
          and other expenses incurred. So, the Client must not enter into
          CFD trading unless he/she is willing to undertake the risks of
          losing all the money which he/she has invested entirely, in
          addition to any additional commissions and other expenses
          incurred, subject to the negative balance protection provisions
          of the Client Agreement.
        </P>
        <P>
          19.2 Investing in a Contract for Differences carries the same
          risks as investing in a future or an option and the Client
          should be aware of these as set out above. Transactions in
          Contracts for Differences may also have a contingent liability
          and the Client should be aware of the implications of this as
          set out below under &ldquo;Contingent Liability Investment
          Transactions&rdquo;.
        </P>
      </LegalSection>

      <LegalSection title="20. Off-exchange transactions in Derivative Financial Instruments">
        <P>
          20.1 CFDs offered by the Company are off-exchange transactions
          (i.e. over-the-counter). The trading conditions are set by us,
          subject to any obligations to act reasonably and in accordance
          with our Client Agreement. Each CFD order that the Client opens
          through our Trading Platform results in the entering of an Order
          with the Company; such Orders can only be closed with the
          Company and are not transferable to any other person.
        </P>
        <P>
          20.2 While some off-exchange markets are highly liquid,
          transactions in off-exchange or non-transferable derivatives may
          involve greater risk than investing in on-exchange derivatives
          because there is no exchange market on which to close out an
          Open Position. It may be impossible to liquidate an existing
          position, to assess the value of the position arising from an
          off-exchange transaction, or to assess the exposure to risk.
          Prices need not be quoted, and, even where they are, they will
          be established by dealers in these instruments and consequently
          it may be difficult to establish what a fair price is.
        </P>
        <P>
          20.3 In regard to transactions in CFDs, the Company is using an
          Online Trading System for transactions in CFDs which does not
          fall into the definition of a recognized exchange and so does
          not have the same protection.
        </P>
      </LegalSection>

      <LegalSection title="21. Contingent Liability Investment Transactions">
        <P>
          21.1 Contingent liability investment transactions, which are
          margined, require the Client to make a series of payments
          against the purchase price, instead of paying the whole purchase
          price immediately. The Margin requirement will depend on the
          underlying asset of the Financial Instrument. Margin
          requirements can be fixed or calculated from the current price
          of the underlying instrument and can be found on the website of
          the Company.
        </P>
        <P>
          21.2 If the Client trades in futures or Contracts for
          Differences, he/she may sustain a total loss of the funds he/she
          has deposited to open and maintain a position. If the market
          moves against the Client, he/she may be called upon to pay
          substantial additional funds at short notice to maintain the
          position. If the Client fails to do so within the time
          required, his/her position may be liquidated at a loss, and he
          will be responsible for the resulting deficit. It is noted that
          the Company will not have a duty to notify the Client of any
          Margin Call to sustain a loss-making position.
        </P>
        <P>
          21.3 Even if a transaction is not margined, it may still carry an
          obligation to make further payments in certain circumstances
          over and above any amount paid when the Client entered the
          contract.
        </P>
        <P>
          21.4 Contingent liability investment transactions that are not
          traded on or under the rules of a recognized or designated
          investment exchange may expose the Client to substantially
          greater risks.
        </P>
      </LegalSection>

      <LegalSection title="22. Suspensions of Trading">
        <P>
          22.1 Under certain trading conditions it may be difficult or
          impossible to liquidate a position. This may occur, for example,
          at times of rapid price movement if the price rises or falls in
          one trading session to such an extent that under the rules of
          the relevant exchange, trading is suspended or restricted.
          Placing a Stop Loss will not necessarily limit the
          Client&apos;s losses to the intended amounts, because market
          conditions may make it impossible to execute such an Order at
          the stipulated price. In addition, under certain market
          conditions the execution of a Stop Loss Order may be worse than
          its stipulated price and the realized losses can be larger than
          expected.
        </P>
      </LegalSection>

      <LegalSection title="23. No Delivery">
        <P>
          23.1 It is understood that the Client has no rights or
          obligations in respect to the Underlying Assets relating to the
          CFDs he is trading. There is no delivery of the underlying
          asset.
        </P>
      </LegalSection>

      <LegalSection title="24. Slippage">
        <P>
          24.1 Slippage is the difference between the expected price of a
          Transaction in Financial Instruments and the price the
          Transaction is actually executed at. Slippage often occurs
          during periods of higher volatility (for example due to news
          events) making an Order at a specific price impossible to
          execute, when market orders are used, and also when large Orders
          are executed when there may not be enough interest at the
          desired price level to maintain the expected price of trade.
        </P>
      </LegalSection>

      <LegalSection title="25. Risk in Assets other than Forex and CFDs">
        <LegalSubsection title="25.1 Social Trading">
          <P>
            Social trading involves following and replicating the trading
            strategies of experienced traders. While it offers potential
            benefits, such as gaining insights from experts, it also
            carries several risks, including:
          </P>
          <UL
            items={[
              <>
                <strong>Market Volatility:</strong> The financial markets
                can be highly volatile, and the past performance of
                traders does not guarantee future results.
              </>,
              <>
                <strong>Risk of Loss:</strong> As with any investment,
                there is a risk of losing part or all of your capital,
                especially if traders you follow experience losses.
              </>,
              <>
                <strong>Lack of Control:</strong> By delegating trading
                decisions to others, you give up control over your
                investments, which may not align with your risk tolerance
                or financial goals.
              </>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="25.2 PAMM & MAM Accounts">
          <P>
            PAMM (Percentage Allocation Management Module) and MAM
            (Multi-Account Manager) accounts allow professional money
            managers to trade on behalf of multiple investors. However,
            investing in such accounts carries the following risks:
          </P>
          <UL
            items={[
              <>
                <strong>Manager Risk:</strong> The success of your
                investment depends on the skills and decisions of the
                money manager. Poor performance by the manager can lead
                to losses.
              </>,
              <>
                <strong>Lack of Transparency:</strong> The trading
                strategies and positions of the money manager may not
                always be fully transparent.
              </>,
              <>
                <strong>Potential Conflicts of Interest:</strong> The
                money manager may have interests that differ from those
                of the investors.
              </>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="25.3 Real Estate Crowdfunding">
          <P>
            Real estate crowdfunding platforms allow you to invest in real
            estate projects alongside other investors. While it presents
            an opportunity to diversify, there are certain risks involved:
          </P>
          <UL
            items={[
              <>
                <strong>Market Fluctuations:</strong> Real estate values
                can fluctuate, affecting the potential return on your
                investment.
              </>,
              <>
                <strong>Liquidity Risk:</strong> Real estate investments
                may not be easily liquidated, and you may not be able to
                access your funds quickly.
              </>,
              <>
                <strong>Project-Specific Risks:</strong> Each real estate
                project may have its unique risks, such as construction
                delays, regulatory changes, or tenant vacancies.
              </>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="25.4 Crypto Spots Trading">
          <P>
            Cryptocurrencies are highly volatile and speculative assets.
            Spot trading involves buying and selling cryptocurrencies for
            immediate settlement. The risks include:
          </P>
          <UL
            items={[
              <>
                <strong>Price Volatility:</strong> Cryptocurrency prices
                can experience significant and rapid fluctuations,
                leading to potential gains or losses.
              </>,
              <>
                <strong>Lack of Regulation:</strong> The cryptocurrency
                market is relatively new and may not be subject to the
                same regulatory protections as traditional financial
                markets.
              </>,
              <>
                <strong>Security Risks:</strong> The risk of hacking,
                fraud, or technical glitches may result in the loss of
                your cryptocurrencies.
              </>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="25.5 Investment in Active and Passive Funds">
          <P>
            Active funds are managed by professional portfolio managers
            who aim to outperform the market, while passive funds aim to
            replicate the performance of a specific index. Consider the
            following risks:
          </P>
          <UL
            items={[
              <>
                <strong>Performance Risk:</strong> Active funds may not
                always outperform the market, and passive funds may not
                perfectly track their benchmark index.
              </>,
              <>
                <strong>Management Fees:</strong> Both active and passive
                funds may charge management fees that can impact your
                overall returns.
              </>,
              <>
                <strong>Market Risk:</strong> All investment funds are
                subject to market fluctuations, which can affect the
                value of your investment.
              </>,
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection title="26. Advice and Recommendations">
        <P>
          26.1 The Company will not advise the Client about the merits of
          a particular Transaction or give him/her any form of investment
          advice and the Client acknowledges that the Services do not
          include the provision of investment advice in CFDs or the
          Underlying Assets and Markets. The Client alone will enter into
          Transactions and take relevant decisions based on his/her own
          judgement. In asking the Company to enter into any Transaction,
          the Client represents that he/she has been solely responsible
          for making his/her own independent appraisal and investigation
          into the risks of the Transaction. He/she represents that
          he/she has sufficient knowledge, market sophistication,
          professional advice and experience to make his/her own
          evaluation of the merits and risks of any Transaction. The
          Company gives no warranty as to the suitability of the products
          traded under this Agreement and assumes no fiduciary duty in
          its relations with the Client.
        </P>
        <P>
          26.2 The Company will not be under any duty to provide the
          Client with any legal, tax or other advice relating to any
          Transaction. The Client should seek independent expert advice
          if he/she is in any doubt as to whether he may incur any tax
          liabilities. The Client is hereby warned that tax laws are
          subject to change from time to time.
        </P>
        <P>
          26.3 The Company may, from time to time and at its discretion,
          provide the Client (or in newsletters which it may post on its
          Website or provide to subscribers via its Website or the
          Trading Platform or otherwise) with information, news, market
          commentary or other information but not as a service. Where it
          does so:
        </P>
        <UL
          items={[
            "(a) The Company will not be responsible for such information;",
            "(b) The Company gives no representation, warranty or guarantee as to the accuracy, correctness or completeness of such information or as to the tax or legal consequences of any related Transaction;",
            "(c) This information is provided solely to enable the Client to make his/her own investment decisions and does not amount to investment advice or unsolicited financial promotions to the Client;",
            "(d) If the document contains a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, the Client agrees that he will not pass it on to any such person or category of persons;",
            "(e) The Client accepts that prior to dispatch, the Company may have acted upon itself to make use of the information on which it is based. The Company does not make representations as to the time of receipt by the Client and cannot guarantee that he will receive such information at the same time as other clients.",
          ]}
        />
        <P>
          26.4 It is understood that market commentary, news, or other
          information provided or made available by the Company are
          subject to change and may be withdrawn at any time without
          notice.
        </P>
      </LegalSection>

      <LegalSection title="27. No Guarantees of Profit">
        <P>
          27.1 The Company provides no guarantees of profit nor of avoiding
          losses when trading in Financial Instruments. The Company cannot
          guarantee the future performance of the Client&apos;s Trading
          Account, promise any specific level of performance or promise
          that the Client&apos;s investment decisions and strategies will
          be successful/profitable. The Client has received no such
          guarantees from the Company or from any of its representatives.
          The Client is aware of the risks inherent in trading in
          Financial Instruments and is financially able to bear such risks
          and withstand any losses incurred. The Client acknowledges and
          accepts that there may be other additional risks apart from
          those mentioned above.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
