const mix = require("laravel-mix")

mix.ts("tests/app.ts", "tests/dist/app.js")
mix.disableNotifications()