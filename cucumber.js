module.exports = {
  default: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
