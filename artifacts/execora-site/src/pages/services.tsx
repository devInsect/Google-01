import { BarChart3, Compass, Layers3, Workflow } from 'lucide-react';
import growthImage from '@assets/generated_images/execora-services-workshop.jpg';
import browserImage from '@assets/generated_images/execora-about-team.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

const services = [
  { number: '01', icon: Compass, title: 'Strategy & direction', intro: 'Turn a crowded set of possibilities into a clear, shared direction.', items: ['Market and proposition strategy', 'Growth choices and prioritisation', 'Leadership alignment and decision design'] },
  { number: '02', icon: Workflow, title: 'Operating performance', intro: 'Create the systems and rhythms that make performance repeatable.', items: ['Operating model and org design', 'KPI architecture and performance cadence', 'Process improvement and accountability'] },
  { number: '03', icon: BarChart3, title: 'Scale with confidence', intro: 'Build the conditions for your next phase before growth exposes the gaps.', items: ['Scale-up readiness and planning', 'Commercial model and unit economics', 'Transformation support and execution'] },
  { number: '04', icon: Layers3, title: 'Leadership effectiveness', intro: 'Help your leaders spend their energy where it makes the biggest difference.', items: ['Executive team effectiveness', 'Critical decision facilitation', 'Change leadership and communication'] },
];

export default function Services() {
  return (
    <PageFrame>
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">Our services</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[.88]">From strategic vision to operational traction.</h1>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-lg leading-8 text-muted-foreground">We help leadership teams answer the important questions, build the right foundations and keep moving when the path is not obvious.</p>
            <ButtonLink href="/contact">Discuss your priorities</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell">
          <div className="image-crop aspect-[2.2] bg-secondary">
            <img src={growthImage} alt="Senior executives reviewing a strategic plan" className="object-[center_54%]" data-testid="img-services-hero" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow text-primary/65">One connected view</p>
            <p className="display max-w-3xl text-[clamp(1.9rem,3.8vw,3.8rem)] font-semibold leading-[1.02]">A strategy that cannot survive the operating model is not a strategy yet.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-shell">
          <SectionHeading eyebrow="Our areas of focus" title="Choose the question. We will help you work through the answer." />
          <div className="mt-16 divide-y divide-foreground/15 border-y border-foreground/15">
            {services.map(({ number, icon: Icon, title, intro, items }) => (
              <article key={number} className="grid gap-8 py-9 md:grid-cols-[4rem_1fr_1.1fr] md:items-start md:py-12">
                <span className="font-mono text-xs text-primary/60">{number}</span>
                <div>
                  <Icon size={22} strokeWidth={1.7} className="text-primary" />
                  <h2 className="display mt-8 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-none">{title}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{intro}</p>
                </div>
                <div className="md:pt-1">
                  <p className="eyebrow text-primary/55">What this can include</p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                    {items.map((item) => <li key={item} className="flex items-start gap-3 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}
                  </ul>
                  <ButtonLink href="/contact">Talk about {title.toLowerCase()}</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="image-crop aspect-[1.45] bg-primary">
            <img src={browserImage} alt="Leadership team working through a strategic decision" data-testid="img-services-method" />
          </div>
          <div>
            <p className="eyebrow text-primary/65">How we work</p>
            <h2 className="display mt-5 text-[clamp(2.3rem,4.5vw,4.4rem)] font-semibold leading-[.94]">Focused enough to move. Rigorous enough to matter.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">Every engagement has a beginning, a practical middle and a clear handover. We create the room for honest thinking, then turn it into momentum your team can own.</p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-foreground/15 pt-5">
              <div><p className="font-mono text-xs text-primary/55">01</p><p className="mt-3 text-sm font-semibold">Listen deeply</p></div>
              <div><p className="font-mono text-xs text-primary/55">02</p><p className="mt-3 text-sm font-semibold">Make it tangible</p></div>
              <div><p className="font-mono text-xs text-primary/55">03</p><p className="mt-3 text-sm font-semibold">Build ownership</p></div>
              <div><p className="font-mono text-xs text-primary/55">04</p><p className="mt-3 text-sm font-semibold">Leave capability</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-24">
        <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-primary/60">Not sure where to start?</p>
            <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[.92] text-primary">Start with the decision in front of you.</h2>
          </div>
          <ButtonLink href="/contact" light>Book a first conversation</ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}