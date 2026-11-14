// @ts-check
import { defineConfig } from 'astro/config';
import baseLinks from './integrations/base-links.mjs';

// Old WordPress URLs keep working after the switch.
const oldPosts = {
  '/im-projekt-zajistuje-inzenyring-k-10-projektum': '/aktuality/inzenyring-jako-nedilna-soucast',
  '/autorsky-dozor-pri-dokoncovani-bytoveho-domu-v-husove-ulici': '/aktuality/autorsky-dozor-husova',
  '/rozsahla-pristavba-bytoveho-domu-v-mlade-boleslavi': '/aktuality/pristavba-bytoveho-domu-klementa',
  '/prispevek-3': '/aktuality/optimalizace-bakov-nad-jizerou',
  '/prispevek-2': '/aktuality/dostupne-bydleni-vranovice',
  '/prispevek-1': '/aktuality/plavecky-bazen-autorsky-dozor',
};

const base = process.env.BASE ?? '/';
const withBase = (path) => `${base.replace(/\/$/, '')}${path}`;
const redirects = {
  ...oldPosts,
  '/volna-mista/projektant-projektantka-pozemnich-staveb-junior': '/kariera/projektant-pozemnich-staveb-junior',
  '/zasady-cookies-eu': '/zasady-cookies',
};

export default defineConfig({
  // SITE / BASE are set by the GitHub Pages workflow; defaults are production.
  site: process.env.SITE ?? 'https://www.improjekt.cz',
  base,
  integrations: [baseLinks()],
  trailingSlash: 'ignore',
  redirects: Object.fromEntries(Object.entries(redirects).map(([from, to]) => [from, withBase(to)])),
});
