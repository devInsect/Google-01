import { ArrowUpRight } from 'lucide-react';
import panelImage from '@assets/generated_images/execora-about-smile-team.jpg';
import amaraImage from '@assets/generated_images/execora-panel-amara-smile.jpg';
import julianImage from '@assets/generated_images/execora-panel-julian-smile.jpg';
import priyaImage from '@assets/generated_images/execora-panel-priya-smile.jpg';
import owenImage from '@assets/generated_images/execora-panel-owen-smile.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';
import { SectionHeading } from '@/components/section-heading';

const people = [
  { name: 'Amara Cole', role: 'Strategy Partner', focus: 'Strategy & transformation', tone: 'bg-[#202820]', image: amaraImage },
  { name: 'Julian Park', role: 'Operations Partner', focus: 'Operating performance', tone: 'bg-[#333c3c]', image: julianImage },
  { name: 'Priya Nair', role: 'Growth Advisor', focus: 'Commercial strategy', tone: 'bg-[#b7ad98]', image: priyaImage },
  { name: 'Owen Reed', role: 'Finance Advisor', focus: 'Transformation & value', tone: 'bg-[#293233]', image: owenImage },
];

export default function Panel() {
  return (
    <PageFrame>
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">Our panel</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[.88]">Different disciplines. One clear point of view.</h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:pb-1">A compact group of experienced operators, strategists and specialists who know how to turn a complex room into a useful one.</p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell">
          <div className="image-crop aspect-[2.2] bg-secondary">
            <img src={panelImage} alt="Execora panel collaborating with leadership teams" width="1024" height="1024" loading="eager" decoding="async" className="object-[center_40%]" data-testid="img-panel-hero" />
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow text-primary/65">The panel model</p>
            <p className="display max-w-3xl text-[clamp(1.9rem,3.8vw,3.8rem)] font-semibold leading-[1.02]">The right perspective at the right moment is often the difference between movement and more meetings.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary">
        <div className="container-shell">
          <SectionHeading eyebrow="People who have done the work" title="Senior by default. Curious by nature." body="Your core team stays small. When the question calls for a different lens, we bring in the right voice from our panel." />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {people.map((person, index) => (
              <article key={person.name} className="group">
                <div className={`image-crop aspect-[.84] ${person.tone}`}>
              <img src={person.image} alt={`${person.name}, ${person.role}`} width="1024" height="1024" loading="lazy" decoding="async" className="h-full w-full object-cover" data-testid={`img-panel-person-${index}`} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-5 pt-16 text-background">
                    <p className="font-semibold">{person.name}</p>
                    <p className="mt-1 text-xs text-background/70">{person.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 text-xs">
                  <span className="text-muted-foreground">{person.focus}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow text-primary/65">The standard we keep</p>
            <h2 className="display mt-5 max-w-xl text-[clamp(2.4rem,4.8vw,4.8rem)] font-semibold leading-[.94]">Experience is useful. Perspective is everything.</h2>
          </div>
          <div className="space-y-0 border-y border-foreground/15">
            {['Ask the awkward question', 'Find the usable truth', 'Make the next step obvious'].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-foreground/15 py-6 last:border-b-0">
                <div className="flex items-center gap-5"><span className="font-mono text-xs text-primary/55">0{index + 1}</span><span className="text-lg font-medium">{item}</span></div>
                <ArrowUpRight size={17} className="text-primary/55" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container-shell flex flex-col gap-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">Work with us</p>
            <h2 className="display mt-5 max-w-2xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-semibold leading-[.9]">A good conversation is a strong place to begin.</h2>
          </div>
          <ButtonLink href="/contact" light>Meet the panel</ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}