import {bootstrap} from "angular2/platform/browser"
import {provide} from "angular2/core";
import {app} from "./app";
import {ROUTER_PROVIDERS,
    LocationStrategy, HashLocationStrategy} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(app,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})]);



/**
 * Created by asacarrington on 15/01/2016.
 */