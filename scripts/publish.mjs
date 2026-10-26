import { execFileSync } from 'node:child_process';
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
if (git('status', '--porcelain')) throw new Error('Primero guarda los cambios en un commit. La publicación usa los archivos confirmados en Git.');
if (git('branch', '--show-current') !== 'main') throw new Error('Publica desde la rama main.');
git('push', 'origin', 'main');
git('fetch', 'origin', 'gh-pages');
const tree = git('rev-parse', 'HEAD:dist');
if (tree === git('rev-parse', 'origin/gh-pages^{tree}')) {
  console.log('La rama publicada ya contiene estos archivos.');
} else {
  // Mantiene el historial de Pages, incluso el commit CNAME creado por GitHub.
  const revision = git('commit-tree', tree, '-p', 'origin/gh-pages', '-m', `deploy: ${git('rev-parse', '--short', 'HEAD')}`);
  execFileSync('git', ['push', 'origin', `${revision}:refs/heads/gh-pages`], { stdio: 'inherit' });
  console.log('Archivos enviados. GitHub Pages publicará la rama gh-pages.');
}
