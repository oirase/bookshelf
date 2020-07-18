const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/bookShelf/index.tsx', 'public/js')
   .ts('resources/js/authView.tsx', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/index.scss', 'public/css')
   .sass('resources/sass/book.scss', 'public/css')
   .sass('resources/sass/mail.scss', 'public/css')
   .webpackConfig({
      resolve: {
        modules: [
          path.resolve('resources/js/'),
          path.resolve('./node_modules')
          ],
          alias: {
            '~': 'bookShelf'
          }
      }
    })
