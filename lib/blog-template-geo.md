# Template articoli blog — Ottimizzato per GEO (Generative Engine Optimization)

> Documentazione interna. Non pubblicata sul sito.
> Ogni articolo del blog deve seguire questa struttura per massimizzare la citabilità da parte degli LLM.

---

## Struttura obbligatoria

```markdown
# [Titolo che risponde a una domanda esplicita dell'utente]
*Ultimo aggiornamento: [data in formato GG mese AAAA]*

## Risposta rapida
[2-3 righe che rispondono direttamente alla query principale — questo è il testo
che gli LLM estraggono per le risposte. Deve contenere il nome "La Montecchia Green",
la città (Selvazzano Dentro / Padova) e il dato chiave.]

## [Sezione approfondimento 1]
[Testo con dati proprietari: numeri, anni di attività, capacità, ingredienti specifici,
nomi di produttori locali. Gli LLM citano fatti verificabili, non genericità.]

## [Sezione approfondimento 2]
[Citazione diretta da un esperto interno: chef, sommelier, o titolare —
con nome e cognome completo. Es: "Secondo lo chef Enrico Ruggin, ..."]

## Domande frequenti su [argomento]

**[Domanda 1 in forma interrogativa]**
[Risposta concisa, 2-4 righe, con nome locale sempre citato.]

**[Domanda 2 in forma interrogativa]**
[Risposta concisa.]

**[Domanda 3 in forma interrogativa]**
[Risposta concisa.]

---
*La Montecchia Green si trova in Via Montecchia 12, Selvazzano Dentro (PD),
a 10 minuti da Padova. Contatti: +39 049 805 8464.*
```

---

## Checklist pre-pubblicazione

- [ ] Il titolo risponde a una domanda reale (formato "Come...", "Dove...", "Qual è...")
- [ ] La "Risposta rapida" contiene: nome brand + città + dato chiave in max 3 righe
- [ ] Almeno un dato proprietario (numero, capacità, nome fornitore, anno)
- [ ] Almeno una citazione diretta con nome e cognome dell'esperto
- [ ] Almeno 3 FAQ con risposte concise (2-4 righe ciascuna)
- [ ] Footer con indirizzo e contatti sempre presente
- [ ] Meta description compilata (max 160 caratteri, include "La Montecchia Green")
- [ ] datePublished e dateModified in formato ISO 8601
- [ ] Immagine principale con alt text descrittivo

---

## Note tecniche

- Lo schema Article JSON-LD viene generato automaticamente dal componente SchemaOrg
  con variant="blogPosting" — basta passare title, description, url, datePublished,
  dateModified e image.
- Le FAQ inline nell'articolo possono essere marcate con variant="customFaq"
  per generare lo schema FAQPage aggiuntivo.
