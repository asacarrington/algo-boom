import  {app} from "./app/app";
import {AlgorithmProcessor} from "../app/algorithm-processor/AlgorithmProcessor";

describe("Should sort arrays using bubbleSort", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("passes if expected is the same length as result", function() {
    let result = component.bubbleSort([3,4,3,5,6,7]);
    expect(expected.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let result = component.bubbleSort([3,4,3,5,6,7]);
    console.log(JSON.stringify(result));
    expect(expected).toEqual(result);
  });

});



describe("Should sort arrays using quicksort", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("passes if expected is the same length as result", function() {
    let result = component.quicksort([3,4,3,5,6,7]);
    expect(expected.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let result = component.quicksort([3,4,3,5,6,7]);
    expect(expected).toEqual(result);
  });
});


describe("Should sort arrays using selectionSort", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("passes if expected is the same length as result", function() {
    let result = component.selectionSort([3,4,3,5,6,7]);
    expect(expected.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let result = component.selectionSort([3,4,3,5,6,7]);
    expect(expected).toEqual(result);
  });
});


describe("Should sort arrays using insersion", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("passes if expected is the same length as result", function() {
    let result = component.insertionSort([3,4,3,5,6,7]);
    expect(expected.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let result = component.insertionSort([3,4,3,5,6,7]);
    expect(expected).toEqual(result);
  });
});

describe("Should sort arrays using merge", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("passes if expected is the same length as result", function() {
    let result = component.mergeSort([3,4,3,5,6,7]);
    expect(expected.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let result = component.mergeSort([3,4,3,5,6,7]);
    expect(expected).toEqual(result);
  });
});

describe("Should sort arrays using quick sort", () => {

  let component : AlgorithmProcessor;
  let expected : Array<number>;

  beforeEach(() => {
    component = new AlgorithmProcessor();
    expected = [1, 2, 3, 4, 5, 6];
  });

  it("should be a sorted array using quick sort", function() {
    let pram : Array<number>;
    pram = [3,4,3,5,6,7];
    let result = component.quickSort({arr: pram, left: 0, right: 5});
    expect(pram.length).toBe(result.length);
  });

  it("passes if expected is the same as result", function() {
    let pram : Array<number>;
    pram = [3,4,3,5,6,7];
    let result = component.quickSort({arr: pram, left: 0, right: 5});
    expect(pram.length).toBe(result.length);
  });
});

