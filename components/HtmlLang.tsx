'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function HtmlLang() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  useEffect(() => {
    document.documentElement.lang = isEn ? 'en' : 'it';
  }, [isEn]);

  return null;
}
