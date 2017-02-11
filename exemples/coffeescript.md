# Setting up CoffeeScript

With this setup you can freely mix `.js` and `.coffee` files.

## Steps


### 1. Install dependencies the [gulp-coffee](https://github.com/wearefractal/gulp-coffee) plugin

Current setup includes coding in JavaScript. We're also going to code in CoffeeScript :

```
$ npm install --save-dev gulp-coffee
```

### 2. Compile application code

#### 2.1 Edit the `gulp/scripts.js` file

We need to add a task "coffee" to process `.coffee` files with CoffeeScript.

```diff
 var gulp = require('gulp');
 var conf = require('../gulp_conf/conf');
+var coffee = require('gulp-coffee');
 
 gulp.task('js', function () {
     return gulp.src(conf.assets.scripts['js'])
         .pipe(gulp.dest('./web/sources'));
 });

+gulp.task('coffee', function() {
+  return gulp.src(conf.assets.scripts['coffee'])
+    .pipe(coffee({bare: true}))
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
     },
     scripts: {
         js: [dirBase+'/**/*.js']  
 // Add your JS preprocessors below
+		coffee:[dirBase+'/**/*.coffee']
     },
     img:   [dirBase+'/**/img/**/*.{png,jpg,jpeg,gif,svg}'],
     fonts: [dirBase+'/**/fonts/**/*.{eot,woff,woff2,ttf,otf,svg}']
```