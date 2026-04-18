# Docker Quick Start Guide

## Prerequisites
- Docker installed on your machine
- No Node.js, npm, or Playwright browsers needed!

## Running Tests with Docker

### Single Command Setup
```bash
docker-compose up
```

This single command will:
1. ✅ Build the Docker image with all dependencies
2. ✅ Install Node.js and Playwright browsers
3. ✅ Run all Playwright tests
4. ✅ Generate HTML and JUnit reports

### Access Test Reports
After tests complete, reports are available in:
- **HTML Report**: Open `playwright-report/index.html` in browser
- **JUnit Report**: Check `test-results/junit.xml`

## Common Docker Commands

### Run all tests
```bash
docker-compose up
```

### Run specific test file
```bash
docker-compose run playwright-tests npx playwright test tests/loginAndVerifyCategory1.spec.ts
```

### Run tests with browser visible (headed mode)
```bash
docker-compose run playwright-tests npx playwright test --headed
```

### Debug tests
```bash
docker-compose run playwright-tests npx playwright test --debug
```

### Generate test code
```bash
docker-compose run playwright-tests npx playwright codegen https://rahulshettyacademy.com/loginpagePractise/
```

### Clean up containers and volumes
```bash
docker-compose down
```

### Remove Docker image
```bash
docker-compose down --rmi all
```

## Project Structure Inside Container
```
/app/
├── tests/
├── playwright.config.ts
├── package.json
├── playwright-report/    (generated after tests)
├── test-results/         (generated after tests)
└── ...
```

## Benefits of Docker Setup
✅ No local dependency installation needed  
✅ Consistent environment across machines  
✅ Easy to share with team members  
✅ Isolated testing environment  
✅ Works on Windows, Mac, and Linux  

## Troubleshooting

### Container build fails
```bash
# Clear Docker cache and rebuild
docker-compose down --rmi all
docker-compose up --build
```

### Port conflicts (if using multiple services)
Edit `docker-compose.yml` to change port mappings

### View container logs
```bash
docker-compose logs -f
```

### Access running container shell
```bash
docker-compose exec playwright-tests bash
```

## More Information
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Microsoft Playwright Docker Image](https://hub.docker.com/_/microsoft-playwright)
