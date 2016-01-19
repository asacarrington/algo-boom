import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import "rxjs/add/operator/map";
import {About} from "./about/about.component";
import {AlgorithmSelectorService} from "./algorithm-selector/algorithm-selector.component";

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/About", component:About, name:"About" },
    { path: "/Sort", component:AlgorithmSelectorService, name:"Sort" }
])
export class app {
    title: string = "Algo boom";
}