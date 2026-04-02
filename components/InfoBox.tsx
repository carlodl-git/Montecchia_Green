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
    <Card className="border-green-mid/25 bg-warm-white/70">
      <div className="flex items-start gap-3">
        <div
          className="mt-1 h-10 w-10 rounded-2xl bg-green-mid/10"
          aria-hidden="true"
        >
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-green-mid" />
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text-mid">{title}</h2>
          <div className="mt-2 text-sm text-text-mid/90">{children}</div>
        </div>
      </div>
    </Card>
  );
}

