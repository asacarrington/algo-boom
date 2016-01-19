import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, Router, RouteParams} from "angular2/router";
import {FORM_DIRECTIVES, NgForm, FormBuilder, Control, ControlGroup} from "angular2/common";
import {AlgorithmProcessor} from "../algorithm-processor/AlgorithmProcessor"

@Component({
    selector: "app",
    templateUrl: "/app/algorithm-selector/algorithm-selector.html",
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class AlgorithmSelectorService  {
    public title: string = "How do you want to sort??";
    public sortInput: Control;
    public sortType: Control;
    public algorithms:  Array<string>  = ['Bubble', 'Merge','Quick', 'Mesh'];
    public selectedAlgo: string;
    public algoForm: ControlGroup;
    
    result: any;

    constructor(params: RouteParams,
                builder: FormBuilder,
                private router: Router) {

        this.algoForm = builder.group({
            "sortInput": ["[ ]"],
            "sortType": ["Select"]
        });
        
        this.sortInput = this.algoForm.controls["sortInput"] as Control;
        this.sortType = this.algoForm.controls["sortType"] as Control;
    }     
    
    submit(){}

}
