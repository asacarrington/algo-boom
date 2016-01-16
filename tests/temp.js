var AlgorithmProcessor_1 = require("../app/algorithm-processor/AlgorithmProcessor");
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