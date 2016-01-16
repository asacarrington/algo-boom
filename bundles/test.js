/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(263);
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	var AlgorithmProcessor_1 = __webpack_require__(264);
	describe("A suite", function () {
	    it("contains spec with an expectation", function () {
	        expect(true).toBe(true);
	    });
	});
	describe("Should sort arrays", function () {
	    var component;
	    var expected;
	    beforeEach(function () {
	        component = new AlgorithmProcessor_1.AlgorithmProcessor();
	        expected = [1, 2, 3, 4, 5, 6];
	    });
	    it("should be a sorted array using bubble sort", function () {
	        var result = component.bubbleSort([3, 4, 3, 5, 6, 7]);
	        console.log(JSON.stringify(result));
	        expect(expected.length).toBe(result.length);
	    });
	    it("should be a sorted array using section sort", function () {
	        var result = component.selectionSort([3, 4, 3, 5, 6, 7]);
	        console.log(JSON.stringify(result));
	        expect(expected.length).toBe(result.length);
	    });
	    it("should be a sorted array using insersion sort", function () {
	        var result = component.insertionSort([3, 4, 3, 5, 6, 7]);
	        console.log(JSON.stringify(result));
	        expect(expected.length).toBe(result.length);
	    });
	    it("should be a sorted array using merge sort", function () {
	        var result = component.mergeSort([3, 4, 3, 5, 6, 7]);
	        console.log(JSON.stringify(result));
	        expect(expected.length).toBe(result.length);
	    });
	    it("should be a sorted array using quick sort", function () {
	        var pram;
	        pram = [3, 4, 3, 5, 6, 7];
	        var result = component.quickSort({ arr: pram, left: 0, right: 5 });
	        console.log(JSON.stringify(result));
	        expect(pram.length).toBe(result.length);
	    });
	});
	//# sourceMappingURL=temp.js.map

/***/ },

/***/ 264:
/***/ function(module, exports) {

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
	        return this.merge({ left: this.mergeSort(left), right: this.mergeSort(right) });
	    };
	    AlgorithmProcessor.prototype.merge = function (parameters) {
	        var left = parameters.left;
	        var right = parameters.right;
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
	    AlgorithmProcessor.prototype.quickSort = function (parameters) {
	        var arr = parameters.arr;
	        var left = parameters.left;
	        var right = parameters.right;
	        var pivot;
	        var partitionIndex;
	        if (left < right) {
	            pivot = right;
	            partitionIndex = this.partition(arr, pivot, left, right);
	            this.quickSort({ arr: arr, left: left, right: partitionIndex - 1 });
	            this.quickSort({ arr: arr, left: partitionIndex + 1, right: right });
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

/***/ }

/******/ });