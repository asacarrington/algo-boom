var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var app_1 = require("./app");
var router_1 = require("angular2/router");
var http_1 = require("angular2/http");
browser_1.bootstrap(app_1.app, [router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
/**
 * Created by asacarrington on 15/01/2016.
 */
//# sourceMappingURL=boot.js.map