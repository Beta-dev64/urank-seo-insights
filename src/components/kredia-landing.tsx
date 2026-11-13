import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import krediaLogo from "@/assets/brand/kredia-logo.webp.asset.json";
import "./kredia.css";

const steps = [
  {
    id: "invoice",
    number: "01",
    name: "Kredia Invoice",
    title: "An invoice that gets moving.",
    copy: "Create a clear invoice in minutes. Send it straight to your distributor with a payment link and an agreed due date.",
    tag: "Create & send",
    color: "teal",
  },
  {
    id: "ledger",
    number: "02",
    name: "Kredia Ledger",
    title: "Every naira, accounted for.",
    copy: "Invoices, partial payments, and balances live together in one up-to-date ledger. No notebook-to-Excel relay.",
    tag: "Always in sync",
    color: "gold",
  },
  {
    id: "nudge",
    number: "03",
    name: "Kredia Nudge",
    title: "A reminder that keeps it human.",
    copy: "Send thoughtful reminders before and after a due date. Clear communication, without turning a good relationship into an awkward call.",
    tag: "Gentle by design",
    color: "cream",
  },
  {
    id: "flow",
    number: "04",
    name: "Kredia Flow",
    title: "Make paying the easy part.",
    copy: "Give distributors a straightforward way to pay. See payments reflected in the ledger, with a receipt for both sides.",
    tag: "Pay & reconcile",
    color: "blue",
  },
  {
    id: "trust",
    number: "05",
    name: "Kredia Trust Score",
    title: "Good habits open new doors.",
    copy: "A clear picture of payment history helps your team recognise reliable partners and make more informed credit decisions.",
    tag: "Build trust over time",
    color: "forest",
  },
] as const;

const faqs = [
  {
    question: "Who is Kredia for?",
    answer: "Kredia is designed for companies that sell goods on credit, and for the distributors who buy from them. Finance teams get a clearer view of what is owed; distributors get clear balances and easier ways to pay.",
  },
  {
    question: "Does Kredia replace our accounting system?",
    answer: "Kredia brings credit invoices, payments, reminders, and distributor payment history into one focused workflow. Your existing accounting setup can remain in place while you explore where Kredia fits.",
  },
  {
    question: "How are distributors reminded?",
    answer: "Kredia Nudge is built around timely, considerate messages. The goal is to help people remember what is due and keep the business relationship intact—not to shame or pressure them.",
  },
  {
    question: "How does the Trust Score help?",
    answer: "It makes payment behaviour easier to see over time, helping a business identify reliable distributors and make more informed decisions about future credit.",
  },
];

function KButton({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "light" | "outline" }) {
  return (
    <Button asChild className={`k-button k-button--${variant}`}>
      <a href={href}>{children}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

function BrandLogo({ light = false }: { light?: boolean }) {
  return <a className={`k-logo${light ? " k-logo--light" : ""}`} href="#top" aria-label="Kredia home"><img src={krediaLogo.url} alt="Kredia" /></a>;
}

export function KrediaLanding() {
  const workflowRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const workflow = workflowRef.current;
    if (!workflow) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = workflow.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(0.999, Math.max(0, -rect.top / scrollable)) : 0;
        setActiveStep(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".kredia [data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const current = steps[activeStep];

  return (
    <div className="kredia" id="top">
      <a className="k-skip" href="#main">Skip to content</a>
      <header className={`k-header${menuOpen ? " is-open" : ""}`}>
        <div className="k-header__inner">
          <BrandLogo />
          <nav className="k-nav" aria-label="Main navigation">
            <a href="#platform">Platform</a><a href="#workflow">How it works</a><a href="#business">For business</a><a href="#faq">FAQs</a>
          </nav>
          <a className="k-header__cta" href="#workflow">See Kredia in action <ArrowUpRight aria-hidden="true" /></a>
          <Button variant="ghost" size="icon" className="k-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="k-mobile-nav">
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        <nav className="k-mobile-nav" id="k-mobile-nav" aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {[ ["Platform", "#platform"], ["How it works", "#workflow"], ["For business", "#business"], ["FAQs", "#faq"] ].map(([label, href]) => <a key={label} href={href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></a>)}
        </nav>
      </header>

      <main id="main">
        <section className="k-hero" aria-labelledby="hero-title">
          <div className="k-hero__content">
            <p className="k-eyebrow"><span /> Credit sales, made clear</p>
            <h1 id="hero-title">Keep credit clear.<br /><em>Keep business moving.</em></h1>
            <p className="k-hero__copy">Kredia helps businesses track what’s owed, make paying easier, and keep strong distributor relationships along the way.</p>
            <div className="k-hero__actions"><KButton href="#workflow">Explore the platform</KButton><a className="k-text-link" href="#business">Built for business teams <ArrowRight aria-hidden="true" /></a></div>
            <div className="k-hero__proof"><span><Check aria-hidden="true" /> Clear balances</span><span><Check aria-hidden="true" /> Considerate reminders</span><span><Check aria-hidden="true" /> Better relationships</span></div>
          </div>
          <div className="k-hero__visual" aria-label="Preview of the Kredia credit sales dashboard">
            <div className="k-dashboard">
              <div className="k-dashboard__top"><div className="k-dashboard__brand"><span className="k-mark">K</span><span>Kredia <small>Business</small></span></div><div className="k-dashboard__avatar">M</div></div>
              <div className="k-dashboard__intro"><div><span className="k-overline">MONDAY, 18 MARCH</span><h2>Good morning, team</h2></div><span className="k-dashboard__dots">•••</span></div>
              <div className="k-metrics"><div><span>Total outstanding</span><strong>₦24.8m</strong><small><i /> across active invoices</small></div><div><span>Collected this month</span><strong>₦8.4m</strong><small className="k-positive"><i /> payments received</small></div></div>
              <div className="k-chart"><div className="k-chart__head"><div><span className="k-overline">CREDIT COLLECTIONS</span><strong>Cash flow at a glance</strong></div><span className="k-chart__period">Last 30 days <ChevronDown aria-hidden="true" /></span></div><div className="k-chart__bars" aria-hidden="true">{[35, 52, 44, 70, 54, 64, 49, 81, 60, 94, 73, 100, 81, 90, 72, 97, 88, 100, 78, 96].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="k-chart__labels"><span>01 Mar</span><span>08 Mar</span><span>15 Mar</span><span>18 Mar</span></div></div>
              <div className="k-invoice-peek"><div className="k-invoice-peek__icon"><ArrowUpRight aria-hidden="true" /></div><div><strong>Distributor payments</strong><span>Your ledger is up to date</span></div><span className="k-live"><i /> Live</span></div>
            </div>
            <div className="k-float-note"><span className="k-float-note__icon"><Check aria-hidden="true" /></span><span><strong>Payment recorded</strong><small>Balance updated automatically</small></span></div>
            <div className="k-hero__caption"><span className="k-caption-line" /> One clearer view of every credit sale</div>
          </div>
          <a className="k-scroll-cue" href="#platform" aria-label="Scroll to platform overview"><ArrowDown aria-hidden="true" /></a>
        </section>

        <section className="k-intro" id="platform" aria-labelledby="intro-title">
          <div className="k-section-head" data-reveal><p className="k-eyebrow"><span /> The everyday reality</p><h2 id="intro-title">Credit should build a business.<br /><em>Not bury it in paperwork.</em></h2></div>
          <div className="k-reality" data-reveal>
            <div className="k-reality__scene"><div className="k-paper k-paper--back"><span>SALES RECORD</span><i /><i /><i /><i /></div><div className="k-paper k-paper--front"><span>INVOICE · 00128</span><strong>₦2,000,000</strong><i /><i /><i /></div><div className="k-stamp">30<br /><small>DAYS</small></div></div>
            <div className="k-reality__copy"><span className="k-step-label">A familiar story</span><h3>Musa takes the goods.<br />The paperwork takes over.</h3><p>A ₦2,000,000 order goes out. It lands in a notebook, a spreadsheet, and somebody’s memory. Weeks pass. The balance is harder to see, the reminder is awkward, and a good business relationship gets put under pressure.</p><p className="k-reality__pull">It’s not that Musa is difficult.<br /><strong>The process just needs to work better.</strong></p></div>
          </div>
        </section>

        <section className="k-workflow" id="workflow" ref={workflowRef} aria-label="The Kredia credit sales workflow">
          <div className="k-workflow__sticky" data-tone={current.color}>
            <div className="k-workflow__left">
              <p className="k-eyebrow"><span /> One connected workflow</p>
              <div className="k-workflow__copy" key={current.id}>
                <span className="k-step-label">{current.number} / 05 &nbsp;·&nbsp; {current.name}</span>
                <h2>{current.title}</h2>
                <p>{current.copy}</p>
                <span className="k-feature-tag"><i />{current.tag}</span>
              </div>
              <div className="k-step-nav" aria-label="Workflow steps">
                {steps.map((step, index) => <button key={step.id} type="button" aria-label={`Show step ${step.number}: ${step.name}`} aria-current={activeStep === index ? "step" : undefined} onClick={() => { const element = workflowRef.current; if (!element) return; const total = element.offsetHeight - window.innerHeight; window.scrollTo({ top: element.offsetTop + total * (index / steps.length), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}><span>{step.number}</span><i><b style={{ width: activeStep === index ? "100%" : "0%" }} /></i><small>{step.name.replace("Kredia ", "")}</small></button>)}
              </div>
            </div>
            <div className="k-workflow__right"><WorkflowMockup step={activeStep} /></div>
            <div className="k-workflow__footer"><span>Scroll to follow an order through Kredia</span><span className="k-workflow__progress">{current.number} <i /> 05</span></div>
          </div>
        </section>

        <section className="k-modules" aria-labelledby="modules-title">
          <div className="k-modules__head" data-reveal><div><p className="k-eyebrow"><span /> From invoice to insight</p><h2 id="modules-title">The tools behind<br /><em>clearer credit.</em></h2></div><p>Five focused tools, working together to make credit sales easier to manage and easier to pay.</p></div>
          <div className="k-module-grid">
            {steps.map((step, i) => <article className={`k-module k-module--${step.color}`} data-reveal key={step.id}><span className="k-module__number">0{i + 1}</span><span className="k-module__icon">{["↗", "≡", "◌", "₦", "✓"][i]}</span><h3>{step.name}</h3><p>{["Send clear invoices with a due date and a direct way to pay.", "Keep every invoice, part-payment, and balance together.", "Friendly prompts help everyone stay on top of what is due.", "Make payment simple and update the ledger as money arrives.", "See payment patterns and build confidence in your partners."][i]}</p><a href="#workflow" aria-label={`Explore ${step.name}`}><ArrowUpRight aria-hidden="true" /></a></article>)}
          </div>
        </section>

        <section className="k-audience" id="business" aria-labelledby="audience-title">
          <div className="k-audience__intro" data-reveal><p className="k-eyebrow k-eyebrow--light"><span /> Better for both sides</p><h2 id="audience-title">More clarity for business.<br /><em>More respect for people.</em></h2><p>Credit works best when both sides know where they stand. Kredia brings the process into focus without making it feel like debt collection.</p></div>
          <div className="k-audience__sides">
            <article className="k-audience-card k-audience-card--company" data-reveal><span className="k-audience-card__tag">For the business</span><h3>Less chasing.<br />More room to grow.</h3><div className="k-audience-card__list"><p><Check aria-hidden="true" /> CFO sees what is owed and coming due.</p><p><Check aria-hidden="true" /> Finance has one live view of balances.</p><p><Check aria-hidden="true" /> Sales teams can focus on selling.</p></div><div className="k-audience-card__graphic"><div className="k-mini-ledger"><span>OUTSTANDING BALANCE</span><strong>₦1,500,000</strong><small><i /> Updated after part-payment</small></div><span className="k-mini-ring">K</span></div></article>
            <article className="k-audience-card k-audience-card--distributor" data-reveal><span className="k-audience-card__tag">For the distributor</span><h3>Know your balance.<br />Keep your reputation.</h3><div className="k-audience-card__list"><p><Check aria-hidden="true" /> See each invoice and payment clearly.</p><p><Check aria-hidden="true" /> Get a helpful reminder before it is due.</p><p><Check aria-hidden="true" /> Build a payment history that counts.</p></div><div className="k-chat"><div className="k-chat__top"><span className="k-chat__avatar">M</span><span><strong>Musa · Distributor</strong><small>Credit account</small></span><span className="k-chat__secure">●</span></div><div className="k-chat__bubble">Hi Musa, hope sales are moving well. Just a reminder that your balance is due Friday.<small>09:41 ✓✓</small></div><div className="k-chat__reply">Thanks for the heads-up. I’ll take care of it.</div></div></article>
          </div>
        </section>

        <section className="k-principles" aria-labelledby="principles-title">
          <div className="k-principles__headline" data-reveal><p className="k-eyebrow"><span /> A different kind of credit</p><h2 id="principles-title">Good systems.<br /><em>Good relationships.</em></h2><p>Kredia makes credit clearer, so money can flow and business relationships can stay strong.</p></div>
          <div className="k-principles__items"><article data-reveal><span>01</span><div><h3>Clear, not complicated</h3><p>One place for invoices, payments, and balances. No more stitching together notebooks and spreadsheets.</p></div></article><article data-reveal><span>02</span><div><h3>Gentle, not aggressive</h3><p>Reminders are there to help a partner remember—not to make them feel like a problem.</p></div></article><article data-reveal><span>03</span><div><h3>Trust that keeps growing</h3><p>Consistent payment behaviour can help businesses make thoughtful decisions about future credit.</p></div></article></div>
        </section>

        <section className="k-faq" id="faq" aria-labelledby="faq-title">
          <div className="k-faq__heading" data-reveal><p className="k-eyebrow"><span /> The details</p><h2 id="faq-title">Good questions.<br /><em>Clear answers.</em></h2><p>What businesses and distributors usually want to know about Kredia.</p></div>
          <div className="k-faq__list">{faqs.map((item, index) => <article className={`k-faq-item${openFaq === index ? " is-open" : ""}`} key={item.question} data-reveal><h3><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{item.question}<span><ChevronDown aria-hidden="true" /></span></button></h3><div className="k-faq-item__answer" aria-hidden={openFaq !== index}><p>{item.answer}</p></div></article>)}</div>
        </section>

        <section className="k-cta" id="contact" aria-labelledby="cta-title"><div className="k-cta__pattern" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="k-cta__content" data-reveal><p className="k-eyebrow k-eyebrow--light"><span /> Make credit clearer</p><h2 id="cta-title">Keep money moving.<br /><em>Keep people close.</em></h2><p>Kredia makes credit sales easier to track, simpler to pay, and better for the relationships behind every order.</p><KButton href="#workflow" variant="light">Explore the Kredia workflow</KButton></div><div className="k-cta__orbit" aria-hidden="true"><span>K</span><i /><i /><i /></div></section>
      </main>

      <footer className="k-footer"><div className="k-footer__main"><div className="k-footer__brand"><BrandLogo light /><p>Clear credit. Stronger business relationships.</p></div><div className="k-footer__links"><div><strong>Explore</strong><a href="#platform">Platform</a><a href="#workflow">How it works</a><a href="#business">For business</a></div><div><strong>Learn</strong><a href="#faq">FAQs</a><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></div></div></div><div className="k-footer__bottom"><span>© {new Date().getFullYear()} Kredia</span><span>Credit made clear.</span></div></footer>
    </div>
  );
}

function WorkflowMockup({ step }: { step: number }) {
  const stage = steps[step] ?? steps[0];
  return (
    <div className="k-product-window" key={stage.id}>
      <div className="k-product-window__bar"><div className="k-window-dots"><i /><i /><i /></div><span>kredia / business</span><span className="k-product-window__initial">K</span></div>
      <div className="k-product-window__body">
        <aside className="k-product-sidebar"><div className="k-product-sidebar__brand"><span className="k-mark">K</span> Kredia</div>{["Overview", "Invoices", "Ledger", "Reminders", "Payments", "Distributors"].map((item, i) => <span className={i === [1, 2, 3, 4, 5][step] ? "is-selected" : ""} key={item}><i>{["⌂", "▤", "≡", "◌", "↗", "◎"][i]}</i>{item}</span>)}<div className="k-sidebar-help"><span>Need a hand?</span><strong>Your team is here</strong></div></aside>
        <div className="k-product-main"><div className="k-product-heading"><div><span className="k-overline">{stage.name.toUpperCase()}</span><h3>{["Create a new invoice", "Distributor ledger", "Your next reminder", "Payment received", "Distributor profile"][step]}</h3></div><span className="k-product-user">M</span></div>
          {step === 0 && <div className="k-mock-invoice"><div className="k-mock-invoice__title"><span>INVOICE · DRAFT</span><span className="k-status k-status--gold">New invoice</span></div><h4>FMCG supply order</h4><p>Distributor <strong>Musa</strong><span>Invoice date <strong>Today</strong></span></p><p>Payment due <strong>In 21 days</strong></p><div className="k-mock-total"><span>Invoice total</span><strong>₦2,000,000</strong></div><div className="k-mock-confirm"><Check aria-hidden="true" /> Ready to send <ArrowRight aria-hidden="true" /></div></div>}
          {step === 1 && <div className="k-mock-ledger"><div className="k-mock-ledger__summary"><span>Current balance<strong>₦1,500,000</strong></span><span className="k-status k-status--teal">Part paid</span></div><div className="k-ledger-row k-ledger-row--head"><span>ACTIVITY</span><span>AMOUNT</span><span>STATUS</span></div><div className="k-ledger-row"><span><i>↗</i>Goods supplied<small>Invoice · today</small></span><strong>₦2,000,000</strong><span className="k-status k-status--gold">Invoiced</span></div><div className="k-ledger-row"><span><i>✓</i>Payment received<small>Part-payment · today</small></span><strong>−₦500,000</strong><span className="k-status k-status--teal">Recorded</span></div><div className="k-ledger-balance"><span>Balance remaining</span><strong>₦1,500,000</strong></div></div>}
          {step === 2 && <div className="k-mock-reminder"><div className="k-reminder-avatar">K</div><span className="k-overline">KREDIA NUDGE · WHATSAPP</span><p>Hi Musa, hope sales are moving well. Your ₦2M invoice is due Friday. Here’s your balance and payment link whenever you’re ready.</p><div className="k-reminder-link"><span>View invoice &amp; pay</span><ArrowUpRight aria-hidden="true" /></div><small>Helpful, timely, and on your terms.</small></div>}
          {step === 3 && <div className="k-mock-paid"><span className="k-paid-check"><Check aria-hidden="true" /></span><span className="k-overline">PAYMENT RECEIVED</span><strong>₦500,000</strong><p>Musa · part-payment</p><div className="k-paid-divider" /><div><span>Invoice total</span><strong>₦2,000,000</strong></div><div><span>Balance remaining</span><strong>₦1,500,000</strong></div><span className="k-status k-status--teal">Ledger updated</span></div>}
          {step === 4 && <div className="k-mock-trust"><div className="k-trust-top"><span className="k-trust-avatar">M</span><span><strong>Musa</strong><small>Distributor since 2024</small></span><span className="k-status k-status--teal">In good standing</span></div><div className="k-trust-score"><div className="k-score-ring"><span>84<small>/100</small></span></div><div><span className="k-overline">KREDIA TRUST SCORE</span><strong>Reliable partner</strong><p>Built from payment history over time.</p></div></div><div className="k-trust-history"><span>Payment history</span><div><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><small>Consistent history builds confidence.</small></div></div>}
          <div className="k-product-window__foot"><span><i /> Secure business workspace</span><span>Last updated just now</span></div>
        </div>
      </div>
    </div>
  );
}