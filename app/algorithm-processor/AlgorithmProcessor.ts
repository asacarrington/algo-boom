export class AlgorithmProcessor {

    constructor() {
    }

    bubbleSort(arr:Array<number>) {
        let length = arr.length;
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

    selectionSort(arr:Array<number>) {
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


    insertionSort(arr) {
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

    mergeSort(arr) {
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

        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    merge(left, right) {
        let result:Array<number>;
        let l:number;
        let r:number;
        let lLength:number;
        let rLength:number;

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

    //Quick
    quickSort(arr, left, right) {
        let pivot:number;
        let partitionIndex:number;

        if (left < right) {
            pivot = right;
            partitionIndex = this.partition(arr, pivot, left, right);

            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    }

    partition(arr, pivot, left, right) {
        let pivotValue = arr[pivot];
        let partitionIndex = left;

        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                this.swap({arr: arr, index: i, j: partitionIndex});
                partitionIndex++;
            }
        }
        this.swap({arr: arr, index: right, j: partitionIndex});
        return partitionIndex;
    }

    swap(parameters) {
        var arr = parameters.arr;
        var index = parameters.index;
        var j = parameters.j;
        let temp:number;

        temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
    }

}

