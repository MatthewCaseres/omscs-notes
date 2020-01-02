// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'OMSCS Notes',
  icon: './src/assets/images/favicon.png',
  metadata: {
    github: 'https://github.com/m4ttsch/omscs-notes',
    linkedin: 'https://www.linkedin.com/in/matt-schlenker-3457b047',
    email: 'omscs-notes@gatech.edu',
    amazon: 'https://amzn.to/2Pai0bO',
    paypal: 'https://www.paypal.me/MatthewSchlenker'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './**/!(README)*.md',
        baseDir: './notes',
        typeName: 'Note',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true } ],
            'remark-autolink-headings'
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    }
  ]
}
