import { Component } from 'angular2/core';

// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  template: `
  <h3 *ngFor="#currentMeal of mealList"(click)="mealClicked(currentMeal)"> {{currentMeal.foodName}}</h3>
  `
  // You need the word OF in currentKeg of kegList //
  // *ngFor is a directive //
})

export class mealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void{ // click event for child
    console.log(clickedMeal);
  }
}

// *************************************************************************************************************** //
                                      // PARENT COMPONENT ///

// Make this component first //

@Component({ // parent component
  selector: 'my-app',
  directives: [mealListComponent],
  template: `
   <div class="container">
   <h1> Track your Meals </h1>
   <meal-list [mealList]="meals"></meal-list>
  `
})

export class AppComponent { // parent class definition
  public meals: Meal[];
  constructor() {
    this.meals = [
    new Meal("Pizza", 0),  // Add more meals and meals details, calories, etc //
    new Meal("Hamburger", 1),
    new Meal("Lasagna", 2),
    new Meal("Cereal", 3),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void{ // This is a built in click event //
    console.log(clickedMeal);
  }
}

export class Meal {
  public done: boolean = false;
  constructor(public foodName: string, public id: number) {

  }
}
