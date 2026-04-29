import { Star } from 'lucide-react';

export default function TestimonialCard({
  name,
  title,
  text,
}: {
  name: string;
  title: string;
  text: string;
}) {
  return (
    <div className="card-lift relative flex h-full flex-col rounded-2xl border border-green-dark/8 bg-warm-white p-6 shadow-sm">
      {/* Virgolettone decorativo */}
      <span
        className="pointer-events-none absolute right-5 top-4 select-none font-serif text-7xl leading-none text-green-dark/8"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stelle */}
      <div className="flex items-center gap-1 mb-4" role="img" aria-label="Valutazione 5 stelle">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
        ))}
      </div>

      {/* Testo recensione */}
      <p className="flex-1 text-sm leading-relaxed text-text-mid/90 italic">
        &ldquo;{text}&rdquo;
      </p>

      {/* Divider + autore */}
      <div className="mt-5 flex items-center gap-3 border-t border-green-dark/8 pt-4">
        {/* Avatar con iniziali */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-dark text-xs font-semibold text-warm-white">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-text-dark">{name}</div>
          <div className="text-xs text-text-mid/65">{title}</div>
        </div>
      </div>
    </div>
  );
}
