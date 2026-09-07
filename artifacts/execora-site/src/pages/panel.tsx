import { ArrowUpRight, Check } from 'lucide-react';
import panelImage from '@assets/generated_images/execora-about-smile-team.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';

const promisePoints = [
  'We only ever quote realistic numbers of completes.',
  'We soft launch to ensure everything is working properly and your objectives are being met.',
  'We understand the importance of accurate targeting, speed and efficiency.',
  'Our personal contact and regular communication mean you always know what is going on.',
];

export default function Panel() {
  return (
    <PageFrame brand="g2g">
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">Our panel</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[.88]">G2G Research Online Panel</h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:pb-1">Grab Data to Goal. Our actively managed panel helps clients make better decisions and build better strategies with reliable, quality data.</p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell">
          <div className="image-crop aspect-[2.2] bg-secondary">
            <img src={panelImage} alt="G2G Research panel community collaborating on research" width="1024" height="1024" loading="eager" decoding="async" className="object-[center_40%]" data-testid="img-panel-hero" />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow pt-1 text-primary/65">The G2G panel</p>
            <div className="max-w-3xl space-y-6 text-base leading-8 text-muted-foreground">
              <p>As the tagline of our company G2G is “Grab Data to Goal”, our mission is to provide better data to help clients make better decisions and develop better strategies in order to achieve their desired goals. We are very much concerned about data quality because we understand the impact of adequate and quality data.</p>
              <p>Our main source is our actively managed panel community, “G2G Panel”, a group of highly enthusiastic panelists recruited through online campaigns, email and online marketing channels. These panelists are motivated not only by rewards for surveys, but also by the opportunity to provide honest input that contributes to future research and development.</p>
              <p>Our panel is recruited and managed by our team with specific reward choices, while panel quality is monitored through regular checks to deliver quality data. We also use real-time sample from our network of affiliates, publishers, banner advertising and social networking sites.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="eyebrow text-primary/65">Global reach</p>
              <h2 className="display mt-5 max-w-2xl text-[clamp(2.4rem,4.8vw,4.8rem)] font-semibold leading-[.94]">An altogether brighter panel experience.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>Our panel has been extensively profiled so we can provide highly targeted samples for specific audiences including Financial Services, Shopping, Media, Leisure, Travel, Internet/mobile technology and Profession.</p>
              <p>We operate an online panel of respondents worldwide across the UK, USA, Europe, the Nordics, the Middle East, North Africa, South Asia and Asia Pacific.</p>
              <p>The panel delivers continuous access to an engaged, responsive audience profiled on demographic, attitudinal and lifestyle attributes. This ensures that we can execute a wide range of projects, from urban representative samples to re-contact surveys with hard-to-reach audiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-primary/65">Why choose the G2G Panel?</p>
            <h2 className="display mt-5 max-w-xl text-[clamp(2.4rem,4.8vw,4.8rem)] font-semibold leading-[.94]">Fast, appropriate respondents with hands-on service.</h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">Because our panel is run by our team of experienced researchers, you are guaranteed the same one-to-one, hands-on service with the same level of knowledge, service and dedication on every project, whether it is sample-only or part of a full-service project.</p>
          </div>
          <div className="border-y border-foreground/15 py-6">
            <p className="eyebrow text-primary/65">Our promise</p>
            <ul className="mt-6 space-y-4">
              {promisePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <p className="eyebrow pt-1 text-primary/65">Quality you can measure</p>
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>We believe higher engagement leads to higher response rates. To obtain the best quality of data possible, we aim to give respondents the best possible experience as panellists. We manage our panel proactively, maintaining regular but controlled contact with panellists and rewarding them for participation. The resulting response rates are well above average.</p>
            <p>We recruit from a variety of sources to minimize sample bias and implement strict management controls. Our panel is fully compliant with the ESOMAR Guidelines on Conducting Market and Opinion Research.</p>
            <p className="font-semibold text-primary">Please do get in touch if you would like further information or a quote.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container-shell flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">Work with the G2G Panel</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[.9]">Get the right people, the right data and a clearer next step.</h2>
          </div>
          <ButtonLink href="/contact" light>Get in touch <ArrowUpRight size={15} /></ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}