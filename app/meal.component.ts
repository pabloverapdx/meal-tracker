import { Component, EventEmitter } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

// this is the Grandchild now //


@Component({
  selector: 'meal-display', // display  meal model
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
  <h3>{{ meal.name }}</h3>
  <h3>{{meal.info}}</h3>
  <h3>{{meal.calories}}</h3>
  `

})

export class MealComponent {
  public meal: Meal;
}

// this component above was added 3rd after parent and child
