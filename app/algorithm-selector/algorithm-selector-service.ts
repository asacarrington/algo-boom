import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import "rxjs/add/operator/map";

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
export class AlgorithmSelectorService {
    public title: string = "User Direfsdfsgfdgdfgdfgfdgfdgdgdgdgdfgdfgfdctory";
}