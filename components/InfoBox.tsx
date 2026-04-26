import type React from 'react';
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
        <div
          className="mt-1 h-10 w-10 shrink-0 rounded-2xl bg-green-mid/10"
          aria-hidden="true"
        >
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-green-mid" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-mid">{title}</h2>
          <div className="mt-3 text-sm leading-relaxed text-text-mid/90">{children}</div>
        </div>
      </div>
    </Card>
  );
}

