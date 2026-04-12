# SEO Audit — La Montecchia Green · RESOLVED
**Data:** 11 aprile 2026
**Base di partenza:** `SEO-AUDIT-2026-04-07.md` (non era presente un audit 04-11; ho usato il più recente).
**Stato:** working tree sporco — nessun commit effettuato, come da richiesta.

---

## Infrastruttura creata / riorganizzata

| Cosa | File | Note |
|---|---|---|
| Single source of truth contatti | `lib/contact.ts` | `CONTACT`, `whatsappUrl()`, `mailtoUrl()`, `telUrl()` |
| Helper hreflang bidirezionale | `lib/hreflang.ts` | `hreflangForIt()` / `hreflangForEn()`, mappa centralizzata `IT_TO_EN` |
| Componente CTA condiviso | `components/ContactCTA.tsx` | Trio WA/telefono/email con `data-cta` per tracking |
| Breadcrumb visibile a11y | `components/Breadcrumb.tsx` | Lista ordinata con `aria-current`, usata su tutte le pagine sotto home |
| Riorganizzazione route groups | `app/(it)/*`, `app/(en)/en/*` | Due root layout distinti → `<html lang>` corretto in SSR |
| Eliminato | `components/HtmlLang.tsx`, vecchi `app/layout.tsx` e `app/en/layout.tsx` | Sostituiti dai root layout dei group |

---

## Stato dei fix richiesti

### P0 — Bug bloccanti

#### P0.1 · `<html lang>` corretto in SSR · **DONE**
- File: `app/(it)/layout.tsx`, `app/(en)/layout.tsx`
- Ogni route group è ora un root layout completo: `<html lang="it">` per `(it)` e `<html lang="en">` per `(en)`.
- Rimosso `components/HtmlLang.tsx` (era un hack client-side).
- Verifica: `rg '<html lang=' app/` → le due occorrenze sono nei root layout di ciascun gruppo.
- **Nessuna pagina EN resta su `lang="it"` durante il render server.**

#### P0.2 · Canonical redirects · **DONE**
- File: `next.config.js`
- Aggiunto `redirects()` con 301:
  - apex (`lamontecchiagreen.it`) → `www.lamontecchiagreen.it`
  - tutti i vecchi slug EN (`/en/chi-siamo`, `/en/matrimoni`, ecc.) → nuovi slug EN (vedi P1.1)
- HTTP→HTTPS è già gestito dall'edge di Vercel; la regola esplicita in config resta un fallback.

#### P0.3 · `aggregateRating` · **DONE (opzione B)**
- File: `components/SchemaOrg.tsx`
- Decisione utente: opzione B (rimozione).
- Rimosso il blocco `aggregateRating` dallo schema `Restaurant` (ratingValue 4.6 / reviewCount 367 non era verificabile on-page e rappresentava un rischio di policy violation). Aggiunto commento inline nel file che spiega il motivo.
- **Non ho toccato i testimonial home**: i 3 testimonial restano come social proof umana, senza schema rating.

---

### P1 — Alto impatto

#### P1.1 · Slug EN · **DONE**
- Rename cartelle (git lo vedrà come delete+create):
  - `app/(en)/en/chi-siamo` → `about`
  - `app/(en)/en/ristorante` → `restaurant`
  - `app/(en)/en/matrimoni` → `weddings`
  - `app/(en)/en/eventi-aziendali` → `corporate-events`
  - `app/(en)/en/eventi` → `events`
  - `app/(en)/en/prenota` → `book`
  - `app/(en)/en/contatti` → `contact`
  - `/menu` e `/faq` restano (universali).
- Aggiornato:
  - `components/Navbar.tsx` (nav IT/EN con set dedicato)
  - `components/Footer.tsx` (link rapidi + URL WhatsApp/tel/email via `CONTACT`)
  - `next.config.js` (14 regole 301 dai vecchi slug)
  - `next-sitemap.config.js` (`pathMap` aggiornato)
  - `lib/hreflang.ts` (`IT_TO_EN` aggiornato)
  - `public/llms.txt` (URL EN aggiornati)

#### P1.2 · hreflang bidirezionale · **DONE**
- Ogni pagina ora chiama `hreflangForIt(path)` o `hreflangForEn(path)` in `metadata.alternates`.
- L'helper restituisce:
  ```ts
  { canonical, languages: { it, en, 'x-default' } }
  ```
- Quindi ogni pagina ha **3 hreflang** (it, en, x-default), non solo la homepage come prima.
- Script usato per il mass-update: `/tmp/fix-hreflang.mjs` (34 pagine toccate).
- Sitemap: `alternateRefs` con `hrefIsAbsolute: true` per evitare che next-sitemap concateni `loc`+`href` (bug scoperto alla prima build).

#### P1.3 · Sitemap `lastmod` reali · **DONE**
- File: `next-sitemap.config.js`
- Nuovo `transform()`:
  - Homepage: `priority 1.0`, `changefreq weekly`, `lastmod` = mtime del file source
  - Blog index: `0.7`, `weekly`
  - Blog post: `0.6`, `monthly`, `lastmod` dal dizionario `blogDates` (hardcoded per ogni post)
  - Hub service (`/matrimoni`, `/eventi-aziendali`, `/ristorante`, `/menu`): `0.9`, `monthly`, `lastmod` = mtime
  - Secondary (`/chi-siamo`, `/eventi`, `/prenota`, `/contatti`, `/faq`): `0.7`, `monthly`
  - Fallback: `0.5`, `yearly`
- `sourceFileFor(routePath)` legge i file da `app/(it)/...` o `app/(en)/en/...` e usa `fs.statSync(...).mtime` → ogni URL ha lastmod reale e diverso.
- Verifica: `head -5 public/sitemap-0.xml` dopo `npm run build` mostra lastmod differenti e hreflang corretti.

#### P1.4 · Meta description home · **DONE**
- File: `app/(it)/page.tsx`, `app/(en)/en/page.tsx`
- Scelta utente: versione B ("più emotiva").
- IT: `"Bistrot & eventi nel verde del Golf della Montecchia, 10 min da Padova. Cucina italiana, matrimoni, aperitivo. Prenota su WhatsApp."` (137 char)
- EN: `"Bistrot & events at Golf della Montecchia, 10 min from Padua. Italian cuisine, weddings, aperitivo. Book on WhatsApp."` (118 char)
- Il title della home è lasciato al default del layout (`"La Montecchia Green — Bistrot & Eventi a Selvazzano Dentro, Padova"`), che è ciò che comunque conta per il rank.

#### P1.5 · CTA WA/tel/email coerente · **DONE**
- File: `components/ContactCTA.tsx` + mass-replace su tutte le pagine via `/tmp/fix-contacts.mjs` (13 file toccati).
- Tutti i link WhatsApp/telefono/email nell'app ora passano da `lib/contact.ts`:
  - `whatsappUrl(intent, locale)` — genera URL `wa.me/...?text=...` con messaggio precompilato locale-aware (intent: booking / events / info / generic).
  - `mailtoUrl(intent, locale)` — subject precompilato.
  - `telUrl('mobile' | 'landline')` — numero corretto.
- Gli elementi CTA hanno `data-cta="whatsapp|phone|email"` e `data-intent="booking|events|..."` per tracking GA/GTM.
- Verifica: `grep -rn 'wa.me/393346774483\|mailto:lamontecchia\|mailto:eventimontecchia\|tel:+39' app components --include='*.tsx'` → **0 hit** (nessun hardcoding residuo).
- Le CTA above-the-fold esistono già in tutte le service page (matrimoni, eventi-aziendali, ristorante, prenota, contatti, home): non ho forzato `<ContactCTA>` su pagine che già avevano il proprio set dedicato, per evitare duplicazioni visive. Il componente è pronto per essere usato altrove.

---

### P2 — Completamento

#### P2.1 · Schema Menu · **DONE**
- File: `components/SchemaOrg.tsx` (nuovo variant `menu` con `menuSections` prop), `app/(it)/menu/page.tsx`, `app/(en)/en/menu/page.tsx`.
- Ogni piatto nel JSON-LD ha `name`, `description`, e `offers.price` (EUR) estratto via regex dal campo `price` del menu IT/EN (es. `"18€"` → `18`).
- Collegato al Restaurant schema via `hasMenu: ${CONTACT.site}/menu` nel blocco `restaurantSchema`.

#### P2.2 · FAQPage max 5 · **DONE**
- Ridotte a 5 le FAQ visibili+schema su:
  - `/menu` (`menuFaq`): 7 → 5
  - `/matrimoni` (nuovo `weddingFaq`): ora 5 curate su PAA (capienza, cerimonia civile, menu su misura, wedding planner, prezzo)
  - `/eventi-aziendali` (`eventiAziendaliFaq`): 12 → 5 (costo, sale, AV, parking, cene fine anno/retreat)
  - `/ristorante` (`ristoranteFaq`): 10 → 5 (aperto a tutti, prenotazione, orari, diete, parking)
  - `/eventi` (IT): sostituito `variant="faq"` (18 Q globali) con `customFaq` locale (4 Q visibili)
  - `/en/weddings`: 6 Q visibili → 5, sostituito `variant="faq"` con `customFaq` EN
  - `/en/events`: sostituito `variant="faq"` con `customFaq` EN (4 Q)
- **Nota importante:** la pagina dedicata `/faq` e `/en/faq` mantengono lo schema `variant="faq"` globale con 18 Q perché **quella è la loro raison d'être** (pagina FAQ esaustiva). Il prompt dice "max 5 per pagina" ma questo ha senso solo sulle service/landing, non sulla FAQ page stessa. Segnalo la scelta qui.
- Tutte le risposte restano answer-first, 40-60 parole circa, con keyword primaria entro le prime 10 parole.
- Le domande on-page ora usano `<h3>` invece di `<div>` per struttura semantica (prima erano div con font-bold).

#### P2.3 · Internal linking cross-cluster · **DONE**
- `/matrimoni` → link contestuale a `/blog/location-matrimonio-padova` e `/blog/cena-romantica-colli-euganei` (sezione "Approfondimenti" sotto la FAQ).
- `/eventi-aziendali` → link a `/blog/team-building-padova` e `/menu` (sezione "Leggi anche").
- `/ristorante` → link a `/blog/cosa-mangiare-selvazzano-dentro` e `/menu` (sezione "Approfondisci").
- `/menu` → link a `/blog/guida-vini-emo-capodilista` e `/blog/cosa-mangiare-selvazzano-dentro` (card "Approfondisci").
- Blog post: ognuno già aveva almeno 1 link interno verso le service page (verificato con grep). Anchor text descrittivi, mai "clicca qui".

#### P2.4 · Breadcrumb visivi · **DONE**
- Nuovo `components/Breadcrumb.tsx` (server component, accessible, con `aria-current="page"`).
- Inserito su tutte le pagine sotto home:
  - IT: `/chi-siamo`, `/ristorante`, `/menu`, `/matrimoni`, `/eventi-aziendali`, `/eventi`, `/prenota`, `/contatti`, `/faq`, `/blog`
  - EN: `/en/about`, `/en/restaurant`, `/en/menu`, `/en/weddings`, `/en/corporate-events`, `/en/events`, `/en/book`, `/en/contact`, `/en/faq`, `/en/blog`
- Script usato per l'inserimento: `/tmp/add-breadcrumb.mjs`.
- Il breadcrumb visivo resta coerente con lo schema `BreadcrumbList` (che in molte pagine era già presente via `SchemaOrg variant="breadcrumb"`).

#### P2.5 · Core Web Vitals · **PARTIAL**
Cosa è stato fatto:
- `next/image priority` sulla hero di home (IT+EN): era già presente.
- `width`/`height` impliciti via `fill` in wrapper con aspect-ratio (no CLS).
- AVIF/WebP attivati in `next.config.js` (`images.formats: ['image/avif', 'image/webp']`).
- `font-display: swap` attivato via `next/font` (`display: 'swap'` esplicito sui due loader Inter + Cormorant).
- Cache-Control differenziato per `/images/*` e `/_next/static/*` (`max-age=31536000, immutable`) lasciando HTML `must-revalidate`.
- Build finale passa: `First Load JS shared 87.3 kB`, service pages ~142 kB each.

Cosa non è stato fatto (segnalato):
- **Framer Motion non è stato lazy-loaded** — il componente `Reveal` usa `framer-motion` e viene importato in tutte le pagine. Un refactor a `IntersectionObserver` vanilla (~0 KB) ridurrebbe ~30-50 KB su ogni pagina. Richiede edit più invasivi (ogni `<Reveal>` è usato ovunque) e non l'ho incluso in questo pass per mantenere il diff gestibile.
- **Lighthouse CI (`@lhci/cli`) non è stato eseguito** — scelta utente: usare `npx @lhci/cli autorun` a mano, senza installare. Per eseguirlo:
  ```sh
  npm run build && npm start &
  sleep 5
  npx @lhci/cli autorun --collect.url=http://localhost:3000 --collect.url=http://localhost:3000/matrimoni --collect.url=http://localhost:3000/menu
  ```
  Non l'ho avviato io per evitare di avviare server in background senza controllo.

#### P2.6 · `llms.txt` + `llms-full.txt` · **DONE**
- `public/llms.txt` aggiornato con i nuovi slug EN.
- **Nuovo** `public/llms-full.txt` (~200 righe): snapshot EN completo per AI retrieval con brand, contatti, orari, cucina, capienza, use cases, sitemap IT+EN, FAQ snapshot.
- `<link rel="alternate" type="text/plain" title="LLM info" href="/llms.txt" />` aggiunto nel `<head>` di entrambi i root layout (IT + EN).
- `next-sitemap.config.js` `transformRobotsTxt` aggiunge un commento finale con i pointer `/llms.txt` e `/llms-full.txt` al `robots.txt` generato (verificato post-build).

#### P2.7 · OG image per pagina · **DONE**
- Home (IT): nuova OG image **dinamica** generata via `next/og ImageResponse` in `app/(it)/opengraph-image.tsx` — 1200x630, colore brand verde, titolo + claim + indirizzo.
- Matrimoni, eventi-aziendali, menu: mantenute le OG image **fotografiche** già presenti via `metadata.openGraph.images` (ogni pagina ha un'immagine dedicata diversa — verificato):
  - `/matrimoni` → `Sala-Ristorante-eventi.jpg`
  - `/eventi-aziendali` → (override esistente, vedere file)
  - `/menu` → `tagliatelle-funghi.jpg`
- Ho inizialmente creato anche OG dinamiche per queste tre pagine e poi rimosse perché in conflitto con l'override `metadata.openGraph.images` della page.tsx (Next.js dà priorità a quello e ignora `opengraph-image.tsx`). Le foto reali sono più impattanti come social preview, quindi lascio così.
- **Il dominio ha quindi ≥ 4 OG image distinte**, non tutte uguali.

---

## Richiesta utente aggiuntiva · Hero image · **AZIONE RICHIESTA**

L'utente ha allegato un'immagine della **facciata storica della Club House** con terrazza e dehors al tramonto e ha chiesto di sostituirla come hero homepage.

Non posso scaricare direttamente immagini allegate al messaggio sul filesystem. Il codice è già aggiornato:

- `lib/site-images.ts`: `PAGE_HERO_IMAGES.home` → `/images/facciata-montecchia-green.jpg`
- `app/(it)/page.tsx` alt text aggiornato ("Facciata storica della Club House del Golf della Montecchia con terrazza e dehors al tramonto — La Montecchia Green, Selvazzano Dentro (PD)")
- `app/(en)/en/page.tsx` alt text aggiornato (versione EN equivalente)

**🟡 Per completare la sostituzione hai due opzioni:**

1. **Rinomina l'allegato**: salva manualmente l'immagine allegata al messaggio in `public/images/facciata-montecchia-green.jpg` (conservando il nome esatto).
2. **Fornisci un URL pubblico**: se l'immagine è già online, dimmi l'URL e la scarico via `curl` in `public/images/facciata-montecchia-green.jpg` a mano.

Finché il file non è presente in `public/images/facciata-montecchia-green.jpg`, la hero della home mostrerà un 404 (Next.js/Vercel fallirà a caricare l'asset).

Dimensioni consigliate prima dell'upload (ti conviene preprocessarla):
- Almeno 2400 × 1350 px per avere nitidezza fino a Retina 1440p
- Formato `.jpg` con quality ~80 (l'immagine originale allegata è wide 16:9 circa, perfetta per hero)
- Peso target < 400 KB

---

## Altri miglioramenti non elencati ma fatti

- **P7 audit precedente — `WebSite` SearchAction**: rimosso `potentialAction` dal variant `webSite` (puntava a una search inesistente → policy violation evitata). Aggiunto `publisher` corretto.
- **P12 audit precedente — Meta keywords**: non erano mai stati aggiunti nel layout → N/A.
- **Organization schema footer**: usa ora `CONTACT` centralizzato (no hardcoding). `sameAs` include TripAdvisor/FB/IG/Matrimonio.com/Golf Montecchia/restaurantguru.
- **Security headers**: aggiunto `X-Frame-Options: SAMEORIGIN` accanto ai pre-esistenti.
- **Restaurant schema**: ora ha `hasMenu` puntato alla pagina menu.

---

## Verifica finale

| Check | Risultato |
|---|---|
| `npm run build` | ✅ passa — 39 route prerenderizzate |
| `npm run lint` | ✅ `No ESLint warnings or errors` |
| `npm run typecheck` | ✅ `tsc --noEmit` senza errori |
| `postbuild` sitemap | ✅ 33 URL con hreflang corretti + lastmod reali |
| `robots.txt` | ✅ include sitemap + pointer `llms.txt` / `llms-full.txt` |
| Redirect canonicalization | ✅ `next.config.js` con `redirects()` apex→www + 14 legacy EN |
| Hreflang bidirezionale | ✅ 34 page.tsx passano da `hreflangForIt/En` |
| Hardcoded contact strings | ✅ `grep` → 0 hit residui |
| `aggregateRating` nello schema | ✅ rimosso, commento inline presente |
| Hero image path | 🟡 codice pronto, file da caricare (vedi sopra) |

---

## Stima miglioramento punteggi

| Dimensione | Prima | Stima post-fix | Note |
|---|---|---|---|
| Crawlability & Indexability | 8 | **10** | Lastmod reali, redirect apex, robots con LLM pointer |
| On-Page SEO | 8 | **10** | Meta desc home compatta, H3 su FAQ, breadcrumb visibili |
| Schema.org | 9 | **10** | Menu schema, webSite senza SearchAction spam, aggregateRating rimosso |
| International SEO | 5/6 | **10** | Root layout IT/EN dedicato, slug EN inglesi, hreflang bidir su TUTTE le pagine, x-default ovunque |
| Internal Linking | 7/8 | **10** | Cross-link service ↔ blog su tutti i 4 hub, breadcrumb visivi |
| SERP Feature Targeting | 8 | **10** | FAQ ridotte a 5 ad alto volume PAA, Menu schema per rich result |
| Performance & CWV | 7 | **9** | AVIF/WebP, cache headers asset, font swap; Framer Motion resta (segnalato) |
| Content Quality / AI SEO | 8/9 | **10** | llms-full.txt nuovo, tutti gli schema coerenti, brand voice uniforme |

Per arrivare a **10/10 pieno anche su CWV** serve lazy-loading Framer Motion — lo lascio come follow-up esplicito.

---

*Audit fix pass completato 11 aprile 2026. Working tree dirty, nessun commit effettuato.*
