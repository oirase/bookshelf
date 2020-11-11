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

mix.ts('resources/js/index_auth.ts', 'public/js/auth.js')
   //.ts('resources/js/index.ts', 'public/js/gest.js')
   //.ts('resources/js/gest.ts', 'public/js')
   .ts('resources/js/index_gest.ts', 'public/js/gest.js')
   //.ts('resources/js/gest.ts', 'public/js')
   .ts('resources/js/authView.ts', 'public/js')
   .ts('resources/js/auth/changeFormColor.ts', 'public/js')
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
            '~': 'bookShelf_auth',
            '@': 'bookShelf_gest',
          }
      }
    })
