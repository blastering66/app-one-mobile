# AppOne - React Native TypeScript Project

## Project Overview

This is a React Native project with TypeScript, using a feature-based architecture designed for scalability.

## Tech Stack

- **React Native**: 0.83.1
- **React**: 19.2.0
- **TypeScript**: Strict mode enabled
- **Navigation**: React Navigation (native-stack)
- **Styling**: React Native StyleSheet

## Project Structure

```
src/
├── assets/       # Static assets (images, fonts)
├── components/   # Reusable UI components
├── config/       # App configuration and env variables
├── context/      # React Context providers
├── hooks/        # Custom React hooks
├── navigation/   # Navigation configuration
├── screens/      # Screen components
├── services/     # API and external services
├── types/        # Global TypeScript types
└── utils/        # Utility functions
```

## Development Guidelines

### Code Style

- Use functional components with React Hooks
- TypeScript strict mode - avoid `any` type
- Single quotes for strings
- Use absolute imports with `@` aliases

### Available Import Aliases

- `@components` - Reusable components
- `@screens` - Screen components
- `@navigation` - Navigation config
- `@hooks` - Custom hooks
- `@services` - API services
- `@utils` - Utility functions
- `@config` - Configuration
- `@context` - Context providers
- `@types` - Type definitions
- `@assets` - Static assets

### Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Environment Variables

Configure in `.env` file. See `.env.example` for available variables.
