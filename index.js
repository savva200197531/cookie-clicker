const browserSync = require("browser-sync");

browserSync({
  server: "app",
  files: ["app/*.html", "app/style/*.css", "app/js/*.js", "app/assets/*.css"]
});