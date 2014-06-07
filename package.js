Package.describe({
        summary: "GeoIP-lite Npm wrapper"
});

Npm.depends({
        'geoip-lite': "1.1.3"
});

Package.on_use(function(api) {
    api.add_files('lib.js', 'server');
    api.export("GeoIP");
});
