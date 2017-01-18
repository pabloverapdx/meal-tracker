import { Component, EventEmitter } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

// this is the Grandchild now //


@Component({
  selector: 'meal-display', // display  meal model
  inputs: ['meal'],
  directives: [EditMealDetailsComponent],
  template: `
  <div class="meals-form">
  <div class="col-sm-4">
  <p>{{ meal.name }}</p>
  </div>
  <div class="col-sm-4">
  <p>{{meal.info}}</p>
  </div>
  <div class="col-sm-4">
  <p>{{meal.calories}}</p>
  </div>
  </div>
  `

})

export class MealComponent {
  public meal: Meal;
}

// this component above was added 3rd after parent and child
