# 💎 Impeccable Design Engine — 20+ Comandos & 58 Reglas Anti-Patrón

> Catálogo maestro de comandos de iteración de diseño y reglas anti-patrón para garantizar una factura visual impecable y sin imperfecciones en el código frontend.

---

## 🕹️ Catálogo de Comandos Impeccable

Utiliza estos comandos mentales o en prompts para ejecutar transformar y pulir la UI de forma precisa:

1. **`/audit`**: Ejecuta una auditoría técnica completa de accesibilidad, performance y cumplimiento de diseño.
2. **`/critique`**: Revisa la jerarquía visual, legibilidad, flujo del usuario y tono emocional.
3. **`/polish`**: Aplica un pase final de refinamiento (alineación de bordes, sombras, radio de curvatura y consistencia).
4. **`/bolder`**: Amplifica la presencia visual cuando una UI luce genérica, aburrida o falta de personalidad.
5. **`/quieter`**: Reduce la agresividad visual, baja saturaciones excesivas y limpia ruido gráfico innecesario.
6. **`/distill`**: Simplifica la interfaz eliminando elementos redundantes hasta dejar solo lo esencial.
7. **`/harden`**: Refuerza el código contra casos borde: textos largos (overflow/truncation), soporte multi-idioma (i18n) y manejo de errores.
8. **`/onboard`**: Optimiza la experiencia de inicio del usuario, primer uso, empty states y activaciones.
9. **`/animate`**: Inyecta micro-animaciones fluidas con duraciones <300ms y easing `cubic-bezier`.
10. **`/colorize`**: Rediseña la paleta cromática utilizando neutros tintados en OKLCH y acentos armónicos (regla 60-30-10).
11. **`/typeset`**: Corrige jerarquía tipográfica, escala fluida, ritmo vertical y emparejamiento de fuentes.
12. **`/layout`**: Ajusta distribución espacial, alineación a grilla base de 8px y estructuras Bento Grid.
13. **`/delight`**: Añade detalles sutiles y momentos memorables en la interacción.
14. **`/overdrive`**: Aplica efectos visuales avanzados (Glassmorphism, shaders, mallas de gradiente, efectos cinéticos).
15. **`/clarify`**: Reescribe y mejora el copy de UI para máxima claridad y conversión.
16. **`/adapt`**: Adapta la interfaz perfectamente para móviles, tablets y monitores ultra-wide.
17. **`/optimize`**: Optimiza el rendimiento web (Web Vitals, CLS=0, bundle size, lazy loading).
18. **`/live`**: Activa iteración en caliente y vista de variantes para comparar opciones de diseño.
19. **`/normalize`**: Resetea elementos estrafalarios o inconsistentes hacia baseline limpio y estandarizado.
20. **`/pin`**: Fija configuraciones o atajos de diseño para mantener consistencia en todo el proyecto.

---

## 🚫 Reglas Anti-Patrón & Criterios Impeccable (58 Anti-patterns)

### 1. Tipografía y Escala Tipográfica
* **Sin Fuentes Genéricas Descuidadas:** Evitar el uso por defecto de Inter, Arial o Roboto sin intención estética. Preferir fuentes estilizadas o tipografías cinéticas bien combinadas (ej: Outfit, Plus Jakarta Sans, DM Sans, Geist).
* **Escala Fluida Estricta:** No usar tamaños arbitrarios (ej: `font-size: 19px`). Seguir escala modular: `xs (12px)`, `sm (14px)`, `base (16px)`, `lg (18px)`, `xl (20px)`, `2xl (24px)`, `3xl (30px)`, `4xl (36px)`, `5xl (48px)`.
* **Ritmo Vertical y Altura de Línea (`line-height`):**
  * Títulos (`h1`-`h3`): `line-height: 1.1 - 1.2` (apretado).
  * Texto de cuerpo: `line-height: 1.5 - 1.6` (respirable).

### 2. Color y Paletas Tintadas (OKLCH Color Space)
* **Prohibido el Negro Puro (`#000000`) y Gris Neutro Plano:** Usar siempre grises tintados con el tono de la marca (ej: grises azogados, slate o zinc con tinte cromático).
* **Elevación en Dark Mode:** La profundidad en modo oscuro se logra aumentando la luminosidad del contenedor, no solo agregando sombras negras.
* **Regla 60-30-10:** 60% Color Dominante Neutro, 30% Color Secundario de Estructura, 10% Color de Acento/Acción.

### 3. Espaciado y Grilla Base de 8px
* **Espaciado Múltiple de 8:** Todos los paddings, margins y gaps deben ser múltiplos de 8px (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`), o excepcionalmente 4px para elementos densos.
* **Consistencia Spacing Token:** Usar tokens centralizados en CSS/Tailwind (`gap-2`, `gap-4`, `gap-6`, `gap-8`) en lugar de valores `px` ad-hoc en el marcado.

### 4. Layout & Composición
* **Prohibido Anidar Tarjetas dentro de Tarjetas (Nested Cards Slop):** Evitar contenedores con bordes e insumos envueltos reiteradamente dentro de más contenedores. Rompe la respiración del diseño.
* **Regla de la Única Ancla Visual (Single Anchor Rule):** Cada pantalla debe tener UN solo punto focal dominante que atraiga la vista en los primeros 3 segundos.

### 5. Sombras y Bordes
* **Bordes Subtiles:** Utilizar bordes semitransparentes (`rgba` o `hsl` con opacidad 8%-12%) en lugar de bordes sólidos gruesos.
* **Sombras Suaves Multicapa:** Crear sombras compuestas por 2 capas (una ambiental suave amplia y una directiva apretada) para lograr sensación de flotación natural.
