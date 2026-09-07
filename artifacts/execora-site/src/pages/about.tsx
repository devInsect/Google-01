import { ArrowUpRight, Check, Quote } from 'lucide-react';
import { Link } from 'wouter';
import teamImage from '@assets/generated_images/execora-about-smile-team.jpg';
import strategyImage from '@assets/generated_images/execora-hero-smile.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

const principles = [
  ['01', 'Quality first', 'We treat data quality as the foundation for every reliable insight, decision and strategy.'],
  ['02', 'People at the centre', 'We respect respondents and create research experiences that encourage thoughtful, honest participation.'],
  ['03', 'Built for action', 'We deliver practical research and data collection that helps teams move from a question to a confident next step.'],
];

export default function About() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">About G2G Research</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.15rem,7vw,7.2rem)] font-semibold leading-[.88]">Better data for better decisions.</h1>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="text-lg leading-8 text-muted-foreground">G2G Research provides reliable market research and data collection to help clients make better decisions and build stronger strategies.</p>
            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-primary">
              <span className="h-px w-10 bg-accent" /> Grab Data to Goal
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell">
          <div className="image-crop aspect-[2.2] bg-secondary">
            <img src={teamImage} alt="G2G Research team collaborating around market research data" width="1024" height="1024" loading="eager" decoding="async" className="object-[center_35%]" data-testid="img-about-team" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
            <p className="eyebrow pt-1 text-primary/65">Research with purpose</p>
            <div>
              <p className="display max-w-3xl text-[clamp(1.8rem,3.7vw,3.7rem)] font-semibold leading-[1.04]">We turn the right questions into data you can trust.</p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Our experienced research team combines an actively managed online panel, rigorous quality checks and a global respondent network. We work across B2B, ITDM, HealthCare, B2C and specialist audiences to deliver data that is relevant, responsive and ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-shell">
          <SectionHeading eyebrow="What we believe" title="Good research starts with better standards." body="Our principles shape how we recruit respondents, manage every project and support the decisions that follow." />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {principles.map(([number, title, text]) => (
              <article key={number} className="border-t border-foreground/20 pt-5">
                <span className="font-mono text-xs text-primary/60">{number}</span>
                <h3 className="display mt-16 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="image-crop min-h-[26rem] bg-primary">
            <img src={strategyImage} alt="G2G Research specialists reviewing a research question" width="1024" height="1024" loading="lazy" decoding="async" data-testid="img-about-strategy" />
          </div>
          <div className="flex flex-col justify-between">
            <Quote className="text-accent" size={44} strokeWidth={1.2} />
            <blockquote className="display mt-8 max-w-2xl text-[clamp(2rem,4.2vw,4.2rem)] font-semibold leading-[1]">“The quality of the data shapes the quality of every decision that follows.”</blockquote>
            <div className="mt-10 border-t border-foreground/15 pt-4 text-sm">
              <p className="font-semibold">The G2G Research promise</p>
              <p className="mt-1 text-muted-foreground">Accurate, useful data for the decisions that matter.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container-shell grid gap-10 md:grid-cols-[1fr_.8fr] md:items-end">
          <div>
            <p className="eyebrow text-accent">The G2G difference</p>
            <h2 className="display mt-5 max-w-2xl text-balance text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[.9]">A research partner that stays close to the detail.</h2>
          </div>
          <div className="md:pb-1">
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              {['Actively managed panel communities', 'Fast, appropriate and engaged respondents', 'Quality controls built into every project'].map((item) => (
                <li key={item} className="flex items-center gap-3"><Check size={16} className="text-accent" />{item}</li>
              ))}
            </ul>
            <Link href="/panel" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent" data-testid="link-about-panel">Explore the G2G Panel <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}