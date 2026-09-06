import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';

export function SectionHeading({
  eyebrow,
  title,
  body,
  action,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  action?: { label: string; href: string };
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className={`eyebrow ${onDark ? 'text-primary-foreground/55' : 'text-primary/65'}`}>{eyebrow}</p>
        <h2 className={`display mt-4 text-balance text-[clamp(2.25rem,5vw,4.7rem)] font-semibold leading-[.98] ${onDark ? 'text-primary-foreground' : 'text-foreground'}`}>{title}</h2>
      </div>
      <div className="max-w-sm md:pb-1">
        {body && <p className={`text-[.95rem] leading-7 ${onDark ? 'text-primary-foreground/65' : 'text-muted-foreground'}`}>{body}</p>}
        {action && (
          <Link href={action.href} className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${onDark ? 'text-accent' : 'text-primary'}`} data-testid={`link-section-${action.href.replace('/', '')}`}>
            {action.label} <ArrowUpRight size={15} />
          </Link>
        )}
      </div>
    </div>
  );
}