---

title: "Cómo programar con múltiples IA sin perder el contexto"
description: "Un sistema de gobernanza con AGENTS.md como fuente única de verdad para trabajar con varias herramientas de IA al mismo tiempo."
pubDatetime: "Sun Jan 11 2026 12:00:00 GMT+0000 (Coordinated Universal Time)"
tags: ["AI","agents","workflow","productivity"]
lang: "es"
---

# Cómo programar con multiples IA como Claude, Cursor y que no pierda la memoria y el contexto

## El problema

En mi flujo de trabajo, alterno entre varias herramientas para programar con IA en el mismo proyecto.

El problema no era el modelo. El problema era la coherencia.

Lo arreglé con una sola fuente de verdad (AGENTS .md) + un paso de sync para cada agente + el patrón (Investigación → Planificación → Implementación).

## TL;DR

• El desvío aparece cuando cada herramienta opera con “su propia verdad”.

• El costo oculto es: solo quien creó el sistema puede “repararlo”.

• Solución: AGENTS .md como centro + enlazar las herramientas.

• Ejecución diaria: patrón RPI (Investigación → Planificación → Implementación) para producir artefactos (PRD y tareas atómicas).

Cómo se manifestaba ese desvío en la práctica:

-   Las reglas divergen entre herramientas y sesiones.

-   La documentación pierde autoridad (se **contradice** o queda **desfasada**).

-   solo el creador sabe “cómo se supone” que funciona.

-   Las correcciones funcionaban en un asistente y retrocedían en otro.

---

## La solución

Lo importante no es tener buenos prompts, sino gobernanza: una ley (constitución) y un estado actual (plan) versionados, para que el conocimiento deje de vivir en sesiones y deje de depender del creador.

El “sync” no es que todas las herramientas sean iguales: es que todas apunten a lo mismo. En el boilerplate, cada archivo específico del vendor funciona como “puntero” y obliga a leer siempre en este orden:

1.  AGENTS .md — hub central

2.  .specify/memory/constitution.md — reglas y stack

3.  .specify/memory/plan.md — prioridades actuales


Así evitas que el contexto viva en sesiones o en una sola herramienta.

```
📁 Your Project
│
├── 🎯 AGENTS.md          ← THE HUB: Entry point for all AI agents
│
└── 📂 [Pointer Files]    ← REDIRECTORS (Thin Wrappers)
    ├── .cursorrules      → "Read AGENTS.md"
    ├── .windsurfrules    → "Read AGENTS.md"
    ├── .clinerules       → "Read AGENTS.md"
    ├── .kilo             → "Read AGENTS.md" 
    ├── CLAUDE.md         → "Read AGENTS.md"
    ├── AMAZON_Q.md       → "Read AGENTS.md"
    ├── CODEX.md          → "Read AGENTS.md"    
    ├── goosehints        → "Read AGENTS.md"  
    └── GEMINI.md         → "Read AGENTS.md"
```

## Gobernanza

La carpeta de GOVERNANCE (.specify/) que guarda la ley y el estado actual del proyecto. En esta arquitectura, .specify/ no es “documentación bonita”: es el mecanismo para que cualquier agente (y cualquier persona) tenga el mismo marco de decisión. Estructura mínima:

```
.specify/
  memory/
    constitution.md   # The law: stack + non-negotiable rules
    plan.md           # The current state: priorities/sprint
  features/
    <feature>/
      prd.md          # Requirements (what and why)
      tasks.md        # Tasks (how we are going to implement it)
```

(La idea es simple: Constitution = la ley. Plan = el estado actual. Features = evidencia y decisiones por feature.)

## Constitución

La constitución vive en .specify/memory/constitution.md. Ahí defines explícitamente tu stack y reglas. Ejemplo:

```
# Your Tech Stack
Frontend: React 18 + TypeScript + Tailwind
Backend:  Node.js + Express + Prisma
Database: PostgreSQL

# Your Rules
- TypeScript everywhere, no `any`
- Tests required for new features
```

Esto convierte “convenciones” en ley versionada.

## RPI (Research → Plan → Implement Pattern)

Patrón RPI (Investigación → Planificación → Implementación) Un flujo que fuerza a que el “contexto útil” se capture como artefactos antes de escribir cambios. Menos improvisación, menos desvíoove.

El archivo .specify/memory/plan.md sirve como “estado actual”: qué estamos haciendo, qué sigue, y cómo se prioriza. Si no existe, cada agente tiende a re-interpretar prioridades y a dispersar el esfuerzo.

RPI se vuelve mucho más estable cuando el output termina en .specify/features/:

Investigación → PRD • Se guarda en .specify/features/<feature>/prd.md

Planificación → Tasks • Se guarda en .specify/features/<feature>/tasks.md

Implementación → Ejecutar 1 tarea a la vez • “Empieza con la tarea 1.1…”, revisas, apruebas, sigues.

---

## Cómo funciona

A alto nivel:

-   Mantengo el contrato de indicaciones y herramientas del sistema en un solo lugar

-   Un paso de sincronización aplica las mismas reglas básicas a cada herramienta

-   Un pequeño conjunto de tareas de evaluación detecta las regresiones cuando el comportamiento se desvía


Para qué optimizo:

-   Configuración repetible en todas las herramientas

-   Formatos de salida estables para las llamadas a las herramientas

-   Detección rápida de fallos del tipo... ayer funcionaba

---

## Resultados

Una única fuente de verdad para las indicaciones, los contratos de herramientas y las comprobaciones, de modo que los diferentes asistentes de IA produzcan resultados coherentes.

---

## Ejemplo práctico

Un escenario habitual es una solicitud de cambio que afecta al código, la documentación y las pruebas.

Lo que hago ahora:

-   Investigación: capturo restricciones y objetivo; si aplica, dejo PRD en .specify/features/<feature>/prd.md.

-   Planificación: descompongo en tasks en .specify/features/<feature>/tasks.md y defino checklist de validación.

-   Implementación: ejecuto 1 tarea a la vez siguiendo las reglas de la constitución.

-   Validación: corro checks/evaluaciones (tests/lint/etc.) para detectar desvíos del tipo “ayer funcionaba”.


En lo que no confío:

-   Reglas memorizadas dentro de una sola sesión

-   Convenciones específicas de la herramienta que no están escritas

-   Supuestos implícitos sobre los formatos de salida.

---

## Lo convertí en código abierto

La plantilla completa está disponible en GitHub como una plantilla de un solo clic.

Incluye:

-   19 punteros de herramientas de IA preconfigurados.

- Archivos de habilidades para Git, pruebas y bases de datos.

-   Plantillas de flujo de trabajo para funciones, errores e implementaciones

-   Personajes de subagentes (control de calidad, DevOps, jefe técnico)

-   Plantilla de constitución para su pila tecnológica


[**→ Click aquí para ir a GitHub y obtener la plantilla Gratis !**](https://github.com/yokharian/AIBoilerplate)

---

> Dominar los asistentes de código no consiste en pedir más contexto, sino en aprender a controlarlo. El flujo de trabajo de Claude Code demuestra que la clave no es la fuerza bruta, sino una metodología en cuatro fases: investigación, planificación, implementación y validación. Cada fase consume solo el contexto necesario, lo limpia y produce artefactos reutilizables.

---

## Qué demuestra esto

Si eres reclutador o gerente de contratación y estás leyendo esto:

1.  **Pensamiento sistémico**: identifiqué un problema transversal y creé una solución arquitectónica, no un arreglo rápido.

2.  **Liderazgo técnico**: este patrón se adapta a equipos de cualquier tamaño y mejora la experiencia de los desarrolladores para todos.

3.  **Desarrollo nativo de IA**: comprender cómo hacer que las herramientas de IA sean más eficaces es una habilidad fundamental en el desarrollo moderno.

4.  **Mentalidad de código abierto**: creo soluciones para la comunidad, no solo para mí mismo.

---

## Conectemos

Me encantaría saber cómo manejas tú o tu equipo múltiples herramientas de IA.

¿Estás experimentando perdida de contexto? ¿Qué herramientas usas?

[**Contáctame →**](https://calendly.com/yokharian/30min?back=1)

[**Portfolio**](https://yokharian.dev/tags/portfolio)

[**Blog**](https://yokharian.dev)
