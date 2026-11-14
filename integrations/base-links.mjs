// Prefixes root-relative URLs in the built HTML with Astro's `base`.
// Lets the source keep plain links like "/reference/" while the site
// is served from a subpath (e.g. GitHub Pages project sites).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

export default function baseLinks() {
  let base = '/';
  return {
    name: 'base-links',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.endsWith('/') ? config.base : `${config.base}/`;
      },
      'astro:build:done': async ({ dir }) => {
        if (base === '/') return;
        const prefix = base.slice(0, -1); // "/repo"
        const attr = /(\s(?:href|src|action|content)=["'])\/(?!\/)([^"']*)/g;
        for await (const file of htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          const out = html.replace(attr, (m, start, rest) =>
            `/${rest}`.startsWith(base) || `/${rest}` === prefix ? m : `${start}${prefix}/${rest}`,
          );
          if (out !== html) await writeFile(file, out);
        }
      },
    },
  };
}
