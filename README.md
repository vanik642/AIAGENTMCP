# Playwright Testing Project

This is a Playwright testing project configured for automated browser testing across multiple browsers (Chromium, Firefox, and WebKit).

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode (browser visible):
```bash
npm run test:headed
```

Debug tests:
```bash
npm run test:debug
```

Generate test code:
```bash
npm run codegen
```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## Configuration

Edit `playwright.config.ts` to:
- Change test directory
- Configure browsers and devices
- Set up base URL
- Adjust retries and timeouts
- Configure reporters

## Resources

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
