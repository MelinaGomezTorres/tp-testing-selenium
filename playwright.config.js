const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.um.edu.ar/biblio/',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },
});
