import { BarChart3, Compass, Layers3, Workflow } from 'lucide-react';
import growthImage from '@assets/generated_images/execora-services-smile-workshop.jpg';
import browserImage from '@assets/generated_images/execora-about-smile-team.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

const services = [
  { number: '01', icon: Compass, title: 'B2B', intro: 'G2G is experienced in conducting B2B market research in many industries. G2G brings you online B2B research, the preferred choice for high quality, reliable business-to-business online samples with access to respondents in various countries.' },
  { number: '02', icon: Workflow, title: 'ITDM', intro: 'G2G heritage in technology research has resulted in a commanding resource, including a senior-level IT Decision Maker Panel constructed and maintained by our global CATI Centre.' },
  { number: '03', icon: BarChart3, title: 'HealthCare', intro: 'G2G Healthcare Research has been providing quality market research services to the pharmaceutical and healthcare industry.' },
  { number: '04', icon: Layers3, title: 'B2C', intro: 'G2G conducts a variety of consumer research studies using CATI phone surveys and online data collection. We have extensive experience conducting interviews with hard to reach, specialized respondent segments.' },
];

export default function Services() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">Our Services</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[.88]">Research for every audience that matters.</h1>
          </div>
          <div className="max-w-md lg:pb-1">
            <p className="text-lg leading-8 text-muted-foreground">G2G provides experienced market research and data collection services across B2B, ITDM, HealthCare and B2C audiences.</p>
            <ButtonLink href="/contact">Read More</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell">
          <div className="image-crop aspect-[2.2] bg-secondary">
            <img src={growthImage} alt="G2G Research team reviewing market research findings" width="1024" height="1024" loading="eager" decoding="async" className="object-[center_54%]" data-testid="img-services-hero" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow text-primary/65">G2G Research</p>
            <p className="display max-w-3xl text-[clamp(1.9rem,3.8vw,3.8rem)] font-semibold leading-[1.02]">High quality, reliable research with access to respondents in various countries.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-shell">
          <SectionHeading eyebrow="Our Services" title="B2B, ITDM, HealthCare and B2C research." />
          <div className="mt-16 divide-y divide-foreground/15 border-y border-foreground/15">
            {services.map(({ number, icon: Icon, title, intro }) => (
              <article key={number} className="grid gap-8 py-9 md:grid-cols-[4rem_1fr_1.1fr] md:items-start md:py-12">
                <span className="font-mono text-xs text-primary/60">{number}</span>
                <div>
                  <Icon size={22} strokeWidth={1.7} className="text-primary" />
                  <h2 className="display mt-8 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-none">{title}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{intro}</p>
                </div>
                <div className="md:pt-1">
                  <p className="eyebrow text-primary/55">Research coverage</p>
                  <ButtonLink href="/contact">Read More</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="image-crop aspect-[1.45] bg-primary">
            <img src={browserImage} alt="G2G Research team working together on a project" width="1024" height="1024" loading="lazy" decoding="async" data-testid="img-services-method" />
          </div>
          <div>
            <p className="eyebrow text-primary/65">Why Choose G2G?</p>
            <h2 className="display mt-5 text-[clamp(2.3rem,4.5vw,4.4rem)] font-semibold leading-[.94]">Experienced researchers. Hands-on service.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">Our panel is run by experienced researchers, giving you one-to-one, hands-on service with the same level of knowledge, service and dedication on every project.</p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-foreground/15 pt-5">
              <div><p className="font-mono text-xs text-primary/55">01</p><p className="mt-3 text-sm font-semibold">Realistic numbers</p></div>
              <div><p className="font-mono text-xs text-primary/55">02</p><p className="mt-3 text-sm font-semibold">Soft launch first</p></div>
              <div><p className="font-mono text-xs text-primary/55">03</p><p className="mt-3 text-sm font-semibold">Accurate targeting</p></div>
              <div><p className="font-mono text-xs text-primary/55">04</p><p className="mt-3 text-sm font-semibold">Personal contact</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-24">
        <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-primary/60">Read More</p>
            <h2 className="display mt-4 max-w-2xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[.92] text-primary">Reach the right respondents for your next study.</h2>
          </div>
          <ButtonLink href="/contact" light>Contact us</ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}