const fs = require('fs');
const reporter = require('cucumber-html-reporter');

const reportsDir = 'reports';
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

const options = {
  theme: 'bootstrap',
  jsonFile: `${reportsDir}/cucumber_report.json`,
  output: `${reportsDir}/cucumber_report.html`,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "Local",
    "Browser": "Chrome/Firefox",
    "Platform": process.platform,
  }
};

reporter.generate(options);
