# Auravant Extensions Template

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.en-US.md)

## Descripción

Este comando te hace la vida más fácil, te crea un template para iniciar proyectos de extensiones en Auravant mucho más rápido y eficiente. El template viene con una config inicial con el siguiente stack:

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite.js**: Herramienta de construcción rápida y moderna.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **TailwindCSS**: Framework de utilidades para estilos CSS.
- **Prettier**: Formateador de código.
- **ESLint**: Herramienta para identificar y reportar problemas en el código JavaScript y TypeScript.

Ademas, agrega el paquete **SDK Types** para que tengas autocompletado a la hora de interactuar con nuestro SDK.

## Uso para desarrolladores

Para crear un nuevo proyecto basado en este template siendo un desarrollador externo a Auravant, usá el siguiente comando papá:

```bash
npx avt-ext@latest nombre_del_repo
```

## Componentes

Podes instalar los componentes basados en [shadcn](https://ui.shadcn.com/) utilizando el npx de [avt-ext-componentes](https://www.npmjs.com/package/avt-ext-components).

## Extensiones Recomendadas para VSCode

Para disfrutar al máximo de este template te recomiendo instalar las siguientes extensiones en VSCode:

- **Prettier**: Code formatter: Para formatear el código automáticamente.
- **ESLint**: Para identificar y reportar problemas en el código JavaScript y TypeScript.
- **Prettier ESLint**: Para integrar Prettier y ESLint, asegurando una experiencia de formateo consistente.
- **Tailwind CSS IntelliSense**: Para obtener autocompletado y documentación en tiempo real para clases de Tailwind CSS.

## Comandos Personalizados

Estos comandos estan hechos para facilitar el proceso del desarrollo en las extensiones de Auravant:

- **npm run build:zip**: Este comando ejecuta el comando build y zippea los archivos que están dentro de la carpeta dist con todos los archivos necesarios para el deploy. Este archivo dist.zip es el que vas a necesitar para agregar tu extensión a la plataforma.
- **npm run format**: Este comando utiliza Prettier para formattear todo el código del proyecto. Al ejecutarlo revisa todos los archivos y aplica el formato especificado en la config. Esto ayuda a mantener el código limpio para todos.
- **npm run lint**: Este comando utiliza ESLint para analizar el código en busca de errores y problemas de estilo. El comando está configurado para revisar todos los archivos con extensiones .ts y .tsx, reportar directivas de desactivación no utilizadas y asegurarse de que no haya advertencias (--max-warnings 0). Esto ayuda a garantizar que el código siga las reglas de calidad y estilo establecidas en el proyecto.

## React-router-dom

No te olvides que las extensiones son un iframe, por lo que vas a necesitar utilizar [HashRouter](https://reactrouter.com/en/main/router-components/hash-router) en vez de [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router).

_Hecho con ❤️ por Nacho._
