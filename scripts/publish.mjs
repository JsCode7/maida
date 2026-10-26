import { execFileSync } from 'node:child_process';
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
if (git('status', '--porcelain')) throw new Error('Primero guarda los cambios en un commit. La publicación usa los archivos confirmados en Git.');
if (git('branch', '--show-current') !== 'main') throw new Error('Publica desde la rama main.');
git('push', 'origin', 'main');
const revision = git('subtree', 'split', '--prefix=dist', 'HEAD');
execFileSync('git', ['push', 'origin', `${revision}:refs/heads/gh-pages`], { stdio: 'inherit' });
console.log('Archivos enviados. GitHub Pages publicará la rama gh-pages.');
