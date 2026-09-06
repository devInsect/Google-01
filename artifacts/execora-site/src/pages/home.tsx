import { ArrowRight, CircleArrowOutUpRight, Target, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/execora-hero-smile.jpg';
import guidanceImage from '@assets/generated_images/execora-about-smile-team.jpg';
import panelImage from '@assets/generated_images/execora-services-smile-workshop.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

export default function Home() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="container-shell">
          <div className="grid items-end gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div className="pb-2">
              <p className="eyebrow text-primary/65">G2G Research · Market research and data collection</p>
              <h1 className="display mt-6 max-w-xl text-balance text-[clamp(3.35rem,7.7vw,7.6rem)] font-semibold leading-[.88]">
                Welcome to G2G <span className="text-primary/45">research that reaches the right people.</span>
              </h1>
              <p className="mt-7 max-w-md text-[1rem] leading-7 text-muted-foreground">
                G2G offers market research and data collection services to address corporations as well as research agencies in the B2B, technology sectors. G2G brings you online B2B research, the preferred choice for high quality, reliable business-to-business online samples with access to respondents in various countries.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ButtonLink href="/about">Learn More</ButtonLink>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary" data-testid="link-home-services">
                  Our Services <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="image-crop aspect-[1.28] bg-secondary">
                <img src={heroImage} alt="G2G Research consultant in a bright contemporary office" width="1024" height="1024" fetchPriority="high" decoding="async" className="object-cover object-center" data-testid="img-home-hero" />
              </div>
              <div className="absolute -bottom-5 left-5 max-w-[12rem] rounded-2xl bg-accent p-4 text-primary shadow-lg shadow-primary/10 md:bottom-6 md:left-[-2rem]">
                  <p className="font-mono text-[.65rem] uppercase tracking-[.12em]">Our promise</p>
                  <p className="mt-2 text-[1.02rem] font-semibold leading-5">100% satisfaction with every project.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6 border-t border-foreground/15 pt-5 text-sm md:grid-cols-4">
            {[
              ['01', 'Qualified Team'],
              ['02', 'Individual Approach'],
              ['03', '100% Success'],
              ['04', '100% Satisfaction'],
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
            eyebrow="Company Profile"
            title="Global panels. Responsive respondents. Reliable data."
            body="We are a global online survey sampling company with global panels around the world, making it easier for researchers to get highly responsive respondents quickly, anytime, anywhere."
            action={{ label: 'Read More', href: '/about' }}
          />
          <div className="mt-16 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
            <div className="image-crop min-h-[23rem] bg-secondary md:min-h-[34rem]">
              <img src={guidanceImage} alt="G2G Research team reviewing survey findings together" width="1024" height="1024" loading="lazy" decoding="async" data-testid="img-home-guidance" />
            </div>
            <div className="flex flex-col justify-between rounded-[1.65rem] bg-secondary p-7 md:p-10">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-primary"><Target size={20} /></span>
                <h3 className="display mt-8 max-w-sm text-3xl font-semibold leading-[1.02]">Transparency and accountability by design.</h3>
                <p className="mt-5 max-w-sm leading-7 text-muted-foreground">G2G believes in providing full transparency and accountability. We ensure to deliver high quality data through our panel and survey management tool.</p>
              </div>
              <div className="mt-12 border-t border-foreground/15 pt-5">
                <p className="font-mono text-[.66rem] uppercase tracking-[.12em] text-muted-foreground">Our approach</p>
                <p className="mt-3 text-lg font-medium">We profile respondents in depth, making them more informative and valuable to the world of market research.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-primary-foreground">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Services"
            title="Research services built around your audience."
            body="G2G provides reliable access to the people and industries that matter to your research."
            action={{ label: 'See all services', href: '/services' }}
            onDark
          />
          <div className="mt-16 grid gap-0 border-t border-primary-foreground/20 md:grid-cols-3">
              {[
                { icon: TrendingUp, number: '01', title: 'B2B', text: 'G2G is experienced in conducting B2B market research in many industries. G2G brings you online B2B research, the preferred choice for high quality, reliable business-to-business online samples.' },
                { icon: Target, number: '02', title: 'HealthCare', text: 'G2G Healthcare Research has been providing high quality market research services to the pharmaceutical and healthcare industry.' },
                { icon: CircleArrowOutUpRight, number: '03', title: 'ITDM', text: 'G2G has experience in technology research, including a senior-level IT Decision Maker Panel constructed and maintained by our global CATI network.' },
            ].map(({ icon: Icon, number, title, text }) => (
              <div key={number} className="border-b border-primary-foreground/20 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary-foreground/45">{number}</span>
                  <Icon size={21} className="text-accent" strokeWidth={1.7} />
                </div>
                <h3 className="display mt-14 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">{text}</p>
                <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent" data-testid={`link-home-service-${number}`}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose G2G?"
            title="Experienced researchers. Hands-on service. Realistic results."
            body="Because our panel is run by our team of experienced researchers, you are guaranteed the same one-to-one, hands-on service with the same level of knowledge, service and dedication on every project, whether it is sample-only or part of a full-service project."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="image-crop aspect-[.9] max-w-sm bg-secondary">
              <img src={panelImage} alt="G2G Research team working together on a market research project" width="1024" height="1024" loading="lazy" decoding="async" data-testid="img-home-panel" />
            </div>
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
              {[
                ['01', 'Realistic numbers', 'We only ever quote realistic numbers of completes.'],
                ['02', 'Soft launch first', 'We soft launch to ensure everything is working properly and your objectives are being met.'],
                ['03', 'Accurate targeting', 'We understand the importance of accurate targeting, speed and efficiency.'],
                ['04', 'Personal contact', 'Our personal contact and regular communication mean you always know what is going on.'],
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
            <p className="eyebrow text-primary/65">Get in touch</p>
            <h2 className="display mt-5 max-w-2xl text-balance text-[clamp(2.6rem,5.7vw,5.8rem)] font-semibold leading-[.9] text-primary">Find the right respondents for your research.</h2>
          </div>
          <div className="max-w-xs md:pb-1">
            <p className="text-sm leading-6 text-primary/70">Tell us what you are researching. We will help you reach the people who matter.</p>
            <ButtonLink href="/contact" light>Contact us</ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}