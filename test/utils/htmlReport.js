var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonDir: 'test/reports/cucumber',
  output: 'test/reports/front/cucumber_report.html',
  storeScreenshots: true,
  screenshotsDirectory: 'test/reports/screenshots/epics/Game/select-options.feature',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
