module.exports = {
  default: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  smoke: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@smoke',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  regression: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@regression',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  critical: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@critical',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  slider: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@slider',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  radio: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@radio',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  datepicker: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@datepicker',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  textbox: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@textbox',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  tooltips: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@tooltips',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  alerts: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@alerts',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  checkbox: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@checkbox',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  draganddrop: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@draganddrop',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  form: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@form',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  selectmenu: {
    require: ['features/**/*.js'],
    paths: ['features/**/*.feature'],
    tags: '@selectmenu',
    format: ['progress-bar', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
