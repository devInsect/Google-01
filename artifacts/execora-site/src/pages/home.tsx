import { ArrowRight, CircleArrowOutUpRight, Target, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/execora-hero-leader.jpg';
import guidanceImage from '@assets/generated_images/execora-about-team.jpg';
import panelImage from '@assets/generated_images/execora-services-workshop.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

export default function Home() {
  return (
    <PageFrame>
      <section className="site-grid overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-shell">
          <div className="grid items-end gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div className="pb-2">
              <p className="eyebrow text-primary/65">Strategic consulting · Est. 2014</p>
              <h1 className="display mt-6 max-w-xl text-balance text-[clamp(3.35rem,7.7vw,7.6rem)] font-semibold leading-[.88]">
                Make the next move <span className="text-primary/45">make sense.</span>
              </h1>
              <p className="mt-7 max-w-md text-[1rem] leading-7 text-muted-foreground">
                Execora gives ambitious leadership teams the clarity, operating rhythm and confidence to grow well.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ButtonLink href="/contact">Talk to an advisor</ButtonLink>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary" data-testid="link-home-services">
                  Explore our work <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="image-crop aspect-[1.28] bg-secondary">
                <img src={heroImage} alt="Execora advisor in a bright contemporary office" className="object-cover object-center" data-testid="img-home-hero" />
              </div>
              <div className="absolute -bottom-5 left-5 max-w-[12rem] rounded-2xl bg-accent p-4 text-primary shadow-lg shadow-primary/10 md:bottom-6 md:left-[-2rem]">
                <p className="font-mono text-[.65rem] uppercase tracking-[.12em]">The outcome</p>
                <p className="mt-2 text-[1.02rem] font-semibold leading-5">Decisions with direction behind them.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-foreground/15 pt-5 text-sm md:grid-cols-4">
            {[
              ['01', 'Strategic clarity'],
              ['02', 'Operational strength'],
              ['03', 'Sustainable scale'],
              ['04', 'Leadership alignment'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-3">
                <span className="font-mono text-[.68rem] text-primary/60">{number}</span>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <SectionHeading
            eyebrow="A better way forward"
            title="Growth is easier to navigate when the priorities are clear."
            body="The hard part is rarely a lack of ambition. It is knowing what deserves focus now, what can wait, and how to make the whole organisation move together."
            action={{ label: 'How we think', href: '/about' }}
          />
          <div className="mt-16 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
            <div className="image-crop min-h-[23rem] bg-secondary md:min-h-[34rem]">
              <img src={guidanceImage} alt="Leadership team in a focused strategy conversation" data-testid="img-home-guidance" />
            </div>
            <div className="flex flex-col justify-between rounded-[1.65rem] bg-secondary p-7 md:p-10">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-primary"><Target size={20} /></span>
                <h3 className="display mt-8 max-w-sm text-3xl font-semibold leading-[1.02]">Structure turns intent into momentum.</h3>
                <p className="mt-5 max-w-sm leading-7 text-muted-foreground">We help leaders make the choices that simplify everything after them: where to play, how to win, and what the business needs next.</p>
              </div>
              <div className="mt-12 border-t border-foreground/15 pt-5">
                <p className="font-mono text-[.66rem] uppercase tracking-[.12em] text-muted-foreground">Our point of view</p>
                <p className="mt-3 text-lg font-medium">Good strategy should make Monday morning feel different.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-primary-foreground">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Where we focus"
            title="The work behind resilient growth."
            body="A practical senior team at your side, from first decision to durable operating system."
            action={{ label: 'See all services', href: '/services' }}
          />
          <div className="mt-16 grid gap-0 border-t border-primary-foreground/20 md:grid-cols-3">
            {[
              { icon: TrendingUp, number: '01', title: 'Strategy & direction', text: 'Align the leadership team around a strategy people can use, not just admire.' },
              { icon: Target, number: '02', title: 'Performance & operations', text: 'Build the measures, routines and accountability that turn plans into progress.' },
              { icon: CircleArrowOutUpRight, number: '03', title: 'Scale with confidence', text: 'Prepare the organisation, proposition and economics for its next chapter.' },
            ].map(({ icon: Icon, number, title, text }) => (
              <div key={number} className="border-b border-primary-foreground/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary-foreground/45">{number}</span>
                  <Icon size={21} className="text-accent" strokeWidth={1.7} />
                </div>
                <h3 className="display mt-14 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">{text}</p>
                <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent" data-testid={`link-home-service-${number}`}>
                  View focus <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <SectionHeading eyebrow="The Execora difference" title="Senior thinking, close to the work." />
          <div className="mt-16 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="image-crop aspect-[.9] max-w-sm bg-secondary">
              <img src={panelImage} alt="Senior executives reviewing a strategic plan" data-testid="img-home-panel" />
            </div>
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
              {[
                ['01', 'No theatre', 'We bring a clear point of view, then stay close enough to help make it real.'],
                ['02', 'Useful rigour', 'Frameworks are only valuable when they sharpen a decision or change a habit.'],
                ['03', 'Built for your context', 'There is no off-the-shelf answer for a business with your people, history and ambition.'],
              ].map(([num, title, text]) => (
                <div key={num} className="grid gap-4 py-7 md:grid-cols-[4rem_1fr_1fr] md:items-start">
                  <span className="font-mono text-xs text-primary/60">{num}</span>
                  <h3 className="display text-2xl font-semibold">{title}</h3>
                  <p className="max-w-sm text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-24">
        <div className="container-shell flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary/65">Ready when you are</p>
            <h2 className="display mt-5 max-w-2xl text-balance text-[clamp(2.6rem,5.7vw,5.8rem)] font-semibold leading-[.9] text-primary">Bring us the complicated bit.</h2>
          </div>
          <div className="max-w-xs md:pb-1">
            <p className="text-sm leading-6 text-primary/70">Tell us what is changing. We will help you see the decision clearly.</p>
            <ButtonLink href="/contact" light>Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}