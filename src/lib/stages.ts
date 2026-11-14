/**
 * Documentation phases of a project, in the order a building goes through them.
 * A reference's scope (its list of delivered documents) maps onto these phases,
 * so each project can show how far along the path IM Projekt took it.
 */
export const phases = [
  { id: 'studie', label: 'studie', match: /studie/ },
  { id: 'povoleni', label: 'povolení', match: /povolení|územní rozhodnutí|odstranění/ },
  { id: 'vyber', label: 'výběr zhotovitele', match: /výběr zhotovitele/ },
  { id: 'provadeni', label: 'provádění', match: /provádění stavby/ },
  { id: 'realizace', label: 'realizace', match: /autorský dozor|změny stavby/ },
  { id: 'skutecnost', label: 'skutečné provedení', match: /skutečného provedení/ },
] as const;

export type PhaseState = { id: string; label: string; done: boolean };

export function phasesFor(services: string[]): PhaseState[] {
  const text = services.join(' | ').toLowerCase();
  return phases.map((p) => ({ id: p.id, label: p.label, done: p.match.test(text) }));
}

export function hasEngineering(services: string[]) {
  return services.some((s) => /inženýring/.test(s));
}

/** Czech plural for counts: 1 dokument, 2–4 dokumenty, 5+ dokumentů. */
export function plural(n: number, one: string, few: string, many: string) {
  if (n === 1) return one;
  if (n >= 2 && n <= 4) return few;
  return many;
}

export const realizaceLabel = {
  novostavba: 'novostavba',
  rekonstrukce: 'rekonstrukce a přestavba',
} as const;

export function formatDate(d: Date) {
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
}
