import type React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-green-mid/25 bg-warm-white/70 p-6 md:p-7">
      <div className="flex items-start gap-4">
        <span
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-dark/6 ring-1 ring-green-dark/10"
          aria-hidden="true"
        >
          <Sparkles className="h-4 w-4 text-green-dark" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-mid">{title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-text-mid/90">{children}</div>
        </div>
      </div>
    </Card>
  );
}

