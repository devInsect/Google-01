import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { PageFrame } from '@/components/site-shell';

const sections = [
  {
    title: 'Using this website',
    body: 'You may use this website for lawful purposes and in a way that does not damage, interrupt, or attempt to gain unauthorised access to the website or its systems. Content is provided for general information about G2G Research and its services.',
  },
  {
    title: 'Research services',
    body: 'Specific research engagements are governed by the scope, proposal, statement of work, or other written agreement accepted by the relevant parties. Information on this website is not a substitute for a project-specific agreement or professional advice.',
  },
  {
    title: 'Your responsibilities',
    body: 'You are responsible for providing information that is accurate and lawful, for having the necessary rights to share materials with G2G Research, and for using research outputs in accordance with the agreed project scope and applicable law.',
  },
  {
    title: 'Intellectual property',
    body: 'Unless stated otherwise, the website design, text, logos, graphics, and other materials belong to G2G Research or its licensors. You may not reproduce, republish, modify, or commercially exploit these materials without written permission.',
  },
  {
    title: 'Disclaimers and liability',
    body: 'We work to keep the website accurate and available, but we do not guarantee that it will always be uninterrupted, complete, or free from errors. To the fullest extent permitted by law, G2G Research is not liable for indirect or consequential loss arising from use of this website.',
  },
  {
    title: 'Changes and contact',
    body: 'We may update these terms when our website, services, or legal obligations change. Continued use of the website after an update means the revised terms apply. For questions about these terms, please contact G2G Research through the Contact page.',
  },
];

export default function TermsAndConditions() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell">
          <p className="eyebrow text-primary/65">G2G Research</p>
          <h1 className="display mt-5 max-w-4xl text-balance text-[clamp(3.1rem,7vw,7rem)] font-semibold leading-[.88]">Terms &amp; <span className="text-primary/45">Conditions.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">These terms describe the conditions for using the G2G Research website and engaging with the information and services described here.</p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[.12em] text-primary/55">Last updated: September 2026</p>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl divide-y divide-foreground/15 border-y border-foreground/15">
            {sections.map(({ title, body }, index) => (
              <article key={title} className="grid gap-5 py-9 md:grid-cols-[4rem_1fr] md:gap-10 md:py-12">
                <span className="font-mono text-xs text-primary/60">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="display text-3xl font-semibold leading-none">{title}</h2>
                  <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{body}</p>
                </div>
              </article>
            ))}
            <article className="grid gap-5 py-9 md:grid-cols-[4rem_1fr] md:gap-10 md:py-12">
              <span className="font-mono text-xs text-primary/60">07</span>
              <div>
                <h2 className="display text-3xl font-semibold leading-none">Contact G2G Research</h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">If you have a question about these terms or our services, please use the G2G Research contact form.</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary" data-testid="link-terms-contact">
                  Contact G2G Research <ArrowLeft size={15} className="rotate-180" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}