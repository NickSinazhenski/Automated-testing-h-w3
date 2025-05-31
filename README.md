# Automated Testing Project

## Overview
-----
This project contains automated end-to-end tests for the web application [DemoQA](https://demoqa.com) using Playwright with BDD (Behavior-Driven Development) methodology via Cucumber. The test suite includes 23 test scenarios written in Gherkin syntax (Given-When-Then).

## Tech Stack
-----
- [Playwright](https://playwright.dev/) - Modern end-to-end testing framework
- [Cucumber.js](https://github.com/cucumber/cucumber-js) - BDD testing framework
- Gherkin syntax for test scenarios
- Cross-browser support (Chrome and Firefox)
- Parallel test execution
- Screenshots on failure
- CI/CD support
- HTML report generation

## Project Structure
-----
```
├── features/
│   ├── step_definitions/    # Test implementation files
│   └── support/            # Test scenarios and support files
├── pages/                  # Page Object Model files
├── test_data/             # Test data for scenarios
├── reports/               # HTML reports
├── utils/                 # Data generators
├── screenshots/          # Failure screenshots
├── playwright.config.js  # Playwright configuration
├── cucumber.js          # Cucumber configuration
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Getting Started
-----

### Prerequisites
- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NickSinazhenski/Automated-testing-h-w3.git
cd Automated-testing-h-w3
```

2. Install dependencies:
```bash
npm install
```

## Running Tests
-----

### Basic Test Execution
```bash
# Run all tests
npm test

# Run tests in specific browser
npm run test:chrome
npm run test:firefox

# Run tests in both browsers sequentially
npm run test:all
```

### Parallel Test Execution
The project is configured to run tests in parallel across different browser configurations:
- Chrome (1920x1080)
- Chrome (1366x768)
- Firefox (1920x1080)
- Firefox (1366x768)

To run tests in parallel:
```bash
# Run all tests in parallel across all configurations
npm test

# Run tests in parallel with specific number of workers
npm test -- --workers=4
```

### Running Tagged Tests
You can run specific test scenarios using tags defined in your .feature files. Tags help organize tests by feature, type, or test level.

```bash
# Run tests with a specific tag
npm test -- --tags @tagName

# Run tests with multiple tags (AND condition)
npm test -- --tags "@tag1 and @tag2"

# Run tests with multiple tags (OR condition)
npm test -- --tags "@tag1 or @tag2"

# Run tests with tag combinations
npm test -- --tags "@smoke and (@chrome or @firefox)"

# Skip tests with specific tags
npm test -- --tags "not @skip"
```

Common tag examples:
- `@smoke` - Smoke tests
- `@regression` - Regression tests
- `@ui` - UI tests
- `@api` - API tests
- `@chrome` - Chrome-specific tests
- `@firefox` - Firefox-specific tests

## Test Reports and Artifacts
-----

### Screenshots
Screenshots are automatically captured on test failure and saved in the `screenshots/` directory.

### HTML Reports
After test execution, a detailed HTML report is generated in `reports/cucumber_report.html`.

## Development Workflow
-----

### Branching Strategy
We follow the Git Feature Branch Workflow:
- `main`: Production-ready tests
- `feature/*`: For implementing specific scenarios or features

### CI/CD
The project is configured with GitHub Actions to:
- Run tests on every pull request
- Execute daily test runs
- Generate and publish test reports

## Contributing
-----
1. Create a new feature branch from `main`
2. Implement your changes
3. Run tests locally
4. Submit a pull request

## License
-----
This project is licensed under the MIT License - see the LICENSE file for details.

