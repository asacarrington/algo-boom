import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {AlgorithmModel} from './Algorithm.model';
import {AlgorithmProcessor} from "../algorithm-processor/AlgorithmProcessor";

@Component({
    selector: 'algorithm-form',
    templateUrl: '/app/algorithm-selector/algorithm-data-form.component.html'
})
export class AlgorithmDataFormComponent {
    public sortTypes:Array<string> = ['quick', 'merge', 'bubble'];
    public processedInput:Array<number>;
    public sortedOutput:Array<number>;
    public sortInput:string = "[ 1, 3, 5, 6, 7, 8, 9]";
    public algoText:string;
    public algorithmService:AlgorithmProcessor;
    public model:AlgorithmModel = new AlgorithmModel("", "", "");
    public submitted:boolean = false;

    constructor(algorithmService:AlgorithmProcessor) {
        this.algorithmService = algorithmService;
    }

    isNumeric = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    validateAndConvertInput = () => {
        this.processedInput = new Array<number>();
        let temp = this.model.input.split(',');

        for (let i = 0; i < temp.length; i++) {
            if (!this.isNumeric(temp[i])) {
                return false;
            }
            this.processedInput.push(parseInt(temp[i]));
        }
        return true;
    }

    onSubmit = () => {
        this.submitted = true;
        if (this.validateAndConvertInput()) {
            this.populatealgoTemplate(this.model.type);
            switch (this.model.type) {
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
        }
    }

    populatealgoTemplate = () => {


        switch (this.model.type) {
            case'merge':
                this.algoText =`
                        mergeSort(arr:Array<number>):Array<number> {
                        let length:number;
                        let middle:number;
                        let left:Array<number>;
                        let right:Array<number>;

                        length = arr.length;
                        middle = Math.floor(length / 2);
                        left = arr.slice(0, middle);
                        right = arr.slice(middle);

                        if (length < 2) {
                            return arr;
                        }

                        return this.merge({left: this.mergeSort(left), right: this.mergeSort(right)});
                    }
                `;
                break;
            case'quick':
                this.algoText = `
                    quickSort(parameters):Array<number> {
                        let arr = parameters.arr;
                        let left = parameters.left;
                        let right = parameters.right;
                        let pivot:number;
                        let partitionIndex:number;

                        if (left < right) {
                            pivot = right;
                            partitionIndex = this.partition(arr, pivot, left, right);

                            this.quickSort({arr: arr, left: left, right: partitionIndex - 1});
                            this.quickSort({arr: arr, left: partitionIndex + 1, right: right});
                        }
                        return arr;
                    }
            `;
                break;
            case'bubble':
                this.algoText = `
                    bubbleSort(arr:Array<number>):Array<number> {
                        let length;
                        length = arr.length;

                        for (let i = length - 1; i >= 0; i--) {
                            for (let j = 1; j <= i; j++) {
                                if (arr[j - 1] > arr[j]) {
                                    let temp = arr[j - 1];
                                    arr[j - 1] = arr[j];
                                    arr[j] = temp;
                                }
                            }
                        }
                        return arr;
                    }
                `;
                break;
            default:
        }
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}