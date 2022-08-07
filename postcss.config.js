const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
      './pages/**/*.tsx',
      './styles/**/*.css'
      // etc.
    ],
  
    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  })
  
  // module.exports = {
  //   plugins: [
  //     require('tailwindcss'),
  //     require('postcss-preset-env'),
  //     ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  //   ]
  // }
  
  //this works
  // module.exports = {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {}
  //   }
  // }
  
  // trying this
  module.exports = {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './pages/**/*.{js,jsx,ts,tsx}',
                './components/**/*.{js,jsx,ts,tsx}'
              ],
              defaultExtractor: (content) =>
                content.match(/[A-Za-z0-9-_:/]+/g) || []
            }
          }
        : {}),
      'postcss-preset-env': { stage: 2 }
    }
  }
  