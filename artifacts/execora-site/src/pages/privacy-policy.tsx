import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { PageFrame } from '@/components/site-shell';

const sections = [
  {
    title: 'Information we may collect',
    body: 'G2G Research may collect information you provide when you contact us, request information, participate in research, or use services on this website. This may include your name, contact details, professional information, research preferences, and the contents of your message.',
  },
  {
    title: 'How we use information',
    body: 'We use information to respond to enquiries, deliver and improve research services, manage panel and survey activity, communicate about relevant projects, maintain website security, and meet applicable legal and operational requirements.',
  },
  {
    title: 'Research participation',
    body: 'When you participate in a G2G Research study, the information collected will be used for the stated research purpose. We aim to treat participant information responsibly and to communicate clearly about the nature of each study and any applicable incentives or requirements.',
  },
  {
    title: 'Sharing and retention',
    body: 'We may share information with trusted service providers who help operate our website, panel, surveys, communications, or security systems. We do not sell personal information. Information is retained only for as long as reasonably necessary for the purpose collected, contractual duties, legal obligations, or legitimate business needs.',
  },
  {
    title: 'Your choices',
    body: 'You may ask us to update, correct, or remove personal information where applicable, or to stop receiving non-essential communications. You can use the Contact page to submit a request and we will respond in accordance with applicable law.',
  },
];

export default function PrivacyPolicy() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell">
          <p className="eyebrow text-primary/65">G2G Research</p>
          <h1 className="display mt-5 max-w-4xl text-balance text-[clamp(3.1rem,7vw,7rem)] font-semibold leading-[.88]">Privacy <span className="text-primary/45">Policy.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">This policy explains how G2G Research handles information shared through this website and our market research services.</p>
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
              <span className="font-mono text-xs text-primary/60">06</span>
              <div>
                <h2 className="display text-3xl font-semibold leading-none">Contact</h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">For privacy questions or requests, please use the G2G Research contact form.</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary" data-testid="link-privacy-contact">
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