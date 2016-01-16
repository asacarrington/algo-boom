import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AlgorithmSelectorService} from "./algorithm-selector/algorithm-selector-service";
import "rxjs/add/operator/map";

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/Algo", name: "Algo", component:AlgorithmSelectorService }
])
export class app {
    public title: string = "User Direfsdfsgfdgdfgdfgfdgfdgdgdgdgdfgdfgfdctory";
}