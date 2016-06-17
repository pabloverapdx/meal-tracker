import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  directives: [NewMealComponent],
  template: `
    <div class="meal-form">
    <h3>Edit Meal Name:</h3>
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.info" class="col-sm-8 input-lg meal-form"/>
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
    </div>

  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
