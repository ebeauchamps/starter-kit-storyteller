<!-- statamic:hide --><p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo-Rad.png" width="100" alt="Statamic Logo" /></p>
<h1 align="center">
  Statamic Starter Kit: Storyteller
</h1>

![Statamic 4+](https://img.shields.io/badge/Statamic-4+-FF269E?style=for-the-badge&link=https://statamic.com)
<!-- /statamic:hide -->

## Features
- Bard's focused starter-kit with a number of pre-built Bard sets for long form content:
  - Hero Blocks with background images and color/mix overlays
  - Photos that can be customized for the front-end in 5 different sizes
  - Video Embeds
  - Two Column Text
  - Image gallery

- Articles blogging collection with all articles heroes on the home page
- Tags taxonomy for Articles
- Beautifully responsive
- Built with [TailwindCSS](https://tailwindcss.com)

## Quick Start

### 1. Create a new site

You can create a new site using the [Statamic CLI Tool](https://github.com/statamic/cli):

```
statamic new your-site statamic/starter-kit-storyteller
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

```
php please starter-kit:install statamic/starter-kit-storyteller --clear-site
```

### 2. Make a new user

The above installers should prompt you to make a user, but you can also run `php please make:user`. You'll want it to be a `super` so you have access to everything.

### 3. Recompile the CSS (optional)

The [TailwindCSS](https://tailwindcss.com/) included in this kit is compiled and purged to reduce filesize on any unused classes and selectors. If you want to modify anything, just recompile it.

Change your markup in the antlers.html files and/or in style.css and compile for production again:

```
npm run build
```

This starter-kit makes use of Vite 4.5 for blazing fast assets compilation.

### 4. Do your thing!

If you're using [Laravel Valet](https://laravel.com/docs/valet) (or similar), your site should be available at `http://cool-site.test`. You can access the control panel at `http://cool-site.test/cp` and login with your new user. Open up the source code, follow along with the [Statamic docs](https://statamic.dev), and enjoy!

## Contributing

Contributions are always welcome, no matter how large or small. Before contributing, please read the [code of conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).
