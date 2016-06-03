import { Component, EventEmitter } from 'angular2/core';
import { mealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

// this is the child now //

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [mealComponent, EditMealDetailsComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"(click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal"> </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
  `
  // === tells Angular to either add or remove class the class selected
  // You need the word OF in currentMeal of mealList //
  // *ngFor is a directive //
  // this component above went from <h3> to <meal-display> because it is grabbing it from the Grandchild //
  // edit-meal details comes from the edit meal details component file
})

export class mealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void { // click event for child
    console.log('child', 'clickedMeal');
    this.selectedMeal = clickedMeal; // this line was added to select meals and change their font color //
    this.onMealSelect.emit(clickedMeal);
  }
}
