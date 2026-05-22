# Kanban Do — Quick Task Board

<p align="center">
  <img src="https://img.shields.io/badge/Expo-52-000020?logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/React_Native-0.76-61DAFB?logo=react&logoColor=white" alt="React Native">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/React_Native_Paper-6750A4?logo=material-design&logoColor=white" alt="React Native Paper">
  <img src="https://img.shields.io/badge/License-GPL_v3-0298c3?logo=gnu&logoColor=white" alt="GPL v3">
</p>

<p align="center">
  <em>Fast and simple kanban board for organizing quick tasks on the go</em>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## About Kanban Do

A mobile app for quickly organizing tasks on a kanban board. Built with Expo and React Native Paper, it provides a simple, fast way to manage your daily tasks with a clean Material Design interface.

## Features

- Kanban board with quick task management
- Create, edit, and delete tasks
- Form validation with react-hook-form + yup
- Material Design UI with React Native Paper
- NativeWind styling
- Cross-platform (iOS, Android)

## Quick Start

### Prerequisites

- Node.js 18+
- Expo Go (on device) or Android Studio / Xcode
- npm

### Setup

```bash
git clone https://github.com/chrisssp/kanban-do.git
cd kanban-do
npm install
```

### Development

```bash
npx expo start
```

Scan the QR code with Expo Go, or press `a` for Android emulator / `i` for iOS simulator.

### Testing

```bash
npm test
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Expo 52 + React Native 0.76 |
| Language | TypeScript 5 |
| UI Library | React Native Paper (Material Design 3) |
| Styling | NativeWind (Tailwind CSS 3) |
| Forms | react-hook-form + yup validation |
| Navigation | Expo Router |
| Testing | Jest + Jest Expo |

## Project Structure

```
kanban-do/
├── app/              # Expo Router pages
├── components/       # Reusable UI components
├── context/          # React context providers
├── hooks/            # Custom React hooks
├── services/         # API clients
├── models/           # TypeScript types and interfaces
├── assets/           # Images, fonts
└── README.md
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, commit conventions, and PR workflow.

## License

This project is licensed under the GPL v3 — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

**Authors:**

- [@chrisssp](https://github.com/chrisssp) — Christian Serrano
