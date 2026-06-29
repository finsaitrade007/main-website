import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  LegalLayout,
  LegalSection,
  LegalSubsection,
  P,
  UL,
} from "@/components/LegalLayout";
import { FINSAI_COMPANY_REG_NO, FINSAI_LICENSE_NO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Agreement",
  description:
    "Finsai Trade Client Agreement: the binding terms and conditions governing the use of our trading platform, services and the relationship between the Company and the Client.",
};

function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <P>
      <strong>&ldquo;{term}&rdquo;</strong> {children}
    </P>
  );
}

export default function ClientAgreementPage() {
  return (
    <LegalLayout title="Client Agreement">
      <LegalSection>
        <P>
          This Client Agreement is entered by and between FINSAI TRADE LTD,
          a private limited company incorporated and validly existing under
          the laws of Mauritius License No. {FINSAI_LICENSE_NO}, registered under
          Company Number {FINSAI_COMPANY_REG_NO} (&ldquo;Company&rdquo; or &ldquo;we&rdquo;
          or &ldquo;us&rdquo;), on the one part, and the Client (which may
          be a legal entity or a natural person), who has completed the
          online account opening application form and has been accepted by
          the Company as a client (&ldquo;Client&rdquo;) on the other part.
        </P>
        <P>
          When we refer to &ldquo;you&rdquo; and &ldquo;your&rdquo; we mean
          the Client of the Company who is a licensed user of our trading
          platform or any visitor to our official website{" "}
          <a
            href="https://www.finsaitrade.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
            www.finsaitrade.com
          </a>{" "}
          (&ldquo;Website&rdquo;) who is not a Client of the Company. If
          you decide to download our software to use the trading
          demonstration then the terms and conditions within this document
          (to the extent applicable) apply to you and by downloading the
          software you accept the same and agree to abide by the terms and
          conditions herein, although you shall not be treated as our
          client, and we shall have no obligations towards you.
        </P>
        <P>
          The Client acknowledges that he/she took sufficient time to
          carefully read and understand the terms and conditions of this
          Client Agreement, as amended from time to time, in addition to
          any legal documents and agreement provided in the Company&apos;s
          Website. By accepting the Client Agreement, through the online
          process or application for the opening of a trading account, the
          Client enters into a binding legal agreement and relationship
          with the Company.
        </P>
        <P>
          This Client Agreement together with its appendixes, any other
          legal document and agreement available in the Company&apos;s
          Website, including but not limited to the Risk Disclosures, the
          Loyalty Reward Program Terms and Conditions and any other
          agreement entered into between the Company and the Client
          (together the &ldquo;Agreement&rdquo;), as amended from time to
          time, set out the terms upon which the Company will offer
          services to the Client and shall govern the relationship between
          the parties. It is noted that additional agreements may be signed
          between the Company and the Client, apart from the ones that are
          published on the Website of the Company.
        </P>
        <P>
          The Client should read all the above-mentioned documents which
          form the Agreement and any other letters or notices sent by the
          Company carefully as well as the various documents found on the
          Website and make sure that he/she understands and agrees with all
          of them before accepting the Agreement.
        </P>
        <P>
          You accept the terms and conditions of the Agreement when you
          complete and submit the account opening application form.
        </P>
        <P>
          You further accept that by accepting the terms and conditions of
          this Agreement by means of registering on our website and/or
          submitting an account opening application form, you agree to be
          automatically bound by the terms and conditions of the Loyalty
          Reward Program, available on the Company&apos;s Website.
        </P>
        <P>
          The Company may provide the above documents in languages other
          than English. Translation or information provided in languages
          other than English is for informational purposes only and do not
          bind the Company or have any legal effect whatsoever, the
          Company having no responsibility or liability regarding the
          correctness of the information therein and the Client should
          also refer to the English version and the Website of the Company
          for information on the Company and its policies.
        </P>
        <P>
          For any questions or notices, you may contact the Company at:
          <br />
          <strong>Address:</strong> 3 Emerald Park, Trianon, Quatre Bornes
          72257, MAURITIUS
        </P>
        <P>
          By accepting the current Agreement, you confirm that you are
          able and agree to receive information, including any amendments
          to the present Agreement, either via email or through the
          Website.
        </P>
      </LegalSection>

      <LegalSection title="1. Definitions">
        <P>1.1. In this Agreement:</P>

        <Definition term="Abusive Trading">
          shall mean the following actions, but not limited to,
          manipulations or exploitation of any temporal and/or minor
          inaccuracy in any rate or price offered on the Trading Platform,
          a combination of faster/slower feeds, use of any robots, spiders
          or other automated data entry system with the Trading Platform
          (unless the Client receives express written consent by the
          Company prior to activating the robot), violation of the
          Client&apos;s obligations under paragraph 2 of Appendix.
        </Definition>

        <Definition term="Account Credentials">
          shall mean a unique username and password used by you to access
          and use the Trading Platform.
        </Definition>

        <Definition term="Affiliate">
          shall mean in relation to the Company, any legal entity or a
          natural person obtaining remuneration from the Company for
          acting as mediator between Prospective Clients and the Company
          and carrying out activities deemed necessary for the conclusion
          of an agreement between the Company and its Client, as per the
          provisions of a separate Affiliate Agreement, for the purpose of
          introducing clients to the Company.
        </Definition>

        <Definition term="Agreement">
          shall mean this &ldquo;Client Agreement&rdquo; with its
          Appendixes and any other legal document and agreement available
          in the Company&apos;s Website, including but not limited to the
          risk disclosures, the PAMM account terms agreement, the MAM
          agreement, and any other agreement entered into between the
          Company and the Client, as amended from time to time and any
          subsequent Appendixes added thereto.
        </Definition>

        <Definition term="Authorized Person">
          shall mean you or any of your officers, partners, principals,
          representatives or employees.
        </Definition>

        <Definition term="Applicable Regulations">
          shall mean (a) any rules of a relevant regulatory authority
          having powers over the Company; (b) the rules of the relevant
          market; and (c) all other applicable laws, rules and regulations
          of the Mauritius.
        </Definition>

        <Definition term="Base Currency">
          shall mean in an FX Contract the first currency in the Currency
          Pair against which the Client buys or sells the Quote Currency.
        </Definition>

        <Definition term="Business Day">
          shall mean any day, other than a Saturday or a Sunday, or any
          national or international holidays in Republic of Mauritius.
        </Definition>

        <Definition term="Buy">
          shall mean a Transaction in FX, CFD and Crypto Spots that is
          opened by offering to buy a specific number of a certain
          Underlying Asset and may also in our dealings with you in FX,
          CFDs and Crypto Spots, be referred to as a &ldquo;long&rdquo; or
          &ldquo;Long Position&rdquo;.
        </Definition>

        <Definition term="Client Area">
          a section on the Company&apos;s website dedicated to each Client
          containing information addressed to the specific Client and
          through which the Company and the Client may interact.
        </Definition>

        <Definition term="Contract for Difference or CFD">
          shall mean the Financial Instrument which is a contract between
          the parties (described as &ldquo;buyer&rdquo; and
          &ldquo;seller&rdquo;), stipulating that the seller will pay to
          the buyer the difference between the current value of an
          Underlying Asset and its value at a future time; if the
          difference is negative, then the buyer pays instead to the
          seller.
        </Definition>

        <Definition term="Currency Pair">
          shall mean the object or Underlying Asset of an FX Contract
          based on the change in the value of one currency against the
          other. A Currency Pair consists of two currencies (the Quote
          Currency and the Base Currency) and shows how much of the Quote
          currency is needed to purchase one unit of the Base Currency.
        </Definition>

        <Definition term="Crypto spot">
          shall mean buying or selling of cryptocurrencies for immediate
          settlement and delivery. When trading in the spot market, the
          transaction is executed &ldquo;on the spot,&rdquo; meaning the
          cryptocurrency is bought or sold at the current market price,
          and the ownership is transferred immediately.
        </Definition>

        <Definition term="Event of Default">
          shall have the meaning given in paragraph 25.1 of this Client
          Agreement.
        </Definition>

        <Definition term="Difference">
          shall mean in an FX and CFD the difference in price upon the
          opening of a Transaction and the closing of such Transaction.
        </Definition>

        <Definition term="Expert Advisor">
          shall mean a mechanical online trading system designed to
          automate trading activities on an electronic trading platform
          such as the Company&apos;s Trading Platform. It can be
          programmed to alert the Client of a trading opportunity and can
          also trade his Trading Account automatically managing all
          aspects of trading operations from sending orders directly to
          the Trading Platform to automatically adjusting stop loss,
          Trailing Stops and take profit levels.
        </Definition>

        <Definition term="Expiry Date">
          shall mean the date set specified on the Trading Platform with
          respect to certain Underlying Asset upon which any open
          Transaction for such Underlying Asset shall expire automatically.
        </Definition>

        <Definition term="Financial Data">
          shall mean any financial and market data, price quotes, news,
          analyst opinions, research reports, signals, graphs or any other
          data or information whatsoever available through the Trading
          Platform.
        </Definition>

        <Definition term="Financial Institution">
          shall mean banks, financial institutions, brokers, electronic
          money institutions or other trading organizations.
        </Definition>

        <Definition term="Financial Instrument">
          shall mean the financial instruments offered by the Company.
        </Definition>

        <Definition term="Force Majeure Event">
          shall have the meaning as set out in paragraph 15.1 of this
          Client Agreement.
        </Definition>

        <Definition term="FX Contract or FX">
          shall mean the type of CFD where the Underlying Asset is a
          Currency Pair. Hence, any mention to CFDs in this Agreement also
          covers FX Contracts. So, although, FX Contracts are included in
          the definition of CFDs, they may be mentioned separately in this
          Agreement and/or on the Company Website and various Company
          policies.
        </Definition>

        <Definition term="Initial Margin">
          shall mean the minimum amount of money required in your Trading
          Account in order to open a Transaction, as specified on the
          Trading Platform from time to time for each specific Underlying
          Asset.
        </Definition>

        <Definition term="Intellectual Property Rights">
          shall mean patents, trademarks, service marks, trade names,
          logos, software code, icons, characters, layouts, trade names,
          trade secrets, buttons, color scheme, internet domain names,
          rights in designs, copyright (including rights in computer
          software), database rights, semi-conductor topography rights,
          utility models, rights in know-how and other intellectual
          property rights, in each case whether registered or unregistered
          and including applications for registration, and all other
          rights or forms of protection having equivalent or similar
          effect anywhere in the world.
        </Definition>

        <Definition term="Introducer">
          shall have the same meaning as the Affiliate.
        </Definition>

        <Definition term="Investment Services">
          shall mean the Investment Services that the Company provides,
          and which can be found on the Website.
        </Definition>

        <Definition term="Islamic Trading Account">
          shall mean trading account opened by Clients who cannot earn or
          pay interest due to their religious Islamic beliefs, which are
          also known as swap free accounts.
        </Definition>

        <Definition term="Long Position">
          for FX and CFD trading shall mean a buy position that
          appreciates in value if underlying market prices increase. For
          example, in respect of Currency Pairs: buying the Base Currency
          against the Quote Currency.
        </Definition>

        <Definition term="Limit Order">
          shall have the meaning as set out in paragraph 2.3 of the
          Appendix hereto.
        </Definition>

        <Definition term="Maintenance Margin">
          shall mean the minimum amount of money required in your Trading
          Account as specified on the Trading Platform in order to keep a
          Transaction open on the Trading Platform.
        </Definition>

        <Definition term="Manifest Error">
          shall mean any error that we reasonably believe to be obvious or
          palpable, including without limitation, offers to execute
          Transactions for exaggerated volumes of Underlying Assets or at
          manifestly incorrect market price quotes or prices at a clear
          loss.
        </Definition>

        <Definition term="Margin">
          shall mean the Initial Margin and the Maintenance Margin
          collectively.
        </Definition>

        <Definition term="Margin Call">
          shall mean a demand by us for you to increase the amount of
          money in your Trading Account to satisfy our Margin
          requirements, from time to time in our sole and absolute
          discretion, including without limitation a call under paragraph
          12.2 of this Client Agreement.
        </Definition>

        <Definition term="Market Order">
          shall mean Orders which are executed at the best available
          market price.
        </Definition>

        <Definition term="Normal Market Size">
          shall mean the maximum number of Underlying Assets that we
          believe, in our sole discretion, an Underlying Market trading in
          such an Underlying Assets can comfortably handle, having regard,
          if appropriate, to the normal market size set by such an
          Underlying Market or any other equivalent or analogous level set
          by the Underlying Market on which the Underlying Assets is
          traded.
        </Definition>

        <Definition term="Open Position">
          shall mean any open contract which has not been closed.
        </Definition>

        <Definition term="Order">
          shall mean an instruction from the Client to trade in FX and
          CFDs. For FX and CFD it means Stop Loss or Take Profit order.
        </Definition>

        <Definition term="Quote">
          shall mean the information of the current price for a specific
          Underlying Asset, in the form of the Bid and Ask prices.
        </Definition>

        <Definition term="Quote Currency">
          shall mean in an FX Contract the second currency in the Currency
          Pair which can be bought or sold by the Client for the Base
          Currency.
        </Definition>

        <Definition term="Parties">
          shall mean the parties to this Client Agreement &mdash; the
          Company and the Client.
        </Definition>

        <Definition term="Pip">
          shall mean in a CFD Transaction with Underlying Assets quoted in
          four decimal points the one hundredth of one percentage point.
          In a CFD Transactions with Underlying Assets quoted in two
          decimal points, Pip shall mean the one percentage point.
        </Definition>

        <Definition term="Position">
          shall mean your position in relation to any FX and CFD currently
          open on your Trading Account.
        </Definition>

        <Definition term="Registration Data">
          shall mean certain personal and financial information that you
          are required to provide to complete the account opening
          application form and become our Client, such information can
          include without limitation a copy of your passport, driving
          license and/or Photo identity card as well as a proof of address
          (utility bill, tax document, bank statement, any other
          government issued document).
        </Definition>

        <Definition term="Sell">
          shall mean an FX and CFD Transaction that is opened by offering
          to sell a specific number of a certain Underlying Asset, and may
          also in our dealings with you, be referred to as a
          &ldquo;short&rdquo; or &ldquo;short position&rdquo;.
        </Definition>

        <Definition term="Services">
          shall mean the services to be offered by the Company to the
          Client under this Agreement.
        </Definition>

        <Definition term="Scalping">
          shall mean the situation where the Client opens too many
          positions in CFDs at the same time and closes them for less than
          five minutes or buying at Bid price and selling at Ask price, so
          as to gain the Bid/Ask difference.
        </Definition>

        <Definition term="Slippage">
          shall mean the difference between the expected price of a
          Transaction in a CFD and the price the Transaction is executed
          at. At the time that an Order is presented for execution, the
          specific price requested by the Client may not be available;
          therefore, the Order will be executed close to or several pips
          away from the Client&apos;s requested price. If the execution
          price is better than the price requested by the Client, this is
          referred to as positive slippage. If the executed price is worse
          than the price requested by the Client, this is referred to as
          negative slippage. Slippage often occurs during periods of
          higher volatility (for example due to news events) making an
          Order at a specific price impossible to execute, when market
          orders are used, and when large Orders are executed when there
          may not be enough interest at the desired price level to
          maintain the expected price of trade.
        </Definition>

        <Definition term="Software">
          shall mean the software provided by us which you will need to
          download in order to use the Trading Platform.
        </Definition>

        <Definition term="Spread">
          for FX and CFD trading shall mean the difference between Ask and
          Bid of an Underlying Asset in a FX and CFD at that same moment.
        </Definition>

        <Definition term="Stop Loss">
          shall mean an offer to close a Transaction in an FX and CFD
          position at a price determined in advance by you which, in the
          case of a Buy is lower than the opening Transaction price and in
          the case of a Sell is higher than the opening Transaction price.
        </Definition>

        <Definition term="Swap or Rollover">
          for FX and CFD trading shall mean the interest added or deducted
          for holding a position open overnight.
        </Definition>

        <Definition term="Take Profit">
          shall mean offer to close a Transaction in an FX and CFD
          position at a price determined in advance by you which, in the
          case of a Buy is higher than the opening Transaction price and
          in the case of a Sell is lower than the opening Transaction
          price.
        </Definition>

        <Definition term="Trading Account">
          shall mean the exclusive personalized account of the Client
          consisting of all the Open Positions and Orders of the Client,
          the balance of the Client money and deposit/withdrawal
          transactions of the Client money. More information on the
          various types of Trading Accounts offered by the Company from
          time to time and their particular characteristics and
          requirements may be found on the Website.
        </Definition>

        <Definition term="Trading Platform">
          shall mean any electronic mechanism operated and maintained by
          the Company, consisting of a trading platform, computer devices,
          software, databases, telecommunication hardware, programs and
          technical facilities, which facilitates trading activity of the
          Client in FX and CFDs via the Trading Account.
        </Definition>

        <Definition term="Trailing Stop">
          in FX and CFD trading shall mean a stop-loss order set at a
          percentage level below the market price &mdash; for a Long
          Position. The trailing stop price is adjusted as the price
          fluctuates. A sell trailing stop order sets the stop price at a
          fixed amount below the market price with an attached
          &ldquo;trailing&rdquo; amount. As the market price rises, the
          stop price rises by the trail amount, but if the pair price
          falls, the stop loss price does not change, and a market order
          is submitted when the stop price is hit.
        </Definition>

        <Definition term="Third Party License">
          shall mean licenses from third parties governing third party
          software embedded or used in the Trading Platform.
        </Definition>

        <Definition term="Trading Hours">
          shall mean the hours of trading as set forth on the Trading
          Platform for a particular Underlying Asset.
        </Definition>

        <Definition term="Transaction">
          shall mean either the opening or closing of an offer to either
          buy or sell FX and CFD for an Underlying Asset on the Trading
          Platform, whether by you or us.
        </Definition>

        <Definition term="Underlying Asset">
          shall mean the object or underlying asset in a CFD which may be
          Currency Pairs (for FX Contracts), Equity Indices, base or
          precious Metals, Forwards, Commodities, Stocks, Shares Indices
          and Futures. It is understood that the list is subject to change
          and Clients must refer each time on the Trading Platform.
        </Definition>

        <Definition term="Underlying Market">
          shall mean the relevant market where the Underlying Asset is
          traded such as securities or futures exchanges, clearing houses,
          self-regulatory organizations, multilateral trading facilities
          or alternative trading systems.
        </Definition>

        <Definition term="Website">
          shall mean the Company&apos;s website at{" "}
          <a
            href="https://www.finsaitrade.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
            www.finsaitrade.com
          </a>{" "}
          or such other website as the Company may maintain from time to
          time.
        </Definition>

        <Definition term="Written Notice">
          shall have the meaning set out in paragraph 32.5 of this Client
          Agreement.
        </Definition>

        <P>
          1.2. Words importing the singular shall import the plural and
          vice versa. Words importing the masculine shall import the
          feminine and vice versa. Words denoting persons include
          corporations, partnerships, other unincorporated bodies and all
          other legal entities and vice versa.
        </P>
        <P>1.3. Paragraph headings are for ease of reference only.</P>
        <P>
          1.4. Any reference to any act or regulation or Law shall be that
          act or regulation, or Law as amended, modified, supplemented,
          consolidated, re-enacted or replaced from time to time, all
          guidance noted, directives, statutory instruments, regulations
          or orders made pursuant to such and any statutory provision of
          which that statutory provision is a re-enactment, replacement or
          modification.
        </P>
      </LegalSection>

      <LegalSection title="CFDs on Cryptocurrencies — Additional Risk Disclosure">
        <P>
          Trading Contracts for Difference (&ldquo;CFDs&rdquo;) on
          cryptocurrencies involves significant risk and is not suitable
          for all investors. These digital assets are highly speculative
          and subject to extreme volatility, limited regulation, potential
          technological failures, and security vulnerabilities.
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
          have read, understood, and agreed to the risks outlined in this
          agreement and assume full responsibility for all related trading
          outcomes.
        </P>
      </LegalSection>

      <LegalSection title="2. License and Use of the Trading Platform">
        <P>
          2.1. The Trading Platform is not intended for distribution to,
          or use by, any person:
        </P>
        <UL
          items={[
            "(a) who is under the age of 18 years old and/or not of legal competence or of sound mind.",
            "(b) who resides in any country where such distribution or use would be contrary to local law or regulation. The Trading Platform and any other service provided by us is not available to persons residing in any country where FX and CFD trading activity or such services would be contrary to local law or regulation. It is your responsibility to ascertain the terms of and comply with any local law or regulation to which you are subject.",
            "(c) who is a citizen or resident of certain jurisdictions such as Canada, Crimea, Cuba, Cyprus, Iran, Malaysia, North Korea, Sudan, Syria, United States, as the Company does not accept Clients from these countries.",
            "(d) who is an employee, director, associate, agent, relative, or otherwise connected to the Company.",
          ]}
        />
        <P>
          2.2. Without derogating from the above, we reserve the right,
          acting reasonably, to suspend and/or refuse access to and use of
          the Trading Platform and/or close the Trading Account and
          terminate the Client Agreement to anyone in our sole and
          absolute discretion.
        </P>
        <P>
          2.3. You acknowledge that we may provide the Trading Platform to
          other parties and agree that nothing herein will be deemed or
          construed to prevent us from providing such services.
        </P>
        <P>
          2.4. Subject to the terms and conditions of this Agreement, we
          hereby grant you, a personal limited, non-exclusive, revocable,
          non-transferable and non-sub-licensable license to install
          and/or use the Trading Platform in object code only, solely for
          your personal use and benefit and not for professional use, in
          accordance with the terms of this Agreement.
        </P>
        <P>
          2.5. If any third-party software is included within or embedded
          in the Trading Platform, then such embedded third-party software
          shall be provided subject to the terms of this Agreement which
          apply to the Trading Platform. You shall fully comply with the
          terms of any Third-Party Licenses that we provide to you from
          time to time. We provide no express or implied warranty,
          indemnity or support for the Third-Party Licenses, and will have
          no liability.
        </P>
        <P>
          2.6. We reserve any and all rights to the Trading Platform not
          expressly granted to you by this Agreement. The Trading Platform
          is to you solely for facilitating trading with the Company and
          under no circumstances is sold to you. The Trading Platform, all
          copies and any derivative works thereof (by whoever created),
          the associated goodwill, copyrights, trademarks, logos, know
          how, patents and any intellectual property rights, are and shall
          remain owned solely by the Company or our licensors. Other than
          provided above in this paragraph, no other license, right, or
          interest in any goodwill, trademark, copyright, logo, know how,
          patent, service mark or other Intellectual Property Right in the
          Trading Platform or any part or derivative work thereof is
          granted or conveyed to you.
        </P>
        <P>2.7. You shall take all reasonable steps to:</P>
        <UL
          items={[
            "(a) procure and maintain in proper working order, throughout the term of this Agreement and at your own expense, the hardware, operating environment (including operating system software), backup means and infrastructure necessary for the installation, operation and maintenance of the Trading Platform (including without limitation uninterruptible power systems and electrical backup devices).",
            "(b) prevent any virus infections, security breaches, and other disabling events from damaging the Trading Platform due to your actions or omissions.",
            "(c) implement and plan to operate and maintain appropriate protection in relation to the security and control of access to your computer, computer viruses or other similar harmful or inappropriate materials, devices, information or data.",
          ]}
        />
        <P>
          2.8. Please inform us in writing if you encounter any problems
          with the Trading Platform, or have any suggestions for
          modifications, design changes and improvements. We shall have
          the right, but not the obligation, to make modifications to the
          Trading Platform based upon your suggestions. Any modifications,
          design changes and improvements made to the Trading Platform
          based on your feedback shall be the undisputed sole property of
          the Company.
        </P>
        <P>We will deliver the Trading Platform with reasonable skill and care.</P>
        <P>
          2.9. From time to time and at our absolute discretion, we shall
          have the right to add to, modify, or remove any part of the
          Trading Platform without liability under this Agreement and if
          we do, we shall use reasonable endeavors to replace any part of
          the Trading Platform with an equivalent where practicable.
        </P>
        <P>
          2.10. We have the right to shut down the Trading Platform at any
          time for maintenance purposes without prior notice to the
          Client, but this will be done only during weekends. In these
          cases, the Trading Platform will be inaccessible.
        </P>
        <P>2.11. We make no express or implied representation or warranty:</P>
        <UL
          items={[
            "(a) that the Trading Platform will be available for access all the time, or at any time on a continuous uninterrupted basis (access to the Trading Platform may be affected, for example, by routine maintenance, repairs, reconfigurations or upgrades).",
            "(b) as to the operation, quality or functionality of the Trading Platform.",
            "(c) that the Trading Platform will be free of errors or defects; and",
            "(d) that the Trading Platform is free from viruses or anything else that has contaminating or destructive properties including where such results in loss of or corruption to your data or other property. We will not be liable for any data lost or any equipment or software replaced by you as a result of use of the Trading Platform.",
          ]}
        />
        <P>2.12. You:</P>
        <UL
          items={[
            "(a) may only use the Trading Platform for so long as you are authorized to do so.",
            "(b) may not use the Trading Platform for any purpose other than for the purpose for which it has been provided under this Agreement, and",
            "(c) are responsible for the use of the Trading Platform (including the Account Credentials) by you.",
          ]}
        />
        <P>2.13. You agree not to:</P>
        <UL
          items={[
            "(a) use the Trading Platform for illegal or inappropriate purposes.",
            "(b) (nor attempt to) interfere with or disrupt the proper operation of our software, hardware, systems or networks, including (but not limited to) not knowingly or negligently transmitting files that may interrupt, damage, destroy or limit the functionality of any computer software, hardware, systems or networks, including corrupted files or files that contain viruses, Trojan horses, worms, spyware or other malicious content.",
            "(c) attempt to gain unauthorized access to our computer system or the computer system(s) of any other user, or to parts of the Trading Platform to which you do not have access rights or attempt to reverse engineer or otherwise circumvent any security measures that the Company has applied to the Trading Platform.",
            "(d) take any action which does or may cause the provision of the Trading Platform to other users to be interrupted or degraded.",
            "(e) convey any false, unlawful, harassing, defamatory, abusive, hateful, racial, threatening, harmful, vulgar, obscene, seditious or otherwise objectionable or offensive material of any kind or nature.",
            "(f) carry out any commercial business on the Trading Platform.",
            "(g) knowingly or negligently upload or download files that contain software or other material protected by copyright, trademarks, patents or other intellectual property rights (or by rights of confidentiality or privacy of publicity, where applicable) unless you own or control the rights thereto or have received all necessary consent.",
            "(h) falsify the origin or source of any content or other material.",
            "(i) use any software, which applies artificial intelligence analysis to the Company's systems and/or Trading Platform.",
            "(j) intercept, monitor, damage or modify any communication which is not intended for them.",
            "(k) use any type of spider, virus, worm, Trojan-horse, time bomb or any other codes or instructions that are designed to distort, delete, damage or disassemble the Trading Platform or the communication system or any system of the Company.",
            "(l) send any unsolicited commercial communication not permitted under applicable law or Applicable Regulations.",
            "(m) do anything that will or may violate the integrity of the Company computer system or Trading Platform or cause such system(s) to malfunction or stop their operation.",
            "(n) do any action that could potentially allow the irregular or unauthorized access or use of the Platform, or",
            "(o) unlawfully log into the Trading Platform and execute an order to buy or sell a Financial Instrument from a location or IP address originating from a region or jurisdiction where it is not allowed for regulatory reasons.",
          ]}
        />
        <P>
          2.14. You shall not be entitled to download, save or copy the
          Trading Platform.
        </P>
        <P>
          2.15. Should we reasonably suspect that you have violated the
          terms of clauses 2.13 &ndash; 2.15 hereinabove, we are entitled
          to take one or more of the counter measures for the Events of
          Default of paragraph 25.2 hereunder.
        </P>
      </LegalSection>

      <LegalSection title="3. Account Credentials and Security">
        <P>
          3.1. In the event that we accept you as our Client we shall open
          a Trading Account in your name which will allow you to place
          Orders on our Trading Platform. It is agreed and understood that
          the Company may offer different types of Trading Accounts, which
          may have different margin Requirements and characteristics. You
          may open up to five (5) Trading Accounts between all Trading
          Platforms owned by the Company and in all currencies.
        </P>
        <P>
          3.2. In order to access the Trading Account, you will be asked
          to enter your Account Credentials issued by us to you which are
          confidential and shall be used solely by you.
        </P>
        <P>3.3. You:</P>
        <UL
          items={[
            "(a) are responsible for ensuring that your Account Credentials remain confidential and for taking such other precautions as may be necessary to ensure they cannot be used by any person other than you or your authorized representative and making sure that a third party is not provided access to your computer for example via using Team Viewer to turn on control on your computer.",
            "(b) must notify us immediately if you become aware that your Account Credentials have in any way become compromised or if any third party may be able to access the Trading Platform; and",
            "(c) you agree we do not have to establish the authority of anyone quoting your Trading Account number or Account Credentials. The use of your Account Credentials by any third party is expressly prohibited.",
          ]}
        />
        <P>
          3.4. If we believe that there is likely to be a breach of
          security, we may require you to change your Account Credentials
          or suspend your access to the Trading Platform. We reserve the
          right to edit, amend or issue you with new Account Credentials
          or require a change of your Account Credentials at any time by
          giving notice to you.
        </P>
        <P>
          3.5. You are responsible for ensuring that you alone control
          access to your Account Credentials, and that no minor or other
          person is granted access to the Trading Platform using your
          Account Credentials. You acknowledge that you are ultimately and
          solely responsible for all actions on the Trading Platform
          through your Registration Data including any unauthorized
          disclosure of your Account Credentials.
        </P>
        <P>
          3.6. You undertake to immediately notify us first orally and
          then in writing if you become aware of any loss, theft or use by
          any other person or entity other than you, of any of your
          Registration Data, including your Account Credentials. We will
          then take steps to prevent any further use of such Account
          Credentials and will issue replacement Account Credentials. You
          will be unable to place any Orders until you receive your
          replacement Account Credentials.
        </P>
        <P>
          3.7. If we are informed from a reliable source that your Account
          Credentials may have been received by unauthorized third
          parties, we may, at our discretion without having an obligation
          to you, deactivate the Trading Account.
        </P>
        <P>
          3.8. You acknowledge that we bear no responsibility if
          unauthorized third persons gain access to information, including
          electronic addresses, electronic communication, personal data
          and Account Credentials when the above are transmitted between
          the parties or any other party, using the internet or other
          network communication facilities, post, telephone, or any other
          electronic means.
        </P>
        <P>
          3.9. You shall indemnify, defend, and hold us harmless from any
          claim, proceeding, loss or damages based upon any use, misuse,
          or unauthorized use of the Trading Platform through your Account
          Credentials.
        </P>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <P>
          4.1. You acknowledge that all Intellectual Property Rights in
          the Trading Platform are owned by us or our licensors.
        </P>
        <P>4.2. You will not:</P>
        <UL
          items={[
            "(a) Copy, record, edit, alter or translate any of the Trading Platform, or any part of the Trading Platform. This shall include, without limitation, not removing, editing or otherwise interfering with (or attempting to remove, edit or otherwise interfere with) any names, marks, logos or branding on the Trading Platform.",
            "(b) reverse engineer, disassemble or otherwise attempt to derive source code for the Trading Platform in whole or in part except to the extent expressly permitted by law; and",
            "(c) in any manner damage or impair any of our Intellectual Property Rights and shall use your best efforts to protect our Intellectual Property Rights from infringement by third parties.",
          ]}
        />
        <P>
          4.3. The Trading Platform, all copies and any derivative works
          thereof (by whoever created), the associated goodwill and any
          Intellectual Property Rights in the Trading Platform, are and
          shall remain owned solely by us or our licensors. Except for the
          license granted in paragraph 2.2 of this Client Agreement, no
          other license, right, or interest in any goodwill or
          Intellectual Property Right in the Trading Platform or any part
          or derivative work thereof is granted or conveyed to you.
        </P>
        <P>4.4. Unless expressly permitted in this Agreement, you shall not:</P>
        <UL
          items={[
            "(a) assign, sublicense, transfer, pledge, lease, rent, distribute or share the Trading Platform or any rights thereto under the Client Agreements.",
            "(b) separate any component part of the Trading Platform, or separately use any component part thereof on any equipment, machinery, hardware or system whatsoever.",
            "(c) decompile, disassemble, reverse compile, reverse engineer, create derivative works of or reproduce (other than one copy solely for backup and archival purposes) the Trading Platform or any parts thereof; remove or destroy any proprietary marking or legends placed upon or contained within the Trading Platform.",
            "(d) develop methods to enable unauthorized parties to use the Trading Platform.",
            "(e) attempt to reconstruct or discover any source code, underlying ideas, algorithms, file formats or programming or interoperability interfaces of the Trading Platform by any means whatsoever.",
            "(f) provide, lease, lend, use for timesharing or service bureau purposes, or otherwise use or allow others to use the Trading Platform for the benefit of third parties.",
            "(g) work around any technical limitations in the Trading Platform, or use any tool to enable features or functionalities that are otherwise disabled in the Trading Platform.",
            "(h) use similar processes and functions to develop competing features or functions with the Trading Platform.",
            "(i) use the Trading Platform or any Financial Data to conduct any fraudulent, inappropriate or illegal activities, including without limitation deceptive impersonation.",
            "(j) permit or encourage any third party to do any of the foregoing.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Application and Registration Data">
        <P>
          5.1. In order to use the Trading Platform and our Services, you
          must register with us by providing personal details, including
          identity documents, as Registration Data. After you fill in and
          submit the account opening application form together with all
          the required identification documentation and Registration Data
          required by us for our own internal checks, we will send you a
          notice informing you whether you have been accepted as a Client
          of the Company. It is understood that we are not to be required
          (and may be unable under Applicable Regulations) to accept a
          person as our client until all documentation we require has
          been received by us, properly and fully completed by such person
          and all internal Company checks have been duly satisfied. It is
          further understood that we reserve the right to impose additional
          due diligence requirements to accept Clients residing in certain
          countries.
        </P>
        <P>5.2. You agree and undertake to:</P>
        <UL
          items={[
            "(a) Notify us of any changes to your personal and financial information and/or in your financial condition by emailing the Company.",
            "(b) Provide true, accurate, current and complete Registration Data as prompted by the registration process.",
            "(c) Maintain and promptly update the Registration Data to keep it accurate, current and complete by emailing any changes to the Company.",
            "(d) Ensure that you log out from your Trading Account at the end of each session on the Website.",
            "(e) We may carry out credit and other checks from time to time as we deem appropriate. Your Registration Data or other information may be used in the prevention of money laundering as well as for the management of your account. You authorize us to use your Registration Data and other information to perform the above checks in relation to your application process.",
            "(f) In the event we become aware of any illegal activity, impropriety in the Registration Data or failure of any due diligence requirement, we may freeze your account. Should such an event occur we may not be in a position to release funds and may not be able to carry out subsequent instructions from you.",
            "(g) Represent & warrant that you are not, nor are you acting on behalf of an individual or entity that is listed on the Specially Designated Nationals & Blocked Persons List (SDN) or otherwise ineligible to engage in transactions due to Office of Foreign Assets Control (OFAC) sanctions.",
            "(h) Comply with all the applicable OFAC laws and regulations. You acknowledge that Finsai Trade (CFD & Crypto Exchange) reserves the right to refuse registration or to suspend or terminate your account if you are determined to be, or if Finsai Trade suspects that you are, listed on the SDN list; located in, under the control of, or a national or resident of any country to which the United States has embargoed goods or services; or a person who is otherwise the target of OFAC sanctions or similar restrictive measures.",
            "(i) Undertake to provide all information and documentation requested by us to enable it to conduct and complete necessary checks in compliance with the OFAC regulations. You understand that we are required to seize and/or report assets and transactions that appear to involve sanctioned individuals or entities as per OFAC requirements.",
            "(j) Acknowledge that we cannot provide any legal or financial advice regarding OFAC or SDN regulations; and you are responsible for ensuring that your transactions comply with all applicable laws and regulations.",
            "(k) Agree to promptly notify us regarding any changes in circumstances that could potentially affect your status in relation to OFAC & SDN regulations.",
            "(l) Agree to indemnify and not hold us responsible for any losses, costs, or damages incurred as a result of non-compliance of OFAC & SDN regulations.",
          ]}
        />
        <P>
          5.3. Once logged into the Trading/Exchange Platform using your
          Account Credentials, you authorize us to rely upon any
          information or instructions set forth in any data transmission
          using your Registration Data, without making further
          investigation or inquiry, and regardless of the actual identity
          of the individual transmitting the same. Without limitation of
          the foregoing, we have no responsibility for transmissions that
          are inaccurate or not received by us, and we may execute any
          Transaction on the terms actually received by us.
        </P>
      </LegalSection>

      <LegalSection title="6. Services">
        <P>
          6.1. If you are accepted as our Client, we shall be providing
          brokerage services in CFDs.
        </P>
        <P>
          6.2. It is understood that when trading in CFDs, there is no
          delivery or safekeeping of the Underlying Asset to which the
          CFD is referring to.
        </P>
        <P>
          6.3. It is understood that not all of the Services under
          paragraph 6.1 of this Agreement may be applicable for each
          Client.
        </P>
        <P>
          6.4. The Company will operate as an electronic communications
          networks (ECN) broker which may pass the trades to a liquidity
          provider or execute the same internally.
        </P>
        <P>
          6.5. The Company shall further provide social trading features
          and copy trading services (&ldquo;Copy Trading Services&rdquo;)
          to assist the Client in testing, evaluating and selecting
          his/her investment strategy by providing detailed account
          information, trading history, risk profile and other pertinent
          information that the Client should consider before electing to
          copy a specific account. In doing so, the Client should bear in
          mind all aspects and factors including, but not limited to, the
          risk nature of the copied account and the Client&apos;s
          investment objectives. In respect to the provision of the Copy
          Trading Services, the following terms shall apply as well as
          the Social Trading Terms and Conditions available on the
          Company&apos;s Website:
        </P>
        <P>(a) You may use the Copy Trading Services by using one of the following options:</P>
        <UL
          items={[
            "(i) As an investor that can be followed and receive the relevant commission, or",
            "(ii) As a follower that can follow one or more investors and receive the relevant commission.",
          ]}
        />
        <P>
          (b) If the Company assesses at the time of your request to
          receive Copy Trading Services that your transactions were
          unjustifiably risky, we reserve the right to refuse you to be
          part of the Copy Trading as an investor, who can be followed.
          Investor can only be a client with a real account.
        </P>
        <P>
          (c) When you as a follower copy the trading of more than one
          investor, you are aware and agree that the transactions
          performed by different traders might be at a different price,
          which may be due to dynamic market conditions with higher
          volatility in the markets and/or to the different spreads that
          the traders have.
        </P>
        <P>
          (d) By using the Copy Trading Services you authorize the Company
          to execute any and all transactions and/or positions undertaken
          by the trader, account, portfolio and/or strategy you chose to
          copy trade, including without limitation: start copy trading and
          stop copy trading another trader, account, portfolio and/or
          strategy. These actions are done automatically once initiated by
          you and do not require any prior consultation, consent or
          approval of ongoing activity/copied trades. You hereby confirm
          that you acknowledge that at any time, upon your sole discretion,
          you can stop any Copy Trading activity performed by you via our
          Websites. You remain, at all times, solely responsible for both
          monitoring and selecting and assessing:
        </P>
        <UL
          items={[
            "(i) the suitability of the copied accounts; and",
            "(ii) the overall performance of the copied trader, account, portfolio and/or strategy.",
          ]}
        />
        <P>
          (e) When Copy Trading a portfolio, you further authorize the
          Company to:
        </P>
        <UL
          items={[
            "(i) copy or stop copying any trader, account, portfolio and/or strategy, at its sole and absolute discretion.",
            "(ii) open and/or close any position in any CFD available on our websites/applications, at its sole and absolute discretion to set limits to any position (including copy position).",
            "(iii) update and/or amend the policy, the objectives, the structure and/or composition of any Portfolio, at its sole and absolute discretion, with or without notice to its copiers.",
            "(iv) Close any such account, portfolio and/or strategy, at its sole and absolute discretion, with or without notice to its copiers.",
            "(v) not to copy every position of an investor that you chose to follow due to different market conditions like high volatility, lack of liquidity or in case any investor has too many followers that may reflect changes of the market prices.",
          ]}
        />
        <P>
          (f) To the maximum extent permissible under the applicable law,
          neither we nor any of our affiliates will be liable for:
        </P>
        <UL
          items={[
            "(i) any loss arising from adhering to your written or oral instructions.",
            "(ii) any loss that you may suffer by reason of any decision made or other action taken by an account elected to be copied by you, including without limitation a portfolio; or",
            "(iii) Specifically, any loss arising from any investment decision made or other action taken or omitted in good faith by any copied account, strategy and/or portfolio, including without limitation a portfolio.",
          ]}
        />
        <P>
          (g) If you decide to refuse the copying of deals you have to
          contact the Company.
        </P>
      </LegalSection>

      <LegalSection title="7. Advice and Commentary">
        <P>
          7.1. The Company will not advise the Client about the merits of
          a particular Order or give him any form of advice, and the
          Client acknowledges that the Services do not include the
          provision of investment advice in Financial Instruments or the
          Underlying Markets or Underlying Assets. The Client alone will
          decide how to handle his Trading Account and place Orders and
          take relevant decisions based on his own judgment. In asking the
          Company to enter into any Transaction, the Client represents
          that he/she has been solely responsible for making his/her own
          independent appraisal and investigation into the risks of the
          Transaction. He/she represents that he/she has sufficient
          knowledge, market sophistication, professional advice and
          experience to make his/her own evaluation of the merits and
          risks of any Transaction.
        </P>
        <P>
          The Company gives no warranty as to the suitability of the
          products traded under this Agreement and assumes no fiduciary
          duty in its relations with the Client. The Company shall not be
          responsible for any losses incurred by recommendations or advice
          to the Client by any third party, including but not limited to
          introducing brokers, consultants, advisors and MT expert
          advisors.
        </P>
        <P>
          7.2. The Company will not be under any duty to provide the
          Client with any legal, tax or other advice relating to any
          Transaction. The Client may wish to seek independent advice
          before entering a Transaction if he/she is in any doubt as to
          whether he may incur any tax liabilities. The Client is hereby
          warned that tax laws are subject to change from time to time.
        </P>
        <P>
          7.3. The Company may, from time to time and at its discretion,
          provide the Client (or in newsletters which it may post on its
          website, or provide to subscribers via its website or otherwise)
          with information, news, market commentary or other information
          but not as part of its Services to the Client. Where it does so:
        </P>
        <UL
          items={[
            "(a) the Company will not be responsible for such information.",
            "(b) the Company gives no representation, warranty or guarantee as to the accuracy, correctness or completeness of such information or as to the tax or legal consequences of any related Transaction.",
            "(c) This information is provided solely to enable the Client to make his own investment decisions and does not amount to investment advice or unsolicited financial promotions to the Client.",
            "(d) if the information contains a restriction on the person or category of persons for whom that document is intended or to whom it is distributed, the Client agrees that he will not pass it on to any such person or category of persons.",
            "(e) the Client accepts that prior to dispatch, the Company may have acted upon it itself to make use of the information on which it is based. The Company does not make representations as to the time of receipt by the Client and cannot guarantee that he will receive such information at the same time as other Clients.",
          ]}
        />
        <P>
          7.5. It is understood that market commentary, news, or other
          information provided or made available by the Company are
          subject to change and may be withdrawn at any time without
          notice.
        </P>
      </LegalSection>

      <LegalSection title="8. Confidentiality">
        <P>
          8.1. The Company may collect Client information directly from
          the Client (in his/her completed account opening application
          form or from his/her use of the Website otherwise) or from other
          persons including, for example, the credit reference agencies,
          fraud prevention agencies, banks, other financial institutions,
          third authentication service providers and the providers of
          public registers.
        </P>
        <P>
          8.2. Client information which the Company holds is to be treated
          by the Company as confidential and will not be used for any
          purpose other than in connection with the provision,
          administration and improvement of the Services, anti-money
          laundering and due diligence checks, for administration of the
          Services, for research and statistical purposes and for
          marketing purposes. Information already in the public domain,
          or already possessed by the Company without a duty of
          confidentiality will not be regarded as confidential.
        </P>
        <P>
          8.3. The Company has the right to disclose Client information
          (including recordings and documents of a confidential nature,
          card details) in the following circumstances:
        </P>
        <UL
          items={[
            "(a) Where required by law or a court order by a competent Court.",
            "(b) Where requested by any regulatory authority having control or jurisdiction over the Company or the Client or their associates or in whose territory the Company has Clients.",
            "(c) To relevant authorities to investigate or prevent fraud, money laundering or other illegal activity.",
            "(d) To such an extent as reasonably required so as to execute Orders and for purposes ancillary to the provision of the Services.",
            "(e) To credit reference and fraud prevention agencies, third party authentication service providers, banks and other financial institutions for credit checking, fraud prevention, anti-money laundering purposes, identification or due diligence checks of the Client. To do so they may check the details the Client supplied against any particulars on any database (public or otherwise) to which they have access. They may also use Client details in the future to assist other companies for verification purposes. A record of the search will be retained by the Company.",
            "(f) To the Company's professional advisors provided that in each case the relevant professional shall be informed about the confidential nature of such information and commit to the confidentiality herein obligations as well.",
            "(g) To other service providers who create, maintain or process databases (whether electronic or not), offer record keeping services, email transmission services, messaging services or similar services which aim to assist the Company collect, storage, process and use Client information or get in touch with the Client or improve the provision of the Services under this Agreement.",
            "(h) To other service providers for statistical purposes in order to improve the Company's marketing, in such a case the data will be provided in an aggregate form.",
            "(i) To market research call centers that provide telephone or email surveys with the purpose to improve the services of the Company, in such a case only the contact details will be provided.",
            "(j) Where necessary in order for the Company to defend or exercise its legal rights to any court or arbitrator or governmental authority.",
            "(k) At the Client's request or with the Client's consent.",
            "(l) To successors or assignees or transferees or buyers, with ten Business Days prior Written Notice to the Client, and for the purposes of paragraph 36.2 of this Client Agreement.",
            "(m) The Client accepts and acknowledges that the Company, as a Foreign Financial Institution (FFI), is required to disclose personal information in relation to any US reportable person as per Foreign Account Tax Compliance Act (\u201CFATCA\u201D) reporting regulations. The Company has undertaken all reasonable steps in relation to maintaining compliance with FATCA and may ask from time to time for additional information from US reportable persons so that it can maintain appropriate records.",
            "(n) The Client accepts and acknowledges that the Company is required to disclose personal information in relation to any other reportable person as per the Common Reporting Standards (\u201CCRS\u201D) reporting regulations. The Company has undertaken all reasonable steps in relation to maintaining compliance with CRS and may ask from time to time for additional information from reportable persons so that it can maintain appropriate records.",
          ]}
        />
        <P>
          8.4. You consent to us processing all such information for the
          purposes of performing under this Agreement and for the purpose
          of administering the relationship between you and us. You agree
          we may share your personal information with third parties for
          these purposes and for the provision of the Services and we may
          also use the information for analysis and improving our product
          and services in line with our Privacy Policy found on our
          website.
        </P>
        <P>
          8.5. You recognize that you may receive commentary, analysis,
          market updates and/or confidential or proprietary information.
          All information belonging to or relating to us including,
          without limitation, information concerning business plans,
          customers, supplies, services, Intellectual Property Rights
          and/or financial information received by you as a result of
          entering into or performing the Client Agreements which is
          designated as confidential by us or is otherwise clearly
          confidential in nature constitutes &ldquo;confidential
          information&rdquo;.
        </P>
        <P>
          8.6. You agree not to use our confidential information for any
          purpose other than the purpose for which it is supplied to you
          under the Client Agreements and agree not to divulge
          confidential information received from us to any third party,
          and to prevent its disclosure to or access by any third party
          without our prior written consent except as may be required by
          law or any legal or regulatory authority.
        </P>
        <P>
          8.7. You will use a reasonable degree of care to protect our
          confidential information. This obligation will survive the
          termination of this Agreement, in respect of a particular item
          of confidential information, until such earlier time as that
          item of confidential information reaches the public domain
          other than through your breach of this term.
        </P>
        <P>
          8.8. You acknowledge that we shall be entitled to seek specific
          performance, injunctive relief or any other equitable remedies
          for any breach or threatened breach of any provision of this
          paragraph 8, which remedies shall not be deemed to be exclusive
          remedies for such breach or threatened breach by you but shall
          be in addition to all other remedies available to us at law, in
          equity, or otherwise.
        </P>
      </LegalSection>

      <LegalSection title="9. Personal Data">
        <P>
          9.1. If you are a natural person, the Company will use, store,
          process and handle your personal information and the Company is
          obliged to supply you, on request, with a copy of personal data
          which it holds about you (if any).
        </P>
        <P>
          9.2. By submitting an account opening application form and
          subsequently entering into the Agreement with us, you are
          consenting to the transmittal of your personal data for the
          reasons specified in paragraph 8.3 of this Client Agreement.
        </P>
        <P>
          9.3. You have the right to be informed of the personal data we
          hold about you. A small administrative fee may apply.
        </P>
      </LegalSection>

      <LegalSection title="10. Administration and Marketing">
        <P>
          10.1. You accept that the Company may, for the purpose of
          administering the terms of the Agreement, from time to time,
          make direct contact with you by telephone, fax, email, courier
          or post.
        </P>
      </LegalSection>

      <LegalSection title="11. Telephone Calls, Faxed Documents and Records">
        <P>
          11.1. Telephone conversations between the Client and the Company
          may be recorded and kept by the Company and recordings will be
          the sole property of the Company. The Client accepts such
          recordings as conclusive evidence of the Orders or conversations
          so recorded.
        </P>
        <P>
          11.2. Faxed documents received by the Company may be
          electronically scanned and reproduction of the scanned version
          shall constitute conclusive evidence of such faxed instructions.
        </P>
        <P>
          11.3. Our records will be evidence of your dealings with us in
          connection with the Trading Platform. You will not rely on us to
          comply with your record keeping obligations, although records
          may be made available to you on request in our absolute
          discretion. You will not object to the admission of our records
          as evidence in any legal or regulatory proceedings because such
          records are not originals, are not in writing or are documents
          produced by a computer.
        </P>
        <P>
          11.4. Under Applicable Regulations, the Company will keep records
          containing Client personal data, trading information, account
          opening documents, communications and anything else which
          relates to the Client for at least five (5) years after
          termination of the Agreement or a Transaction.
        </P>
        <P>
          11.5. Telephone conversations and communications between the
          Client and the Company as well as internal communications which
          relate to the Client&apos;s affairs and/or Transactions and/or
          Orders are recorded and kept by the Company and such recordings
          and communication will be the sole property of the Company.
        </P>
        <P>
          The Client accepts such recordings or communication as
          conclusive evidence of the Orders or conversations so recorded.
          A copy of such recordings and communications as well as internal
          communications which relate to the Client&apos;s affairs and/or
          Transactions and/or Orders will be available on request by the
          Client for a period of five (5) years.
        </P>
      </LegalSection>

      <LegalSection title="12. Trade Confirmations and Reporting">
        <P>
          12.1. The Company shall provide the Client with adequate
          reporting on his Orders. For this reason, the Company will
          provide the Client with an online access to his Client Account
          via the Platform(s) used by the Client, which will provide him
          with sufficient information.
        </P>
        <P>
          12.2. The Company will promptly provide the Client, in a durable
          medium, with the essential information concerning the execution
          of his Order.
        </P>
        <P>
          12.3. The Company will send a notice to the Client in a durable
          medium confirming execution of the Order as soon as possible and
          no later than the first business day following execution or,
          where the confirmation is received by the Company from a third
          party, no later than the first business day following receipt of
          the confirmation from the third party. Such notification will
          include the following information: Company identification,
          trading date, type of the Order, nature of the Order, i.e.
          buy/sell, the quantity, the unit price and the total
          consideration, the total sum of commissions and expenses.
        </P>
        <P>
          12.4. Furthermore, the Company shall supply the Client, on
          request, with information about the status of his/her Order.
        </P>
        <P>
          12.5. If the Client has a reason to believe that a report / trade
          confirmation is wrong or if the Client does not receive a report
          / trade confirmation when he/she should, the Client may contact
          the Company within ten (10) Business Days from the date on which
          the report / trade confirmation of the Order was sent or ought
          to have been sent. If the Client expresses no objections during
          this period, the content is considered as approved by him and
          shall be deemed conclusive.
        </P>
      </LegalSection>

      <LegalSection title="13. General Rules of Trading">
        <P>
          13.1. Without prejudice to any other provisions herein and in
          particular paragraph 13.13 of this Client Agreement, once the
          Client places an Order on the Trading Platform, the Company
          arranges for the execution of the said Order.
        </P>
        <P>
          13.2. You acknowledge and agree that each Transaction conducted
          on the Trading Platform, is comprised of first an offer by you
          to us to complete a Transaction (whether such offer is to open
          a Position or close an Open Position) at a certain price quoted
          on the Trading Platform, and our subsequent acceptance of your
          offer. An Offer will be deemed to have been completed only when
          your offer has been received and accepted by us. Our acceptance
          of an offer will be evidenced by our confirmation of its terms
          to you and its completion.
        </P>
        <P>
          13.3. You may request to cancel or amend a Transaction at any
          time prior to our completing such a Transaction.
        </P>
        <P>
          13.4. We reserve the right to void from the outset any
          Transaction containing or based on any Manifest Error. In the
          absence of our fraud or willful default, we will not be liable
          to you for any loss, cost, claim, demand or expense following any
          Manifest Error.
        </P>
        <P>
          13.5. You shall comply with any restrictions that we notify to
          you from time to time with respect to your activities on the
          Trading Platform, including without limitation, the size of
          Transactions or other conditions that may apply to our Quote.
          You acknowledge that we may offer to and impose on each Client,
          in our sole discretion, different terms and restrictions with
          respect to their use of the Trading Platform.
        </P>
        <P>
          13.6. You acknowledge that the Trading Platform is independent
          of any Underlying Markets and we are under no obligation to
          quote a particular price or follow the trading rules consistent
          with such Underlying Markets. You further acknowledge that the
          triggering of your Order is linked to the prices quoted on the
          Trading Platform, not the prices quoted elsewhere on the
          relevant Underlying Markets and the Company does not guarantee
          that when executing an Order its price will be more favorable
          than one which might be available elsewhere. In determining
          whether the prices quoted on the Trading Platform reach or
          exceed the price accepted by us in a Transaction, we will be
          entitled (but not obliged), in our absolute discretion, to
          disregard any prices quoted on our Platform during any
          pre-market, post-market or intra-day auction periods in the
          relevant Underlying Markets, during any intra-day or other
          period of suspension in the relevant Underlying Markets, or
          during any other period that in our reasonable opinion may give
          rise to short-term price spikes or other distortions. Our prices
          may differ from the current prices on the relevant Underlying
          Markets and you acknowledge that a Transaction may be triggered
          even though:
        </P>
        <UL
          items={[
            "(a) an Underlying Market never traded at the level of your Transaction; or",
            "(b) The Underlying Market did trade at the level of your Transaction but for such a short period that it would have been impractical to execute an equivalent transaction on the Underlying Markets.",
          ]}
        />
        <P>
          13.7. When you place an Order on the Trading Platform, you
          agree that you are not dealing on a recognized exchange.
        </P>
        <P>
          13.8. You undertake and agree not to use the prices quoted on
          the Trading Platform for any purpose other than for your own
          trading purpose, and you agree not to redistribute our prices to
          any other person whether such redistribution is for commercial
          or other purposes.
        </P>
        <P>
          13.9. You acknowledge that each Transaction is made for a
          specified number of units that constitute the Underlying Asset.
          You may only complete Transactions on the Trading Platform for
          the minimum number of units as set forth on the Trading Platform
          as the &ldquo;Unit Amount&rdquo;, and in multiples of such
          &ldquo;Unit Amount&rdquo; up until the maximum amount permitted
          by the Trading Platform. You acknowledge and agree that we may
          set, in our sole and absolute discretion, the &ldquo;Unit
          Amount&rdquo; for each Underlying Asset.
        </P>
        <P>
          13.10. Each Position opened by you, and any Transaction
          completed, will be binding on you notwithstanding that by
          opening the Position you may have exceeded any credit or other
          limit applicable to you or in respect of your dealings with us.
        </P>
        <P>
          13.11. You may request a Quote to open or close a Position for a
          particular Underlying Asset, at any time during the Trading
          Hours for such Underlying Asset. We will be under no obligation
          to but may, in our absolute discretion, provide a Quote and
          accept and act on your offer to open or close a Position for an
          Underlying Asset outside of the Trading Hours of such Underlying
          Asset. In some cases, Transactions may only be traded during the
          time when the relevant Underlying Market is open. Trading Hours
          are displayed on the Trading Platform under the details link for
          each specific Underlying Asset. It is your responsibility to
          ensure you are aware of which Underlying Asset may be affected.
        </P>
        <P>
          13.12. Without prejudice to any of our right hereunder, if,
          prior to the acceptance of your Order to open or close a
          Position, we become aware that any of the factors set out in
          paragraph 13.13 herein-below, has not been met, we reserve the
          right to reject your Order outright. If we have, nevertheless,
          already opened or closed a Position prior to becoming aware that
          a factor set out in paragraph 13.13 herein-below has not been
          met, we may in our discretion, either treat such a Transaction
          as Void from the outset or close the Open Position at our then
          prevailing price. However, we may, in our absolute discretion,
          allow you to open or, as the case may be, close the Open
          Position in which case you will be bound by the opening or
          closure of such Position, notwithstanding that the factors in
          paragraph 13.13 herein were not satisfied.
        </P>
        <P>
          13.13. The factors referred to in paragraph 13.12 include the
          following:
        </P>
        <UL
          items={[
            "(a) the quote must be obtained via the Trading Platform or by such other means as we may from time to time notify you;",
            "(b) your offer to open or close the Position must be given while the quote is still valid;",
            "(c) the Quote must not contain a Manifest Error;",
            "(d) when you offer to open a Position, the number of units in respect of which the Transaction is to be opened must be neither smaller than the minimum unit amount specified on the Trading Platform, as applicable, from time to time, nor greater than the amount permitted in accordance with the terms of this Agreement;",
            "(e) when you offer to close part but not all of an open Position both the part of the Position that you offer to close and the part that would remain open if we accepted your offer must not be smaller than the minimum unit amount specified on the Trading Platform;",
            "(f) Force Majeure Event must not have occurred when you offer to open or close a Transaction, which affects the execution of the Transaction;",
            "(g) An Event of Default must not have occurred in respect of you;",
            "(h) when you offer to open any Position, the opening must not result in your exceeding any Initial or Maintenance Margin amount, credit or other limit placed on your dealings;",
            "(i) Subject to paragraph 13.12 herein, your offer must be given to us during the Trading Hours for the applicable Underlying Asset in respect of which you offer to open or close the Position.",
            "(j) the internet connection or communications are not disrupted;",
            "(k) there is no request of regulatory or supervisory authorities or a court order to the contrary;",
            "(l) the legality or genuineness of the Order is not under doubt;",
            "(m) there are normal market conditions; and",
            "(n) Any other reasonable factor that we, in our sole discretion, notify you from time to time.",
          ]}
        />
        <P>
          Use of any robots, spiders or other automated data entry system
          with the Trading Platform is expressly prohibited, unless you
          receive express written consent by the Company prior to
          activating the robot. All Transactions must be completed
          manually by you.
        </P>
        <P>
          13.14. The Company is under no obligation, unless otherwise
          agreed in the Agreement, to monitor or advise the Client on the
          status of any Transaction or to close out any Client&apos;s
          Open Positions. When the Company decides to do so, this will be
          done on a discretionary basis and will not be considered an
          undertaking of an obligation to continue. It is the
          Client&apos;s responsibility to be aware of his positions at
          all times.
        </P>
        <P>
          13.15. Benefits &mdash; Takeovers and Transformations (including
          events such as share consolidations/splits, mergers, takeovers,
          spinoffs, MBO&apos;s, de-listings, etc.). Depending on the
          circumstances of each event, our policy is to close out any
          customer open positions at the market price immediately prior
          to the event taking place. As a result of such event, if any
          Underlying Asset becomes subject to an adjustment as the result
          of a takeover or transformation action we shall determine the
          appropriate adjustment to be made to the contract price or
          contract quantity as we consider appropriate to account for the
          diluting or concentrating effect of the action. Such adjustment
          shall represent the economic equivalent of the rights and
          obligations of us and you immediately prior to the action.
        </P>
        <P>
          13.16. Insolvency. If a Client, being a company, whose
          Underlying Asset forms the CFD, goes into insolvency or is
          otherwise dissolved, we shall close any such of your open
          Transactions in CFD of that Underlying Asset.
        </P>
        <P>
          13.17. The Company will use reasonable efforts to execute an
          Order, but it is agreed and understood that despite the
          Company&apos;s reasonable efforts transmission or execution may
          not always be achieved at all for reasons beyond the control of
          the Company.
        </P>
      </LegalSection>

      <LegalSection title="14. Our Right to Force Close">
        <P>
          14.1. If the prices quoted on the Trading Platform change such
          that the total Difference payable by you pursuant to all of
          your open Transactions equals or exceeds the total Maintenance
          Margin for all such Transactions, or the amount in your Trading
          Account is equal to or less than the total Maintenance Margin
          for all of your open Transaction(s), or you fail to comply with
          a request made under paragraph 16.5 of this Client Agreement,
          or if we receive a charge-back from your credit card issuer or
          with respect to any other payment method for any reason, you
          acknowledge that we have the right, in our sole discretion, to
          immediately close any and all of your Open Positions whether at
          a loss or a profit without any prior notice to you. The
          exercise of our right to force close your Open Positions will
          not result in termination of your Trading Account or of this
          Agreement, unless we send you a notice of termination.
        </P>
        <P>
          14.2. We may specify on the Trading Platform expiration times
          and dates for various Underlying Assets traded on the Trading
          Platform. If the Trading Platform specifies such a time of
          expiration for an Underlying Asset, you hereby authorize us to
          close any open Transactions with respect to such an Underlying
          Asset at the price quoted on the Trading Platform at such time.
        </P>
      </LegalSection>

      <LegalSection title="15. Force Majeure">
        <P>
          15.1. We may, in our reasonable opinion, determine that a Force
          Majeure Event exists. A Force Majeure Event will include, but is
          not limited to, the following:
        </P>
        <UL
          items={[
            "(a) any act, event or occurrence (including without limitation any strike, riot or civil commotion, act of terrorism, war, industrial action, acts and regulations of any governmental or supra national bodies or authorities) that, in our opinion, prevents us from maintaining an orderly market in one or more of the FX and CFDs in respect of which we deal on the Trading Platform.",
            "(b) act of God, earthquake, tsunami, hurricane, typhoon, accident, storm, flood, fire, epidemic or other natural disaster making it impossible for the Company to offer its Services.",
            "(c) Labour disputes and lock-out which affect the operations of the Company.",
            "(d) the suspension or closure of any Underlying Market or the occurrence, abandonment or failure of any Underlying Asset on which we base, or to which we in any way relate, our quote, or the imposition of limits or special or unusual terms on the trading in any such market or on any such event.",
            "(e) suspension of trading on a Market, or the fixing of minimum or maximum prices for trading on a Market, a regulatory ban on the activities of any party (unless the Company has caused that ban), decisions of state authorities, governing bodies of self-regulating organizations, decisions of governing bodies of organized trading platforms.",
            "(f) a financial services moratorium having been declared by appropriate regulatory authorities or any other acts or regulations of any regulatory, governmental, or supranational body or authority.",
            "(g) the occurrence of an excessive movement in the level of any Transaction and/or Underlying Market or our anticipation (acting reasonably) of the occurrence of such a movement.",
            "(h) any breakdown or failure of transmission, communication or computer facilities, interruption of power supply, or electronic or communications equipment failure, or",
            "(i) the failure of any relevant supplier, Financial Institution, intermediate broker, agent or principal of ours, custodian, sub-custodian, dealer, Underlying Market, clearing house or regulatory or self-regulatory organization, for any reason, to perform its obligations.",
          ]}
        />
        <P>
          15.2. If we determine that a Force Majeure Event exists, we may,
          in our absolute discretion, without notice and at any time, take
          one or more of the following steps:
        </P>
        <UL
          items={[
            "(a) Suspend or modify the application of any or all terms of the Agreement to the extent that the Force Majeure Event makes it impossible or impractical for the Company to comply with them.",
            "(b) Take or omit to take all such other actions as the Company deems to be reasonably appropriate in the circumstances with regard to the position of the Company, the Client and other clients.",
            "(c) Shut down the Trading Platform(s) in case of malfunction for maintenance or to avoid damage.",
            "(d) Cancel any Client Orders.",
            "(e) Refuse to accept Orders from Clients.",
            "(f) Inactivate the Client Account.",
            "(g) Increase Margin requirements without notice.",
            "(h) Close out any or all Open Positions at such prices as the Company considers in good faith to be appropriate.",
            "(i) Increase Spreads.",
            "(j) Decrease Leverage.",
            "(k) Change Stop out Level.",
          ]}
        />
        <P>
          15.3. You agree that we will not be liable in any way to you or
          to any other person in the event of a Force Majeure Event, nor
          for our actions pursuant to paragraph 15.2, if we decide to take
          such action. The Parties shall be released of all
          responsibilities for partial or full non-fulfillment, as well as
          for improper fulfillment of the obligations under this
          Agreement, if such non-fulfillment or improper fulfillment was a
          result of a Force Majeure Event, which occurred after the Client
          Agreements were concluded.
        </P>
      </LegalSection>

      <LegalSection title="16. Margin Requirements and Margin Calls">
        <P>
          16.1. In order to open a Position for an Underlying Asset, you
          undertake to provide the Initial Margin in your Trading Account.
          In order to keep a Position Open, you undertake to ensure that
          the amount in your Trading Account equals or exceeds the
          Maintenance Margin. Margin Requirements are available at the
          Trading Platform. You acknowledge that the Margin for each
          Underlying Asset differs. Deposits into your Trading Account
          can be made by wire transfer or another method of payment, to a
          bank account, or other location, as we may notify to you from
          time to time. Based on the amount of money you have in your
          Trading Account, we retain the right to limit the amount and
          total number of open Transactions that you may wish to open or
          currently maintain on the Trading Platform. It is understood
          that each different type of Trading Account offered by us from
          time to time may have different Margin Requirements.
        </P>
        <P>
          16.2. It is your responsibility to ensure that you understand
          how Margin Requirements are calculated.
        </P>
        <P>
          16.3. Unless a Force Majeure Event has occurred, the Company
          has the right to change the Margin requirements, giving to the
          Client five (5) Business Days Written Notice prior to these
          amendments. New Margin Requirements shall be applied for new
          positions. The Company has the right to change Margin
          requirements without prior notice to the Client in the case of
          Force Majeure Event. In this situation the Company has the
          right to apply new Margin requirements to the new positions and
          to the positions which are already open where this is deemed
          necessary. All changes shall be affected on the Trading
          Platform and/or the Website and the Client is responsible to
          check for updates. It is the Client&apos;s responsibility to
          monitor at all times the amount deposited in his/her Trading
          Account against the amount of any Margin required under this
          Agreement and any additional margin that may become necessary.
        </P>
        <P>
          16.4. You are aware and acknowledge that we may, in our sole
          discretion, require you to take certain action in your Trading
          Account pursuant to a Margin Call. A Margin Call may be based
          upon a number of factors, including without limitation, your
          overall position with us, your account size, the number of open
          Transactions you have, volume traded, your trade history and
          market conditions.
        </P>
        <P>
          16.5. The Company shall not have an obligation to make any
          Margin Call to the Client but in the event that it does, or in
          the event that the Trading Platform warns the Client that it
          reached a certain percentage of the Margin in the Trading
          Account, the Client should take any of the three options,
          within a short period of time, to deal with the situation:
        </P>
        <UL
          items={[
            "(a) Limit his/her exposure (close trades); or",
            "(b) Hedge his positions (open counter positions to the ones he has right now) while re-evaluating the situation; or",
            "(c) Deposit more money in his Trading Account.",
          ]}
        />
        <P>
          16.6. Failure to meet the Margin Requirements at any time or
          failure to take an action under paragraph 16.5 of this Client
          Agreement, gives us the right in our sole absolute discretion,
          to close any and all of your Open Positions whether at a loss
          or a profit without further notice to you. It is your
          responsibility to monitor, at all times, the amount deposited
          in your Trading Account against the amount of Maintenance
          Margin required as a result of your trading decisions and it is
          understood that the Company has the right to take the actions
          of this paragraph, even if a Margin Call is not made under
          paragraph 16.5 of this Client Agreement.
        </P>
        <P>
          16.7. Margin shall be paid in monetary funds in the currency of
          the Trading Account.
        </P>
        <P>
          16.8. The Client undertakes that he/she shall not create or
          have any outstanding security interest whatsoever over, and
          that he/she shall not agree to assign or transfer any of the
          Margin to the Company.
        </P>
        <P>
          16.9. If you have more than one Trading Account with us, each
          Trading Account will be treated entirely separately. Therefore,
          any credit on one Trading Account (including amounts deposited
          as margin) will not discharge your liabilities in respect of
          any other Trading Account. It is your responsibility to ensure
          the required level of margin is in place for each Trading
          Account separately.
        </P>
      </LegalSection>

      <LegalSection title="17. Settlement, Negative Balance Protection, Payments, Costs and Taxes">
        <P>
          17.1. You shall monitor your open positions and shall bear the
          risk of suffering losses from your trading activity. Upon
          completing a Transaction:
        </P>
        <P>(a) You shall be liable for the Difference if the Transaction is:</P>
        <UL
          items={[
            "(i) a Sell, and the closing price of the Transaction is higher than the opening price of the Transaction; or",
            "(ii) a Buy, and the closing price of the Transaction is lower than the opening price of the Transaction.",
          ]}
        />
        <P>(b) You shall receive the Difference if the Transaction is:</P>
        <UL
          items={[
            "(i) a Sell, and the closing price of the Transaction is lower than the opening price of the Transaction; or",
            "(ii) a Buy, and the closing price of the Transaction is higher than the opening price of the Transaction.",
          ]}
        />
        <P>
          17.2. Unless we agree otherwise, all sums for which either
          Party is liable under paragraph 17.1 above in this Client
          Agreement are immediately payable upon closing of the
          Transaction. You hereby authorize us to debit or credit, as
          applicable, your Trading Account with the relevant sums at the
          closing of each Transaction. It is understood that once you
          place an Order, until such Order is executed and the
          Transaction is closed, the Maintenance Margin shall not be
          used as collateral and hence shall be unavailable for
          withdrawal.
        </P>
        <P>
          17.3. It should be noted, however, that the Company does
          operate on a &ldquo;negative balance protection&rdquo; basis
          with respect to its Clients. This means that a Client cannot
          lose more than the total funds in his/her Trading Account with
          the Company. The Company reserves its right to provide negative
          balance protection, unless, however, the Client has arrived at
          negative balance due to abuse of Company&apos;s pricing/platform
          or breach of any of the terms of this Agreement or any
          Company&apos;s policy. In such a case, the Client is liable to
          pay the Company the negative amount and the Company can
          terminate the relevant Trading Account.
        </P>
        <P>
          17.4. You shall be liable for any and all taxes, fees and
          assessments with respect to any Transaction you complete on
          the Trading Platform. It is your obligation alone to calculate
          and pay all taxes applicable to you in your country of
          residence, or otherwise arising as a result of your trading
          activity from the use of the Trading Platform.
        </P>
        <P>
          17.5. Notwithstanding the above, if required by applicable
          law, the Company shall deduct at source from any payments due
          to you such amounts as required by the tax authorities to be
          deducted in accordance with applicable law.
        </P>
        <P>
          17.6. It is possible that other costs, including taxes,
          relating to transactions carried out on the Trading Platform
          may arise for which you are liable and which are neither paid
          via us nor imposed by us. Without derogating from your sole and
          entire responsibility to account for tax due, you agree that
          we may deduct tax, as may be required by the applicable law,
          with respect to your trading activity on the Trading Platform.
          You are aware that we have a right of set-off against any
          amounts in your Trading Account with respect to such tax
          deductions, and you hereby authorize us to withdraw amounts
          from your Trading Account with which to pay such taxes. You
          shall have no claim against us with regard to such deductions.
          You further agree that such deductions do not derogate from
          our rights to make Margin Calls under this Agreement.
        </P>
        <P>
          17.7. You undertake to pay all stamp expenses relating to this
          Agreement and any documentation which may be required for the
          carrying out of the Transactions under this Agreement.
        </P>
        <P>
          17.8. In the case where the Client opens an Islamic Trading
          Account or Accounts, the Client acknowledges and agrees to the
          following: If the Company suspects any fraud, manipulation,
          swap arbitrage or other forms of deceitful or fraudulent
          activity in a Client&apos;s account(s) or otherwise related or
          connected Client accounts to any and/or all Transactions, then
          the Company reserves the right, at its sole discretion, to
          close all open positions in the Client&apos;s Trading Account
          and deduct or add a penalty (equivalent to the swap and/or any
          profit amount) for all Transactions made in the account/(s) and
          decline from accepting any further requests from the Client to
          be exempted from any swaps and terminate the said Client(s)
          Account(s);
        </P>
        <P>(a) The Client acknowledges and agrees to:</P>
        <UL
          items={[
            "(i) trade only with instruments shown in the list, provided upon request; and",
            "(ii) the maintenance charge for all positions open as these may be defined and/or issued by the Company from time to time (inclusive of the day the position is opened and/or closed) and as such charges and duration is on request;",
          ]}
        />
        <P>
          (b) The Client acknowledges and accepts herein that, the
          Company reserves the right upon its sole discretion, from time
          to time, and/or at any time to:
        </P>
        <UL
          items={[
            "(i) amend the maintenance charge; and/or",
            "(ii) amend the list of provided Instruments; and/or",
            "(iii) Discontinue the Islamic Trading Account without issuing further warning to the Client.",
            "(iv) Request any additional documents from the Client that the Company deems necessary for the Islamic accounts provision including a proof of religion.",
          ]}
        />
        <P>
          17.9. It is hereby clarified that in relation to CFD trading,
          you are required to pay the Difference. A Swap fee is also
          applicable for CFDs trading (except for Islamic Accounts), as
          this is explained under paragraph 4 of the Appendix hereunder.
        </P>
        <P>
          17.10. In addition, the Company reserves the right to charge
          Commissions or add fees or charges for opening a Position in
          CFDs in the future, upon providing at least 5 working days&apos;
          prior Written Notice to the Client. Commissions may be charged
          either in the form of a percentage of the overall value of the
          trade or as fixed amounts.
        </P>
        <P>
          17.11. The applicable fees or charges or commissions, from
          time to time, may be found on the Company&apos;s Website.
        </P>
        <P>
          17.12. The Company has the right to vary its fees, charges and
          commissions from time to time according to the provisions of
          paragraph 23.6 of this Client Agreement.
        </P>
        <P>
          17.13. Should your country of residence operate regulations
          or laws which restrict the use of currency or require you to
          report receipts and payments of that currency to a regulator
          or legal authority, you agree that you will fulfill any
          reporting obligations or obtain any required consents or
          approvals which may arise as a result of your use of the
          Trading Platform or associated transactions.
        </P>
      </LegalSection>

      <LegalSection title="18. Deposits and Withdrawals">
        <P>
          18.1. The Client may deposit funds into the Trading Account at
          any time during the course of this Agreement. Deposits will be
          made via wire transfer, or any other methods accepted by the
          Company from time to time. The Company will not accept third
          party or anonymous payments in the Trading Account. Deposits
          for Margin and any other deposits due will, unless otherwise
          agreed or specified by us, be required in the Currency of the
          Trading Account, based on your country of origin as specified
          in your address and as shall be specified on the Trading
          Platform. We shall not, and you shall not request us to,
          convert any monies standing to your credit or which have been
          paid by you into your Trading Account in one currency to
          another currency. The detailed information about deposit
          options is shown on the Website.
        </P>
        <P>
          18.2. The Company shall have the right to request the Client
          at any time any documentation to confirm the source of funds
          deposited into the Trading Account. The Company shall have the
          right to reject a deposit of the Client if the Company is not
          duly satisfied as to the legality of the source of funds.
        </P>
        <P>
          18.3. If the Client makes a deposit, the Company shall credit
          the relevant Trading Account with the relevant amount actually
          received by the Company within one (1) Business Day following
          the amount is cleared in the bank account of the Company.
        </P>
        <P>
          18.4. If the funds sent by the Client are not deposited in the
          Trading Account when they were supposed to, the Client shall
          notify the Company and request from the Company to make a
          banking investigation of the transfer. The Client agrees that
          any charges of the investigation may be deducted from his/her
          Trading Account or paid directly to the bank performing the
          investigation. The Client understands and agrees that to
          perform the investigation the Client shall have to provide the
          Company with the requested documents and certificates.
        </P>
        <P>
          18.5. The Company shall affect withdrawals of Client funds
          upon the Company receiving a relevant request from the Client
          in the method accepted by the Company from time to time.
        </P>
        <P>
          18.6. Upon the Company receiving an instruction from the
          Client to withdraw funds from the Trading Account, the Company
          shall pay the said amount within five (5) Business Days, if
          the following requirements are met:
        </P>
        <UL
          items={[
            "(a) the withdrawal instruction includes all necessary information in the Client Area.",
            "(b) the instruction is to make a transfer to the originating account (whether that is a bank account, a payment system account etc.) from which the money was originally deposited in the Trading Account or at the Client's request to a bank account belonging to the Client.",
            "(c) the account where the transfer is to be made belongs to the Client.",
            "(d) at the moment of payment, the Client's balance exceeds the amount specified in the withdrawal instruction including all payment charges and the Client has sufficient funds in his/her Trading Account in order to maintain all Open Positions.",
            "(e) There is no Force Majeure event which prohibits the Company from effecting the withdrawal.",
          ]}
        />
        <P>
          In case any of the above-mentioned conditions is not met, the
          Company shall at its sole discretion take any necessary
          actions to ensure that (i) the identity of the Client is
          appropriately verified, (ii) the transfer is affected to the
          account that belongs to the Client, (iii) the Client has
          sufficient funds in his/her Client Account in order to
          maintain all Open Positions. All such necessary actions shall
          be processed in a reasonable time, which may exceed the time
          period set out above.
        </P>
        <P>
          18.7. It is agreed and understood that withdrawals will only
          be affected towards the Client. The Company will not make
          withdrawals to any other third party or anonymous account.
        </P>
        <P>
          18.8. The manner in which we remit monies to you will be in
          our sole absolute discretion. The Company reserves the right
          to decline a withdrawal request of the Client asking for a
          specific transfer method and the Company has the right to
          suggest an alternative.
        </P>
        <P>
          18.9. Withdrawal fees may apply from time to time depending on
          the Client or type of Trading Account. The applicable fees may
          be found on the Company&apos;s Website.
        </P>
        <P>
          18.10. Mistakes made by the Company during transfer of funds
          shall be refunded to the Client. It is understood that should
          the Client provide wrong instructions for a transfer, the
          Company may be unable to correct the mistake and the Client
          may have to bear the loss. We reserve the right to seek
          reimbursement from you, if we receive a charge-back from any
          credit card issuer or with respect to any other payment
          method, for any reason. We may obtain such reimbursement by
          charging your Trading Account, deducting amounts from future
          payments owed to you, charging your credit card or obtaining
          reimbursement from you by any other lawful means. All bank
          charges howsoever arising will be deducted from your Trading
          Account.
        </P>
      </LegalSection>

      <LegalSection title="19. Safeguarding of Client Money">
        <P>
          19.1. The Company will place any Client money it receives
          into one or more segregated account(s) with reliable Financial
          Institutions. It is understood that the Company may keep
          merchant accounts in its name, as the operator, or in the
          name of another company, acting as a merchant, whose details
          are found on the preamble of this Agreement, with payment
          services providers used to settle payment transactions of its
          Clients.
        </P>
        <P>
          19.2. However, for the avoidance of doubt, it is clarified
          that such merchant accounts are not used for safekeeping of
          Client money but only to effect settlements of payment
          transactions. It is agreed that the Company may use the
          services of a merchant company for facilitating all
          communications in an electronic payment transaction.
        </P>
        <P>
          19.3. For the purposes of safeguarding of Client money, the
          Company:
        </P>
        <UL
          items={[
            "(a) shall keep such records and accounts as are necessary to distinguish Clients' assets from its own and of other Clients such records shall be accurate and correspond to the Client money.",
            "(b) shall conduct, on a regular basis, reconciliations between its internal accounts and records and those of any third parties by whom those assets are held.",
            "(c) shall at all times keep Client money segregated from the Company's own money;",
            "(d) shall not use Client money in the course of its own business;",
            "(e) shall take the necessary steps to ensure that Client money deposited with a financial institution (according to paragraph 19.1 of this Client Agreement) are held in an account(s) identified separately from any accounts used to hold funds of the Company.",
            "(f) Shall introduce adequate organizational arrangements to minimize the risks of the loss or diminution of Client money, as a result of misuse, fraud, poor administration, inadequate record keeping or negligence.",
          ]}
        />
        <P>
          19.4. The Company has duty to and shall exercise due skill,
          care and diligence in the selection and monitoring of the
          financial institution according to paragraph 19.2 of this
          Client Agreement. The Company takes into account the
          expertise and market reputation of such institutions with the
          view of ensuring the protection of Client&apos;s rights, as
          well as any legal or regulatory requirements or market
          practices related to holding of Client money that could
          adversely affect Client&apos;s right. However, it is
          understood that there are circumstances beyond the control of
          the Company and hence the Company does not accept any
          liability or responsibility for any resulting losses to the
          Client as a result of the insolvency or any other analogous
          proceedings or failure of the financial institution where
          Client money will be held.
        </P>
        <P>
          19.5. The financial institution to which the Company will
          pass Client money (as per clause 19.1 of this Client
          Agreement) may hold it in an omnibus account. Hence, in the
          event of the insolvency or any other analogous proceedings in
          relation to that financial institution, the Company may only
          have an unsecured claim against the financial institution on
          behalf of the Client, and the Client will be exposed to the
          risk that the money received by the Company from the
          financial institution is insufficient to satisfy the claims of
          the Client.
        </P>
        <P>
          19.6. It is understood that the Company may hold Client money
          and the money of other clients in the same account (omnibus
          account).
        </P>
        <P>
          19.7. The Company shall not account to the Client for profits
          or interest earned on Client money (other than profit gained
          through trading Transactions from his Trading Account(s)
          under this Agreement) and the Client waives all right to
          interest.
        </P>
        <P>
          19.8. The Company may deposit Client money in overnight
          deposits and will be allowed to keep any interest.
        </P>
        <P>
          19.9. It is agreed that the Company shall have the right to
          transfer the Client money to successors or assignees or
          transferees or buyers, with ten (10) Business Days prior
          Written Notice to the Client for the purposes of paragraph 38
          of the Agreement.
        </P>
      </LegalSection>

      <LegalSection title="20. Lien">
        <P>
          20.1. The Company shall have a general lien on all funds held
          by the Company on the Client&apos;s behalf until the
          satisfaction of the Client&apos;s obligations.
        </P>
      </LegalSection>

      <LegalSection title="21. Netting and Set-Off">
        <P>
          21.1. If the aggregate amount payable by the Client is equal
          to the aggregate amount payable by the Company, then
          automatically the mutual obligations to make payment are set-
          off and cancel each other.
        </P>
        <P>
          21.2. If the aggregate amount payable by one party exceeds the
          aggregate amount payable by the other party, then the party
          with the larger aggregate amount shall pay the excess to the
          other party and all obligations to make payment will be
          automatically satisfied and discharged.
        </P>
        <P>
          21.3. The Company has the right to combine all, or any Trading
          Accounts opened in the Client name and to consolidate the
          balances in such accounts and to set-off such balances in the
          event of termination of the Agreement.
        </P>
      </LegalSection>

      <LegalSection title="22. Inactive and Dormant Trading Accounts">
        <P>
          22.1. There will be no fees charged as a result of inactivity
          in the Trading Account, however, if there are no transactions
          (deposits, withdrawals or trading activity) on your Trading
          Account for a period of six (6) months, the Company reserves
          the right to close your Trading Account and render it dormant,
          after notifying you in writing in your last known contact
          details.
        </P>
      </LegalSection>

      <LegalSection title="23. Amendments">
        <P>
          23.1. The Company may upgrade the Trading Account, convert
          Trading Account type, upgrade or replace the Trading Platform
          or enhance the Services offered to the Client if it reasonably
          considers this is to the Client&apos;s advantage and there is
          no increased cost to the Client as a result of the change.
        </P>
        <P>
          23.2. The Company may also change any terms of the Agreement
          for any of the following reasons:
        </P>
        <UL
          items={[
            "(a) Where the Company reasonably considers that the change would make the terms of the Agreement easier to understand; or the change would not be to the disadvantage of the Client;",
            "(b) To cover the involvement of any service or facility the Company offers to the Client; or the introduction of a new service or facility; or the replacement of an existing service or facility with a new one; or the withdrawal of a service or facility which has become obsolete, or has ceased to be widely used, or has not been used by the Client at any time in the previous year, or it has become very expensive for the Company to offer;",
            "(c) To enable the Company to make reasonable changes to the services offered to the Client as a result of changes in the banking, investment or financial system; or technology; or the systems or Platform used by the Company to run its business or offer the Services hereunder.",
            "(d) As a result of a request of other authority or as a result of change or expected change in Applicable Regulations;",
            "(e) Where the Company finds that any term in the Agreement is inconsistent with Applicable Regulations. In such a case, it will not rely on that term but treat it as if it did reflect the relevant Applicable Regulations and shall update the Agreement to reflect the Applicable Regulations.",
          ]}
        />
        <P>
          23.3. As long as the Client is able to end the Agreement
          without charge, the Company may change any of the terms of the
          Agreement for any serious reason not listed under paragraph
          23.2 of this Client Agreement.
        </P>
        <P>
          23.4. For any change made under clauses 23.2 and 23.3
          herein-above, the Company shall provide the Client with
          advance notice of at least five (5) Business Days where the
          Client is a natural person and three (3) Business Days where
          the Client is a legal person.
        </P>
        <P>
          23.5. When the Company provides Written Notice of changes
          under clauses 23.2 and 23.3 herein, it shall tell the Client
          the date it comes into effect. The Client shall be treated as
          accepting the change on that date unless, before then, the
          Client informs the Company that the Client wishes to
          terminate the Agreement and not accept the change. The Client
          shall not have to pay any charges as a result of terminating
          in this case, other than costs due and payable for Services
          offered until the termination.
        </P>
        <P>
          23.6. The Company shall have the right to review its costs,
          fees, charges, commissions, financing fees, swaps, trading
          conditions, execution rules, roll over policy and trading
          times, found on the Company&apos;s Website and/or Trading
          Platform, from time to time. Such changes shall be affected
          on the Website and/or the Trading Platform and the Client is
          responsible to check for updates regularly. In the absence of
          a Force Majeure event, the Company shall be providing the
          Client with advance notice on its Website of at least five
          (5) Business Days where the Client is a natural person and
          three (3) Business Days where the Client is a legal person.
          The Client shall be treated as accepting the change on that
          date unless, before then, the Client informs the Company that
          the Client wishes to terminate the Agreement and not accept
          the change. The Client shall not have to pay any charges as a
          result of terminating in this case, other than costs due and
          payable for Services offered until the termination.
        </P>
      </LegalSection>

      <LegalSection title="24. Commencement, Termination and Results of Termination">
        <P>
          24.1. The Agreement shall take effect and commence upon the
          receipt by the Client of a notice sent by the Company
          informing the Client that he/she has been accepted as the
          Company&apos;s Client or that Trading Account has been opened
          for him.
        </P>
        <P>
          24.2. Both parties to the Agreement can terminate this
          Agreement by giving such notice in Writing to the other
          Party.
        </P>
        <P>
          24.3. Termination by any Party will not affect any obligation
          which has already been incurred by either Party or any legal
          rights or obligations which may already have arisen under the
          Agreement or any Transactions made hereunder.
        </P>
        <P>
          24.4. Upon termination of the Agreement, all amounts payable
          by the Client to the Company will become immediately due and
          payable including (but without limitation) all outstanding
          costs and any other amounts payable to the Company, any
          charges and additional expenses incurred or to be incurred by
          the Company as a result of the termination of the Agreement.
        </P>
        <P>
          24.5. The Company, under the terms and conditions of this
          Agreement, reserves the right at its absolute discretion, to
          disable the Client&apos;s account without prior notice in case
          it places abnormal number of erroneous requests which creates
          an extra-load to the Company&apos;s servers and can cause
          negative trading experience to the other clients of the
          respective servers. Erroneous requests may include but not
          limited to invalid stops or modifications, wrong TP or SL,
          over limit volume or number of orders, requests with not
          enough account funds and others.
        </P>
        <P>
          24.6. Once notice of termination of this Agreement is sent and
          before the termination date:
        </P>
        <UL
          items={[
            "(a) the Client will have an obligation to close all his Open Positions. If he/she fails to do so, upon termination, the Company will close any Open Positions at current prices;",
            "(b) the Company will be entitled to cease to grant the Client access to the Trading Platform(s) or may limit the functionalities the Client is allowed to use on the Trading Platform(s);",
            "(c) the Company will be entitled to refuse to accept new Orders from the Client;",
            "(d) The Company will be entitled to refuse to the Client to withdraw money from the Trading Account and the Company reserves the right to keep Client's funds as necessary to close positions which have already been opened and/or pay any pending obligations of the Client under the Agreement.",
          ]}
        />
        <P>24.7. Upon Termination any or all the following may apply:</P>
        <UL
          items={[
            "(a) The Company has the right to combine any Trading Accounts of the Client, to consolidate the balances in such Trading Accounts and to set off those balances;",
            "(b) The Company has the right to close the Trading Account(s).",
            "(c) The Company has the right to convert any currency in the Trading Accounts.",
            "(d) The Company has the right to close out the Client's Open Positions.",
            "(e) In absence of illegal activity or suspected illegal activity or fraud of the Client or instructions from the relevant authorities, if there is balance in the Client's favor, the Company will (after withholding such amounts that in the Company's absolute discretion considers appropriate in respect of future liabilities) pay such balance to the Client as soon as reasonably practicable and supply him with a statement showing how that balance was arrived at and, where appropriate, instruct any nominee or/and any custodian to also pay any applicable amounts. Such funds shall be delivered in accordance to the Client's instructions to the Client. It is understood that the Company will affect payments only to an account in the name of the Client.",
          ]}
        />
        <P>
          The Company has the right to refuse, at its discretion, to
          effect third party payments. In the event that the Client
          fails to provide instructions, or the Client cannot be reached
          at his last known address, the Company shall forward such
          funds (at its sole discretion) directly to his bank account as
          notified to us or by way of a cheque sent by mail to the
          address recorded in his Registration Data. It is the
          Client&apos;s responsibility to update his Registration Data,
          the Company having no liability towards the Client for any
          lost money in this instance.
        </P>
      </LegalSection>

      <LegalSection title="25. Event of Default">
        <P>25.1. Each of the following constitutes an &ldquo;Event of Default&rdquo;:</P>
        <UL
          items={[
            "(a) The failure of the Client to perform any obligation due to the Company.",
            "(b) If a bankruptcy application is made in respect of the Client pursuant to the laws of the Mauritius (if the Client is an individual), or if a partnership, in respect of one or more of the partners, or if a company, a receiver, trustee, administrative receiver or similar officer is appointed (if the Client is a legal entity), or if the Client makes an arrangement or composition with the Client's creditors or any procedure which is similar or analogous to any of the above is commenced in respect of the Client.",
            "(c) The failure of the Client to provide any Initial Margin and/or Hedged Margin, or other amount due under the Agreement;",
            "(d) The failure of the Client to submit any identification documentation and/or any other information as required by the Company from time to time;",
            "(e) The failure of the Client to perform any obligation due to the Company emanating from the Agreement or any other documents concluded with the Company;",
            "(f) The Client is unable to pay the Client's debts when they fall due;",
            "(g) Where any representation or warranty made by the Client in paragraph 28 of this Client Agreement is or becomes untrue.",
            "(h) The Client (if the Client is an individual) dies or is declared absent or becomes of unsound mind;",
            "(i) Any other circumstance where the Company reasonably believes that it is necessary or desirable to take any action set out in paragraph 25.2 of this Client Agreement.",
            "(j) An action set out in paragraph 25.2 is required by a competent regulatory authority or body or court.",
            "(k) The Client involves the Company in any type of fraud or illegality or breach of applicable laws and regulations or is at risk of involving the Company in any type of fraud or illegality or breach of applicable laws and regulations;",
            "(l) In cases of material violation by the Client of the requirements established by legislation of Mauritius or other countries, such materiality determined in good faith by the Company.",
            "(m) If the Company suspects that the Client is engaged into money laundering activities, or terrorist financing, or card fraud, or other criminal activities.",
            "(n) The Company reasonably suspects that the Client performed a prohibited action as set out in clauses 2.13.-2.15, 4.2 and 4.4 of this Client Agreement.",
            "(o) The Company reasonably suspects that the Client performed Abusive Trading.",
            "(p) The Company reasonably suspects that the Client opened the Trading Account fraudulently.",
          ]}
        />
        <P>
          25.2. If an Event of Default occurs the Company may, at its
          absolute discretion, at any time and without prior Written
          Notice, take one or more of the following actions:
        </P>
        <UL
          items={[
            "(a) Terminate this Agreement immediately without prior notice to the Client.",
            "(b) Cancel any Open Positions.",
            "(c) Temporarily or permanently bar access to the Trading Platform or suspend or prohibit any functions of the Trading Platform.",
            "(d) Reject or Decline or refuse to transmit or execute any Order of the Client.",
            "(e) Restrict the Client's trading activity.",
            "(f) In the case of fraud, reverse the funds back to real owner or according to the instructions of the law enforcement authorities of the relevant country.",
            "(g) Cancellation of profits gained through Abusive Trading.",
            "(h) Immediately cancel all trades that were executed by the Client.",
            "(i) Take legal action for any losses suffered by the Company.",
          ]}
        />
      </LegalSection>

      <LegalSection title="26. Representations and Warranties">
        <P>
          26.1. You agree that each of the following representations and
          warranties are deemed repeated each time you open or close a
          Transaction by reference to the circumstances prevailing at
          such time:
        </P>
        <UL
          items={[
            "(a) the Registration Data provided to us during registration phase and at any time thereafter is complete, true, accurate and not misleading in all respects and the certificates provided are authentic;",
            "(b) you are of sound mind, legal age and legal competence;",
            "(c) you are duly authorized to execute and deliver the Client Agreement and the Agreement, to open each Transaction and to perform your obligations hereunder and thereunder and have taken all necessary action to authorize such execution, delivery and performance;",
            "(d) You understand how the Transactions hereunder operate before you place an offer to open a Transaction on the Trading Platform. By doing so, you warrant that you understand the terms and conditions of the Agreement, and any legal and financial implications thereof;",
            "(e) you have read and understand the Risks Disclosure and Warnings Notice found on the Company's Website;",
            "(f) you have taken all reasonable steps to understand the specifications and characteristics of the Trading Platform and the associated hardware, software, data processing and telecommunication systems and networks required to access and operate the Trading Platform;",
            "(g) You are acting as a principal and not as agent or representative or trustee or custodian on behalf of someone else. The Client may act on behalf of someone else only if the Company specifically consents to this in writing and provided all the documents required by the Company for this purpose are received;",
            "(h) any person representing you in opening or closing a Transaction will have been, and the person entering into the Client Agreements on your behalf is, duly authorized to do so on your behalf;",
            "(i) you are not an employee of any Underlying Market, a corporation in which any Underlying Market owns a majority of the capital stock, a member of any Underlying Market and/or firm registered on any Underlying Market or any bank, trust or insurance company that trades in Financial Instruments covered under this Agreement between us;",
            "(j) you will not enter into any Transaction for the purposes of exploiting any temporal and/or minor inaccuracy in any rate or price offered on the Trading Platform;",
            "(k) you have obtained all relevant governmental or other authorizations and consents required by you in connection with the Agreement and in connection with opening or closing Transactions and such authorizations and consents are in full force and effect and all of their conditions have been and will be complied with;",
            "(l) the execution, delivery and performance of the Agreement and your use of the Trading Platform including each Transaction you complete thereto will not violate any law, ordinance, charter, by-law or rule applicable to you, in the jurisdiction in which you are resident, or any agreement by which you are bound or by which any of your assets are affected;",
            "(m) Other than in exceptional circumstances you will not send funds to your Trading Account from any bank account other than as stipulated in the Registration Data. Whether exceptional circumstances exist will be determined by us from time to time;",
            "(n) the Client funds used for trading are not in any direct or indirect way the proceeds of any illegal activity or used or intended to be used for terrorist financing;",
            "(o) You are not a politically exposed person (PEP) and do not have any relationship (for example relative or business associate) with a person who holds or held in the last twelve months a prominent public position. If the above statement is untrue and in the event that you have not disclosed this already in the account opening application form, you will inform the Company as soon as possible and will notify the Company if at any stage during the course of this Agreement you become a Politically Exposed Person;",
            "(p) You confirm that you have regular access to the internet and consent to the Company providing you with information, including, without limitation, information about amendments to the terms and conditions, costs, fees, this Agreement, Policies and information about the nature and risks of investments by posting such information on the Website and/or email.",
          ]}
        />
        <P>
          26.2. Any breach by you of any of the representations and
          warranties set forth in paragraph 25.2 or anywhere else in
          the Client Agreement renders any Transaction voidable from
          the outset or capable of being closed by us at our then
          prevailing prices, in our absolute discretion.
        </P>
      </LegalSection>

      <LegalSection title="27. Indemnity">
        <P>
          27.1. In the event the Company provides the information as
          specified in clause 7 of this Client Agreement, the Company
          shall not, in the absence of its fraud, willful default or
          gross negligence, be liable for any losses, costs, expenses
          or damages suffered by you arising from any inaccuracy or
          mistake in any such information given.
        </P>
        <P>
          27.2. The Company will not be held liable for any loss or
          damage, or expense or loss incurred in relation to, or
          directly or indirectly arising from but not limited to
          certain situation/circumstances specified in this Agreement.
          If the Company, its directors, officers, employees,
          Affiliates, or agents incur any claims, damage, liability,
          costs or expenses, which may arise in relation to the
          execution or as a result of the execution of the Agreement
          and/or in relation to the provision of the Services and/or
          in relation to the use of the Trading Platform(s), then the
          Company, its directors, officers, employees, Affiliates, or
          agents bear no responsibility whatsoever, it is your
          responsibility to indemnify the Company for such.
        </P>
        <P>
          27.3. The Company shall in no circumstances be liable to you
          for any consequential, special, incidental or indirect
          losses, damages, loss of profits, loss of opportunity
          (including in relation to subsequent market movements),
          costs or expenses you may suffer in relation to the
          Agreement, the provision of the Services or the use of the
          Platform(s).
        </P>
        <P>
          27.4. The Company&apos;s cumulative liability to you shall
          not exceed the fees paid to the Company under this Agreement
          for the Provision of the Services and use of the Platform(s).
        </P>
      </LegalSection>

      <LegalSection title="28. Disclaimers">
        <P>28.1. We, specifically, do not warrant that:</P>
        <UL
          items={[
            "(a) the Trading Platform will meet your individual requirements and it is therefore your responsibility to ensure that the facilities and functions of the Trading Platform meet your requirements;",
            "(b) your equipment, software, and communication connections will be compatible with the hardware and software we employ to provide the Trading Platform.",
            "(c) the use of the Trading Platform will be uninterrupted, secure or error-free or free of bugs and you agree that the existence of any minor errors or bugs shall not constitute a breach of this Client Agreement.",
            "(d) we will be able to prevent third party disruptions of and to the operation of the Trading Platform.",
            "(e) errors will be corrected in the Trading Platform; or",
            "(f) we will detect every bug in the Trading Platform.",
          ]}
        />
        <P>
          28.2. You acknowledge that we do not control the transfer of
          data over telecommunications facilities, including without
          limitation the internet, nor are we responsible for
          communication failures, distortions or delays when trading
          online (via the internet or a mobile service).
        </P>
        <P>
          28.3. You acknowledge that the trading you conduct on the
          Trading Platform is not conducted on a recognized Exchange,
          rather they are undertaken over the counter (OTC) and as such
          they may expose the Client to greater risks than regulated
          exchange transactions.
        </P>
        <P>
          28.4. We hereby further disclaim any, and shall have no,
          liability or loss resulting from or related to any:
        </P>
        <UL
          items={[
            "(a) disruption of your connections to the internet;",
            "(b) loss to or corruption of any of your data or records, whether stored on the Trading Platform or not, or lack of back-up thereof;",
            "(c) security breaches resulting in part or in whole from third-party software or networking goods or services or from actions or events outside of our reasonable control;",
            "(d) provision of security-related services that we may voluntarily provide outside the scope of the Client Agreement; and",
            "(e) use of the Trading Platform that is not in strict compliance with the Client Agreement, or any technical documentation we provide to you or make available to you by any other means, including without limitation, on our Website;",
            "(f) any failure by the Company to perform any of its obligations under the Agreement as a result of Force Majeure Event or any other cause beyond its control;",
            "(g) any person obtaining your Account Credentials prior to the Client's reporting to the Company of the misuse of the same;",
            "(h) unauthorized third persons having access to information, including electronic addresses, electronic communication, personal data and Account Credentials when the above are transmitted between the Parties or any other party, using the internet or other network communication facilities, post, telephone, or any other electronic means;",
            "(i) any of the risks of the Risks Disclosure and Warnings Notice, found on the Company's Website;",
            "(j) any changes in the rates of tax;",
            "(k) any actions or representations of the Introducer;",
            "(l) the contents, correctness, accuracy and completeness of any communication spread by the use of the Trading Platform;",
            "(m) any acts or omissions (including negligence and fraud) of the Client;",
            "(n) if you are relying on functions such as Trailing Stop, Expert Advisor and Stop Loss Orders;",
            "(o) the occurrence of Slippage; and",
            "(p) Currency risk materializing.",
          ]}
        />
        <P>
          With respect to any Financial Data or other information that
          we or any third party service provider provide to you in
          connection with your use of the Trading Platform:
        </P>
        <UL
          items={[
            "(a) we and any such provider are not responsible or liable if any such data or information is inaccurate or incomplete in any respect;",
            "(b) we and any such provider are not responsible or liable for any actions that you take or do not take based on such data or information;",
            "(c) you will use such data or information solely in accordance and for the purposes set forth in the Client Agreement;",
            "(d) such data or information is proprietary to us and to third party providers as applicable, and you will not retransmit, redistribute, publish, disclose or display in whole or in part such data or information to third parties except as required by applicable regulations; and",
            "(e) you will use such data or information solely in compliance with any applicable laws and regulations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="29. Limitation of Liability">
        <P>
          29.1. We shall not be liable to you for any loss, save in
          cases of gross negligence, fraud or willful default on our
          behalf.
        </P>
        <P>
          29.2. Without prejudice to clause 29.1 of this Client
          Agreement, our aggregate liability to you in respect of all
          claims arising out of or in connection with the Client
          Agreement will be limited to the aggregate amount of the
          deposits less withdrawal on your Trading Account.
        </P>
        <P>
          29.3. Subject to clause 29.2 and 29.5 of this Agreement, you
          will be liable to us for:
        </P>
        <UL
          items={[
            "(a) any loss (whether direct or indirect) of revenue or profits.",
            "(b) any loss (whether direct or indirect) of anticipated savings.",
            "(c) any loss (whether direct or indirect) of goodwill or injury to reputation.",
            "(d) any loss (whether direct or indirect) of business opportunity or arising from business interruption.",
            "(e) any loss (whether direct or indirect) of or corruption to data.",
            "(f) indirect, consequential, incidental, exemplary, punitive or special loss or damage in each case arising out of or in connection with the Client Agreements including without limitation as a result of breach of contract, negligence or any other tort, under statute or otherwise, and regardless of whether either party knew or had reason to know of the possibility of the loss, injury or damage in question.",
          ]}
        />
        <P>
          29.4. Nothing in this paragraph 29 will exclude, limit or
          restrict either Party&apos;s liability for fraud or
          fraudulent misrepresentation committed by that Party (or
          anyone on its behalf).
        </P>
        <P>
          29.5. Our liability, to the extent applicable, for
          infringement of third-party intellectual property rights
          shall be limited to breaches of rights subsisting in Mauritius.
        </P>
        <P>
          29.6. The Client Agreement sets out the full extent of our
          obligations and liabilities in respect of the supply of the
          Trading Platform. In particular, there are no conditions,
          warranties, representations or other terms, express or
          implied, that are binding on us except as specifically
          stated in the Client Agreement. Any condition, warranty,
          representation or other term concerning the supply of the
          Trading Platform which might otherwise be implied into, or
          incorporated in, the Client Agreement, or any collateral
          contract, whether by statute, common law or otherwise, is
          hereby excluded to the fullest extent permitted by law.
        </P>
        <P>
          29.7. We shall not be held liable and are released from all
          claims and losses arising out of:
        </P>
        <UL
          items={[
            "(a) any act or omission by any person obtaining access to your Trading Account or Account Credentials, whether or not you have authorized such access.",
            "(b) delay, failure or error by you in implementing any reasonable instruction we have provided to you.",
            "(c) inaccurate or incomplete instructions received by you.",
            "(d) any reliance or use by you or any other third party with access to your Trading Account of any Financial Data, whether to complete a Transaction on the Trading Platform or for any other purpose whatsoever.",
          ]}
        />
      </LegalSection>

      <LegalSection title="30. Authority to Trade">
        <P>
          30.1. You hereby authorize us to act on any instruction given
          or appearing to be given by you on the Trading Platform via
          the use of your Account Credentials.
        </P>
        <P>
          30.2. We shall be entitled, and you hereby authorize us, to
          rely upon any oral, electronic or written communication or
          instruction received from you. You agree that:
        </P>
        <UL
          items={[
            "(a) once logged on to the Trading Platform following entry of the Account Credentials, we are authorized to act upon instructions without enquiring as to the validity of the instructions and to consider the instructions of like force and effect as written orders made by you.",
            "(b) following log-in to the Trading platform, nothing in this clause will oblige us to verify the validity of each instruction or the signatures prior to every trade; and",
            "(c) You shall bear the risk of all instructions, whether authorized, unauthorized, improper or fraudulent, even if it transpires such instructions were provided without your authority. You shall indemnify us against and save us harmless from all losses, costs, fees, damages, expenses, claims, suits, demands and liabilities whatsoever that we may suffer or incur or that may be brought against us, in any way relating to or arising out of our acting upon, delay in acting upon or refusal to act upon any such instructions or information.",
          ]}
        />
        <P>
          30.3. Without derogating from the above, we will not be under
          any duty to act in accordance with any instruction if we
          reasonably believe that:
        </P>
        <UL
          items={[
            "(a) the person who provided such an instruction was acting in excess of his authority.",
            "(b) acting upon such an instruction would infringe any law, rule, regulation or the Client Agreements; or",
            "(c) in the event that we have accepted an offer to perform a Transaction that we later suspect falls within points (a) and (b) hereunder this clause 30.3, we may, in our absolute discretion, either close such a Transaction at the then prevailing price quoted on the Trading Platform or treat the Transaction as having been void from the outset. Nothing in this clause shall be construed as an obligation on our part to inquire about the authority of any person who purports to represent you.",
          ]}
        />
        <P>
          30.4. Any offer to open or close a Transaction (including an
          Order) must be made by you through the Trading Platform only,
          or via phone subject to conditions of clause 32.2 of this
          Client Agreement. Written offers to open or close a
          Transaction, including offers sent by fax, email or text
          message will not be accepted.
        </P>
        <P>
          30.5. If we receive an offer to open or close a Transaction
          other than in accordance with clause 30.4 of this Client
          Agreement, we may act on such an offer, in our absolute
          discretion, however we will not be responsible for any loss,
          damage or cost that you suffer or incur arising out of any
          error, delay or omission in our acting or refusing to act on
          such an offer.
        </P>
      </LegalSection>

      <LegalSection title="31. Relationship of the Parties">
        <P>
          31.1. You will open each Transaction with us as principal and
          not as agent for any person. This means that unless we have
          otherwise agreed in writing, we will treat you as our Client
          for all purposes and you will be directly and personally
          responsible for performing your obligations under each
          Transaction entered into by you. If you act in connection
          with or on behalf of someone else, whether or not you
          identify that person to us, we will not accept that person as
          a Client of ours and we will accept no obligation to them
          unless otherwise specifically agreed in writing.
        </P>
      </LegalSection>

      <LegalSection title="32. Communication, Written Notices and Language">
        <P>
          32.1. Unless the contrary is specifically provided in this
          Agreement, any notice, request or other communication (other
          than Orders which shall be given only in accordance to
          clause 32.2 hereunder) to be given to the Company by the
          Client under the Agreement shall be sent to the
          Company&apos;s address by email, facsimile, post, or airmail,
          or commercial courier service and shall be deemed delivered
          only when actually received by the Company at the contact
          details appearing in the first page.
        </P>
        <P>
          32.2. It is agreed and understood that Orders shall be placed
          on the Trading Platform and shall not be communicated to the
          Company in any other means. Only when the Platform is not
          operational due to a specific technical issue from the
          platform provider, Orders may be placed via phone and email.
        </P>
        <P>
          32.3. In order to communicate with the Client, the Company
          may use any of the following methods: email, Trading
          Platform&apos;s internal mail, facsimile transmission,
          telephone, post, commercial courier service, air mail or the
          Company&apos;s Website or Client Area.
        </P>
        <P>
          32.4. The Company shall contact the Client at the contact
          details on his Registration Data. Hence, the Client has an
          obligation to notify the Company immediately of any change
          in the Client&apos;s contact details.
        </P>
        <P>
          32.5. The following methods of communication are considered
          as Written Notice from the Company to the Client: email,
          Trading Platform&apos;s internal mail, facsimile
          transmission, post, commercial courier service, air mail or
          the Company&apos;s Website. The following methods of
          communication are considered as Written Notice from the
          Client to the Company: email, post, commercial courier
          service or air mail or commercial courier.
        </P>
        <P>
          32.6. Any communications sent to the Client (documents,
          notices, confirmations, statements, reports etc.) are deemed
          received:
        </P>
        <UL
          items={[
            "(a) If sent by email, within one (1) hour after emailing it and provided the email has left from the Company's outlook.",
            "(b) If sent by the Trading Platform's internal mail, immediately after sending it.",
            "(c) If sent by telephone, once the telephone conversation has been finished.",
            "(d) If sent by post, seven (7) calendar days after posting it.",
            "(e) If sent via commercial courier service, at the date of signing of the document on receipt of such notice.",
            "(f) If sent by air mail, eight (8) Business Days after the date of their dispatch.",
            "(g) If posted on the Company Webpage, within one (1) hour after it has been posted.",
            "(h) if posted on the Client Area or Website, immediately once posted.",
          ]}
        />
        <P>
          32.7. The Language in which the Client may communicate with
          the Company is English, which is the Company&apos;s official
          language. From time to time, the Company may employ staff who
          speak the Client&apos;s native language, in which case the
          Client may find it more convenient to communicate with the
          Company in that language. However, it is clarified that all
          documents and information provided by the Company shall be in
          English. Translation or information provided in languages
          other than English is for informational purposes only and do
          not bind the Company or have any legal effect whatsoever, the
          Company having no responsibility or liability regarding the
          correctness of the information therein and the Client should
          also refer to the English version and the Website for
          information on the Company and its policies.
        </P>
      </LegalSection>

      <LegalSection title="33. Entire Agreement">
        <P>
          33.1. The Client Agreement sets out the entire agreement and
          understanding between the parties in respect of the matters
          dealt with in them. They supersede any previous agreement or
          understanding between you and us in respect of their subject
          matter.
        </P>
        <P>
          33.2. You represent and agree that in entering into the
          Client Agreement you do not rely on, and will have no remedy
          in respect of, any statement, representation, warranty or
          understanding (whether negligently or innocently made) of any
          person (whether party to the Client Agreements or not) other
          than as expressly set out in the Client Agreement.
        </P>
      </LegalSection>

      <LegalSection title="34. Severability">
        <P>
          34.1. Should any part of this Agreement be held by any Court
          of competent jurisdiction to be unenforceable or illegal or
          contravene any rule, regulation or by-law, that part will be
          deemed to have been excluded from this Agreement from the
          beginning, and this Agreement will be interpreted and
          enforced as though the provision had never been included and
          the legality or enforceability of the remaining provisions of
          the Agreement or the legality, validity or enforceability of
          this provision in accordance with the law and/or regulation
          of any other jurisdiction, shall not be affected.
        </P>
      </LegalSection>

      <LegalSection title="35. Waiver">
        <P>
          35.1. Any failure to exercise or any delay in exercising a
          right or remedy provided by the Client Agreement will not
          constitute a waiver of the right or remedy or a waiver of any
          other rights or remedies. A waiver of a breach of any of the
          terms of the Client Agreement will not constitute a waiver of
          any other breach and will not affect the other terms of the
          Client Agreement.
        </P>
        <P>
          35.2. The rights and remedies provided by the Client
          Agreement are cumulative and (except as otherwise provided in
          the Client Agreements) are not exclusive of any rights or
          remedies provided at law or in equity.
        </P>
        <P>
          35.3. Where the Client comprises two or more persons, the
          liabilities and obligations under the Agreement shall be
          joint and several. Any warning or other notice given to one
          of the persons which form the Client shall be deemed to have
          been given to all the persons who form the Client. Any Order
          given by one of the persons who form the Client shall be
          deemed to have been given by all the persons who form the
          Client.
        </P>
      </LegalSection>

      <LegalSection title="36. Assignment">
        <P>
          36.1. You may not assign or transfer any of your rights or
          delegate any of your obligations under the Client Agreements,
          whether by operation of law or otherwise, either on a
          permanent or temporary basis to a third party without our
          prior written consent.
        </P>
        <P>
          36.2. You acknowledge and agree that we may assign our
          rights or obligations under the Client Agreement or the
          entire Agreement to a successor of all or substantially all
          of our business or assets without prior written consent but
          subject to providing previous five (5) Business Days Written
          Notice to you. The Company may sell, transfer or otherwise
          share some or all of your assets, including among others your
          Registration Data, personal information and Log Data, in
          connection with a merger, acquisition, reorganization or
          sale of all or substantially all of our shares or assets, or
          in the event of our bankruptcy and may also transfer your
          client money under the same circumstances.
        </P>
      </LegalSection>

      <LegalSection title="37. Introducer">
        <P>
          37.1. In cases where the Client is introduced to the Company
          through a third person such as a business introducer or
          associate network who performs marketing for the Company,
          within the meaning of Affiliate/Introducer, the Client
          acknowledges that the Company is not bound by any separate
          agreements entered into between the Client and the
          Introducer. It is also made clear that the Introducers are
          not authorized to bind the Company in any way, to offer
          credit in the Company&apos;s name, to offer guarantees against
          losses, to offer investment services or legal, investment or
          tax advice in the Company&apos;s name.
        </P>
        <P>
          37.2. The Client acknowledges and confirms that the Company
          may pay the Introducer with a fee.
        </P>
      </LegalSection>

      <LegalSection title="38. Complaints and Disputes">
        <P>
          38.1. If the Client wishes to report a complaint, he/she
          should follow the Company&apos;s procedures, and send a
          complaint via the standard complaints form found on the
          Website and/or Client Portal, for the purposes of a dispute
          resolution process to initiate.
        </P>
        <P>
          38.2. The Company should respond to the Client&apos;s
          complaint and endeavor to resolve any related dispute within
          thirty (30) days of receipt of the same. If the Company
          requires more than 30 days to finish its investigations, it
          will notify the Client in Writing of the same before the end
          of the 30 days period.
        </P>
        <P>
          38.3. In the event that the Client and the Company cannot
          settle the dispute, the Client is entitled to apply within
          forty-five (45) days since the date of the receipt of final
          resolution answer from the Company for resolution of the
          dispute to the Ombud for Financial Service Providers. More
          particularly, you can submit a dispute to the Ombud for
          Financial Service Providers after you have exhausted your
          option to resolve the dispute directly with Company. Please
          note that the Ombud for Financial Service Providers
          Commission accepts disputes for issues that arose if after
          having made his complaint to the financial institution, the
          complainant still feels aggrieved by the decision of the
          financial institution or he does not receive a reply to his
          complaint after a period of 6 months as from the date the
          complaint was made.
        </P>
        <P>
          38.4. If a situation arises which is not expressly covered by
          this Agreement, the Parties agree to try to resolve the
          matter based on good faith and fairness and by taking such
          action as is consistent with market practice.
        </P>
      </LegalSection>

      <LegalSection title="39. Governing Law and Jurisdiction">
        <P>
          39.1. The interpretation, construction, effect and
          enforceability of the Client Agreements shall be governed by
          the laws of Mauritius and you, and we agree to submit to the
          exclusive jurisdiction of Mauritius courts for the determination
          of disputes. You agree all Transactions carried out on the
          Trading Platform are governed by the laws of Mauritius regardless
          of the location of the Registered User.
        </P>
      </LegalSection>

      <LegalSection title="40. Processing Personal Data">
        <P>
          40.1. You hereby acknowledge and agree to the collection and
          processing of personal data provided by you in connection
          with the opening of a trading account for the purpose of
          performing our obligations under these Terms and Conditions
          and for administering the relationship between you and us.
        </P>
        <P>
          The Company may on some occasions share your Personal Data
          with third parties in order to provide you with the Services
          and improve your trading experience, in accordance with the
          applicable laws and Company&apos;s Privacy Policy. The
          Company will not disclose your Personal Data to any third
          party without your prior consent and/or without having a
          legal basis to do so.
        </P>
        <P>
          40.2. You hereby acknowledge and agree that the Company may
          pass information provided by you to the Company, to other
          companies belonging to the same group with the Company and
          to other associated companies, for the purpose of processing
          and/or analyzing the personal data for the purpose of
          providing you with the Services.
        </P>
        <P>
          40.3. In the event that you have consented to the use of
          your personal data by the Company for marketing and
          information management purposes, or to conduct market
          research for the Company, then the Company may share these
          data with other companies in its group or with carefully
          selected external parties that may use the personal data to
          provide you with information about the products and services
          that may be of your interest.
        </P>
        <P>
          40.4. Under certain circumstances, you have the right in
          relation to your personal data:
        </P>
        <UL
          items={[
            "(a) Request access to your personal data (commonly known as a \u201Cdata subject access request\u201D). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.",
            "(b) Request correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.",
            "(c) Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.",
            "(d) Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which overrides your rights and freedoms.",
            "(e) Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios: (a) if you want us to establish the data's accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.",
            "(f) Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.",
            "(g) Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.",
          ]}
        />
        <P>
          You must read and acknowledge the Privacy Policy of the
          Company available online on the Website.
        </P>
      </LegalSection>

      <LegalSection title="41. Multiple Account Holders — Joint Accounts">
        <P>
          41.1. Where the Client comprises two or more persons and/or
          in the case of a joint account, the liabilities and
          obligations under the Agreement shall be joint and several.
          Any warning or other notice given to one of the persons which
          form the Client shall be deemed to have been given to all the
          persons who form the Client. Any Order given by one of the
          persons who form the Client shall be deemed to have been
          given by all the persons who form the Client.
        </P>
        <P>
          41.2. The persons who form the same Client by all being part
          of a joint account (the multiple account holders) acknowledge
          that they equally have access and powers over the joint
          account and therefore, withdrawal of profits and placing of
          trades by any one of them is entirely their liability and
          responsibility and the Company is not liable for any losses
          that the Client of the joint account may incur as a result of
          one of the persons forming the Client acting on the Trading
          Account in any way. The Company may accept instructions by
          any of the persons being part of the Client under a joint
          account as if it was requested by all the persons whom the
          joint account belongs to.
        </P>
        <P>
          41.3. In the event of the death or mental incapacity of one
          of the persons who form the Client, all funds held by the
          Company, or its nominee will be for the benefit and at the
          order of the other part and all obligations and liabilities
          owed to the Company will be owed by the other part.
        </P>
      </LegalSection>

      <LegalSection title="Appendix — FX and CFD Trading Terms">
        <LegalSubsection title="42. Scope">
          <P>
            This Appendix is applicable only to those Clients trading in
            the Financial Instruments of Contracts for Differences for all
            types of Underlying Assets available with the Indices, base
            or precious Metals, Forwards, Commodities, Stocks, Shares
            Indices and Futures. Although the term FX / FX Contract is a
            type of a Contract for Difference, it is mentioned separately
            to mean the type of CFD where the Underlying Asset is a
            Currency Pair.
          </P>
        </LegalSubsection>

        <LegalSubsection title="43. Opening and Closing Orders/Transactions">
          <P>
            43.1. In order to open a Transaction in an FX and CFD on the
            Trading Platform, you must either open a Buy or a Sell, at
            the price quoted by the Trading Platform at the time of such
            Transaction. In order to close a Transaction, you must
            either offer to sell (in the case of a Buy), or purchase (in
            the case of a Sell), the Underlying Asset covered by such
            open Transaction, at the price quoted by the Trading Platform
            at the time of such closing offer. Transactions or open
            positions cannot be transferred to other FX and CFD providers
            or their platforms.
          </P>
          <P>
            Full details of our Order Execution Policy can be found on
            the Website.
          </P>
          <P>
            43.2. The Trading Platform will provide a Buy quote and a
            Sell quote for each Underlying Asset traded on the Trading
            Platform. You acknowledge that upon opening a Buy or closing
            a Sell, you may only do so at the price quoted by the Trading
            Platform to purchase such Underlying Asset. You further
            acknowledge that upon opening a Sell or closing a Buy, you
            may only do so at the price quoted by the Trading Platform
            for such Underlying Asset.
          </P>
          <P>
            43.3. On the Trading Platform, you shall be entitled to make
            an offer to open a Transaction at the best available rate on
            the Trading Platform (&ldquo;Market Order&rdquo;) at the time
            of opening such a Transaction, unless you specify a
            particular price in which to make an offer to open a
            Transaction (&ldquo;Limit Order&rdquo;). With respect to a
            Market Order, the price at which a Transaction is completed
            may not always be at the exact rate displayed when the order
            is submitted. You agree that your offer to open a Market
            Order may be accepted at a lower price or higher price than
            the price indicated by you in your Market Order, within a
            certain range as specified on the Trading Platform from time
            to time. If you choose to open a Market Order, your offer
            will be accepted at the best possible rate offered on the
            Trading Platform.
          </P>
          <P>
            43.4. With respect to a Limit Order, the price at which a
            Transaction is completed may not always be at the exact rate
            displayed when the order is submitted. You agree that your
            offer to open a Limit Order may be accepted at a lower price
            if a buy, or higher price if a sell, than the price indicated
            by you in your Limit Order as specified on the Trading
            Platform from time to time. If you offer to open a Limit
            Order, your offer may be accepted at the price indicated by
            you in your offer. At any time prior to acceptance of a Limit
            Order, you may cancel the Limit Order without any further
            liability. If you choose to open a Limit Order, your offer
            will be accepted at the best possible rate offered on the
            Trading Platform.
          </P>
          <P>
            43.5. Orders can be placed and (if allowed) changed within
            the Trading Hours for each type of FX and CFD appearing on
            the Company&apos;s Website, as amended from the Company from
            time to time. The Client agrees that the Orders to open a
            position if accepted by the Company outside the Trading
            Hours may not be capable of execution should the market not
            trade at the price stipulated once Trading Hours commence.
          </P>
          <P>
            43.6. Pending Orders, not executed, shall remain effective
            through the next trading session (as applicable). All open
            spot positions will be rolled over to the next Business Day
            at the close of business in the relevant Underlying Market,
            subject to the Company&apos;s rights to close the open spot
            position. Any open forward positions will be rolled over at
            the expiry of the relevant period into the next relevant
            period subject to the Company&apos;s rights to close the
            open forward position.
          </P>
          <P>
            43.7. Market Orders not executed because there is not enough
            volume to fill them, will not remain effective and will be
            cancelled.
          </P>
          <P>
            43.8. Orders shall be valid in accordance with the type and
            time of the given Order, as specified by the Client. If the
            time of validity of the Order is not specified, it shall be
            valid for an indefinite period. However, the Company may
            delete one or all Pending Orders if the Trading Account
            Equity reaches zero.
          </P>
          <P>43.9. Orders may be removed by the Client before they are executed.</P>
          <P>
            43.10. Stop loss and Take Profit orders may be changed as
            long as they are higher in distance than a specific level
            (depending on the trading symbol).
          </P>
          <P>
            43.11. The Client may change the expiration date of Pending
            Orders or delete or modify a Pending Order before it is
            executed. In order to change the expiry, the Client will
            need to cancel the Order and place a new one.
          </P>
          <P>43.12. FX and CFD Orders on currencies are executed as follows:</P>
          <UL
            items={[
              "a. Take Profit (T/P) orders are executed at stated prices.",
              "b. Stop Loss (S/L) orders are executed at first market prices.",
              "c. Stop Loss (S/L) orders set for lock positions are executed at first market prices.",
              "d. Limit orders are executed at stated prices.",
              "e. Buy Stop and Sell Stop orders for position opening are executed at first market prices.",
            ]}
          />
          <P>
            43.13. It is understood that Quotes on the Client Terminal
            are indicative Quotes and Slippage may occur. To this end
            the Client acknowledges and agrees that:
          </P>
          <UL
            items={[
              "a. Due to market volatility and factors beyond its control, the Company cannot guarantee that an Order (including Stop Loss and Take Profit Orders) will be executed at the level specified in the Client Order. For example, an Order may be closed at a worse price than as originally specified by the Client in such an Order (i.e. Negative Slippage). In such an event, the Company will close the Transaction at the next best price.",
              "b. Where the price for an Underlying Asset moves to the Client's advantage (i.e. Positive Slippage), the Company can pass such price improvement on to the Client.",
            ]}
          />
          <P>
            43.14. In the event that the Company is unable to proceed
            with an Order, with regard to price or size or other reason,
            the Company will send a re-quote to the Client (with the
            price it is willing to deal until the price the Client asks
            is available). The Order will be rejected, and the Client
            will need to place another Order.
          </P>
          <P>
            43.15. The Company shall not be obliged to arrange for the
            execution of the Client&apos;s Orders in respect of any CFD
            out of normal Trading Hours which appear on the
            Company&apos;s Website.
          </P>
          <P>
            43.16. The Company will delete Error Quotes (Spikes) from the
            Server&apos;s Quotes Base.
          </P>
        </LegalSubsection>

        <LegalSubsection title="44. Stop and Limits">
          <P>
            44.1. We may, in our sole discretion, allow you to specify a
            closing price for a Transaction through a Stop-loss and Take
            Profit Order, subject always to the terms of the Client
            Agreements and any other terms and conditions we may
            implement from time to time.
          </P>
          <P>
            44.2. Upon your offer and our acceptance of your Order, you
            hereby authorize us to close the Transaction at the
            &ldquo;Stop Loss&rdquo; price or &ldquo;Take Profit&rdquo;
            price, as applicable, and as agreed in the Order, without
            further instruction from or notification to you. We may, in
            our sole discretion, close the Transaction when the price
            quoted by us on the Trading Platform equals or exceeds the
            price accepted by us for such an Order. You acknowledge that
            we will not be required to close any Transaction if you are
            not in compliance with any of the factors set forth in
            clause 13.13 of this Client Agreement.
          </P>
          <P>
            44.3. We may, in our sole discretion, allow you to request
            the opening or closing of a Transaction, including a
            &ldquo;Stop Loss&rdquo; and &ldquo;Take Profit&rdquo; Order,
            within a specific time period determined by you. If we have
            accepted such a request, we may in our sole discretion, close
            the Transaction within such specific time period. You
            acknowledge and agree that we shall not be obliged to close
            such a Transaction outside such specific time period, or
            which does not otherwise comply with any other limitations
            agreed upon with respect to such Transaction.
          </P>
          <P>
            44.4. We may, in our sole discretion, accept an offer to
            place a Trailing Stop in relation to a Stop Loss Order. You
            acknowledge that the original price level set forth in a
            Stop Loss Order may be amended as the market on the Trading
            Platform moves in your favor. Whilst your Trailing Stop is
            still in effect, you agree that each change in the market by
            at least Pips on the Trading Platform in your favor shall
            constitute a new offer by you to raise the level of your
            Trailing Stop by one hundredth of one percentage point.
            Changes in a Pip will be rounded to the nearest absolute
            value in your base currency based on your country of origin,
            as shall be specified on the Trading Platform.
          </P>
          <P>
            44.5. You acknowledge and agree that due to market
            volatility and factors beyond our control, we cannot
            guarantee that an Order will be executed at the level
            specified in your Order, for example, an Order may be closed
            at a worse price than as originally specified by you in such
            an Order. In such an event, we will close the Transaction at
            the next best price. For example, with respect to a Stop
            Loss Order, in the case of a Buy, the price of an Underlying
            Asset underlying such Order may suddenly decrease below the
            Stop Loss price, without ever reaching such price. In the
            case of a Sell, the price of an Underlying Asset underlying
            such Order may suddenly increase above the Stop-loss price,
            without ever reaching such price.
          </P>
          <P>
            44.6. With respect to a Take Profit where the price for an
            Underlying Asset moves to your advantage (for example, if the
            price goes down as you buy or the price goes up as you sell),
            you agree that we can (but do not have to) pass such price
            improvement on to you. For example, in the case of a Buy,
            the price of an Underlying Asset underlying such Order may
            suddenly increase above the Take Profit price, without ever
            reaching such price. In the case of a Sell, the price of an
            Underlying Asset underlying such Order may suddenly decrease
            below the Take Profit price, without ever reaching such
            price.
          </P>
          <P>
            44.7. The Client agrees that placing a Stop Loss Order will
            not necessarily limit losses to the intended amounts,
            because market conditions may make it impossible to execute
            such an Order at the stipulated price and the Company bears
            no responsibility whatsoever.
          </P>
          <P>
            44.8. The Client agrees that trading operations using
            additional functions of the Client Trading Terminal such as
            Trailing Stop and/or Expert Advisor are executed completely
            under the Client&apos;s responsibility, as they depend
            directly on his trading terminal and the Company bears no
            responsibility whatsoever.
          </P>
        </LegalSubsection>

        <LegalSubsection title="45. Premium (or Swaps)">
          <P>
            45.1. Any open Transaction held by you at the end of the
            trading day of the Underlying Market or over the weekend
            when the relevant Underlying Market is closed, shall
            automatically be rolled over to the next business day to
            avoid an automatic close. You acknowledge that when rolling
            such Transactions to the next Business Day, a Premium/Swap
            will be either added or subtracted from your Account with
            respect to such Transaction (&ldquo;Rolling&rdquo;). The
            Premium amount is a constant percentage of the position
            value and is based on a number of factors including among
            others, whether the Transaction is a Buy or a Sell, interest
            rates, Underlying Asset differentials, daily price
            fluctuations and other economic and market related factors.
            The Premium/Swap for each Underlying Asset is displayed in
            the &ldquo;details&rdquo; link for each specific Underlying
            Asset on the Trading Platform.
          </P>
          <P>
            45.2. In deciding whether to open a Transaction for a
            specific Underlying Asset, you acknowledge that you are
            aware of the Premium.
          </P>
          <P>
            45.3. You hereby authorize us to add or subtract the
            Premium/Swap to or from your Trading Account for any open
            Transactions that have accrued a Premium/Swap, in accordance
            with the applicable rate thereto, each day at the time of
            collection specified on the Trading Platform for each
            individual Underlying Asset, as applicable.
          </P>
        </LegalSubsection>

        <LegalSubsection title="46. Maintenance Fees for Islamic Trading Accounts">
          <P>
            46.1. A maintenance fee will be applicable for Islamic
            Trading Accounts and charged if the positions of the Clients
            in the Islamic Trading Account are held for longer than 2
            days.
          </P>
        </LegalSubsection>

        <LegalSubsection title="47. Expiry Transactions">
          <P>
            47.1. We may, in our sole and absolute discretion, set an
            Expiry Date and time for a specific Instrument.
          </P>
          <P>
            47.2. In the event we set an Expiry Date for a specific
            Underlying Asset, it will be displayed on the Trading
            Platform in the details link for each Underlying Asset. It
            is your responsibility to make yourself aware of the Expiry
            Date and time.
          </P>
          <P>
            47.3. If you do not close an open Transaction with respect to
            an Underlying Asset which has an Expiry Date, prior to such
            Expiry Date, the Transaction shall automatically close upon
            the Expiry Date. The Transaction shall close at a price
            which will be the last price quoted on the Trading Platform
            immediately prior to the applicable Expiry Date and time.
          </P>
        </LegalSubsection>

        <LegalSubsection title="48. Spreads">
          <P>
            48.1. All FX and CFDs available with the Company have spreads
            which appear on the Trading Platform and/or the Website. The
            Company has the right to amend its spreads in its discretion
            from time to time. Such changes shall be affected on the
            Trading Platform and/or the Website and the Client is
            responsible to check for updates regularly.
          </P>
        </LegalSubsection>
      </LegalSection>
    </LegalLayout>
  );
}
