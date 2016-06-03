import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

// this is the Grandchild now //


@Component({
  selector: 'meal-display', // display  meal model
  inputs: ['meal'],
  template: `
  <h3>{{ meal.foodName }}</h3>
  `

})

export class mealComponent {
  public meal: Meal;
}

// this component above was added 3rd after parent and child
