import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import contactImage from '@assets/generated_images/execora-contact-conversation.jpg';
import { ButtonLink, PageFrame } from '@/components/site-shell';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message) {
      setError('Please complete your name, email and note so we can route your enquiry.');
      setSent(false);
      return;
    }
    setError('');
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <PageFrame>
      <section className="site-grid py-16 md:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <p className="eyebrow text-primary/65">Contact Execora</p>
            <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.25rem,7.2vw,7.2rem)] font-semibold leading-[.86]">Bring us the question behind the question.</h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:pb-1">Whether the next move is clear or still taking shape, we are happy to start with a thoughtful conversation.</p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="image-crop aspect-[.9] bg-secondary">
              <img src={contactImage} alt="Execora advisor in a thoughtful client conversation" className="object-[center_70%]" data-testid="img-contact" />
            </div>
            <div className="mt-8 grid gap-5 border-t border-foreground/15 pt-5">
              <a href="mailto:hello@execora.co" className="flex items-center gap-4 text-sm font-medium" data-testid="link-contact-email"><span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><Mail size={16} /></span>hello@execora.co</a>
              <a href="tel:+442038080421" className="flex items-center gap-4 text-sm font-medium" data-testid="link-contact-phone"><span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><Phone size={16} /></span>+44 20 3808 0421</a>
              <div className="flex items-center gap-4 text-sm font-medium"><span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary"><MapPin size={16} /></span>London · New York · Remote</div>
            </div>
          </div>
          <div className="rounded-[1.65rem] bg-secondary p-6 md:p-10">
            <p className="eyebrow text-primary/65">Start a conversation</p>
            {sent ? (
              <div className="flex min-h-[29rem] flex-col justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary"><Check size={22} /></span>
                <h2 className="display mt-7 text-4xl font-semibold leading-none">Thanks — we have your note.</h2>
                <p className="mt-5 max-w-sm leading-7 text-muted-foreground">A member of the Execora team will be in touch within two working days.</p>
                <button type="button" onClick={() => setSent(false)} className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary" data-testid="button-contact-another">Send another note <ArrowUpRight size={15} /></button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block"><span className="eyebrow text-primary/55">Your name</span><input name="name" type="text" autoComplete="name" placeholder="Alex Morgan" className="mt-3 w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-base outline-none placeholder:text-muted-foreground/55 focus:border-primary" data-testid="input-contact-name" /></label>
                  <label className="block"><span className="eyebrow text-primary/55">Email address</span><input name="email" type="email" autoComplete="email" placeholder="alex@company.com" className="mt-3 w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-base outline-none placeholder:text-muted-foreground/55 focus:border-primary" data-testid="input-contact-email" /></label>
                </div>
                <label className="block"><span className="eyebrow text-primary/55">What is on your mind?</span><textarea name="message" rows={5} placeholder="Tell us a little about the decision or change you are navigating." className="mt-3 w-full resize-y border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-base outline-none placeholder:text-muted-foreground/55 focus:border-primary" data-testid="textarea-contact-message" /></label>
                {error && <p role="alert" className="text-sm font-medium text-red-700" data-testid="status-contact-error">{error}</p>}
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5" data-testid="button-contact-submit">Send enquiry <ArrowUpRight size={16} /></button>
                <p className="text-xs leading-5 text-muted-foreground">We will only use your details to respond to this enquiry.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-24">
        <div className="container-shell grid gap-8 md:grid-cols-[1fr_.7fr] md:items-end">
          <h2 className="display max-w-3xl text-balance text-[clamp(2.7rem,5.8vw,5.8rem)] font-semibold leading-[.9] text-primary">Clearer thinking starts with saying it out loud.</h2>
          <div className="md:pb-1"><p className="text-sm leading-6 text-primary/70">No pitch deck required. Just the question, as it is.</p><ButtonLink href="/about" light>Get to know Execora</ButtonLink></div>
        </div>
      </section>
    </PageFrame>
  );
}