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
        let length:number
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

    //Merge
    mergeSort(arr){
    var len = arr.length;
    if(len <2)
        return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return this.merge(this.mergeSort(left),this.mergeSort(right));
}

    merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);
        }
        else{
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

    //Quick

    quickSort(arr, left, right){
    var len = arr.length,
        pivot,
        partitionIndex;


    if(left < right){
        pivot = right;
        partitionIndex = this.partition(arr, pivot, left, right);

        //sort left and right
        this.quickSort(arr, left, partitionIndex - 1);
        this.quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

    partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            this.swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    this.swap(arr, right, partitionIndex);
    return partitionIndex;
}

    swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

}


