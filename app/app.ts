import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import "rxjs/add/operator/map";
import {About} from "./about/about";

@Component({
    selector: "app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/About", component:About, name:"About" }
])
export class app {
    title: string = "User Direfsdfsgfdgdfgdfgfdgfdgdgdgdgdfgdfgfdctory";
}