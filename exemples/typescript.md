# Setting up TypeScript

With this setup you can freely mix `.js` and `.ts` files.

## Steps


### 1. Install dependencies the [gulp-typescript](https://github.com/ivogabe/gulp-typescript) plugin

Current setup includes coding in JavaScript. We're also going to code in TypeScript :

```
$ npm install --save-dev gulp-typescript
```

### 2. Compile application code

#### 2.1 Edit the `gulp/scripts.js` file

We need to add a task "ts" to process `.ts` files with TypeScript.

```diff
 var gulp = require('gulp');
 var conf = require('../gulp_conf/conf');
+var ts = require('gulp-typescript');
 
 gulp.task('js', function () {
     return gulp.src(conf.assets.scripts['js'])
         .pipe(gulp.dest('./web/sources'));
 });
 
+gulp.task('ts', function() {
+  return gulp.src(conf.assets.scripts['ts'])
+    .pipe(ts())
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
+		ts:[dirBase+'/**/*.ts']
     },
     img:   [dirBase+'/**/img/**/*.{png,jpg,jpeg,gif,svg}'],
     fonts: [dirBase+'/**/fonts/**/*.{eot,woff,woff2,ttf,otf,svg}']
```