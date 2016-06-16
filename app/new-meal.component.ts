import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Create Meal:</h3>
  <input placeholder="food name" class="col-sm-4 input-lg">
  <input placeholder="food details" class="col-sm-4 input-lg">
  <input placeholder="calories" class="col-sm-4 input-lg">
  <button (click)="addMeal()">Add</button>
</div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
}
