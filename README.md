# Automated-testing-h-w3
#Description:
This project contains automated end-to-end tests for the web application https://demoqa.com using Playwright with BDD (Behavior-Driven Development) methodology via Cucumber.

We wrote 23 test scenarios  using Gherkin syntax (Given-When-Then)

#Tech Stack
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- Gherkin syntax
- Cross-browser support (Chrome and Firefox)
- Parallel test execution
- Screenshots on failure
- CI/CD support
- HTML report generation


#  Branching Strategy
We used the Git Feature Branch Workflow:
- main: Production-ready tests.
- feature_name: For implementing specific scenarios or features before merging into main.

#Installation

0. Clone the repository:
git clone https://github.com/ryasrdp/23-HR-JS2.git

1. Install Dependencies
npm install

2. Run All Tests
npm test

3. Run by Browser
npm run test:chrome
npm run test:firefox
4. Run tests in both Chrome and Firefox sequentially
npm run test:all

#Running Tagged Tests
You can run specific test scenarios by using tags defined in your .feature files. Tags help filter and organize tests — for example, by feature, type (@ui, @api), or test level (@regression, @smoke, etc.).


#Screenshots on Failure
Screenshots are saved automatically on test failure in the screenshots/ directory.


#Report Generation
After test execution, a detailed HTML report is generated automatically in the reports/ cucumber_report.html.
