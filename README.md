# React + TypeScript + Vite

This project is built using **React**, **TypeScript**, and **Vite**, providing a fast development environment with hot module replacement (HMR) and efficient bundling.

## 🚀 Features

- ⚡ **Vite** for fast development and build performance.
- 🎨 **CSS Modules & Global Styles** for styling.
- 🔥 **Component-based architecture** with organized structure.
- 📁 **TypeScript support** for better type safety.
- 🛠️ **ESLint & Prettier** configured for code quality.

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
│── assets/         # Static files like images, icons
│── components/     # React components
│── data/           # Data files (e.g., JSON, mock data)
│── types/          # TypeScript type definitions
│── App.tsx         # Main React component
│── main.tsx        # Entry point of the app
│── index.css       # Global styles
│── vite-env.d.ts   # Vite environment config
```

## 🔧 ESLint & TypeScript Configuration

This template provides a minimal setup to get **React working with Vite**, including **HMR (Hot Module Replacement)** and some ESLint rules.

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## 📜 License

This project is licensed under the **MIT License**.
