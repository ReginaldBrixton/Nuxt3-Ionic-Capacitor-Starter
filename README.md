# 🧚🏻 Nuxt 3 Ionic Capacitor Starter Template

This is a starter template for building cross-platform apps with Nuxt 3, Ionic, and Capacitor. It provides a pre-configured setup with essential modules and dependencies.

## Features

- Nuxt 3 with Vue 3 and TypeScript support
- Ionic UI components and icons
- Capacitor for building native mobile apps
- Tailwind CSS for styling
- Electron for building desktop apps
- Pinia for state management
- ESLint and Prettier for code linting and formatting

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nuxt3-ionic-capacitor-starter.git
```

2. Install dependencies:

```bash
cd nuxt3-ionic-capacitor-starter
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

## Building Mobile Apps

To build mobile apps for iOS and Android, follow these steps:

1. Sync Capacitor:

```bash
pnpm ionic:sync
```

2. Build and run on iOS:

```bash
pnpm ionic:run:ios
```

3. Build and run on Android:

```bash
pnpm ionic:run:android
```

## Building Desktop Apps

To build desktop apps using Electron, run:

```bash
pnpm build:electron
```

## Project Structure

- `components/`: Vue components
- `pages/`: Nuxt pages
- `store/`: Pinia store modules
- `android/`: Android-specific files
- `ios/`: iOS-specific files
- `electron/`: Electron-specific files

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
