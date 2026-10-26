# Conectar maida.cl: NIC Chile → Cloudflare → GitHub Pages

NIC Chile es el registrador. Cloudflare puede administrar los registros DNS y GitHub Pages sirve esta página estática. No se requiere contratar un servidor.

## 1. Agregar el dominio en Cloudflare

En la cuenta de Cloudflare, agregar el dominio `maida.cl` y seleccionar el plan Free. Revisar cualquier registro detectado y preservar los registros existentes de correo u otros servicios que deban mantenerse.

## 2. Preparar estos registros en Cloudflare

| Tipo | Nombre | Destino | Proxy |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | Solo DNS |
| A | @ | 185.199.109.153 | Solo DNS |
| A | @ | 185.199.110.153 | Solo DNS |
| A | @ | 185.199.111.153 | Solo DNS |
| CNAME | www | jscode7.github.io | Solo DNS |

TTL automático. No incluir `https://` ni `/maida/` en el destino CNAME. Para la conexión inicial usar nube gris (Solo DNS). Revisar registros A/AAAA/CNAME previos de `@` y `www` para evitar destinos incompatibles; no cambiar registros de correo.

## 3. Delegar desde NIC Chile

Cloudflare asignará **dos nameservers específicos** al dominio. Copiar exactamente esos dos nombres en la administración de `maida.cl` en NIC Chile. No copiar nameservers de ejemplos. Si existe DNSSEC previo, seguir el procedimiento de transición de Cloudflare y NIC Chile antes de cambiar la delegación.

## 4. Configurar GitHub Pages

Antes de publicar la delegación DNS, configurar `maida.cl` en Settings → Pages → Custom domain del repositorio. Es recomendable verificar la propiedad desde los ajustes de Pages de la cuenta: GitHub proporciona el registro TXT específico para añadir en Cloudflare.

El sitio publica desde la rama `gh-pages`: configurar el dominio en Settings → Pages y crear también `dist/CNAME` con una sola línea: `maida.cl`. Así, las publicaciones siguientes conservan el dominio. Esperar la validación DNS y la emisión del certificado; activar **Enforce HTTPS** cuando esté disponible. Verificar tanto `https://maida.cl` como `https://www.maida.cl`.

Actualizar entonces en `dist/index.html` el metadato `og:image` para usar `https://maida.cl/assets/hero.webp`, agregar `<link rel="canonical" href="https://maida.cl/">` y actualizar la dirección pública en README.

Hasta que la delegación pueda completarse, mantener el sitio accesible en https://jscode7.github.io/maida/ sin establecer todavía una redirección hacia un dominio que no resuelve.

## Estado al preparar el proyecto

El 26 de octubre de 2026 la consulta pública de `maida.cl` no devolvía registros A ni NS. El usuario está creando su cuenta de Cloudflare. No se han inventado nameservers ni modificado registros en NIC Chile.

## Referencias oficiales

- [Dominios personalizados de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verificar la propiedad de un dominio](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Configurar Cloudflare con nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
