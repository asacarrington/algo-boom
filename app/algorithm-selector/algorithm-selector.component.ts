import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, NgForm, FormBuilder, Control, ControlGroup} from "angular2/common";
import {AlgorithmProcessor} from "../algorithm-processor/AlgorithmProcessor";
import {AlgorithmDataFormComponent} from "./algorithm-data-form.component";

@Component({
    selector: "app",
    templateUrl: "/app/algorithm-selector/algorithm-selector.component.html",
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, AlgorithmDataFormComponent]
})
export class AlgorithmSelectorService  {
    public title: string = "How do you want to sort??";

    constructor(params: RouteParams,
                private router: Router) {
    }     
}
