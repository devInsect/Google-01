import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { usePageMetadata } from '@/lib/page-metadata';

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
  const activePath = location.split('?')[0].replace(/\/+$/, '') || '/';

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const closeOnDesktopResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktopResize);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktopResize);
    };
  }, [open]);

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
                activePath === item.href ? 'text-primary' : 'text-foreground/65'
              }`}
              aria-current={activePath === item.href ? 'page' : undefined}
            >
              {item.label}
              {activePath === item.href && <span className="absolute -bottom-[1.05rem] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />}
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
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-foreground/15 bg-background text-primary md:hidden"
          data-testid="button-mobile-menu"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <div id="mobile-nav-panel" className="border-t border-foreground/10 bg-background pb-6 pt-2 md:hidden">
          <nav className="container-shell flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-foreground/10 py-4 text-[1.05rem] font-medium ${
                  activePath === item.href ? 'text-primary' : 'text-foreground/75'
                }`}
                aria-current={activePath === item.href ? 'page' : undefined}
                data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                <span className="flex items-center gap-3">
                  {activePath === item.href && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
                  {item.label}
                </span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
              data-testid="link-mobile-cta"
            >
              Schedule a conversation <ArrowUpRight size={15} />
            </Link>
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
  const [location] = useLocation();
  usePageMetadata(location);

  return (
    <div className="min-h-[100dvh] bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
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