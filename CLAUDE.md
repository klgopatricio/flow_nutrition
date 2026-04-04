# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page for **Flow Nutrition**, marca chilena de suplementos deportivos. Sin build step, sin framework — HTML/CSS/JS puro, servido directamente desde el filesystem o cualquier hosting estático.

## Development

Abrir `index.html` en el navegador. Para live-reload:

```bash
npx serve .
# o
python -m http.server 8080
```

## Architecture

Tres archivos, sin dependencias entre builds:

- **`index.html`** — todas las secciones en orden: nav, hero, strip, productos, beneficios, testimonios, contacto, footer. Los IDs de sección (`#productos`, `#beneficios`, `#contacto`) son usados por los anchor links internos.
- **`style.css`** — organizado top-to-bottom siguiendo el orden del HTML. Los design tokens (paleta, espaciado, tipografía) viven en `:root` al inicio. Breakpoints en 1024px, 768px y 480px.
- **`main.js`** — tres comportamientos: (1) sombra del nav al hacer scroll, (2) scroll-reveal via `IntersectionObserver`, (3) feedback visual en botones de carrito y formulario de contacto.

---

## Identidad de marca

- **Nombre:** Flow Nutrition
- **Instagram:** @flow.nutrition.cl
- **Tono:** minimalista, premium, científico, directo. Nunca usar lenguaje exagerado o hype.

## Colores

| Variable | Hex | Uso |
|---|---|---|
| `--green-dark` | `#1a3a2a` | Fondo principal, secciones oscuras |
| `--green-mid` | `#2d5a3d` | Acentos, hovers |
| `--cream` | `#f5f0e8` | Textos sobre fondo oscuro, fondos secundarios |

Nunca usar blanco puro (`#fff`) ni negro puro (`#000`).

## Tipografía

- **Títulos:** Cormorant Garamond, weight 400–600
- **Cuerpo:** Jost, weight 200–300
- Nunca usar fonts genéricas como Arial o Times New Roman.

## Productos actuales

- Creatina FNL
- ProBASE (proteína vegana)
- Funghi (pre-entreno)
- Magnesio Bisglicinato
- Vitamina D3
- Melena de León

---

## Imágenes y assets visuales

Los archivos de imagen deben colocarse en `/images/`. Nombres de archivo establecidos:

| Archivo | Descripción |
|---|---|
| `images/creatina-fnl.jpg` | Creatina Monohydrate FNL — tarro verde oscuro/negro, fondo oscuro con polvo disperso |
| `images/magnesio-bisglicinato.jpg` | Bisglicinato de Magnesio FNL — frasco negro con tapa negra, fondo verde teal con partículas |
| `images/melena-de-leon.jpg` | Melena de León FNL — frasco ámbar con tapa dorada, fondo verde oscuro con efecto de neuronas |
| `images/lifestyle-estudio.jpg` | Foto lifestyle — hombre joven estudiando en escritorio blanco, ambiente minimalista y luminoso |

### Estilo visual de fotografía de producto (referencia obligatoria)

Todas las imágenes de producto siguen esta línea visual consistente:

- **Fondos:** Verde oscuro / teal profundo (`#0d2b1e` aprox.) con efectos de partículas, niebla, o destellos de luz
- **Iluminación:** Dramática, con foco en el producto, efectos de glow/halo en el producto
- **Encuadre:** Producto flotante o levitando, centrado, sin props adicionales
- **Paleta:** Verde oscuro + negro + dorado/ámbar (tapas y detalles metálicos)
- **Atmósfera:** Cósmica, premium, científica — similar a nebulosas o cosmos
- **Marca visible:** Logo "Laboratorio FNL" siempre presente en el frasco
- **Sin texto extra:** El fondo nunca lleva texto, solo el producto y efectos visuales

### Uso en el HTML

- Las tarjetas de **Creatina FNL**, **Magnesio Bisglicinato** y **Melena de León** ya referencian sus imágenes via `<img>`.
- Las tarjetas de **ProBASE**, **Funghi** y **Vitamina D3** usan gradiente + emoji hasta que se agreguen sus fotos.
- El **hero** muestra `lifestyle-estudio.jpg` dentro del círculo visual.
- Para agregar una imagen nueva: colocar el archivo en `/images/` y reemplazar el `<div class="card__img-icon">` por `<img src="images/nombre.jpg" ... class="card__img" />`.

### Estilo visual lifestyle

- **Ambiente:** Minimalista, blanco/crema, luz natural difusa
- **Props:** Laptop, cuaderno, taza verde, lentes, suplemento visible en escritorio
- **Persona:** Joven adulto, ropa casual neutra (tonos crema/blanco)
- **Mood:** Productividad enfocada, no gym — orientado a nootrópicos y suplementos cognitivos
- **Contraste con producto:** El lifestyle es cálido y luminoso; el producto es oscuro y dramático. Ambos conviven en la web.

## Reglas de diseño

- Fondos siempre en verde oscuro o crema, nunca otros colores de fondo.
- Botones con bordes redondeados (`border-radius` generoso), nunca cuadrados.
- Espaciado generoso, diseño limpio, sin ruido visual.

## Canal de ventas

- Venta por Instagram y WhatsApp, con delivery en Santiago.
- Todos los botones de contacto/CTA deben apuntar a WhatsApp (usar links `https://wa.me/...`), no a formularios ni email.

## Reglas generales

- Respetar siempre la paleta de colores definida arriba.
- Priorizar simplicidad sobre complejidad.
- Cada página debe cargar rápido y verse bien en móvil primero.
