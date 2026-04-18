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

## CI/CD Pipeline

This project includes a GitHub Actions CI/CD workflow that:

- **Triggers:** Automatically runs on every push to the `main` branch
- **Tests:** Executes all Playwright tests
- **Artifacts:** Uploads HTML test reports and test results
- **Reporting:** Publishes test results to GitHub Actions

### Workflow Details

The CI/CD pipeline (`.github/workflows/playwright.yml`) performs the following steps:

1. Checks out the code
2. Sets up Node.js (v18.x)
3. Installs dependencies
4. Installs Playwright browsers with dependencies
5. Runs all Playwright tests
6. Uploads HTML report to artifacts (30-day retention)
7. Publishes test results to GitHub Actions

### Accessing Test Reports

After the workflow runs, you can access the test artifacts:

1. Go to your GitHub Actions tab
2. Click on the latest workflow run
3. Scroll down to find "Artifacts" section
4. Download `playwright-report` to view the HTML report

## Resources

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
