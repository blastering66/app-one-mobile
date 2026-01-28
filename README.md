# AppOne - React Native TypeScript Starter

A scalable React Native project with TypeScript, featuring a feature-based architecture, modern tooling, and best practices.

## 🚀 Features

- **React Native 0.83.1** - Latest stable version
- **TypeScript Strict Mode** - Full type safety
- **Feature-Based Architecture** - Scalable folder structure
- **React Navigation** - Native stack navigation
- **Absolute Imports** - Clean import paths with `@` aliases
- **ESLint + Prettier** - Code quality and formatting
- **React Hooks** - Functional components only
- **Theme Support** - Light/dark mode ready
- **Environment Variables** - Secure configuration

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, fonts)
├── components/       # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── index.ts
├── config/           # App configuration
│   └── env.ts        # Environment variables
├── context/          # React Context providers
│   └── ThemeContext.tsx
├── hooks/            # Custom React hooks
│   └── useAppTheme.ts
├── navigation/       # Navigation configuration
│   ├── index.tsx     # Navigator setup
│   └── types.ts      # Navigation types
├── screens/          # Screen components
│   ├── HomeScreen.tsx
│   ├── DetailsScreen.tsx
│   └── index.ts
├── services/         # API and external services
│   └── api.ts
├── types/            # Global TypeScript types
│   └── index.ts
├── utils/            # Utility functions
│   ├── string.ts
│   └── date.ts
└── App.tsx           # Root component
```

## 🛠 Getting Started

### Prerequisites

- Node.js >= 20
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

See [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) for detailed setup.

### Installation

```bash
# Install dependencies
npm install

# iOS only: Install CocoaPods
cd ios && bundle install && bundle exec pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 📦 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm start`       | Start Metro bundler      |
| `npm run android` | Build and run on Android |
| `npm run ios`     | Build and run on iOS     |
| `npm run lint`    | Run ESLint               |
| `npm test`        | Run Jest tests           |

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
API_URL=https://api.example.com
API_TIMEOUT=30000
APP_ENV=development
```

### Absolute Imports

Use path aliases for clean imports:

```typescript
// Instead of
import {Button} from '../../../components/Button';

// Use
import {Button} from '@components/Button';
```

Available aliases: `@components`, `@screens`, `@navigation`, `@hooks`, `@services`, `@utils`, `@config`, `@context`, `@types`, `@assets`

## 📝 Code Quality

### ESLint

Configured with:

- React Hooks rules (`exhaustive-deps`)
- TypeScript strict rules
- Single quote enforcement
- Console warnings
- Import ordering

```bash
npm run lint
```

### Prettier

Consistent code formatting with single quotes, trailing commas, and 2-space indentation.

## 🏗 Architecture Decisions

### Why Feature-Based Structure?

- **Scalability**: Easy to add new features without cluttering
- **Maintainability**: Related code stays together
- **Team Collaboration**: Clear boundaries between features

### Why Native Stack Navigator?

- **Performance**: Uses native navigation primitives
- **Animations**: Smooth, native-feeling transitions
- **Platform Consistency**: Respects platform conventions

### Why Custom Hooks?

- **Reusability**: Share logic across components
- **Testing**: Easier to test in isolation
- **Separation of Concerns**: UI separate from logic

## 📚 Learn More

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
