import { Component, EventEmitter } from 'angular2/core';
import { mealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

// *************************************************************************************************************** //
                                        // Grandchild //

// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///

// *************************************************************************************************************** //
                                      // PARENT COMPONENT ///

// Make this component first //

@Component({ // parent component
  selector: 'my-app',
  directives: [mealListComponent],
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
    new Meal("Pizza", "Mushrooms and olives", 500, 0),  // Add more meals and meals details, calories, etc //
    new Meal("Hamburger", "Extra cheese and pickles", 600, 1),
    new Meal("Lasagna", "Parmesan cheese and olives", 400, 2),
    new Meal("Cereal", "Whole milk and corn flakes", 300, 3),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{ // This is a built in click event //
    console.log(clickedMeal);
  }
}

// The info here was the meal.model.ts this info is now in that file. Parameters must match.
