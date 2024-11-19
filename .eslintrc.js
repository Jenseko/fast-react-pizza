module.exports = {
  // Standard für moderne Anwendungen
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // Für ES6/React
  parserOptions: {
    ecmaVersion: 2021, // Modernes JavaScript
    sourceType: 'module', // ES6 Module
    ecmaFeatures: {
      jsx: true, // React JSX
    },
  },
  // Base-Konfigurationen und Plugins
  extends: [
    'eslint:recommended', // Standardregeln von ESLint
    'plugin:react/recommended', // React-spezifische Regeln
    'plugin:react-hooks/recommended', // Regeln für Hooks
    'plugin:prettier/recommended', // Integration mit Prettier
  ],
  plugins: [
    'react', // React-spezifische Regeln
    'prettier', // Prettier für Formatierungswarnungen
    'tailwindcss', // TailwindCSS spezifische Regeln (optional)
  ],
  rules: {
    // Anpassen der Regeln:
    'no-console': 'warn', // Warnung statt Fehler bei console.log
    'no-debugger': 'warn', // Debugger-Warnungen
    'react/prop-types': 'off', // Prop-Typen ausschalten (falls TypeScript verwendet wird)
    'prettier/prettier': ['error', { singleQuote: true }], // Prettier spezifische Regeln
    'no-use-before-define': 'off', // Deaktivieren, falls Variablen vor Definition verwendet werden
    'react/react-in-jsx-scope': 'off', // Nicht mehr erforderlich seit React 17+
  },
  settings: {
    react: {
      version: 'detect', // Automatische Versionserkennung von React
    },
  },
};
