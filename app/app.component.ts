import { Component, EventEmitter } from 'angular2/core';

// *************************************************************************************************************** //
                                        // Grandchild //

@Component({
  selector: 'meal-display', // display  keg model
  inputs: ['meal'],
  template: `
  <h3>{{ meal.foodName }}</h3>
  `
  // this component above was added 3rd after parent and child
})

export class mealComponent {
  public meal: Meal;
}

// **************************************************************************************************************** //
                                        // CHILD COMPONENT ///

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [mealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"(click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"> {{currentMeal.foodName}}</meal-display>
  `
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
    this.selectedMeal = clickedMeal; // this line was added to select kegs and change their font color //
    this.onMealSelect.emit(clickedMeal);
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

export class Meal {
  public done: boolean = false;
  constructor(public name: string, public info: string, public calories: number, public id: number){

  }
}
