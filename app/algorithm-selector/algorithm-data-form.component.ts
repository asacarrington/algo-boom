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
    public processedInput: Array<number>;   
    public sortedOutput: Array<number>;
    public sortInput:string = "[ 1, 3, 5, 6, 7, 8, 9]";
    public algorithmService:AlgorithmProcessor;
    public model:AlgorithmModel = new AlgorithmModel("", "", "");
    public submitted:boolean = false;

    constructor(algorithmService:AlgorithmProcessor) {
        this.algorithmService = algorithmService;
    }
    
    convertInput = () => {
        let temp: Array<string> = this.sortInput.split(',').splice(0,1).splice(this.sortInput.length, 1);
        this.processedInput = new Array<number>();  
         
        for (var elm in temp)
        {
            this.processedInput.push(parseInt(elm));
        }
    } 
    
    onSubmit = () => {
        this.convertInput();
        switch(this.model.type){
            case'merge':
                this.sortedOutput = this.algorithmService.mergeSort(this.processedInput);
            break;
            case'quick':
                 this.sortedOutput = this.algorithmService.quickSort(this.processedInput);
            break;
            case'bubble':
                 this.sortedOutput = this.algorithmService.bubbleSort(this.processedInput);
            break;
            default:
        } 
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}