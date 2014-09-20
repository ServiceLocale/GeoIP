Package.describe({
    summary: "GeoIP-lite Npm wrapper",
    name: "servicelocale:geoip",
	version: "0.1.2"
});

Npm.depends({
	'geoip-lite': "1.1.3"
});

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.2");
    api.add_files('lib.js', 'server');
    api.export("GeoIP");
});