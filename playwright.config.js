  // @ts-check
  import { defineConfig, devices } from '@playwright/test';

  /**
   * Read environment variables from file.
   * https://github.com/motdotla/dotenv
   */
  // import dotenv from 'dotenv';
  // import path from 'path';
  // dotenv.config({ path: path.resolve(__dirname, '.env') });

  /**
   * @see https://playwright.dev/docs/test-configuration
   */
  export default defineConfig({

    
    //fullyParallel:true,
    testDir: './tests',
  retries: 0,   // retry failed tests once
    timeout: 80_000, // test timeout

    use: {

      // viewport:null,
      // launchOptions:{
      //   args:["--start-maximized"]
      // },

      
      navigationTimeout: 50000,
      actionTimeout: 20000,
      // trace: 'on',
      // screenshot: 'only-on-failure',

      // Add these
      
    

      
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',

    


    },

    //timeout:50000,
    
    /* Run tests in files in parallel */
    //fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    //forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    //retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    //workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [['list'],
    ['html']],
  // ['allure-playwright',{outputFolder: 'my-allure-results'}]],

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    // playwright.config.js


    
    
    //use: {
    
      
      //navigationTimeout:50000,
      //actionTimeout:10000,
      /* Base URL to use in actions like `await page.goto('')`. */
      // baseURL: 'http://localhost:3000',

      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on',
      //screenshot: "on",
      //video: "on" 
    //},

    /* Configure projects for major browsers */
    projects: [

      {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      }},

      {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      }},
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },

      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },

      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
        //fullyParallel: true,
      },

      /* Test against mobile viewports. */
      // {
      //   name: 'Mobile Chrome',
      //   use: { ...devices['Pixel 5'] },
      // },
      // {
      //   name: 'Mobile Safari',
      //   use: { ...devices['iPhone 12'] },
      // },

      /* Test against branded browsers. */
      // {
      //   name: 'Microsoft Edge',
      //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
      // },
      // {
      //   name: 'Google Chrome',
      //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      // },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://localhost:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
  });

