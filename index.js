function UrlPurge (uris = []) {
    this.uris = uris;
}

UrlPurge.prototype.apply = function (compiler) {
    compiler.plugin('done', () => {
        if (process.env.NODE_ENV === 'production') {
            this.uris.forEach(uri => {
                require('request')({ method: 'PURGE', uri }, (error, response, body) => {});
            });
        }
    });
};

module.exports = UrlPurge;
