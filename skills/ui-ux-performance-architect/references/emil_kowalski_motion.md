# 🎬 Emil Kowalski Motion & Micro-interactions Guidelines

> Guía maestra de animaciones, micro-interacciones y movimiento para interfaces web modernas, basada en los principios de Emil Kowalski (animations.dev, Sonner, Vaul).

---

## 🎯 Principios Fundamentales del Movimiento

1. **Propósito en el Movimiento (Strategic Motion):**
   * No animar elementos por animar. El movimiento debe guiar la atención del usuario, dar feedback de estado o comunicar relaciones espaciales.
   * Evitar animaciones superfluas en elementos de alta frecuencia de uso (ej: botones principales de formularios que se usan decenas de veces al día).

2. **Elección de Easing (`cubic-bezier` sobre defaults):**
   * **Ease-Out como Default:** Para acciones iniciadas por el usuario (dropdowns, modales, toasters, hovers), usar siempre `ease-out`. Arranca rápido y desacelera suavemente al final, dando sensación de respuesta inmediata.
   * **Valores Easing Recomendados:**
     * `ease-out-smooth`: `cubic-bezier(0.16, 1, 0.3, 1)`
     * `spring-snappy`: `cubic-bezier(0.2, 0.8, 0.2, 1)`
     * `bounce-subtle`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (usar con extrema moderación).

3. **Duración y Tiempo (Snappy & Responsive):**
   * **Regla de los 300ms:** Ninguna animación de UI interactiva debe superar los **300ms**.
   * **Micro-interacciones (Hover, Focus, Active):** 100ms - 180ms.
   * **Transiciones de Componentes (Modales, Drawers, Tabs):** 200ms - 280ms.
   * **Páginas / Layout Shifts:** Max 300ms.

4. **Propiedades de Alto Rendimiento CSS (Zero Layout Thrashing):**
   * Animar **ÚNICAMENTE** propiedades que corran en el compositor de la GPU: `transform` (scale, translate, rotate) y `opacity`.
   * **PROHIBIDO** animar: `height`, `width`, `margin`, `padding`, `top`, `left` directamente. Usar transformaciones de escala o `layoutId` (Framer Motion).
   * Usar `will-change: transform, opacity` únicamente en elementos de animación compleja activa.

5. **Físicas de Resortes (Spring Animations):**
   * Preferir animaciones basadas en resortes (Stiffness / Damping) sobre duraciones fijas cuando se use Framer Motion o React Spring:
     * `stiffness: 400`, `damping: 30` (Respuesta ultra-rápida sin rebote excesivo).

6. **Accesibilidad Obligatoria (`prefers-reduced-motion`):**
   * Respetar siempre las preferencias del sistema operativo. Si `prefers-reduced-motion: reduce` está activo, desactivar movimientos y sustituir por disolvencias simples (`opacity`) de 100ms o cambio instantáneo.

---

## 🛠️ Patrones de Componentes Específicos

### 1. Toast Notifications (Estilo Sonner)
* **Animación:** Deslizar desde el borde inferior/superior con escalado progresivo de toasts anteriores.
* **Easing:** `cubic-bezier(0.215, 0.61, 0.355, 1)`.
* **Duración:** 200ms. Entradas firmes, salidas suaves con reducción de opacidad y escala (0.95).

### 2. Modales y Drawers (Estilo Vaul)
* **Drawer Bottom-Sheet:** Desplazamiento vertical en eje Y con física de resorte drag-to-dismiss.
* **Modal Overlay:** Fade-in de `backdrop-filter: blur(...)` en 150ms mientras el contenedor escala de `0.96` a `1.0`.

### 3. State Transitions & Content Swaps
* Evitar parpadeos de contenido. Al cambiar de pestaña o estado, usar `AnimatePresence` (Framer Motion) con `mode="wait"`.
