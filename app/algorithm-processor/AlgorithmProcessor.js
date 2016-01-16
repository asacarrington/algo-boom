var AlgorithmProcessor = (function () {
    function AlgorithmProcessor() {
    }
    AlgorithmProcessor.prototype.bubbleSort = function (arr) {
        var length = arr.length;
        for (var i = length - 1; i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                if (arr[j - 1] > arr[j]) {
                    var temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };
    AlgorithmProcessor.prototype.selectionSort = function (arr) {
        var minIdx;
        var temp;
        var length;
        length = arr.length;
        for (var i = 0; i < length; i++) {
            minIdx = i;
            for (var j = i + 1; j < length; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
        return arr;
    };
    AlgorithmProcessor.prototype.insertionSort = function (arr) {
        var j;
        var temp;
        var length;
        length = arr.length;
        for (var i = 1; i < length; ++i) {
            temp = arr[i];
            j = i - 1;
            for (; j >= 0 && arr[j] > temp; --j) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = temp;
        }
        return arr;
    };
    AlgorithmProcessor.prototype.mergeSort = function (arr) {
        var length;
        var middle;
        var left;
        var right;
        length = arr.length;
        middle = Math.floor(length / 2);
        left = arr.slice(0, middle);
        right = arr.slice(middle);
        if (length < 2) {
            return arr;
        }
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    };
    AlgorithmProcessor.prototype.merge = function (left, right) {
        var result;
        var l;
        var r;
        var lLength;
        var rLength;
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
    };
    //Quick
    AlgorithmProcessor.prototype.quickSort = function (arr, left, right) {
        var pivot;
        var partitionIndex;
        if (left < right) {
            pivot = right;
            partitionIndex = this.partition(arr, pivot, left, right);
            this.quickSort(arr, left, partitionIndex - 1);
            this.quickSort(arr, partitionIndex + 1, right);
        }
        return arr;
    };
    AlgorithmProcessor.prototype.partition = function (arr, pivot, left, right) {
        var pivotValue = arr[pivot];
        var partitionIndex = left;
        for (var i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                this.swap({ arr: arr, index: i, j: partitionIndex });
                partitionIndex++;
            }
        }
        this.swap({ arr: arr, index: right, j: partitionIndex });
        return partitionIndex;
    };
    AlgorithmProcessor.prototype.swap = function (parameters) {
        var arr = parameters.arr;
        var index = parameters.index;
        var j = parameters.j;
        var temp;
        temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
    };
    return AlgorithmProcessor;
})();
exports.AlgorithmProcessor = AlgorithmProcessor;
//# sourceMappingURL=AlgorithmProcessor.js.map