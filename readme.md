# webpack-url-purge-plugin
Purge provided uris.
Only runs on production builds.

## Installation
```
npm install --save-dev webpack-url-purge-plugin
yarn add --dev webpack-url-purge-plugin
```

## Usage
#### Example *webpack.config.js*
```javascript
const UrlPurge = require('webpack-url-purge-plugin');

module.exports = {
    plugins: [
        new UrlPurge([
            'http://my-site.com/',
            'http://my-site.com/some-article'
        ])
    ]
}
```
