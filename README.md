# Maida · Próximamente

Landing informativa de papelería kawaii: HTML, CSS y JavaScript sin framework, dependencias de ejecución, formulario, contador ni fecha de apertura.

- Repositorio: https://github.com/JsCode7/maida
- Publicación inicial: https://jscode7.github.io/maida/
- Dominio previsto: https://maida.cl (pendiente de configurar DNS y dominio en Pages).

## Desarrollo

Requiere Node.js 22 o posterior. No hace falta instalar paquetes.

```sh
npm run dev
```

Abrir http://127.0.0.1:4173. Los archivos publicados están en `dist/`. Los cambios se ven al recargar.

```sh
npm run check
```

Comprueba sintaxis JavaScript, existencia de imágenes, fuentes, estilos y enlaces internos. La revisión visual debe incluir móvil, escritorio y el botón de pausa.

## Publicación

En GitHub → Settings → Pages la fuente es **Deploy from a branch**, rama **gh-pages**, carpeta **/ (root)**. La rama `main` conserva el proyecto y `gh-pages` contiene exclusivamente los archivos de `dist/`.

Después de guardar los cambios en un commit de `main`, ejecutar:

```sh
npm run publish
```

El comando comprueba los archivos, sube `main` y publica el contenido confirmado de `dist/` en `gh-pages`. GitHub ejecuta entonces su publicación nativa de Pages. Un push de `main` por sí solo no modifica el sitio. Las campañas originales que ya estaban en esta carpeta se conservan localmente y están excluidas de Git.

Se eligió esta modalidad porque la cuenta reportó un bloqueo de facturación al ejecutar un workflow personalizado de Actions. El sitio no necesita ese workflow ni un proceso de compilación.

## Contenido y diseño

- Textos, metadatos y estructura: `dist/index.html`.
- Paleta, tamaños, adaptación móvil y animación: `dist/styles.css`.
- Pausa/reanudación y preferencia de movimiento reducido: `dist/script.js`.
- Imágenes y tipografías locales: `dist/assets/`.
- Logo original de Maida y tres imágenes de las campañas existentes.
- Imagen de ambientación y secuencia del gatito creadas a partir de las referencias de marca. No constituyen promesas de disponibilidad de productos.
- El gatito usa cuatro cuadros en una sola imagen transparente. Su recorrido es decorativo y no representa avance real ni una fecha.
- Sin seguimiento, cookies, pagos o captura de datos.
- Cormorant Garamond y DM Sans bajo SIL Open Font License, incluida junto a los archivos de fuentes.

## Dominio

Ver [Configuración de maida.cl](docs/dominio.md). Mientras el DNS no esté listo, conservar la URL de GitHub Pages como dirección pública operativa. Después de conectar el dominio, cambiar `og:image` a `https://maida.cl/assets/hero.webp` y agregar la URL canónica `https://maida.cl/`.

Cuando se lance Shopify, actualizar los registros de Cloudflare usando los valores actuales que entregue Shopify y retirar el dominio personalizado de GitHub Pages. La landing no necesita acceder a la cuenta ni a las claves de Shopify.
