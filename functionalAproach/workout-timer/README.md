# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## to install windiCSS framework you need to

bush
`npm i -D vite-plugin-windicss windicss`

As well, in vite.config.js file project was use the Windi CSS IntelliSense which enhances the Windi development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, code folding, and building.

Set it like:
`import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vite.dev/config/
export default defineConfig ({
plugins: [
react(), WindiCSS(),
],
})`

To update to the latest minor version of React Router v6.x to have the latest future flags and console warnings, use:
bush
`npm install react-router-dom@6`
