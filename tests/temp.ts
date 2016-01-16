import  {app} from "./app/app";
import {AlgorithmProcessor} from "../app/algorithm-processor/AlgorithmProcessor";

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});


describe("Should sort arrays", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("should be a sorted array using bubble sort", function() {
    let result = component.bubbleSort([3,4,3,5,6,7]);
    console.log(JSON.stringify(result));
    expect(expected.length).toBe(result.length);
  });

  it("should be a sorted array using section sort", function() {
    let result = component.selectionSort([3,4,3,5,6,7]);
    console.log(JSON.stringify(result));
    expect(expected.length).toBe(result.length);
  });

  it("should be a sorted array using insersion sort", function() {
    let result = component.insertionSort([3,4,3,5,6,7]);
    console.log(JSON.stringify(result));
    expect(expected.length).toBe(result.length);
  });

  it("should be a sorted array using merge sort", function() {
    let result = component.mergeSort([3,4,3,5,6,7]);
    console.log(JSON.stringify(result));
    expect(expected.length).toBe(result.length);
  });

  it("should be a sorted array using quick sort", function() {
    let pram : Array<number>;
    pram = [3,4,3,5,6,7];
    let result = component.quickSort(pram, 0, 5);
    console.log(JSON.stringify(result));
    expect(pram.length).toBe(result.length);
  });

});
