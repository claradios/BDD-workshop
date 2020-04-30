const report = require('multiple-cucumber-html-reporter');
const packageJson = require('../../package.json');

report.generate({
	jsonDir: 'test/reports/cucumber/',
  reportPath: 'test/reports/front',
  openReportInBrowser: false,
  pageTitle: 'Rock-paper-scissors',
	metadata:{
        browser: {
            name: 'chrome',
            version: '81'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '18.04'
        }
    },
    customData: {
        title: 'Execution info',
        data: [
            {label: 'Project', value: 'Rock-paper-scissors'},
            {label: 'Version', value: packageJson.version},
            {label: 'Sprint', value: 'SP1911'},
            {label: 'Execution Date', value: new Date().toDateString()},
        ]
    }
});
