import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Create Meal:</h3>
  <input placeholder="food name" class="col-sm-4 input-lg" #foodName>
  <input placeholder="food details" class="col-sm-4 input-lg" #foodDetails>
  <input placeholder="calories" class="col-sm-4 input-lg" #calories>
  <button (click)="addMeal(foodName, foodDetails, calories)">Add</button>
</div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(foodName, foodDetails, calories: HTMLInputElement){
    console.log(foodName.value, foodDetails.value, calories.value);
    foodName.value = "";
    foodDetails.value = "";
    calories.value = "";
  }
}
