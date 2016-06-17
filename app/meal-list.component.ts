import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';

// this is the child now //

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"(click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal"> </meal-display>
  <div *ngIf="selectedMeal">
  <edit-meal-details  [meal]="selectedMeal"></edit-meal-details>
  </div>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  <div *ngIf="selectedMeal">
  <edit-meal-details [meal]="selectedMeal"> </edit-meal-details>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void { // click event for child
    this.selectedMeal = clickedMeal; // this line was added to select meals and change their font color //
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
}
