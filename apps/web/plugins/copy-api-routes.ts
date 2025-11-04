import { Plugin } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import glob from 'fast-glob';

export function copyApiRoutes(): Plugin {
  return {
    name: 'copy-api-routes',
    async writeBundle() {
      const apiFiles = await glob('src/app/api/**/route.{js,ts}', {
        cwd: process.cwd(),
        absolute: true,
      });

      for (const file of apiFiles) {
        const relativePath = path.relative(path.join(process.cwd(), 'src'), file);
        const destPath = path.join(process.cwd(), 'build/server/src', relativePath);

        await fs.mkdir(path.dirname(destPath), { recursive: true });
        await fs.copyFile(file, destPath);
      }
    },
  };
}
