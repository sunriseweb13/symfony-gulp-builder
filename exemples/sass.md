# Setting up Sass

With this setup you can freely mix `.css` and `.scss` files.

## Steps


### 1. Install dependencies the [gulp-sass](https://github.com/dlmanning/gulp-sass) plugin

Current setup includes coding in CSS. We're also going to code in Sass :

```
$ npm install --save-dev gulp-sass
```

### 2. Compile application code

#### 2.1 Edit the `gulp/styles.js` file

We need to add a task "sass" to process `.scss` files with Sass.

```diff
 var gulp = require('gulp');
 var conf = require('../gulp_conf/conf');
+var sass = require('gulp-sass');
 
 gulp.task('css', function () {
     return gulp.src(conf.assets.styles['css'])
         .pipe(gulp.dest('./web/sources'));
 });
 
+gulp.task('sass', function() {
+  return gulp.src(conf.assets.scripts['sass'])
+    .pipe(sass().on('error', sass.logError))
+    .pipe(gulp.dest('./web/sources'));
+});
```

#### 2.2 Edit the `gulp_conf/conf.js` file

We need to declare this new task to Gulp with a key corresponding at the task name and the files paths as value.

```diff
 exports.assets = {
     styles:  {
         css: [dirBase+'/**/*.css'],
  // Add your CSS preprocessors below
+		sass:[dirBase+'/**/*.scss']
     },
     scripts: {
         js: [dirBase+'/**/*.js']  
 // Add your JS preprocessors below
     },
     img:   [dirBase+'/**/img/**/*.{png,jpg,jpeg,gif,svg}'],
     fonts: [dirBase+'/**/fonts/**/*.{eot,woff,woff2,ttf,otf,svg}']
```