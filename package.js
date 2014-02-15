Package.describe({
  summary: "A framework for simulations in the vein of Conway's Game of Life."
});

Package.on_use(function (api, where) {
  api.use('standard-app-packages', ['client','server']);
  api.use('underscore', ['client','server']);
  api.use('coffeescript', ['client','server']);
  api.add_files('conway_core.coffee', ['client', 'server']);
  api.add_files('client/conway_core_client.coffee', ['client']);
  api.add_files('server/conway_core_server.coffee', ['server']);
});

Package.on_test(function (api) {
  api.use('conway-core');

  api.add_files('conway_core_tests.coffee', ['client', 'server']);
});
