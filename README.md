# Symfony Gulp Builder

This repo is an alternative to Assetic based on gulp. 

## How Does it Work?

There are 2 environments that you can use : _dev_ and _prod_ (that do not match the prod and dev environment of symfony).

- In the **dev** environment, all JS and CSS files listed into `gulp_conf/conf.inject.json` are compiled before being injected between injection placeholder tags in the source code of your templates. Each file is still served individually and vendor files are always injected before app files.  
While you are working, it monitors your changes and maintains your output files.  
Run `gulp` or `gulp --serve` (if you want additionnaly lauching BrowserSync) to use the dev environnement.

- In the **prod** environment, JS and CSS files are additionally concatenated and minified. If the compressing options is set to true, images are optimized. The JS and CSS files are served from a different location (`web/css` and `web/js` folders) so any relative paths inside your CSS files will break. Don't worry! To fix this, The task parses your CSS files and corrects the paths internally to reflect the new location.  
Run `gulp --prod` or `gulp --prod --serve` to use the prod environnement.

Read the [doc](https://github.com/sunriseweb13/symfony-gulp-builder-exemple)