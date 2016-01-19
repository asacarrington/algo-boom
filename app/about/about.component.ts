import {Component} from "angular2/core";

@Component({
    selector: "about",
    templateUrl: "/app/about/about.component.html"
})

export class About {
    public title: string = "Algo Boom";
    public content: string = "page content";
}