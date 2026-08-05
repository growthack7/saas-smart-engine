# 🧠 UX Heuristics & UX Guidelines (Jakob Nielsen + Leyes UX)

> Guía de evaluación heurística, accesibilidad WCAG y leyes psicológicas de experiencia de usuario para garantizar interfaces intuitivas, eficientes y libres de fricción.

---

## 🏛️ Las 10 Heurísticas de Usabilidad de Jakob Nielsen

1. **Visibilidad del Estado del Sistema (Visibility of System Status):**
   * Feedback inmediato en `<100ms` tras cualquier acción del usuario (hover, click, submit).
   * Indicadores claros de carga (spinners, skeleton loaders, barras de progreso).

2. **Coincidencia entre el Sistema y el Mundo Real (Match Between System & Real World):**
   * Utilizar lenguaje claro, natural y comprensible en el idioma del usuario, sin jerga técnica de servidor ni errores criptográficos (ej: "Error 500 DB Connection Failed" ➔ "No pudimos conectar con el servidor, reintentando...").

3. **Control y Libertad del Usuario (User Control & Freedom):**
   * Incluir opciones explícitas de Cancelar, Deshacer (`Undo`), Cerrar (botón X o ESC en modales) y retroceder sin pérdida accidental de información.

4. **Consistencia y Estándares (Consistency & Standards):**
   * Mantener los mismos patrones interactivos en toda la aplicación (ubicación de botones de acción principal, iconos normalizados de Lucide React, estados de color consistentes).

5. **Prevención de Errores (Error Prevention):**
   * Prevenir errores antes de que ocurran: deshabilitar botones de submit mientras los inputs obligatorios estén vacíos, ofrecer autocompletado y solicitar confirmación previa para acciones destructivas.

6. **Reconocer antes que Recordar (Recognition Rather Than Recall):**
   * Minimizar la carga de memoria del usuario. Mantener la información visible, opciones contextuales claras y menús desplegables informativos.

7. **Flexibilidad y Eficiencia de Uso (Flexibility & Efficiency of Use):**
   * Proporcionar atajos de teclado (ej: `Cmd+K` / `Ctrl+K` para búsqueda), filtros rápidos y aceleradores para usuarios avanzados sin complicar la interfaz para principiantes.

8. **Estética y Diseño Minimalista (Aesthetic & Minimalist Design):**
   * Eliminar información irrelevante o rara vez necesaria. Cada elemento visual compite por la atención del usuario.

9. **Ayudar a los Usuarios a Reconocer, Diagnosticar y Recuperarse de Errores:**
   * Mensajes de error expresados en texto claro que indiquen exactamente el problema y sugieran una solución práctica inmediata.

10. **Ayuda y Documentación (Help & Documentation):**
    * Tooltips contextuales, guías paso a paso e información de ayuda accesible fácilmente sin perder el contexto de la tarea actual.

---

## 📐 Leyes Psicológicas del UX (Leyes de Interfaz)

* **Ley de Fitts (Fitts's Law):** Los objetivos interactivos deben ser lo suficientemente grandes y cercanos. Tamaño mínimo de zona táctil: `44px x 44px` (móvil) / `36px x 36px` (desktop).
* **Ley de Hick (Hick's Law):** El tiempo necesario para tomar una decisión aumenta con el número y complejidad de opciones. Reducir opciones por pantalla.
* **Ley de Miller (Miller's Law):** Las personas pueden retener aproximadamente $7 \pm 2$ elementos en su memoria de trabajo. Agrupar información en bloques (Chunking).
* **Principios Gestalt:** Proximidad, Semejanza, Continuidad, Cierre y Figura-Fondo para estructurar visualmente la interfaz de forma lógica.

---

## ♿ Accesibilidad (WCAG 2.1 AA Checklist)

* [ ] **Contraste de Color:** Mínimo `4.5:1` para texto normal y `3:1` para texto grande / componentes interactivos.
* [ ] **Navegación por Teclado:** Foco visual claro (`focus-visible:ring-2`) en todos los elementos interactivos. Orden lógico de tabulación (`tabindex`).
* [ ] **Semántica HTML & ARIA:** Uso estricto de `<button>`, `<input>`, `<nav>`, `<main>`, `<header>` y atributos `aria-label`, `aria-expanded`, `aria-live` cuando corresponda.
