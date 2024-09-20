# Auravant Extensions Template

[![es](https://img.shields.io/badge/lang-es-blue.svg)](./README.md)

## Description

This command makes your life easier by creating a template to start extension projects in Auravant much faster and more efficiently. The template comes with an initial config using the following stack:

- **React**: Library for building user interfaces.
- **Vite.js**: Fast and modern build tool.
- **TypeScript**: Superset of JavaScript that adds static types.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Prettier**: Code formatter.
- **ESLint**: Tool for identifying and reporting problems in JavaScript and TypeScript code.

Additionally, it includes the **SDK Types** package so that you have autocomplete when interacting with our SDK.

## Usage for Developers

To create a new project based on this template as an external developer to Auravant, use the following command:

```bash
npx avt-ext@latest repo_name
```

## Components

You can install components based on [shadcn](https://ui.shadcn.com/) using the npx from [avt-ext-componentes](https://www.npmjs.com/package/avt-ext-components).

## Recommended VSCode Extensions

To fully enjoy this template, I recommend installing the following extensions in VSCode:

- **Prettier**: Code formatter: Automatically formats the code.
- **ESLint**: Identifies and reports problems in JavaScript and TypeScript code.
- **Prettier ESLint**: Integrates Prettier and ESLint, ensuring a consistent formatting experience.
- **Tailwind CSS IntelliSense**: Provides real-time autocomplete and documentation for Tailwind CSS classes.

## Custom commands

These commands are designed to facilitate the development process for Auravant extensions:

- **npm run build:zip**: This command runs the build command and zips the files inside the dist folder with all the necessary files for deployment. This dist.zip file is what you will need to add your extension to the platform.
- **npm run format**: This command uses Prettier to format all the project's code. When executed, it reviews all files and applies the format specified in the config. This helps keep the code clean for everyone.
- **npm run lint**: This command uses ESLint to analyze the code for errors and style issues. The command is configured to review all .ts and .tsx files, report unused disable directives, and ensure there are no warnings (--max-warnings 0). This helps ensure that the code follows the quality and style rules established in the project.

## React-router-dom

Remember that the extensions are an iframe, so you will need to use [HashRouter](https://reactrouter.com/en/main/router-components/hash-router) instead of [BrowserRouter](https://reactrouter.com/en/main/router-components/browser-router).