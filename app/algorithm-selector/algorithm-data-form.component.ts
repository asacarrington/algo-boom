import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {AlgorithmModel} from './Algorithm.model';
import {AlgorithmProcessor} from "../algorithm-processor/AlgorithmProcessor";

@Component({
    selector: 'algorithm-form',
    templateUrl: '/app/algorithm-selector/algorithm-data-form.component.html'
})
export class AlgorithmDataFormComponent {
    public powers:Array<string> = ['quick', 'merge', 'bubble'];
    public sortInput:string = "[ 1, 3, 5, 6, 7, 8, 9]";
    public algorithmService:AlgorithmProcessor;
    public model:AlgorithmModel = new AlgorithmModel("", "", "");
    public submitted:boolean = false;

    constructor(algorithmService:AlgorithmProcessor) {
        this.algorithmService = algorithmService;
    }

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}