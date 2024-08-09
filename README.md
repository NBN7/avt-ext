# Auravant Extensions Template

## Descripción

Este repo te hace la vida más fácil, te crea un template para iniciar proyectos de extensiones en Auravant mucho más rápido y eficiente. El template viene con una config inicial con el siguiente stack:

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite.js**: Herramienta de construcción rápida y moderna.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **TailwindCSS**: Framework de utilidades para estilos CSS.
- **Prettier**: Formateador de código.
- **ESLint**: Herramienta para identificar y reportar problemas en el código JavaScript y TypeScript.

## Uso

Para crear un nuevo proyecto basado en este template, usá el siguiente comando papá:

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

## Sentry y react-router-dom

Actualmente Sentry se inicializa en src\main.tsx. Si tu proyecto ya utiliza / va a utilizar react-router-dom se necesita habilitar los comentarios de este archivo. No te olvides que las extensiones son un iframe, por lo que vas a necesitar utilizar [HashRouter](https://reactrouter.com/en/main/router-components/hash-router) en vez de [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router).

_Hecho con ❤️ por Nacho._
