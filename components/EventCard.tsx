import { Card } from '@/components/ui/Card';
import { ReactNode } from 'react';

export default function EventCard({
  title,
  description,
  bullets,
  icon,
}: {
  title: string;
  description: string;
  bullets?: string[];
  icon?: ReactNode;
}) {
  return (
    <Card className="bg-warm-white/70">
      <div className="flex items-start gap-3">
        {icon ? <div className="mt-1">{icon}</div> : null}
        <div>
          <h3 className="text-lg font-semibold text-text-dark">{title}</h3>
          <p className="mt-2 text-sm text-text-mid leading-relaxed">{description}</p>
          {bullets?.length ? (
            <ul className="mt-3 space-y-2 text-sm text-text-mid/95">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-mid" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

