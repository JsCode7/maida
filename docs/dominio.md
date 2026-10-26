# maida.cl · Configuración activa

Comprobada el 26 de octubre de 2026.

- Sitio principal: https://maida.cl/
- https://www.maida.cl/ redirige a https://maida.cl/.
- http://maida.cl/ redirige a HTTPS.
- GitHub Pages publica la rama `gh-pages`, raíz `/`.
- Dominio personalizado `maida.cl`, con HTTPS obligatorio habilitado.
- Certificado aprobado para `maida.cl` y `www.maida.cl`.
- Dominio verificado en la cuenta GitHub `JsCode7` mediante TXT.
- Cloudflare completó la activación del dominio, en plan Free.

## Nameservers

NIC Chile ya delegaba a estos nameservers cuando se realizó la conexión:

- `earl.ns.cloudflare.com`
- `josephine.ns.cloudflare.com`

No fue necesario modificar NIC Chile durante la configuración.

## Registros DNS de Cloudflare

| Tipo | Nombre | Destino | Proxy |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | Solo DNS |
| A | @ | 185.199.109.153 | Solo DNS |
| A | @ | 185.199.110.153 | Solo DNS |
| A | @ | 185.199.111.153 | Solo DNS |
| CNAME | www | jscode7.github.io | Solo DNS |
| TXT | _github-pages-challenge-jscode7 | Valor asignado por GitHub, guardado en Cloudflare | No aplica |

TTL automático. Conservar el TXT para mantener la verificación de propiedad. Los registros web usan Solo DNS: el contenido y el certificado HTTPS los sirve GitHub Pages.

## Publicaciones futuras

El archivo `dist/CNAME` contiene `maida.cl`. Conservarlo para mantener el dominio entre publicaciones. `dist/index.html` contiene la URL canónica y la imagen social con el dominio definitivo.

Después de guardar los cambios en un commit de `main`, ejecutar `npm run publish`. El comando comprueba los recursos, sube el código y publica exclusivamente `dist/`, preservando el historial de `gh-pages`. No requiere forzar cambios de historial.

## Cuando abra Shopify

Revisar los valores DNS actuales entregados por Shopify, actualizar solo los registros web que correspondan en Cloudflare y retirar el dominio personalizado de GitHub Pages. No es necesario cambiar la delegación de NIC Chile. Preservar cualquier registro de correo u otros servicios que se agregue en el futuro.

## Referencias oficiales

- [Dominios personalizados de GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verificar la propiedad de un dominio](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Configurar Cloudflare con nameservers](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
