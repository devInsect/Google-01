import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/panel', label: 'Our Panel' },
  { href: '/contact', label: 'Contact' },
];

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" data-testid="link-logo">
      <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-accent text-primary" aria-hidden="true">
        <span className="relative block h-3.5 w-3.5">
          <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-[3px] bg-current" />
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-[3px] bg-current" />
        </span>
      </span>
      <span className="display text-[1.15rem] font-extrabold tracking-[-.07em]">execora</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="relative z-30 border-b border-foreground/10 bg-background/95">
      <div className="container-shell flex h-[4.75rem] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              className={`relative py-2 text-[.8rem] font-medium transition-colors hover:text-primary ${
                location === item.href ? 'text-primary' : 'text-foreground/65'
              }`}
            >
              {item.label}
              {location === item.href && <span className="absolute -bottom-[1.05rem] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[.76rem] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5" data-testid="link-header-cta">
            Schedule a conversation <ArrowUpRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 md:hidden"
          data-testid="button-mobile-menu"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-foreground/10 bg-background px-5 pb-6 pt-3 md:hidden">
          <nav className="container-shell flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-foreground/10 py-4 text-[1.05rem] font-medium"
                data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[.95rem] leading-7 text-primary-foreground/65">
              A strategic consulting partner for leadership teams building businesses that last.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-2 text-sm font-semibold text-accent" data-testid="link-footer-conversation">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/45">Explore</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-primary-foreground/75">
              {navigation.slice(0, 3).map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-accent" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary-foreground/45">Connect</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-primary-foreground/75">
              <a href="mailto:hello@execora.co" className="transition-colors hover:text-accent" data-testid="link-footer-email">hello@execora.co</a>
              <a href="tel:+442038080421" className="transition-colors hover:text-accent" data-testid="link-footer-phone">+44 20 3808 0421</a>
              <span>London · New York · Remote</span>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/45 md:flex-row">
          <span>© {new Date().getFullYear()} Execora Consulting. All rights reserved.</span>
          <span>Clarity for what comes next.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function ButtonLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-[.78rem] font-semibold transition-transform hover:-translate-y-0.5 ${
        light ? 'bg-background text-primary' : 'bg-primary text-primary-foreground'
      }`}
      data-testid={`link-cta-${href.replace('/', '') || 'home'}`}
    >
      {children}
      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}