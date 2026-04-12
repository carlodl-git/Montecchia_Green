import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb visibile + accessible. L'ultimo elemento (pagina corrente) non è
 * cliccabile e porta aria-current="page".
 * Da abbinare con <SchemaOrg variant="breadcrumb" breadcrumbItems={...} />
 * per coerenza con JSON-LD.
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-text-mid/85 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          const isHome = idx === 0;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1"
            >
              {idx > 0 && (
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0 text-text-mid/40"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-green-dark"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 hover:text-green-dark transition-colors"
                >
                  {isHome && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
