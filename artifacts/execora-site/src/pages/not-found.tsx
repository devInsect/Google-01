import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { PageFrame } from '@/components/site-shell';

export default function NotFound() {
  return (
    <PageFrame>
      <section className="site-grid flex min-h-[60vh] items-center py-20">
        <div className="container-shell">
          <p className="eyebrow text-primary/65">404 · Page not found</p>
          <h1 className="display mt-5 max-w-3xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.88]">This path does not lead anywhere useful.</h1>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted-foreground">The page may have moved, or the address may be incomplete. Let us get you back to the useful part.</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" data-testid="link-not-found-home">
            <ArrowLeft size={15} /> Return home
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
