import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  P,
  UL,
} from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Client Agreement",
  description:
    "Finsai Trade Client Agreement: the binding terms and conditions governing the use of our trading platform, services and the relationship between the Company and the Client.",
};

export default function ClientAgreementPage() {
  return (
    <LegalLayout title="Client Agreement">
      <LegalSection>
        <P>
          This Client Agreement is entered by and between FINSAI TRADE LTD,
          a private limited company incorporated and validly existing under
          the laws of Mauritius — License No. GB25204899, registered under
          Company Number C228371 (&ldquo;Company&rdquo; or &ldquo;we&rdquo;
          or &ldquo;us&rdquo;) — on the one part, and the Client (which may
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
            style={{ color: "#7DB9D6", textDecoration: "underline" }}
          >
            www.finsaitrade.com
          </a>{" "}
          (&ldquo;Website&rdquo;) who is not a Client of the Company. If
          you decide to download our software to use the trading demonstration
          then the terms and conditions within this document (to the extent
          applicable) apply to you and by downloading the software you accept
          the same and agree to abide by the terms and conditions herein,
          although you shall not be treated as our client, and we shall have
          no obligations towards you.
        </P>
        <P>
          By accepting the Client Agreement, through the online process or
          application for the opening of a trading account, the Client enters
          into a binding legal agreement and relationship with the Company.
        </P>
        <P>
          This Client Agreement together with its appendixes, any other legal
          document and agreement available in the Company&apos;s Website,
          including but not limited to the Risk Disclosures, the Loyalty
          Reward Program Terms and Conditions and any other agreement entered
          into between the Company and the Client (together the
          &ldquo;Agreement&rdquo;), as amended from time to time, set out the
          terms upon which the Company will offer services to the Client and
          shall govern the relationship between the parties.
        </P>
        <P>
          The Company may provide the above documents in languages other than
          English. Translation or information provided in languages other than
          English is for informational purposes only and do not bind the
          Company or have any legal effect whatsoever; the Client should also
          refer to the English version and the Website for information on the
          Company and its policies.
        </P>
        <P>
          <strong>Address:</strong> 3 Emerald Park, Trianon, Quatre Bornes
          72257, MAURITIUS
        </P>
      </LegalSection>

      <LegalSection title="1. Definitions">
        <P>
          <strong>&ldquo;Abusive Trading&rdquo;</strong> shall mean
          manipulations or exploitation of any temporal and/or minor
          inaccuracy in any rate or price offered on the Trading Platform, a
          combination of faster/slower feeds, use of any robots, spiders or
          other automated data entry system with the Trading Platform (unless
          consent is received in writing), or violation of the Client&apos;s
          obligations under the Appendix.
        </P>
        <P>
          <strong>&ldquo;Account Credentials&rdquo;</strong> shall mean a
          unique username and password used by you to access and use the
          Trading Platform.
        </P>
        <P>
          <strong>&ldquo;Agreement&rdquo;</strong> shall mean this Client
          Agreement with its Appendixes and any other legal document and
          agreement available on the Company&apos;s Website.
        </P>
        <P>
          <strong>&ldquo;Applicable Regulations&rdquo;</strong> shall mean
          (a) any rules of a relevant regulatory authority having powers over
          the Company; (b) the rules of the relevant market; and (c) all
          other applicable laws, rules and regulations of Nauru.
        </P>
        <P>
          <strong>&ldquo;Base Currency&rdquo;</strong> shall mean in an FX
          Contract the first currency in the Currency Pair against which the
          Client buys or sells the Quote Currency.
        </P>
        <P>
          <strong>&ldquo;Business Day&rdquo;</strong> shall mean any day,
          other than a Saturday or Sunday, or any national or international
          holidays in the Republic of Nauru.
        </P>
        <P>
          <strong>&ldquo;CFD&rdquo;</strong> shall mean the Financial
          Instrument which is a contract between the parties stipulating
          that the seller will pay to the buyer the difference between the
          current value of an Underlying Asset and its value at a future
          time.
        </P>
        <P>
          <strong>&ldquo;Client Area&rdquo;</strong> a section on the
          Company&apos;s website dedicated to each Client containing
          information addressed to the specific Client.
        </P>
        <P>
          <strong>&ldquo;Force Majeure Event&rdquo;</strong> shall have the
          meaning as set out in paragraph 15.1 of this Client Agreement.
        </P>
        <P>
          <strong>&ldquo;Margin&rdquo;</strong> shall mean the Initial Margin
          and the Maintenance Margin collectively.
        </P>
        <P>
          <strong>&ldquo;Order&rdquo;</strong> shall mean an instruction from
          the Client to trade in FX and CFDs.
        </P>
        <P>
          <strong>&ldquo;Slippage&rdquo;</strong> shall mean the difference
          between the expected price of a Transaction in a CFD and the price
          the Transaction is executed at.
        </P>
        <P>
          <strong>&ldquo;Trading Account&rdquo;</strong> shall mean the
          exclusive personalized account of the Client.
        </P>
        <P>
          <strong>&ldquo;Trading Platform&rdquo;</strong> shall mean any
          electronic mechanism operated and maintained by the Company.
        </P>
        <P>
          <strong>&ldquo;Underlying Asset&rdquo;</strong> shall mean the
          object or underlying asset in a CFD.
        </P>
      </LegalSection>

      <LegalSection title="CFDs on Cryptocurrencies — Additional Risk Disclosure">
        <P>
          Trading Contracts for Difference (&ldquo;CFDs&rdquo;) on
          cryptocurrencies involves significant risk and is not suitable for
          all investors. These digital assets are highly speculative and
          subject to extreme volatility, limited regulation, potential
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
          cryptocurrencies with Finsai Trade Ltd, you confirm that you have
          read, understood, and agreed to the risks outlined in this
          agreement and assume full responsibility for all related trading
          outcomes.
        </P>
      </LegalSection>

      <LegalSection title="2. License and Use of the Trading Platform">
        <P>The Trading Platform is not intended for distribution to, or use by, any person:</P>
        <UL
          items={[
            "Who is under the age of 18 years old and/or not of legal competence or of sound mind.",
            "Who resides in any country where such distribution or use would be contrary to local law or regulation.",
            "Who is a citizen or resident of certain jurisdictions such as Canada, Crimea, Cuba, Cyprus, Iran, Malaysia, North Korea, Sudan, Syria, United States, as the Company does not accept Clients from these countries.",
            "Who is an employee, director, associate, agent, relative, or otherwise connected to the Company.",
          ]}
        />
        <P>
          Subject to the terms and conditions of this Agreement, we hereby
          grant you a personal, limited, non-exclusive, revocable,
          non-transferable and non-sub-licensable license to install and/or
          use the Trading Platform in object code only, solely for your
          personal use and benefit and not for professional use.
        </P>
        <P>You agree not to:</P>
        <UL
          items={[
            "Use the Trading Platform for illegal or inappropriate purposes.",
            "Interfere with or disrupt the proper operation of our software, hardware, systems or networks.",
            "Attempt to gain unauthorized access to our computer system.",
            "Convey any false, unlawful, harassing, defamatory, abusive, hateful, racial, threatening, harmful, vulgar, obscene, seditious or otherwise objectionable material.",
            "Carry out any commercial business on the Trading Platform.",
            "Use any software which applies artificial intelligence analysis to the Company's systems and/or Trading Platform.",
            "Use any type of spider, virus, worm, Trojan-horse, time bomb or any other codes designed to distort, delete, damage or disassemble the Trading Platform.",
            "Unlawfully log into the Trading Platform from a location or IP address originating from a region or jurisdiction where it is not allowed for regulatory reasons.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Account Credentials and Security">
        <P>
          In the event that we accept you as our Client we shall open a
          Trading Account in your name which will allow you to place Orders
          on our Trading Platform. You may open up to five (5) Trading
          Accounts between all Trading Platforms owned by the Company.
        </P>
        <P>You:</P>
        <UL
          items={[
            "Are responsible for ensuring that your Account Credentials remain confidential.",
            "Must notify us immediately if you become aware that your Account Credentials have become compromised.",
            "Agree we do not have to establish the authority of anyone quoting your Trading Account number or Account Credentials.",
          ]}
        />
        <P>
          You acknowledge that you are ultimately and solely responsible for
          all actions on the Trading Platform through your Registration Data
          including any unauthorized disclosure of your Account Credentials.
          You shall indemnify, defend, and hold us harmless from any claim,
          proceeding, loss or damages based upon any use, misuse, or
          unauthorized use of the Trading Platform through your Account
          Credentials.
        </P>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <P>
          You acknowledge that all Intellectual Property Rights in the
          Trading Platform are owned by us or our licensors. You will not
          copy, record, edit, alter or translate any of the Trading
          Platform, reverse engineer or attempt to derive source code,
          impair any of our Intellectual Property Rights, or develop methods
          to enable unauthorized parties to use the Trading Platform.
        </P>
      </LegalSection>

      <LegalSection title="5. Application and Registration Data">
        <P>
          In order to use the Trading Platform and our Services, you must
          register with us by providing personal details, including identity
          documents, as Registration Data. We are not required (and may be
          unable under Applicable Regulations) to accept a person as our
          client until all documentation we require has been received,
          properly and fully completed, and all internal Company checks have
          been duly satisfied.
        </P>
        <P>You agree and undertake to:</P>
        <UL
          items={[
            "Notify us of any changes to your personal and financial information and/or in your financial condition.",
            "Provide true, accurate, current and complete Registration Data as prompted by the registration process.",
            "Maintain and promptly update the Registration Data to keep it accurate, current and complete.",
            "Ensure that you log out from your Trading Account at the end of each session on the Website.",
            "Represent and warrant that you are not, nor are you acting on behalf of, an individual or entity listed on the Specially Designated Nationals & Blocked Persons List (SDN) or otherwise ineligible to engage in transactions due to OFAC sanctions.",
            "Comply with all the applicable OFAC laws and regulations.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Services">
        <P>
          If you are accepted as our Client, we shall be providing brokerage
          services in CFDs. When trading in CFDs, there is no delivery or
          safekeeping of the Underlying Asset to which the CFD is referring
          to. The Company will operate as an electronic communications
          networks (ECN) broker which may pass the trades to a liquidity
          provider or execute the same internally.
        </P>
        <P>
          The Company shall further provide social trading features and copy
          trading services (&ldquo;Copy Trading Services&rdquo;) to assist
          the Client in testing, evaluating and selecting his/her investment
          strategy. By using the Copy Trading Services you authorize the
          Company to execute any and all transactions and/or positions
          undertaken by the trader, account, portfolio and/or strategy you
          chose to copy trade. You remain, at all times, solely responsible
          for both monitoring and selecting and assessing the suitability of
          the copied accounts and the overall performance of the copied
          trader, account, portfolio and/or strategy.
        </P>
      </LegalSection>

      <LegalSection title="7. Advice and Commentary">
        <P>
          The Company will not advise the Client about the merits of a
          particular Order or give him any form of advice, and the Client
          acknowledges that the Services do not include the provision of
          investment advice. The Client alone will decide how to handle his
          Trading Account and place Orders and take relevant decisions based
          on his own judgment.
        </P>
        <P>
          The Company will not be under any duty to provide the Client with
          any legal, tax or other advice relating to any Transaction. The
          Client may wish to seek independent advice before entering a
          Transaction if he/she is in any doubt as to whether he/she may
          incur any tax liabilities.
        </P>
      </LegalSection>

      <LegalSection title="8. Confidentiality">
        <P>
          The Company may collect Client information directly from the
          Client or from other persons including, for example, credit
          reference agencies, fraud prevention agencies, banks, other
          financial institutions, third authentication service providers and
          the providers of public registers.
        </P>
        <P>
          Client information which the Company holds is to be treated by the
          Company as confidential and will not be used for any purpose other
          than in connection with the provision, administration and
          improvement of the Services, anti-money laundering and due
          diligence checks, for administration of the Services, for research
          and statistical purposes and for marketing purposes.
        </P>
        <P>
          The Company has the right to disclose Client information where
          required by law or a court order, by any regulatory authority, to
          investigate or prevent fraud, money laundering or other illegal
          activity, to credit reference and fraud prevention agencies, to
          the Company&apos;s professional advisors and service providers, or
          where necessary to defend or exercise the Company&apos;s legal
          rights.
        </P>
      </LegalSection>

      <LegalSection title="9. Personal Data">
        <P>
          If you are a natural person, the Company will use, store, process
          and handle your personal information and the Company is obliged to
          supply you, on request, with a copy of personal data which it
          holds about you (if any). By submitting an account opening
          application form and subsequently entering into the Agreement with
          us, you are consenting to the transmittal of your personal data.
          You have the right to be informed of the personal data we hold
          about you.
        </P>
      </LegalSection>

      <LegalSection title="10. Administration and Marketing">
        <P>
          You accept that the Company may, for the purpose of administering
          the terms of the Agreement, from time to time, make direct contact
          with you by telephone, fax, email, courier or post.
        </P>
      </LegalSection>

      <LegalSection title="11. Telephone Calls, Faxed Documents and Records">
        <P>
          Telephone conversations between the Client and the Company may be
          recorded and kept by the Company and recordings will be the sole
          property of the Company. The Client accepts such recordings as
          conclusive evidence of the Orders or conversations so recorded.
        </P>
        <P>
          Under Applicable Regulations, the Company will keep records
          containing Client personal data, trading information, account
          opening documents, communications and anything else which relates
          to the Client for at least five (5) years after termination of the
          Agreement or a Transaction.
        </P>
      </LegalSection>

      <LegalSection title="12. Trade Confirmations and Reporting">
        <P>
          The Company shall provide the Client with adequate reporting on
          his Orders via online access to his Client Account. The Company
          will send a notice to the Client in a durable medium confirming
          execution of the Order as soon as possible and no later than the
          first business day following execution. Such notification will
          include Company identification, trading date, type of the Order,
          nature of the Order, the quantity, the unit price and the total
          consideration, the total sum of commissions and expenses.
        </P>
        <P>
          If the Client has a reason to believe that a report / trade
          confirmation is wrong or if the Client does not receive a report,
          the Client may contact the Company within ten (10) Business Days
          from the date on which the report was sent or ought to have been
          sent. If the Client expresses no objections during this period,
          the content is considered as approved.
        </P>
      </LegalSection>

      <LegalSection title="13. General Rules of Trading">
        <P>
          Once the Client places an Order on the Trading Platform, the
          Company arranges for the execution of the said Order. Each
          Transaction conducted on the Trading Platform is comprised of
          first an offer by you to us to complete a Transaction at a certain
          price quoted on the Trading Platform, and our subsequent
          acceptance of your offer.
        </P>
        <P>
          We reserve the right to void from the outset any Transaction
          containing or based on any Manifest Error. In the absence of our
          fraud or willful default, we will not be liable to you for any
          loss, cost, claim, demand or expense following any Manifest Error.
        </P>
        <P>
          You acknowledge that the Trading Platform is independent of any
          Underlying Markets and we are under no obligation to quote a
          particular price or follow the trading rules consistent with such
          Underlying Markets. Our prices may differ from the current prices
          on the relevant Underlying Markets.
        </P>
        <P>
          Use of any robots, spiders or other automated data entry system
          with the Trading Platform is expressly prohibited, unless you
          receive express written consent by the Company. All Transactions
          must be completed manually by you.
        </P>
      </LegalSection>

      <LegalSection title="14. Our Right to Force Close">
        <P>
          If the prices quoted on the Trading Platform change such that the
          total Difference payable by you equals or exceeds the total
          Maintenance Margin, or the amount in your Trading Account is equal
          to or less than the total Maintenance Margin, or you fail to comply
          with a Margin Call request, or if we receive a charge-back from
          your credit card issuer, you acknowledge that we have the right,
          in our sole discretion, to immediately close any and all of your
          Open Positions whether at a loss or a profit without any prior
          notice to you.
        </P>
      </LegalSection>

      <LegalSection title="15. Force Majeure">
        <P>A Force Majeure Event will include, but is not limited to:</P>
        <UL
          items={[
            "Any act, event or occurrence (strike, riot or civil commotion, act of terrorism, war, industrial action, acts and regulations of any governmental or supra national bodies or authorities) that prevents us from maintaining an orderly market.",
            "Act of God, earthquake, tsunami, hurricane, typhoon, accident, storm, flood, fire, epidemic or other natural disaster.",
            "Labour disputes and lock-out which affect the operations of the Company.",
            "The suspension or closure of any Underlying Market.",
            "A financial services moratorium having been declared by appropriate regulatory authorities.",
            "Any breakdown or failure of transmission, communication or computer facilities, interruption of power supply, or electronic or communications equipment failure.",
            "The failure of any relevant supplier, Financial Institution, intermediate broker, agent or principal of ours, custodian, sub-custodian, dealer, Underlying Market, clearing house or regulatory or self-regulatory organization, to perform its obligations.",
          ]}
        />
        <P>
          If we determine that a Force Majeure Event exists, we may, in our
          absolute discretion, without notice and at any time, suspend or
          modify the Agreement, shut down the Trading Platform, cancel any
          Client Orders, increase Margin requirements without notice, close
          out any or all Open Positions, increase Spreads, decrease Leverage,
          or change Stop out Level.
        </P>
      </LegalSection>

      <LegalSection title="16. Margin Requirements and Margin Calls">
        <P>
          In order to open a Position for an Underlying Asset, you undertake
          to provide the Initial Margin in your Trading Account. In order to
          keep a Position Open, you undertake to ensure that the amount in
          your Trading Account equals or exceeds the Maintenance Margin.
        </P>
        <P>
          The Company shall not have an obligation to make any Margin Call
          to the Client but in the event that it does, the Client should
          take any of the three options within a short period of time to
          deal with the situation: limit his/her exposure (close trades);
          hedge his positions; or deposit more money in his Trading Account.
        </P>
        <P>
          Failure to meet the Margin Requirements gives us the right in our
          sole absolute discretion to close any and all of your Open
          Positions whether at a loss or a profit without further notice to
          you.
        </P>
      </LegalSection>

      <LegalSection title="17. Settlement, Negative Balance Protection, Payments, Costs and Taxes">
        <P>
          The Company operates on a &ldquo;negative balance protection&rdquo;
          basis with respect to its Clients. This means that a Client cannot
          lose more than the total funds in his/her Trading Account. The
          Company reserves its right to provide negative balance protection,
          unless the Client has arrived at negative balance due to abuse of
          Company&apos;s pricing/platform or breach of any of the terms of
          this Agreement.
        </P>
        <P>
          You shall be liable for any and all taxes, fees and assessments
          with respect to any Transaction you complete on the Trading
          Platform. It is your obligation alone to calculate and pay all
          taxes applicable to you in your country of residence.
        </P>
      </LegalSection>

      <LegalSection title="18. Deposits and Withdrawals">
        <P>
          The Client may deposit funds into the Trading Account at any time
          during the course of this Agreement. Deposits will be made via
          wire transfer, or any other methods accepted by the Company from
          time to time. The Company will not accept third party or anonymous
          payments in the Trading Account.
        </P>
        <P>
          Upon the Company receiving an instruction from the Client to
          withdraw funds, the Company shall pay the said amount within five
          (5) Business Days, subject to verification of the Client&apos;s
          identity, the withdrawal instruction being complete, the transfer
          being made to the originating account belonging to the Client, the
          Client&apos;s balance exceeding the amount specified including all
          payment charges, and the absence of any Force Majeure event.
        </P>
      </LegalSection>

      <LegalSection title="19. Safeguarding of Client Money">
        <P>
          The Company will place any Client money it receives into one or
          more segregated account(s) with reliable Financial Institutions.
          The Company shall keep such records and accounts as are necessary
          to distinguish Clients&apos; assets from its own, shall conduct
          regular reconciliations, shall at all times keep Client money
          segregated from the Company&apos;s own money, and shall not use
          Client money in the course of its own business.
        </P>
        <P>
          The financial institution to which the Company will pass Client
          money may hold it in an omnibus account. The Company shall not
          account to the Client for profits or interest earned on Client
          money and the Client waives all right to interest.
        </P>
      </LegalSection>

      <LegalSection title="20. Lien">
        <P>
          The Company shall have a general lien on all funds held by the
          Company on the Client&apos;s behalf until the satisfaction of the
          Client&apos;s obligations.
        </P>
      </LegalSection>

      <LegalSection title="21. Netting and Set-Off">
        <P>
          If the aggregate amount payable by the Client is equal to the
          aggregate amount payable by the Company, then automatically the
          mutual obligations to make payment are set-off and cancel each
          other. The Company has the right to combine all, or any Trading
          Accounts opened in the Client name and to consolidate the balances
          in such accounts and to set-off such balances in the event of
          termination of the Agreement.
        </P>
      </LegalSection>

      <LegalSection title="22. Inactive and Dormant Trading Accounts">
        <P>
          There will be no fees charged as a result of inactivity in the
          Trading Account, however, if there are no transactions (deposits,
          withdrawals or trading activity) on your Trading Account for a
          period of six (6) months, the Company reserves the right to close
          your Trading Account and render it dormant, after notifying you in
          writing in your last known contact details.
        </P>
      </LegalSection>

      <LegalSection title="23. Amendments">
        <P>
          The Company may upgrade the Trading Account, convert Trading
          Account type, upgrade or replace the Trading Platform or enhance
          the Services offered to the Client if it reasonably considers this
          is to the Client&apos;s advantage and there is no increased cost
          to the Client as a result of the change.
        </P>
        <P>
          For any change made under the amendment clauses, the Company shall
          provide the Client with advance notice of at least five (5)
          Business Days where the Client is a natural person and three (3)
          Business Days where the Client is a legal person.
        </P>
      </LegalSection>

      <LegalSection title="24. Commencement, Termination and Results of Termination">
        <P>
          The Agreement shall take effect and commence upon the receipt by
          the Client of a notice sent by the Company informing the Client
          that he/she has been accepted as the Company&apos;s Client.
        </P>
        <P>
          Both parties to the Agreement can terminate this Agreement by
          giving such notice in Writing to the other Party. Termination by
          any Party will not affect any obligation which has already been
          incurred by either Party.
        </P>
      </LegalSection>

      <LegalSection title="25. Event of Default">
        <P>Each of the following constitutes an &ldquo;Event of Default&rdquo;:</P>
        <UL
          items={[
            "The failure of the Client to perform any obligation due to the Company.",
            "If a bankruptcy application is made in respect of the Client.",
            "The failure of the Client to provide any Initial Margin and/or Hedged Margin, or other amount due under the Agreement.",
            "The failure of the Client to submit any identification documentation and/or any other information as required.",
            "The Client is unable to pay the Client's debts when they fall due.",
            "Any representation or warranty made by the Client becomes untrue.",
            "The Client involves the Company in any type of fraud or illegality or breach of applicable laws and regulations.",
            "If the Company suspects that the Client is engaged into money laundering activities, terrorist financing, card fraud, or other criminal activities.",
            "The Company reasonably suspects that the Client performed Abusive Trading.",
            "The Company reasonably suspects that the Client opened the Trading Account fraudulently.",
          ]}
        />
        <P>
          If an Event of Default occurs the Company may, at its absolute
          discretion, terminate this Agreement immediately, cancel any Open
          Positions, temporarily or permanently bar access to the Trading
          Platform, reject any Order, restrict the Client&apos;s trading
          activity, reverse funds in cases of fraud, cancel profits gained
          through Abusive Trading, immediately cancel all trades that were
          executed by the Client, or take legal action.
        </P>
      </LegalSection>

      <LegalSection title="26. Representations and Warranties">
        <P>
          You agree that each of the following representations and
          warranties are deemed repeated each time you open or close a
          Transaction:
        </P>
        <UL
          items={[
            "The Registration Data provided to us is complete, true, accurate and not misleading.",
            "You are of sound mind, legal age and legal competence.",
            "You are duly authorized to execute and deliver the Client Agreement.",
            "You understand how the Transactions hereunder operate before you place an offer to open a Transaction.",
            "You have read and understand the Risks Disclosure and Warnings Notice.",
            "You are acting as a principal and not as agent or representative or trustee or custodian on behalf of someone else.",
            "You will not enter into any Transaction for the purposes of exploiting any temporal and/or minor inaccuracy in any rate or price offered on the Trading Platform.",
            "The Client funds used for trading are not the proceeds of any illegal activity or used or intended to be used for terrorist financing.",
            "You are not a politically exposed person (PEP) — or you have disclosed any such status.",
          ]}
        />
      </LegalSection>

      <LegalSection title="27. Indemnity">
        <P>
          In the event the Company provides the information as specified in
          this Agreement, the Company shall not, in the absence of its
          fraud, willful default or gross negligence, be liable for any
          losses, costs, expenses or damages suffered by you arising from
          any inaccuracy or mistake in any such information given. The
          Company shall in no circumstances be liable to you for any
          consequential, special, incidental or indirect losses, damages,
          loss of profits, loss of opportunity, costs or expenses you may
          suffer in relation to the Agreement.
        </P>
      </LegalSection>

      <LegalSection title="28. Disclaimers">
        <P>
          We specifically do not warrant that the Trading Platform will meet
          your individual requirements; that your equipment, software, and
          communication connections will be compatible with the hardware and
          software we employ; that the use of the Trading Platform will be
          uninterrupted, secure or error-free; or that we will be able to
          prevent third party disruptions of and to the operation of the
          Trading Platform.
        </P>
      </LegalSection>

      <LegalSection title="29. Limitation of Liability">
        <P>
          We shall not be liable to you for any loss, save in cases of gross
          negligence, fraud or willful default on our behalf. Our aggregate
          liability to you in respect of all claims arising out of or in
          connection with the Client Agreement will be limited to the
          aggregate amount of the deposits less withdrawals on your Trading
          Account.
        </P>
      </LegalSection>

      <LegalSection title="30. Authority to Trade">
        <P>
          You hereby authorize us to act on any instruction given or
          appearing to be given by you on the Trading Platform via the use
          of your Account Credentials. We will not be under any duty to act
          in accordance with any instruction if we reasonably believe that
          the person who provided such an instruction was acting in excess
          of his authority or that acting upon such an instruction would
          infringe any law, rule, regulation or the Client Agreement.
        </P>
      </LegalSection>

      <LegalSection title="31. Relationship of the Parties">
        <P>
          You will open each Transaction with us as principal and not as
          agent for any person. This means that unless we have otherwise
          agreed in writing, we will treat you as our Client for all
          purposes and you will be directly and personally responsible for
          performing your obligations under each Transaction entered into by
          you.
        </P>
      </LegalSection>

      <LegalSection title="32. Communication, Written Notices and Language">
        <P>
          In order to communicate with the Client, the Company may use any
          of the following methods: email, Trading Platform&apos;s internal
          mail, facsimile transmission, telephone, post, commercial courier
          service, air mail or the Company&apos;s Website or Client Area.
        </P>
        <P>
          The language in which the Client may communicate with the Company
          is English, which is the Company&apos;s official language. All
          documents and information provided by the Company shall be in
          English. Translations are for informational purposes only.
        </P>
      </LegalSection>

      <LegalSection title="33. Entire Agreement">
        <P>
          The Client Agreement sets out the entire agreement and
          understanding between the parties in respect of the matters dealt
          with in them. They supersede any previous agreement or
          understanding between you and us in respect of their subject
          matter.
        </P>
      </LegalSection>

      <LegalSection title="34. Severability">
        <P>
          Should any part of this Agreement be held by any Court of
          competent jurisdiction to be unenforceable or illegal, that part
          will be deemed to have been excluded from this Agreement from the
          beginning, and this Agreement will be interpreted and enforced as
          though the provision had never been included.
        </P>
      </LegalSection>

      <LegalSection title="35. Waiver">
        <P>
          Any failure to exercise or any delay in exercising a right or
          remedy provided by the Client Agreement will not constitute a
          waiver of the right or remedy or a waiver of any other rights or
          remedies. The rights and remedies provided by the Client Agreement
          are cumulative and are not exclusive of any rights or remedies
          provided at law or in equity.
        </P>
      </LegalSection>

      <LegalSection title="36. Assignment">
        <P>
          You may not assign or transfer any of your rights or delegate any
          of your obligations under the Client Agreements to a third party
          without our prior written consent. You acknowledge and agree that
          we may assign our rights or obligations under the Client Agreement
          to a successor of all or substantially all of our business or
          assets without prior written consent but subject to providing
          five (5) Business Days Written Notice to you.
        </P>
      </LegalSection>

      <LegalSection title="37. Introducer">
        <P>
          In cases where the Client is introduced to the Company through a
          third person such as a business introducer or associate network,
          the Client acknowledges that the Company is not bound by any
          separate agreements entered into between the Client and the
          Introducer. Introducers are not authorized to bind the Company in
          any way, to offer credit in the Company&apos;s name, or to offer
          guarantees against losses.
        </P>
      </LegalSection>

      <LegalSection title="38. Complaints and Disputes">
        <P>
          If the Client wishes to report a complaint, he/she should follow
          the Company&apos;s procedures, and send a complaint via the
          standard complaints form found on the Website and/or Client
          Portal. The Company should respond to the Client&apos;s complaint
          and endeavor to resolve any related dispute within thirty (30)
          days of receipt of the same. In the event that the Client and the
          Company cannot settle the dispute, the Client is entitled to apply
          within forty-five (45) days for resolution of the dispute to the
          Ombud for Financial Service Providers.
        </P>
      </LegalSection>

      <LegalSection title="39. Governing Law and Jurisdiction">
        <P>
          The interpretation, construction, effect and enforceability of the
          Client Agreement shall be governed by the laws of Nauru and you
          and we agree to submit to the exclusive jurisdiction of Nauru
          courts for the determination of disputes. You agree all
          Transactions carried out on the Trading Platform are governed by
          the laws of Nauru regardless of the location of the Registered
          User.
        </P>
      </LegalSection>

      <LegalSection title="40. Processing Personal Data">
        <P>
          You hereby acknowledge and agree to the collection and processing
          of personal data provided by you in connection with the opening of
          a trading account for the purpose of performing our obligations
          under these Terms and Conditions and for administering the
          relationship between you and us. The Company may share your
          Personal Data with third parties in accordance with applicable
          laws and the Company&apos;s Privacy Policy.
        </P>
      </LegalSection>

      <LegalSection title="41. Multiple Account Holders — Joint Accounts">
        <P>
          Where the Client comprises two or more persons and/or in the case
          of a joint account, the liabilities and obligations under the
          Agreement shall be joint and several. The persons who form the
          same Client acknowledge that they equally have access and powers
          over the joint account. The Company may accept instructions by any
          of the persons being part of the Client under a joint account as
          if it was requested by all the persons whom the joint account
          belongs to.
        </P>
      </LegalSection>

      <LegalSection title="Appendix — FX and CFD Trading Terms">
        <P>
          This Appendix is applicable only to those Clients trading in the
          Financial Instruments of Contracts for Differences for all types of
          Underlying Assets available with the Indices, base or precious
          Metals, Forwards, Commodities, Stocks, Shares Indices and Futures.
        </P>
        <P>
          In order to open a Transaction in an FX and CFD on the Trading
          Platform, you must either open a Buy or a Sell, at the price quoted
          by the Trading Platform at the time of such Transaction. In order
          to close a Transaction, you must either offer to sell (in the case
          of a Buy), or purchase (in the case of a Sell), the Underlying
          Asset covered by such open Transaction, at the price quoted by the
          Trading Platform at the time of such closing offer.
        </P>
        <P>
          Quotes on the Client Terminal are indicative Quotes and Slippage
          may occur. Due to market volatility and factors beyond its
          control, the Company cannot guarantee that an Order (including
          Stop Loss and Take Profit Orders) will be executed at the level
          specified in the Client Order.
        </P>
        <P>
          Any open Transaction held by you at the end of the trading day of
          the Underlying Market or over the weekend when the relevant
          Underlying Market is closed shall automatically be rolled over to
          the next business day to avoid an automatic close. A Premium/Swap
          will be either added or subtracted from your Account with respect
          to such Transaction.
        </P>
        <P>
          A maintenance fee will be applicable for Islamic Trading Accounts
          and charged if the positions of the Clients in the Islamic Trading
          Account are held for longer than 2 days.
        </P>
        <P>
          All FX and CFDs available with the Company have spreads which
          appear on the Trading Platform and/or the Website. The Company has
          the right to amend its spreads in its discretion from time to
          time.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
