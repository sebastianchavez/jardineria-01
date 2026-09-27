# Verde Vita Jardinería — Landing Page Template

Template completo de landing page para una empresa de **jardinería y paisajismo**. **Listo para usar**: solo abre `index.html` en tu navegador.

## Stack técnico

- **HTML5** puro (MPA - Multi Page Application, sin frameworks JS)
- **Bootstrap 5.3.3** vía CDN (CSS + JS Bundle)
- **Bootstrap Icons 1.11.3** vía CDN
- **JavaScript** nativo (vanilla)
- **Google Fonts**: `Playfair Display` (títulos) + `Poppins` (texto)
- Imágenes vía URLs de **Unsplash** (sin dependencias locales)
- 100% responsive (mobile-first)

## Paleta de colores

- **Verde hoja** (`--leaf-500: #22c55e`) — color principal / "vida"
- **Marrón tierra** (`--earth-500: #8b6f47`) — color de acento / "naturaleza"
- **Amarillo solar** (`--accent: #fbbf24`) — CTAs y destacados

## Estructura del proyecto

```
jardineria-01/
├── index.html              # Inicio (hero + servicios destacados + stats + testimonios + CTA)
├── sobre-nosotros.html     # Historia + equipo + valores + timeline
├── servicios.html          # Catálogo (8 servicios) + proceso de trabajo
├── galeria.html            # 12 proyectos con filtros + lightbox
├── precios.html            # 3 planes mensuales + lista detallada + FAQ
├── contacto.html           # Formulario completo + mapa + horarios + redes
├── privacidad.html         # Política de privacidad (con TOC lateral)
├── terminos.html           # Términos y condiciones (con TOC lateral)
├── README.md
│
├── assets/
│   ├── css/
│   │   └── styles.css      # Tema personalizado (paleta + componentes + animaciones)
│   └── js/
│       ├── data.js         # ⭐ Todos los datos mockeados (negocio, servicios, equipo…)
│       ├── main.js         # Interacciones: navbar, animaciones, contadores, formulario
│       └── gallery.js      # Render de galería + filtros + lightbox
```

## Páginas incluidas

| Página | Contenido |
| ------ | --------- |
| **Inicio** | Hero con morph animation, 4 servicios destacados, 4 stats animadas, 4 valores, preview nosotros, carrusel de 3 testimonios, CTA banner |
| **Sobre nosotros** | Historia, Misión/Visión/Valores, Timeline de 5 hitos, Equipo (4 personas), CTA |
| **Servicios** | Grid de 8 servicios con modal Bootstrap, Proceso de 4 pasos, 4 valores diferenciales, CTA |
| **Galería** | Filtros por categoría (5), 12 proyectos con hover effect, Lightbox modal con teclado (← → ESC) |
| **Precios** | 3 planes mensuales (con destacado), Lista detallada en 4 categorías, FAQ acordeón, CTA |
| **Contacto** | Banner WhatsApp, Formulario con validación Bootstrap, Card lateral con info + horarios, Mapa Google Maps, FAQ |
| **Privacidad** | Layout 2 columnas (TOC sticky + contenido), 11 secciones, última actualización destacada |
| **Términos** | Layout 2 columnas (TOC sticky + contenido), 12 secciones, advertencias legales |

## Cómo usar

### Visualización local

1. Descarga o clona este repositorio.
2. Abre `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. ¡Listo! No requiere build step, instalación ni servidor.

```bash
# Opcional: servir con un servidor local (recomendado para ver el mapa y Google Fonts)
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Luego abre `http://localhost:8000`.

### Personalización rápida

Toda la información del negocio está centralizada en **`assets/js/data.js`**. Edita ese único archivo para cambiar:

- Nombre del negocio, teléfono, email, dirección
- Lista de servicios y precios
- Equipo (jardineros, paisajistas)
- Galería de proyectos (sustituye las URLs de Unsplash por las tuyas)
- Planes mensuales
- Lista de precios detallada
- Horarios de atención
- Testimonios
- Preguntas frecuentes
- Estadísticas
- Historia / línea de tiempo

Ejemplo:

```js
const NEGOCIO = {
  nombre: 'Tu Negocio de Jardinería',
  telefono: '+56 2 2222 3333',
  email: 'contacto@tuempresa.cl',
  direccion: 'Tu Dirección 123, Santiago',
  // ...
};
```

### Cambiar paleta de colores

Edita las CSS variables en **`assets/css/styles.css`** dentro del bloque `:root`:

```css
:root {
  --leaf-500: #22c55e;  /* Color principal (verde) */
  --leaf-600: #16a34a;  /* Hover */
  --earth-500: #8b6f47; /* Acento tierra */
  --accent: #fbbf24;    /* Amarillo solar */
}
```

Los cambios se propagarán automáticamente a todos los componentes Bootstrap y personalizados.

## Funcionalidades JS

- ✅ Navbar fija con efecto shrink al hacer scroll
- ✅ Menú hamburguesa en móvil con cierre automático
- ✅ Animaciones on-scroll (fade-up, fade-left, fade-right, zoom) vía IntersectionObserver
- ✅ Contadores animados (easing cubic)
- ✅ Carrusel de testimonios Bootstrap
- ✅ Modal de detalle por servicio (Bootstrap)
- ✅ Lightbox para galería (← → ESC + click fuera)
- ✅ Filtros dinámicos por categoría (galería)
- ✅ FAQ acordeón Bootstrap
- ✅ Validación de formularios HTML5 + Bootstrap
- ✅ Formulario con spinner "Enviando..." + modal de éxito
- ✅ Smooth scroll para anchors
- ✅ Resaltado del enlace activo en navbar
- ✅ Botón scroll-to-top
- ✅ Botón flotante de WhatsApp con animación pulse
- ✅ Date picker con fecha mínima = hoy
- ✅ Tooltip en hover (preparado)
- ✅ Reveal animations con delays

## Datos mockeados

El template viene con datos realistas para **Verde Vita Jardinería SpA** en Santiago, Chile:

- **8 servicios** con precios en CLP ($8.500 a $350.000+)
- **4 personas** en el equipo (paisajistas, técnicos)
- **3 testimonios** de comunas reales (Las Condes, Vitacura, Providencia)
- **3 planes mensuales** ($75.000, $145.000, $320.000 CLP)
- **12 proyectos** en galería (4 categorías)
- **5 hitos** históricos (2014 — 2026)
- **6 preguntas** frecuentes
- **4 estadísticas** (+520, 10, +1200, 98%)

Todos los precios están en **CLP** y los teléfonos en formato **+56** para Chile/Argentina.

## Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Móvil (iOS Safari, Chrome Android)
- ⚠️ IE11 no soportado

## Licencia

Template de demostración. Imágenes vía Unsplash (uso libre). Bootstrap vía CDN (MIT License). Bootstrap Icons (MIT License). Google Fonts (Open Font License).

---

**Hecho con** 🌿 **y muchas plantas**
