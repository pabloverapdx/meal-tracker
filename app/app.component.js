System.register(['angular2/core', './meal-list.component', './meal.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_list_component_1, meal_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [
                        new meal_model_1.Meal("Pizza", "extra cheese and a coke", 500),
                        new meal_model_1.Meal("Hamburger", "extra cheese and a pepsi", 600),
                        new meal_model_1.Meal("Salad", "olive oil and no dressing", 250),
                        new meal_model_1.Meal("Cereal", "fat free milk and strawberies", 300)
                    ];
                }
                AppComponent.prototype.mealWasSelected = function (clickedMeal) {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n   <div class=\"container\">\n   <h1> Track your Meals </h1>\n   <meal-list [mealList]=\"meals\" (onMealSelect)=\"mealWasSelected($event)\"></meal-list>\n   </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// The info here was the meal.model.ts this info is now in that file. Parameters must match.
//# sourceMappingURL=app.component.js.map