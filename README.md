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

### Local Setup (without Docker)

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

### Using Docker (Recommended)

No need to install Node.js, npm, or Playwright browsers locally! Everything runs in a Docker container.

**Prerequisites:**
- Docker installed on your machine

**Run tests with Docker:**
```bash
docker-compose up
```

This command will:
1. Build the Docker image with all dependencies
2. Install Node.js and Playwright browsers inside the container
3. Run all Playwright tests
4. Generate HTML and JUnit reports in `playwright-report/` and `test-results/`

**View test reports:**
After running tests with Docker, the reports are available locally:
- HTML Report: `playwright-report/index.html`
- JUnit Report: `test-results/junit.xml`

**Run specific tests:**
```bash
docker-compose run playwright-tests npx playwright test tests/loginAndVerifyCategory1.spec.ts
```

**Run tests in headed mode (with browser UI):**
```bash
docker-compose run playwright-tests npx playwright test --headed
```

**Clean up Docker containers:**
```bash
docker-compose down
```

## Project Structure

- `tests/` - Test files
- `playwright.config.ts` - Playwright configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `Dockerfile` - Docker configuration for containerization
- `docker-compose.yml` - Docker Compose configuration for easy setup

## Docker Setup

This project is fully containerized using Docker. You don't need to install Node.js, npm, or Playwright browsers on your machine.

### Docker Files

- **Dockerfile** - Based on Microsoft's official Playwright image with Node.js pre-installed
- **docker-compose.yml** - Orchestrates the test environment with volume mounts for reports
- **.dockerignore** - Excludes unnecessary files from Docker build context

### Quick Start with Docker

1. Clone the repository
2. Navigate to the project directory
3. Run: `docker-compose up`

That's it! Tests will run in a fully isolated Docker container with all dependencies pre-installed.

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
