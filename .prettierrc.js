/**
 * Prettier Configuration
 *
 * Code formatting rules for consistent styling across the codebase.
 * Works in conjunction with ESLint.
 */

module.exports = {
  // Use single quotes for strings
  singleQuote: true,

  // Add trailing commas in multi-line scenarios
  trailingComma: 'all',

  // Print width before wrapping
  printWidth: 80,

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Use spaces instead of tabs
  useTabs: false,

  // Add semicolons at the end of statements
  semi: true,

  // Use double quotes in JSX
  jsxSingleQuote: false,

  // Put the > of a multi-line JSX element at the end of the last line
  bracketSameLine: true,

  // Avoid parentheses around a sole arrow function parameter
  arrowParens: 'avoid',

  // Line endings
  endOfLine: 'lf',

  // Bracket spacing in object literals
  bracketSpacing: false,
};
