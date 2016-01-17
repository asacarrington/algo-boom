import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, NgForm, FormBuilder, Control, ControlGroup} from "angular2/common";

@Component({
    selector: "app",
    templateUrl: "/app/algorithm-selector/algorithm-selector.html",
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AlgorithmSelectorService  {
    public title: string = "aaaaafsdfsgsgsgooooo";
}
