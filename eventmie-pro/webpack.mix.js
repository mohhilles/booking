let mix = require('laravel-mix');

require('laravel-mix-polyfill');

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

mix
// // common auth instance
// .js('resources/js/auth/index.js', 'publishable/assets/js/auth_v1.5.js')

// // events create seperate vue js
.js('resources/js/events_manage/index.js', 'publishable/assets/js/events_manage_v1.5.js')

// // events show seperate vue js
.js('resources/js/events_show/index.js', 'publishable/assets/js/events_show_v1.5.js')

// // events listing seperate vue js
// .js('resources/js/events_listing/index.js', 'publishable/assets/js/events_listing_v1.5.js')

// // organiser events
// .js('resources/js/myevents/index.js', 'publishable/assets/js/myevents_v1.5.js')

// // customer bookings seperate vue js
// .js('resources/js/bookings_customer/index.js', 'publishable/assets/js/bookings_customer_v1.5.js')

// // organiser bookings seperate vue js
.js('resources/js/bookings_organiser/index.js', 'publishable/assets/js/bookings_organiser_v1.5.js')

// // events welcome seperate vue js
// .js('resources/js/welcome/index.js', 'publishable/assets/js/welcome_v1.5.js')

// // events tags seperate vue js
// .js('resources/js/tags_manage/index.js', 'publishable/assets/js/tags_manage_v1.5.js')


// // v1.2-----------
// // events create seperate vue js
// .js('resources/js/ticket_scan/index.js', 'publishable/assets/js/ticket_scan_v1.5.js')
// // v1.2-----------

// // organiser event earning seperate vue js
// .js('resources/js/event_earning/index.js', 'publishable/assets/js/event_earning_v1.5.js')


// compile sass files
// compile sass files
// .sass('resources/sass/app.scss', 'publishable/assets/css')
// .options({
//     processCssUrls: false,
//     autoprefixer: {
//         options: {
//             browsers: [
//                 'last 6 versions',
//             ]
//         }
//     }
// })
// .polyfill({
//     corejs: 3,
//     enabled: true,
//     useBuiltIns: "usage",
//     targets: {"firefox": "50", "safari": "11.3"}
// })

// // third-party css
// .sass('resources/sass/vendor.scss', 'publishable/assets/css')
// .options({
//     processCssUrls: false,
//     autoprefixer: {
//         options: {
//             browsers: [
//                 'last 6 versions',
//             ]
//         }
//     }
// })
// .polyfill({
//     corejs: 3,
//     enabled: true,
//     useBuiltIns: "usage",
//     targets: {"firefox": "50", "safari": "11.3"}
// })


// compile node modules in seperate vendor.js file
// .extract()

// copy files to avoid caching
// .copy('publishable/assets/js/vendor.js', 'publishable/assets/js/vendor_v1.5.js')
// .copy('publishable/assets/css/app.css', 'publishable/assets/css/app_v1.5.css')
// .copy('publishable/assets/css/vendor.css', 'publishable/assets/css/vendor_v1.5.css');
