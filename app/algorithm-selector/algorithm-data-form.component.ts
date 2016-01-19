import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { AlgorithmModel } from './Algorithm.model';

@Component({
  selector: 'algorithm-form',
  templateUrl: '/app/algorithm-selector/algorithm-data-form.component.html'
})
export class AlgorithmDataFormComponent {
  powers = ['quick', 'merge', 'bubble'];
  sortInput = "[ 1, 3, 5, 6, 7, 8, 9]";
           
  model = new AlgorithmModel("","","");
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}