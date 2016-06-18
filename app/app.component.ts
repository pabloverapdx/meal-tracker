import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';


@Component({ // parent component
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
   <div class="container">
   <h1> Track your Meals </h1>
   <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)"></meal-list>
   </div>
  `
})

export class AppComponent { // parent class definition
  public meals: Meal[];
  constructor() {
    this.meals = [
    new Meal("Pizza", "extra cheese and a coke", 500),  // Add more meals and meals details, calories, etc //
    new Meal("Hamburger", "extra cheese and a pepsi", 600),
    new Meal("Salad", "olive oil and no dressing", 250),
    new Meal("Cereal", "fat free milk and strawberies", 300)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{ // This is a built in click event //
  }
}

// The info here was the meal.model.ts this info is now in that file. Parameters must match.
