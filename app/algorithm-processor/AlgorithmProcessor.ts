import {Injectable} from "angular2/core";

@Injectable()
export class AlgorithmProcessor {

    constructor() {
    }

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

    selectionSort(arr:Array<number>):Array<number> {
        let minIdx:number;
        let temp:number;
        let length:number;

        length = arr.length;

        for (let i = 0; i < length; i++) {
            minIdx = i;
            for (let j = i + 1; j < length; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }

        return arr;
    }


    insertionSort(arr:Array<number>):Array<number> {
        let j:number;
        let temp:number;
        let length:number;

        length = arr.length;

        for (let i = 1; i < length; ++i) {
            temp = arr[i];
            j = i - 1;
            for (; j >= 0 && arr[j] > temp; --j) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = temp;
        }
        return arr;
    }

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

    merge(parameters) {
        let right;
        let left;
        let result:Array<number>;
        let l:number;
        let r:number;
        let lLength:number;
        let rLength:number;

        left = parameters.left;
        right = parameters.right;
        l = 0;
        r = 0;
        result = [];
        lLength = left.length;
        rLength = right.length;

        while (l < lLength && r < rLength) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            }
            else {
                result.push(right[r++]);
            }
        }

        return result.concat(left.slice(l)).concat(right.slice(r));
    }

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

    private partition(arr:Array<number>, pivot:number, left:number, right:number) {
        let partitionIndex;
        let pivotValue;

        pivotValue = arr[pivot];
        partitionIndex = left;

        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                this.swap({arr: arr, index: i, j: partitionIndex});
                partitionIndex++;
            }
        }

        this.swap({arr: arr, index: right, j: partitionIndex});
        return partitionIndex;
    }

    private swap(parameters) {
        let arr;
        let index = parameters.index;
        let j = parameters.j;
        let temp:number;

        arr = parameters.arr;
        temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
    }

}


