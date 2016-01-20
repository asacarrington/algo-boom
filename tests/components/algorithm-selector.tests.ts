import  {app} from "./app/app";
import {AlgorithmDataFormComponent} from "../app/algorithm-selector/algorithm-data-form.component";

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