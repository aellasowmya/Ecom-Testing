var gulp = require('gulp');
var reporter = require('cucumber-html-reporter');
var path = require('path');

var Options = {
    theme: 'bootstrap',
    jsonFile: path.resolve('./reports/cucumber-json-reports.json'), // remove brackets to make it a single string path
    output: './reports/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome 122.0.6261.112",
        "Platform": "Win 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

gulp.task('cucumberReports', function () {
    reporter.generate(Options);
});