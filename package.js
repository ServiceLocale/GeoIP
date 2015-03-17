Package.describe({
    summary: "GeoIP-lite Npm wrapper",
    name: "servicelocale:geoip",
    version: "0.1.3",
    git: "https://github.com/ServiceLocale/GeoIP"
});

Npm.depends({
	'geoip-lite': "1.1.6"
});

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.2");
    api.add_files('lib.js', 'server');
    api.export("GeoIP");
});
