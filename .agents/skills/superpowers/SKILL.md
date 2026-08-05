---
name: superpowers
description: Disciplina de ingeniería TDD y metodología de desarrollo por fases inspirada en obra/superpowers para agentes IA autónomos.
---

# ⚡ Skill: Superpowers Engineering Framework

> Marco de trabajo de ingeniería de software autónomo y desarrollo guiado por pruebas (TDD) para garantizar código de calidad profesional sin "vibe coding".

---

## 🎯 Filosofía Base
Superpowers transforma las interacciones de IA en un proceso de ingeniería senior estructurado:
1. **Especificaciones Claros Antes de Codificar:** Nunca escribir código sin plan ni criterios de aceptación.
2. **Desarrollo Guiado por Pruebas (TDD Strict):** Escribir tests primero, confirmar fallo, implementar la solución mínima viable y refactorizar.
3. **Desglose Atómico de Tareas:** Trabajar en micro-incrementos aislados y verificables.

---

## 🔄 El Flujo de Trabajo en 7 Fases

```mermaid
flowchart TD
    A[1. Ideas y Clarificación] --> B[2. Diseño de Arquitectura]
    B --> C[3. Documento de Especificación / PRD]
    C --> D[4. Desglose de Tareas Atómicas]
    D --> E[5. Test Primero (TDD Red)]
    E --> F[6. Implementación Mínima (TDD Green)]
    F --> G[7. Verificación & Refactorización]
```

### 1. Ideas y Clarificación
- Analizar los requerimientos del usuario.
- Identificar puntos ambiguos, edge cases y riesgos downstream.
- Hacer preguntas clave antes de tocar cualquier archivo.

### 2. Diseño de Arquitectura
- Definir la estructura de archivos, contratos de API y modelos de datos.
- Aplicar el principio DRY y modularización en componentes de <1,500 líneas.

### 3. Documento de Especificación (PRD / Specs)
- Redactar o actualizar el `PRD.md` o `PLAN.md` con objetivos, alcance y criterios de aceptación.

### 4. Desglose Atómico de Tareas
- Dividir la implementación en tareas independientes que toquen 1 solo módulo a la vez.

### 5. TDD Red (Test Primero)
- Escribir pruebas unitarias o de integración que fallen antes de cambiar la lógica principal.

### 6. TDD Green (Implementación Mínima)
- Aplicar la solución más simple que haga pasar los tests. Sin sobre-ingeniería.

### 7. Verificación & Refactorización
- Ejecutar linters y suite de pruebas (`tsc`, `npm run lint`, `pytest`).
- Documentar aprendizajes y limpiar código manteniendo los tests en verde.
