import { Component, EventEmitter } from 'angular2/core';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Create Meal:</h3>
  <input placeholder="food name" class="col-sm-4 input-lg" #newName>
  <input placeholder="food details" class="col-sm-4 input-lg" #newDetails>
  <input placeholder="calories" class="col-sm-4 input-lg" #newCalories>
  <button (click)="createMeal(newName, newDetails, newCalories)">Add New Meal</button>
</div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  createMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
  var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value));
  this.onSubmitNewMeal.emit(newMeal);
  newName.value="";
  newDetails.value="";
  newCalories.value="";
  }
}
